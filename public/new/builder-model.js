/* Source-driven menu configuration. No ordering, pricing or network side effects. */
(() => {
  'use strict';
  const copy = value => JSON.parse(JSON.stringify(value));
  const freeze = value => { if (value && typeof value === 'object' && !Object.isFrozen(value)) { Object.freeze(value); Object.values(value).forEach(freeze); } return value; };
  const toppingName = name => {
    const clean=String(name).replace(/^Add\s+/i,'');
    return /^(?:Bonus Bases|Fresh Fruit|Superfoods|Drizzles)$/.test(clean)?clean:clean==='Toast Superfoods'?'Superfoods':null;
  };
  function mergeToppingGroups(groups) {
    const result=[],seen=new Set();
    for(const original of groups){
      if(/^make it a combo[!?.]*$/i.test(original.name.trim()))continue;
      const category=toppingName(original.name);
      if(category && seen.has(category))continue;
      if(category)seen.add(category);
      const matches=category?groups.filter(g=>toppingName(g.name)===category):[original];
      const main=matches.find(g=>!/^Add\s/i.test(g.name))||original;
      const ordered=[main,...matches.filter(g=>g!==main)];
      const items=[],names=new Map();
      for(const group of ordered)for(const source of group.items){
        const name=category?source.name.replace(/^Add\s+/i,''):source.name;
        const token=name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();
        if(category && names.has(token))continue;
        names.set(token,items.length);
        items.push({...source,name,groups:mergeToppingGroups(source.groups||[])});
      }
      result.push({...main,name:category||main.name,items});
    }
    return result;
  }
  class EverbowlBuilderModel {
    constructor(catalog = window.EVERBOWL_BUILDER_MENU, {onChange} = {}) {
      if (!catalog || !Array.isArray(catalog.products) || !catalog.products.length) throw new TypeError('The verified menu catalog is not available.');
      this.catalog = freeze(catalog);
      this.products = freeze(catalog.products.map(product=>({...product,groups:mergeToppingGroups(product.groups)})));
      this.categories = catalog.categories;
      this.onChange = typeof onChange === 'function' ? onChange : () => {};
      this.history = [];
      this.product = this.products.find(product => product.name === 'Regular Whatever Bowl') || this.products[0];
      this.selections = {};
      this._sync();
      queueMicrotask(() => this._emit());
    }

    _snapshot() { return {productId:this.product.id, selections:copy(this.selections)}; }
    _remember() { this.history.push(this._snapshot()); if (this.history.length > 60) this.history.shift(); }
    _emit() { this.onChange(this.getState()); }
    _visible() {
      const result = [];
      const visit = (groups, ancestors) => {
        for (const group of groups) {
          const selected = this.selections[group.key] || {};
          const selectedCount = Object.values(selected).reduce((sum,quantity) => sum+(quantity>0?quantity:0),0);
          const selectedItemCount = Object.values(selected).filter(quantity => quantity>0).length;
          const inCombo = ancestors.some(parent => /combo/i.test(parent.groupName));
          const unlimitedToppings=/^(?:Add )?(?:Bonus Bases|Fresh Fruit|Superfoods|Drizzles|Superboosts)$|^Toast Superfoods$/i.test(group.name);
          const max=unlimitedToppings ? null : this.product.name==='Regular Whatever Bowl' && ancestors.length===0 && /^Bases:/.test(group.name) ? 5 : group.max;
          result.push({...group, max, mode:unlimitedToppings?'multiple':group.mode, unlimitedToppings, sourceMax:group.max, groupKey:group.key, depth:ancestors.length,
            parentLabel:ancestors.length ? ancestors[ancestors.length-1].itemName : '',
            ancestors:ancestors.map(parent => ({...parent})), inCombo,
            selected:copy(selected), selectedCount, selectedItemCount, count:selectedCount});
          for (const item of group.items) if (selected[item.key] > 0) {
            visit(item.groups || [], [...ancestors, {groupKey:group.key,groupName:group.name,itemKey:item.key,itemName:item.name}]);
          }
        }
      };
      visit(this.product.groups, []);
      return result;
    }

    _sync() {
      const active = new Set();
      const visit = groups => {
        for (const group of groups) {
          active.add(group.key);
          if (!Object.prototype.hasOwnProperty.call(this.selections, group.key)) {
            const defaults = {};
            for (const item of group.items) if (item.defaultQuantity > 0) defaults[item.key] = item.defaultQuantity;
            this.selections[group.key] = defaults;
          }
          const selected = this.selections[group.key];
          for (const key of Object.keys(selected)) if (!group.items.some(item => item.key === key) || !(selected[key] > 0)) delete selected[key];
          for (const item of group.items) {
            if (item.mandatory && !(selected[item.key] > 0)) selected[item.key] = Math.max(1,item.minQuantity || 0);
            if (selected[item.key] > 0) visit(item.groups || []);
          }
        }
      };
      visit(this.product.groups);
      for (const key of Object.keys(this.selections)) if (!active.has(key)) delete this.selections[key];
    }

    getState() {
      const validation = this.validate();
      return {product:this.product, productId:this.product.id, selections:copy(this.selections), canUndo:this.history.length > 0,
        valid:validation.valid, validation, selectionCount:this.getSummary().reduce((sum,item) => sum+item.quantity,0)};
    }

    getVisibleGroups() { return this._visible(); }

    getSummary() {
      const result = [];
      for (const group of this._visible()) {
        for (const item of group.items) {
          const quantity = group.selected[item.key] || 0;
          if (!quantity) continue;
          result.push({key:item.key,id:item.id,name:item.name,quantity,groupKey:group.key,groupName:group.name,
            depth:group.depth,ancestors:group.ancestors.map(parent => ({...parent})),inCombo:group.inCombo,
            sourceOutOfStock:item.sourceOutOfStock,imageUrl:item.imageUrl || null,isDefault:item.defaultQuantity > 0});
        }
      }
      return result;
    }

    validate() {
      const errors = [], warnings = [];
      if (this.product.sourceOutOfStock) warnings.push({productId:this.product.id,message:this.product.name+' is marked unavailable in the Beverly reference menu. Spokane availability is not confirmed.'});
      for (const group of this._visible()) {
        const count = group.selectedCount;
        if (count < group.min) errors.push({groupKey:group.key,message:group.name+': choose at least '+group.min+(group.min===1?' option.':' options.')});
        if (group.max != null && count > group.max) errors.push({groupKey:group.key,message:group.name+': choose no more than '+group.max+(group.max===1?' option.':' options.')});
        for (const item of group.items) {
          const quantity = group.selected[item.key] || 0;
          if (item.mandatory && quantity < Math.max(1,item.minQuantity || 0)) errors.push({groupKey:group.key,itemKey:item.key,message:item.name+' is required for this selection.'});
          if (quantity > 0 && (!Number.isInteger(quantity) || quantity < Math.max(1,item.minQuantity || 0) || (item.maxQuantity != null && quantity > item.maxQuantity))) {
            errors.push({groupKey:group.key,itemKey:item.key,message:'Check the quantity for '+item.name+'.'});
          }
          if (quantity && item.sourceOutOfStock) warnings.push({groupKey:group.key,itemKey:item.key,message:item.name+' is marked unavailable in the Beverly reference menu. Spokane availability is not confirmed.'});
        }
      }
      return {valid:errors.length===0,errors,warnings};
    }

    setProduct(id) {
      const product = this.products.find(item => item.id === id);
      if (!product) return {ok:false,message:'Choose a product from the menu.'};
      if (product.id === this.product.id) return {ok:true};
      this._remember(); this.product=product; this.selections={}; this._sync(); this._emit();
      return {ok:true};
    }

    toggle(groupKey,itemKey) {
      const group = this._visible().find(item => item.key === groupKey);
      if (!group) return {ok:false,message:'Choose the parent option before changing these choices.'};
      const item = group.items.find(option => option.key === itemKey);
      if (!item) return {ok:false,message:'That option is not part of this product.'};
      const selected = !!this.selections[groupKey]?.[itemKey];
      if (selected && group.mode==='single' && group.min>0) return {ok:true};
      return this.setQuantity(groupKey,itemKey,selected?0:Math.max(1,item.minQuantity || 0));
    }

    setQuantity(groupKey,itemKey,quantity) {
      const group = this._visible().find(item => item.key === groupKey);
      if (!group) return {ok:false,message:'Choose the parent option before changing these choices.'};
      const item = group.items.find(option => option.key === itemKey);
      if (!item) return {ok:false,message:'That option is not part of this product.'};
      const qty = Number(quantity);
      if (!Number.isInteger(qty) || qty<0) return {ok:false,message:'Choose a whole-number quantity.'};
      if (!qty && item.mandatory) return {ok:false,message:item.name+' is required for this selection.'};
      if (qty>0 && qty<Math.max(1,item.minQuantity || 0)) return {ok:false,message:item.name+': quantity must be at least '+Math.max(1,item.minQuantity || 0)+'.'};
      if (item.maxQuantity != null && qty>item.maxQuantity) return {ok:false,message:item.name+': quantity must be no more than '+item.maxQuantity+'.'};
      const proposed = {...(this.selections[groupKey] || {})};
      const locked = qty>0 && group.mode==='single' && group.items.find(option => option.key!==itemKey && option.mandatory && proposed[option.key]>0);
      if (locked) return {ok:false,message:locked.name+' is required for this selection.'};
      if (qty>0 && group.mode==='single') for (const key of Object.keys(proposed)) delete proposed[key];
      if (qty>0) proposed[itemKey]=qty;else delete proposed[itemKey];
      const count = Object.values(proposed).reduce((sum,value)=>sum+(value>0?value:0),0);
      if (group.max != null && count>group.max) return {ok:false,message:group.name+': choose up to '+group.max+(group.max===1?' option.':' options.')};
      if (JSON.stringify(proposed)===JSON.stringify(this.selections[groupKey] || {})) return {ok:true};
      this._remember(); this.selections[groupKey]=proposed; this._sync(); this._emit();
      return {ok:true};
    }

    clearGroup(groupKey) {
      const group = this._visible().find(item => item.key === groupKey);
      if (!group) return {ok:false,message:'Choose the parent option before changing these choices.'};
      if (group.min>0 || group.items.some(item=>item.mandatory)) return {ok:false,message:group.name+' has required choices and cannot be cleared.'};
      if (!Object.keys(this.selections[groupKey] || {}).length) return {ok:true};
      this._remember();this.selections[groupKey]={};this._sync();this._emit();return {ok:true};
    }

    reset() {
      this._remember(); this.selections={}; this._sync(); this._emit(); return {ok:true};
    }

    undo() {
      const previous = this.history.pop();
      if (!previous) return {ok:false,message:'There is nothing to undo yet.'};
      this.product=this.products.find(product=>product.id===previous.productId);this.selections=previous.selections;this._sync();this._emit();return {ok:true};
    }

    surprise() {
      this._remember();this.selections={};this._sync();
      const choose = items => items[Math.floor(Math.random()*items.length)];
      const completed = new Set();
      for (let depth=0;depth<12;depth++) {
        let changed=false;
        for (const group of this._visible()) {
          if (completed.has(group.key)) continue;
          const selected=this.selections[group.key];
          let count=Object.values(selected).reduce((sum,value)=>sum+value,0);
          const available=group.items.filter(item=>!item.sourceOutOfStock);
          const candidates=available.length?available:group.items;
          const target=group.min || ((Math.random()<.28 && candidates.length && !/combo/i.test(group.name))?1:0);
          while(count<target) {
            const left=candidates.filter(item=>!selected[item.key]);
            if(!left.length)break;
            const option=choose(left);selected[option.key]=Math.max(1,option.minQuantity || 0);count++;changed=true;
          }
          completed.add(group.key);
        }
        this._sync();
        if(!changed)break;
      }
      this._emit();
      const check=this.validate();
      return check.valid?{ok:true}:{ok:false,message:check.errors[0]?.message || 'Complete the required choices.'};
    }
  }
  window.EverbowlBuilderModel=EverbowlBuilderModel;
})();
