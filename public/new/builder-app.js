(() => {
  'use strict';
  const root = document.getElementById('mb-builder');
  if (!root) return;
  const $ = selector => document.querySelector(selector);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const families = [['bowls','Bowls'],['smoothies','Smoothies'],['toast','Toast'],['sips','Sips'],['takehome','Take home'],['shop','Grab & goods']];
  const familyOf = product => {
    if (/take.?me.?home/i.test(product.categoryName || '')) return 'takehome';
    if (product.kind === 'bowl') return 'bowls';
    if (product.kind === 'smoothie') return 'smoothies';
    if (product.kind === 'toast') return 'toast';
    if (product.kind === 'drink') return 'sips';
    if (product.kind === 'pint') return 'takehome';
    return 'shop';
  };
  const normalize = value => String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/^(add|remove)\s+/, '').replace(/\b(base|frozen fruit|powder)\b/g, '').replace(/[^a-z0-9]/g, '');
  const baseColors = {acai:'#572e58',pitaya:'#d33b86',cacaowow:'#62402d',vanilla:'#e9d8ae',bluemajic:'#44a9c6',cocolove:'#eee9d6',mango:'#eaa537',ube:'#9276bc',passionfruit:'#edbb43',guava:'#eb9a96',pineapple:'#efce69',greekyogurt:'#f3eee0',chiapudding:'#a4a29a',everoats:'#bda47a',granola:'#bd945d'};
  const hash = value => { let n=0;for(const ch of value)n=Math.imul(n,31)+ch.charCodeAt(0)|0;return Math.abs(n).toString(36); };
  const sourceCatalog = window.EVERBOWL_BUILDER_MENU;
  const catalog = sourceCatalog && {
    ...sourceCatalog,
    products: sourceCatalog.products.filter(product =>
      product.kind !== 'pint' || !/ Base Pint$/i.test(product.name) || product.imageUrl
    )
  };
  let model, visual, currentFamily = 'bowls', ready = false, renderQueued = false, selectedSignature = '';
  let dialogRequest = 0, dialogTimer, dialogReturnFocus, actionError = null;
  const detailsState = new Map();
  const groupElements = new Map();
  const announce = message => { $('#mb-status').textContent = message; };
  const groupKey = group => group.key || group.groupKey;
  const itemKey = item => item.key || item.id;
  const selectedMap = group => group.selected || model.getState().selections[groupKey(group)] || {};
  const optionNames = () => model.getSummary().map(option => (option.quantity > 1 ? option.quantity + ' × ' : '') + option.name);
  const product = () => model.getState().product;

  function countCopy(group) {
    if(group.unlimitedToppings)return 'Mix as many as you like';
    const min = Number(group.min) || 0, max = Number(group.max) || null;
    if (min && max === min) return 'Choose ' + min;
    if (min && max) return 'Choose ' + min + '–' + max;
    if (min) return 'Choose at least ' + min;
    return max ? 'Choose up to ' + max : 'Optional add-ons';
  }
  function artFor(item, group) {
    const n = normalize(item.name), base = /bases?/i.test(group.name) && !/toast/i.test(group.name);
    const bonusIndex=['granola','chiapudding','everoats','greekyogurt'].indexOf(n);
    if(base && bonusIndex>=0)return '<span class="mb-option-art mb-base-photo mb-bonus-photo" aria-hidden="true" style="background-position:'+(bonusIndex%2*100)+'% '+(Math.floor(bonusIndex/2)*100)+'%"></span>';
    const photoIndex=['acai','pitaya','cacaowow','vanilla','bluemajic','cocolove','mango','ube','passionfruit','guava','pineapple','everoats'].indexOf(n);
    if(base && photoIndex>=0) return '<span class="mb-option-art mb-base-photo" aria-hidden="true" style="background-position:'+((photoIndex%4)/3*100)+'% '+(Math.floor(photoIndex/4)/2*100)+'%"></span>';
    if (baseColors[n] && base) return '<span class="mb-option-art mb-frozen-art" aria-hidden="true"><i style="--mb-food-color:' + baseColors[n] + '"></i></span>';
    const lookup = {coconut:'coconut',almonds:'almonds',cacaonibs:'cacao-nibs',gojiberries:'goji-berries',driedpineapple:'dried-pineapple',driedmango:'dried-mango',chiaseeds:'chia-seeds',flaxseeds:'flax-seeds',hempseeds:'hemp-seeds',beepollen:'bee-pollen',cinnamonapples:'cinnamon-apples',peanutbutter:'peanut-butter',almondbutter:'almond-butter'};
    const key = lookup[n] || n;
    const topping = (window.COUNTER_TOPPINGS || []).find(entry => entry.key === key);
    if (topping?.sprite) {
      const sp=topping.sprite, cells=sp.sheet==='expanded'?4:3, source=sp.sheet==='expanded'?'assets/toppings-atlas.png':'assets/bowl-atlas.png';
      return '<span class="mb-option-art" aria-hidden="true"><i class="mb-food-sprite" style="background-image:url('+source+');background-size:'+cells*100+'% '+cells*100+'%;background-position:'+sp.col/(cells-1)*100+'% '+sp.row/(cells-1)*100+'%"></i></span>';
    }
    if (/size|milk|liquid|remove|default ingredients|sweetener|pump/i.test(group.name)) return '';
    return '<span class="mb-option-art mb-type-art" aria-hidden="true"><i>' + (/protein|boost/i.test(group.name)?'BOOST':/toast/i.test(group.name)?'TOAST':/combo/i.test(group.name)?'SIP':'GOOD STUFF') + '</i></span>';
  }
  function renderProductPicker(state) {
    const nextFamily=familyOf(state.product);
    if (nextFamily !== currentFamily) currentFamily=nextFamily;
    const tabs=$('#mb-families');
    if (!tabs.children.length) tabs.innerHTML=families.map(([key,label])=>'<button type="button" role="tab" data-mb-family="'+key+'" aria-controls="mb-product-panel" aria-selected="false">'+label+' <span>'+catalog.products.filter(p=>familyOf(p)===key).length+'</span></button>').join('');
    for(const tab of tabs.children){const active=tab.dataset.mbFamily===currentFamily;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;}
    const picker=$('#mb-product');
    if(picker.dataset.family!==currentFamily){
      const groups=new Map();
      for(const p of catalog.products.filter(p=>familyOf(p)===currentFamily)){const name=p.categoryName||'The menu';if(!groups.has(name))groups.set(name,[]);groups.get(name).push(p);}
      picker.innerHTML=[...groups].map(([name,items])=>'<optgroup label="'+esc(name)+'">'+items.map(p=>'<option value="'+esc(p.id)+'">'+esc(p.name)+(p.sourceOutOfStock?' · unavailable in Beverly':'')+'</option>').join('')+'</optgroup>').join('');
      picker.dataset.family=currentFamily;
    }
    picker.value=state.product.id;
    $('#mb-product-category').textContent=state.product.categoryName;
    $('#mb-product-availability').hidden=!state.product.sourceOutOfStock;
  }
  function renderGroups(state, validation) {
    const holder=$('#mb-groups');
    const focus=document.activeElement;
    const restore=focus?.dataset.mbItem ? {group:focus.dataset.mbGroup,item:focus.dataset.mbItem,action:focus.dataset.mbAction||''} : focus?.dataset.mbClear ? {group:focus.dataset.mbClear,clear:true} : null;
    for(const detail of holder.querySelectorAll('details[data-mb-detail]')) detailsState.set(detail.dataset.mbDetail,detail.open);
    const groups=model.getVisibleGroups();
    groupElements.clear();
    const errors=new Map((validation.errors||[]).map(error=>[error.groupKey,error.message]));
    if(actionError?.groupKey)errors.set(actionError.groupKey,actionError.message);
    holder.innerHTML=groups.map(group=>{
      const key=groupKey(group), selection=selectedMap(group), min=Number(group.min)||0;
      const single=/single/i.test(String(group.mode)) || group.max===1;
      const count=group.selectedCount??Object.values(selection).filter(q=>q>0).length;
      const compact=/size|milk|liquid|remove|default ingredients|sweetener|pump/i.test(group.name);
      const id='mb-group-'+hash(key);
      const isAdd=/^add\b|make it a combo|remove|recipe|default ingredients/i.test(group.name);
      const open=detailsState.has(key)?detailsState.get(key):!isAdd||min>0||count>0;
      groupElements.set(key,group);
      const choices=group.items.map(item=>{
        const ik=itemKey(item), qty=Number(selection[ik])||0;
        const quantity=qty>0&&(item.quantityEnabled===true||Number(item.maxQuantity)>1||Number(item.minQuantity)>1);
        return '<div class="mb-option-wrap'+(qty?' mb-is-selected':'')+'"><label class="mb-choice'+(compact?' mb-choice-compact':'')+'"><input type="'+(single?'radio':'checkbox')+'" name="mb-choice-'+hash(key)+'" data-mb-group="'+esc(key)+'" data-mb-item="'+esc(ik)+'" '+(qty?'checked ':'')+'aria-describedby="'+id+'-rule">'+artFor(item,group)+'<span class="mb-choice-label"><span>'+esc(item.name)+'</span><b aria-hidden="true">'+(qty?'✓':'+')+'</b></span>'+(item.sourceOutOfStock?'<small class="mb-stock">Beverly: unavailable</small>':'')+'</label>'+(quantity?'<div class="mb-quantity" aria-label="Quantity for '+esc(item.name)+'"><button type="button" data-mb-action="less" data-mb-group="'+esc(key)+'" data-mb-item="'+esc(ik)+'" aria-label="Less '+esc(item.name)+'">−</button><span>'+qty+'</span><button type="button" data-mb-action="more" data-mb-group="'+esc(key)+'" data-mb-item="'+esc(ik)+'" aria-label="More '+esc(item.name)+'">+</button></div>':'')+'</div>';
      }).join('');
      return '<details class="mb-group'+(group.depth?' mb-group-child':'')+(errors.has(key)?' mb-group-incomplete':'')+'" data-mb-detail="'+esc(key)+'" '+(open?'open':'')+'><summary><span>'+(group.parentLabel?'<small class="mb-parent-label">With '+esc(group.parentLabel)+'</small>':'')+'<strong>'+esc(group.name)+'</strong><span class="mb-rule" id="'+id+'-rule">'+countCopy(group)+' · '+count+' chosen</span></span><i aria-hidden="true">+</i></summary><div class="mb-group-content"><div class="mb-wells'+(compact?' mb-wells-compact':'')+'">'+choices+'</div><div class="mb-group-foot">'+(min===0&&count?'<button type="button" data-mb-clear="'+esc(key)+'">Clear this choice</button>':'<span></span>')+(errors.has(key)?'<p class="mb-group-error">'+esc(errors.get(key))+'</p>':'')+'</div></div></details>';
    }).join('') || '<div class="mb-as-it-comes"><span aria-hidden="true">✳</span><h3>GOOD TO GO.</h3><p>This pick comes just as it is. Take a look, give it a name, and save your pick.</p></div>';
    if(restore){const el=restore.clear?[...holder.querySelectorAll('details[data-mb-detail]')].find(el=>el.dataset.mbDetail===restore.group)?.querySelector('summary'):[...holder.querySelectorAll('[data-mb-item]')].find(el=>el.dataset.mbGroup===restore.group&&el.dataset.mbItem===restore.item&&(el.dataset.mbAction||'')===restore.action);el?.focus({preventScroll:true});}
  }
  function renderReceipt(state, validation) {
    const summary=model.getSummary();
    $('#mb-receipt-title').textContent=state.product.name;
    $('#mb-scene-product').textContent=state.product.name;
    $('#mb-receipt-options').innerHTML=summary.map(option=>'<li><span>'+esc(option.name)+'</span><b>'+(option.quantity>1?'× '+option.quantity:'✓')+'</b></li>').join('')||'<li class="mb-receipt-empty">Pick a base to start your creation.</li>';
    $('#mb-selection-count').textContent=summary.length+(summary.length===1?' choice':' choices');
    $('#mb-validity').textContent=validation.valid?'LOOKING GOOD. ALL YOURS.':(validation.errors[0]?.message||'Make your first choice.');
    $('#mb-validity').classList.toggle('mb-is-valid',validation.valid);
    $('#mb-stamp').disabled=!ready||!validation.valid;
    $('#mb-save-recipe').disabled=!ready||!validation.valid;
    $('#mb-undo').disabled=!ready||!state.canUndo;
    $('#mb-reset').disabled=!ready;
    $('#mb-surprise').disabled=!ready;
    $('#mb-canvas').setAttribute('aria-label','Your illustrated '+state.product.name+'. '+(summary.length?summary.map(o=>(o.quantity>1?o.quantity+' times ':'')+o.name).join(', '):'Choose your ingredients to begin.'));
    const signature=JSON.stringify([state.product.id,summary.map(o=>[o.key,o.quantity])]);
    if(signature!==selectedSignature){selectedSignature=signature;visual.render({product:state.product,options:summary});}
  }
  function render() {
    if(!ready||!model||!visual)return;
    const state=model.getState(),validation=model.validate();
    renderProductPicker(state);renderGroups(state,validation);renderReceipt(state,validation);
  }
  function queueRender(){if(!ready||renderQueued)return;renderQueued=true;queueMicrotask(()=>{renderQueued=false;render();});}
  function act(action, message){
    if(!ready)return;
    try{const result=action();if(result?.ok===false){const failure=result.message||'That choice would exceed this product’s limit.';actionError={groupKey:document.activeElement?.dataset.mbGroup,message:failure};announce(failure);render();return;}actionError=null;queueRender();announce(message||'Your pick is updated.');}
    catch(error){announce('That choice could not be updated. Please try again.');console.error(error);}
  }
  function chooseFamily(family, focus=false){
    const current=model.getState().product;
    if(familyOf(current)!==family){const list=catalog.products.filter(p=>familyOf(p)===family);const preferred=list.find(p=>/Regular Whatever Bowl|Whatever Smoothie$|Whatever Toast$/i.test(p.name))||list[0];if(preferred)act(()=>model.setProduct(preferred.id),'The '+preferred.name+' is on the counter.');}
    if(focus)queueMicrotask(()=>$('#mb-families').querySelector('[data-mb-family="'+family+'"]').focus());
  }
  function recipeText(){
    const state=model.getState(),summary=model.getSummary();
    return [$('#sticker-name')?.value.trim()||state.product.name,'Everbowl Spokane Valley — illustrated creation','Product: '+state.product.name,'Category: '+state.product.categoryName,'',...summary.map(o=>(o.groupName?o.groupName+': ':'')+o.name+(o.quantity>1?' × '+o.quantity:'')),'','Choices based on the Beverly reference menu. Spokane selection and pricing are to be confirmed.','This saves your creation and does not place an order.'].join('\n');
  }
  function downloadRecipe(){if(!ready||!model.validate().valid){announce('Complete your choices before saving your recipe.');return;}const blob=new Blob([recipeText()],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=(normalize(product().name)||'my-whatever')+'-recipe.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);}
  async function stamp(request){
    const dialog=$('#sticker-dialog');
    try{
      const state=model.getState(),summary=model.getSummary();
      const picture=visual.exportPNG();
      const name=$('#sticker-name').value.trim()||state.product.name;
      const result=await window.CounterSticker.create({bowlDataUrl:picture,name,baseLabels:[state.product.name],portions:summary.map(o=>({label:(o.quantity>1?o.quantity+' × ':'')+o.name})),drizzle:false,drizzleLabels:[]});
      if(request!==dialogRequest||!dialog.open)return;
      $('#sticker-preview').src=result.url;$('#sticker-preview').alt=name+' — your illustrated Everbowl creation';
      $('#download-sticker').href=result.url;$('#download-sticker').download=result.filename;$('#download-sticker').removeAttribute('aria-disabled');
      $('#download-bowl').href=picture;$('#download-bowl').download=(normalize(name)||'my-whatever')+'-picture.png';
      $('#sticker-progress').textContent='Freshly stamped. Entirely yours.';
    }catch(error){if(request===dialogRequest&&dialog.open)$('#sticker-progress').textContent='Your picture could not be saved. Close this and try again.';console.error(error);}
  }
  function queueStamp(immediate=false){const request=++dialogRequest;clearTimeout(dialogTimer);$('#download-sticker').setAttribute('aria-disabled','true');$('#download-sticker').removeAttribute('href');$('#sticker-progress').textContent='Stamping your creation…';if(immediate)stamp(request);else dialogTimer=setTimeout(()=>stamp(request),180);}
  function bind(){
    $('#mb-families').addEventListener('click',event=>{const button=event.target.closest('[data-mb-family]');if(button)chooseFamily(button.dataset.mbFamily);});
    $('#mb-families').addEventListener('keydown',event=>{const keys=families.map(f=>f[0]);const index=keys.indexOf(event.target.dataset.mbFamily);if(index<0)return;let next;if(event.key==='ArrowRight')next=(index+1)%keys.length;if(event.key==='ArrowLeft')next=(index+keys.length-1)%keys.length;if(event.key==='Home')next=0;if(event.key==='End')next=keys.length-1;if(next!==undefined){event.preventDefault();chooseFamily(keys[next],true);}});
    $('#mb-product').addEventListener('change',event=>{detailsState.clear();act(()=>model.setProduct(event.target.value),'Your new pick is on the counter.');});
    $('#mb-groups').addEventListener('change',event=>{const input=event.target.closest('input[data-mb-item]');if(input)act(()=>model.toggle(input.dataset.mbGroup,input.dataset.mbItem),'Your selection is updated.');});
    $('#mb-groups').addEventListener('click',event=>{
      const clear=event.target.closest('[data-mb-clear]');
      if(clear){const group=groupElements.get(clear.dataset.mbClear);if(group)act(()=>model.clearGroup(groupKey(group)),'That optional choice is cleared.');return;}
      const button=event.target.closest('[data-mb-action]');if(!button)return;
      const group=groupElements.get(button.dataset.mbGroup),qty=Number(selectedMap(group)[button.dataset.mbItem])||0;act(()=>model.setQuantity(button.dataset.mbGroup,button.dataset.mbItem,Math.max(0,qty+(button.dataset.mbAction==='more'?1:-1))));
    });
    $('#mb-undo').addEventListener('click',()=>act(()=>model.undo(),'Last change undone.'));
    $('#mb-reset').addEventListener('click',()=>act(()=>model.reset(),'Back to this product’s starting choices.'));
    $('#mb-surprise').addEventListener('click',()=>act(()=>model.surprise(),'A little surprise, made for this product.'));
    $('#mb-save-recipe').addEventListener('click',downloadRecipe);
    const dialog=$('#sticker-dialog');
    if(dialog){
      $('#mb-stamp').addEventListener('click',()=>{
        const validation=model.validate();if(!validation.valid){announce(validation.errors[0]?.message||'Complete your choices first.');return;}
        dialogReturnFocus=document.activeElement;$('#sticker-name').value=product().name.slice(0,48);
        $('#sticker-title').innerHTML='THAT PICK’S<br>ALL YOU.';
        $('#sticker-recipe').innerHTML='<p><strong>'+esc(product().name)+'</strong></p><p>'+optionNames().map(esc).join(' · ')+'</p><p>Save the recipe for the full list of choices.</p>';
        $('#sticker-recipe').classList.add('mb-modal-recipe');
        $('#download-bowl').textContent='Just the creation picture';dialog.showModal();$('#sticker-name').focus();queueStamp(true);
      });
      $('#close-sticker').addEventListener('click',()=>dialog.close());
      dialog.addEventListener('close',()=>{++dialogRequest;clearTimeout(dialogTimer);dialogReturnFocus?.focus({preventScroll:true});});
      dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
      $('#sticker-name').addEventListener('input',()=>queueStamp());$('#download-counter-recipe').addEventListener('click',downloadRecipe);
    }
  }
  async function start(){
    try{
      if(!catalog?.products?.length||!window.EverbowlBuilderModel||!window.EverbowlBuilderVisual)throw new Error('The full menu builder could not be loaded.');
      model=new window.EverbowlBuilderModel(catalog,{onChange:queueRender});
      visual=new window.EverbowlBuilderVisual($('#mb-canvas'));await visual.ready;
      window.menuBuilder=model;window.menuBuilderVisual=visual;
      ready=true;bind();render();$('#mb-loading').hidden=true;window.builderReady=true;
      window.addEventListener('pagehide',event=>{if(!event.persisted)visual.destroy?.();},{once:true});
    }catch(error){$('#mb-loading').textContent='The counter could not open. Refresh this page to try again.';announce('The menu builder could not load.');console.error(error);}
  }
  start();
})();
