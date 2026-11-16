/* Original local bowl-composition engine. No external dependencies. */
(() => {
  'use strict';

  const SIZE = 1000;
  const MAX_PORTIONS = 24;
  const MAX_PIECES = 360;
  const PRIMARY_BASES = ['acai','pitaya','cacao','vanilla','blue-majic','coconut','mango','ube','passion-fruit','guava','pineapple'];
  const BASES = [...PRIMARY_BASES, 'greek-yogurt','chia-pudding','everoats','empty'];
  const BASE_LABELS = {acai:'Açaí',pitaya:'Pitaya',cacao:'Cacao Wow',vanilla:'Vanilla','blue-majic':'Blue Majic',coconut:'Coco Love',mango:'Mango',ube:'Ube','passion-fruit':'Passion Fruit',guava:'Guava',pineapple:'Pineapple','greek-yogurt':'Greek Yogurt','chia-pudding':'Chia Pudding',everoats:'Everoats',empty:'Choose a base'};
  const CATALOG = Array.isArray(window.COUNTER_TOPPINGS) ? window.COUNTER_TOPPINGS : [];
  const INGREDIENTS = Object.fromEntries(CATALOG.filter(item => item.kind === 'ingredient').map(item => [item.key, { ...item, ...item.sprite, position: [...item.position] }]));
  const SAUCES = Object.fromEntries(CATALOG.filter(item => item.kind === 'sauce').map(item => [item.key, { ...item }]));

  const copy = value => JSON.parse(JSON.stringify(value));
  const clamp = (value, low, high) => Math.min(high, Math.max(low, value));
  const freshState = () => ({ bases: ['acai'], portions: [], drizzles: [], drizzle: false, drizzleSeed: 1, drizzleSeeds: {} });
  const randomBetween = (a, b) => a + Math.random() * (b - a);
  function seeded(seed) {
    let s = seed >>> 0;
    return () => { s = (Math.imul(1664525, s) + 1013904223) >>> 0; return s / 4294967296; };
  }

  class BowlLab {
    constructor(canvas, options = {}) {
      if (!(canvas instanceof HTMLCanvasElement)) throw new TypeError('BowlLab needs a canvas.');
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d', { alpha: true });
      this.canvas.width = SIZE;
      this.canvas.height = SIZE;
      this.onChange = typeof options.onChange === 'function' ? options.onChange : () => {};
      this.onDrop = typeof options.onDrop === 'function' ? options.onDrop : () => {};
      this.state = freshState();
      this.history = [];
      this.sprites = {};
      this.sequence = 0;
      this.raf = null;
      this.loaded = false;
      this.destroyed = false;
      this.geometry = { cx: 500, cy: 500, rx: 340, ry: 340, x: 75, y: 75, w: 850, h: 850 };
      this.motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.reducedMotion = this.motionQuery.matches;
      this.motionListener = event => { this.reducedMotion = event.matches; if (event.matches) this._settle(); this._paint(); };
      this.motionQuery.addEventListener('change', this.motionListener);
      this.ready = (async () => {
        if (!Object.keys(INGREDIENTS).length || !Object.keys(SAUCES).length) throw new Error('The complete topping catalog is not available.');
        const load = (src, name) => new Promise((resolve, reject) => {
          if (typeof src !== 'string' || !src.startsWith('data:image/')) { reject(new Error(name + ' artwork is not available.')); return; }
          const image = new Image();
          image.onload = () => resolve(image);
          image.onerror = () => reject(new Error(name + ' artwork could not be loaded.'));
          image.src = src;
        });
        const [original, expanded] = await Promise.all([
          load(window.BOWL_ATLAS, 'The original bowl'),
          load(window.BOWL_TOPPING_ATLAS, 'The expanded topping'),
        ]);
        if (this.destroyed) throw new Error('Builder was closed.');
        this._prepareSprites(original, 'original');
        this._prepareSprites(expanded, 'expanded');
        this._prepareBaseVariants();
        this.loaded = true;
        this._paint();
        this._emit();
        return this;
      })();
    }

    _prepareSprites(image, sheet) {
      const grid = sheet === 'original' ? 3 : 4;
      const tileW = image.naturalWidth / grid, tileH = image.naturalHeight / grid;
      const positions = sheet === 'original' ? { 'base-acai': [0, 0], 'base-pitaya': [1, 0], 'base-coconut': [2, 0] } : {};
      for (const [key, item] of Object.entries(INGREDIENTS)) if (item.sheet === sheet) positions[key] = [item.col, item.row];
      for (const [key, [col, row]] of Object.entries(positions)) {
        const tile = document.createElement('canvas');
        tile.width = Math.round(tileW); tile.height = Math.round(tileH);
        const context = tile.getContext('2d', { willReadFrequently: true });
        context.drawImage(image, col * tileW, row * tileH, tileW, tileH, 0, 0, tile.width, tile.height);
        const imageData = context.getImageData(0, 0, tile.width, tile.height), pixels = imageData.data;
        const total = tile.width * tile.height, seen = new Uint8Array(total), mask = new Uint8Array(total), queue = new Int32Array(total);
        const cluster = INGREDIENTS[key]?.group === 'seeds' || key === 'cinnamon';
        if (cluster) {
          // A seed/pollen/powder sprite is many separate real pieces. Keep significant central
          // components, not just the single seed nearest the center.
          for (let start = 0; start < total; start++) {
            if (seen[start] || pixels[start * 4 + 3] <= 96) continue;
            let head = 0, tail = 1, sx = 0, sy = 0; queue[0] = start; seen[start] = 1;
            const visit = index => { if (!seen[index] && pixels[index * 4 + 3] > 96) { seen[index] = 1; queue[tail++] = index; } };
            while (head < tail) {
              const index = queue[head++], x = index % tile.width; sx += x; sy += Math.floor(index / tile.width);
              if (x) visit(index - 1); if (x < tile.width - 1) visit(index + 1);
              if (index >= tile.width) visit(index - tile.width); if (index < total - tile.width) visit(index + tile.width);
            }
            const distance = Math.hypot(sx / tail / tile.width - .5, sy / tail / tile.height - .5);
            if (tail >= 12 && distance < .48) for (let i = 0; i < tail; i++) mask[queue[i]] = 1;
          }
        } else {
          let seed = -1, nearest = Infinity;
          for (let y = 0; y < tile.height; y++) for (let x = 0; x < tile.width; x++) {
            const index = y * tile.width + x, distance = (x - tile.width / 2) ** 2 + (y - tile.height / 2) ** 2;
            if (pixels[index * 4 + 3] > 96 && distance < nearest) { seed = index; nearest = distance; }
          }
          if (seed < 0) throw new Error('An ingredient sprite is empty: ' + key);
          let head = 0, tail = 1; queue[0] = seed; mask[seed] = 1;
          const visit = index => { if (!mask[index] && pixels[index * 4 + 3] > 96) { mask[index] = 1; queue[tail++] = index; } };
          while (head < tail) {
            const index = queue[head++], x = index % tile.width;
            if (x) visit(index - 1); if (x < tile.width - 1) visit(index + 1);
            if (index >= tile.width) visit(index - tile.width); if (index < total - tile.width) visit(index + tile.width);
          }
        }
        const keep = new Uint8Array(mask);
        for (let index = 0; index < total; index++) if (mask[index]) {
          const x = index % tile.width;
          if (x) keep[index - 1] = 1; if (x < tile.width - 1) keep[index + 1] = 1;
          if (index >= tile.width) keep[index - tile.width] = 1; if (index < total - tile.width) keep[index + tile.width] = 1;
        }
        let left = tile.width, top = tile.height, right = -1, bottom = -1;
        for (let y = 0; y < tile.height; y++) for (let x = 0; x < tile.width; x++) {
          const index = y * tile.width + x;
          if (!keep[index]) pixels[index * 4 + 3] = 0;
          if (pixels[index * 4 + 3] > 25) { left = Math.min(left, x); top = Math.min(top, y); right = Math.max(right, x); bottom = Math.max(bottom, y); }
        }
        if (right < left) throw new Error('An ingredient sprite is empty: ' + key);
        context.putImageData(imageData, 0, 0);
        left = Math.max(0, left - 3); top = Math.max(0, top - 3); right = Math.min(tile.width - 1, right + 3); bottom = Math.min(tile.height - 1, bottom + 3);
        const sprite = document.createElement('canvas'); sprite.width = right - left + 1; sprite.height = bottom - top + 1;
        sprite.getContext('2d').drawImage(tile, left, top, sprite.width, sprite.height, 0, 0, sprite.width, sprite.height);
        this.sprites[key] = sprite;
      }
      if (sheet === 'original') {
        const bowl = this.sprites['base-acai'], aspect = clamp(bowl.height / bowl.width, .72, 1.15), w = 850, h = w * aspect;
        this.geometry = { cx: 500, cy: 500, rx: w * .39, ry: h * .39, x: (SIZE - w) / 2, y: (SIZE - h) / 2, w, h };
      }
    }

    _prepareBaseVariants() {
      const palette = {cacao:'#6b4437',vanilla:'#ead9ad','blue-majic':'#59bad3',mango:'#f6aa24',ube:'#9b72bc','passion-fruit':'#f2c748',guava:'#f1a2a2',pineapple:'#f4d46b','greek-yogurt':'#f7f5e8','chia-pudding':'#ddd2bd',everoats:'#cbb394',empty:'#f6f4ee'};
      const source=this.sprites['base-acai'];
      for (const [key,color] of Object.entries(palette)) {
        const tile=document.createElement('canvas');tile.width=source.width;tile.height=source.height;const c=tile.getContext('2d');c.drawImage(source,0,0);
        const d=c.getImageData(0,0,tile.width,tile.height),v=d.data,red=parseInt(color.slice(1,3),16),green=parseInt(color.slice(3,5),16),blue=parseInt(color.slice(5,7),16);
        for(let y=0;y<tile.height;y++)for(let x=0;x<tile.width;x++){
          const i=(y*tile.width+x)*4,dx=(x/tile.width-.5)/.46,dy=(y/tile.height-.5)/.46;
          if(dx*dx+dy*dy>1||!v[i+3])continue;
          const l=(v[i]*.2126+v[i+1]*.7152+v[i+2]*.0722)/255;
          // Outside the food surface, retain the neutral ceramic rim and shadow.
          if(Math.hypot(x/tile.width-.5,y/tile.height-.5)>.425&&!(v[i]>v[i+1]+9&&v[i+2]>v[i+1]+5))continue;
          if(l>.84&&Math.max(v[i],v[i+1],v[i+2])-Math.min(v[i],v[i+1],v[i+2])<22)continue;
          const factor=key==='empty'?.985:(key==='greek-yogurt'? .88+l*.24:.67+l*.9);
          v[i]=clamp(red*factor,0,255);v[i+1]=clamp(green*factor,0,255);v[i+2]=clamp(blue*factor,0,255);
        }
        c.putImageData(d,0,0);
        if(key==='chia-pudding'||key==='everoats'){
          const rand=seeded(key==='chia-pudding'?318:818);c.save();c.beginPath();c.ellipse(tile.width/2,tile.height/2,tile.width*.375,tile.height*.375,0,0,Math.PI*2);c.clip();
          for(let n=0;n<(key==='chia-pudding'?850:340);n++){const a=rand()*Math.PI*2,r=Math.sqrt(rand()),x=tile.width*(.5+Math.cos(a)*r*.37),y=tile.height*(.5+Math.sin(a)*r*.37);c.fillStyle=key==='chia-pudding'?(n%3?'#50463d':'#a59480'):(n%2?'#ead5a9':'#a48c65');c.beginPath();c.ellipse(x,y,key==='chia-pudding'?1.2:3.4,key==='chia-pudding'?1.7:1.4,rand()*Math.PI,0,Math.PI*2);c.fill();}c.restore();
        }
        this.sprites['base-'+key]=tile;
      }
    }

    setVisualComposition({bases=[],ingredients=[],drizzles=[]}={}) {
      this.state=freshState();this.state.bases=[...new Set(bases)].filter(key=>BASES.includes(key)).slice(0,6);
      if(!this.state.bases.length)this.state.bases=['empty'];
      this.sequence=0;
      for(const entry of ingredients){const key=typeof entry==='string'?entry:entry.key;if(!INGREDIENTS[key])continue;const quantity=typeof entry==='string'?1:Math.max(1,Math.min(6,Number(entry.quantity)||1));const portion=this._newPortion(key,null,0,Math.min(Math.round(INGREDIENTS[key].count*Math.sqrt(quantity)),40), [...key].reduce((a,ch)=>a*31+ch.charCodeAt(0),7)>>>0);
        const rand=seeded([...key].reduce((a,ch)=>a*31+ch.charCodeAt(0),7)>>>0);for(const piece of portion.pieces){piece.born=-1000000;piece.rotation=rand()*Math.PI*2;piece.size=INGREDIENTS[key].size*(.88+rand()*.24);}this.state.portions.push(portion);}
      this.state.drizzles=[...new Set(drizzles)].filter(key=>SAUCES[key]);for(const key of this.state.drizzles)this.state.drizzleSeeds[key]=17+Object.keys(SAUCES).indexOf(key)*117;
      this.state.drizzle=this.state.drizzles.includes('peanut-butter');this.history=[];this._paint();return this.getState();
    }

    getState() {
      return {
        bases: [...this.state.bases],
        portions: this.state.portions.map(({ id, key, pieces }) => ({ id, key, label: INGREDIENTS[key].label, count: pieces.length })),
        drizzles: [...this.state.drizzles],
        drizzleLabels: this.state.drizzles.map(key => SAUCES[key].label),
        drizzle: this.state.drizzles.includes('peanut-butter'),
        canUndo: this.history.length > 0,
        totalPieces: this.state.portions.reduce((count, portion) => count + portion.pieces.length, 0),
        atLimit: this.state.portions.length >= MAX_PORTIONS || this.state.portions.reduce((count, portion) => count + portion.pieces.length, 0) >= MAX_PIECES,
        baseLabels: this.state.bases.map(key => BASE_LABELS[key]),
      };
    }

    _remember() {
      this.history.push(copy(this.state));
      if (this.history.length > 40) this.history.shift();
    }

    _emit() {
      if (!this.destroyed) this.onChange(this.getState());
    }

    _changed() {
      this.state.drizzle = this.state.drizzles.includes('peanut-butter');
      this._paint(); this._emit(); return this.getState();
    }

    setBases(keys) {
      if (!Array.isArray(keys)) return false;
      const bases = [...new Set(keys)].filter(key => BASES.includes(key)).slice(0, 6);
      if (!bases.length) return false;
      if (bases.join('|') === this.state.bases.join('|')) return this.getState();
      this._remember();
      this.state.bases = bases;
      return this._changed();
    }

    _inside(x, y, margin = .84) {
      const g = this.geometry;
      const dx = (x - g.cx) / g.rx, dy = (y - g.cy) / g.ry;
      const radius = Math.hypot(dx, dy);
      if (radius <= margin) return { x, y };
      return { x: g.cx + dx / radius * g.rx * margin, y: g.cy + dy / radius * g.ry * margin };
    }

    _newPortion(key, position, offset = 0, count, randomSeed) {
      const random = randomSeed === undefined ? null : seeded(randomSeed);
      const between = (a,b) => random ? a + random() * (b-a) : randomBetween(a,b);
      const meta = INGREDIENTS[key];
      const pieceCount = count === undefined ? meta.count : count;
      const id = 'portion-' + (++this.sequence);
      const now = performance.now();
      const previousSame = this.state.portions.filter(portion => portion.key === key).length;
      const rotate = previousSame * 1.48;
      const defaultX = meta.position[0] * SIZE, defaultY = meta.position[1] * SIZE;
      const vx = defaultX - 500, vy = defaultY - 500;
      const target = position && Number.isFinite(position.x) && Number.isFinite(position.y)
        ? this._inside(clamp(position.x, 0, 1) * SIZE, clamp(position.y, 0, 1) * SIZE, .75)
        : this._inside(500 + vx * Math.cos(rotate) - vy * Math.sin(rotate), 500 + vx * Math.sin(rotate) + vy * Math.cos(rotate), .75);
      const pieces = [];
      for (let i = 0; i < pieceCount; i++) {
        let x, y;
        if ((key === 'granola' || key === 'coconut' || meta.group === 'seeds' || key === 'cinnamon') && !position) {
          const angle = between(0, Math.PI * 2);
          const radius = Math.sqrt(Math.random()) * .87;
          x = 500 + Math.cos(angle) * this.geometry.rx * radius;
          y = 500 + Math.sin(angle) * this.geometry.ry * radius;
        } else {
          const angle = i * 2.39996 + between(-.24, .24);
          const radius = Math.sqrt(i / Math.max(1, pieceCount - 1)) * (key === 'blueberry' ? 83 : 106);
          x = target.x + Math.cos(angle) * radius + between(-9, 9);
          y = target.y + Math.sin(angle) * radius * .76 + between(-7, 7);
        }
        const point = this._inside(x, y, .83);
        pieces.push({
          x: point.x, y: point.y, rotation: between(-Math.PI, Math.PI),
          size: meta.size * between(.84, 1.14),
          born: this.reducedMotion ? -1000000 : now + offset + i * 22,
          duration: between(460, 640), drift: between(-54, 54),
          fall: between(270, 430), spin: between(-1.7, 1.7),
        });
      }
      return { id, key, pieces };
    }

    addIngredient(key, position) {
      if (!Object.prototype.hasOwnProperty.call(INGREDIENTS, key)) return false;
      const remaining = MAX_PIECES - this.getState().totalPieces;
      if (this.state.portions.length >= MAX_PORTIONS || remaining <= 0) return false;
      this._remember();
      const portion = this._newPortion(key, position, 0, Math.min(INGREDIENTS[key].count, remaining));
      this.state.portions.push(portion);
      this.onDrop({ id: portion.id, key, count: portion.pieces.length });
      return this._changed();
    }

    removePortion(id) {
      const index = this.state.portions.findIndex(portion => portion.id === id);
      if (index < 0) return false;
      this._remember();
      this.state.portions.splice(index, 1);
      return this._changed();
    }

    clearToppings() {
      if (!this.state.portions.length && !this.state.drizzles.length) return this.getState();
      this._remember();
      this.state.portions = [];
      this.state.drizzles = [];
      this.state.drizzle = false;
      return this._changed();
    }

    removeAt(x, y) {
      if (!Number.isFinite(x) || !Number.isFinite(y)) return false;
      const px = x * SIZE, py = y * SIZE;
      let hit = null, distance = Infinity;
      for (let i = this.state.portions.length - 1; i >= 0; i--) {
        const portion = this.state.portions[i];
        for (const piece of portion.pieces) {
          const d = Math.hypot(piece.x - px, piece.y - py);
          if (d < piece.size * .7 && d < distance) { hit = portion.id; distance = d; }
        }
      }
      return hit ? !!this.removePortion(hit) : false;
    }

    toggleSauce(key) {
      if (!Object.prototype.hasOwnProperty.call(SAUCES, key)) return false;
      this._remember();
      const index = this.state.drizzles.indexOf(key);
      if (index >= 0) this.state.drizzles.splice(index, 1);
      else {
        this.state.drizzles.push(key);
        this.state.drizzleSeeds[key] = Math.floor(Math.random() * 100000);
      }
      return this._changed();
    }

    toggleDrizzle() { return this.toggleSauce('peanut-butter'); }

    undo() {
      if (!this.history.length) return false;
      this.state = this.history.pop();
      this._settle();
      return this._changed();
    }

    reset() {
      if (!this.state.portions.length && !this.state.drizzles.length && this.state.bases.join('|') === 'acai') return this.getState();
      this._remember();
      this.state = freshState();
      return this._changed();
    }

    surprise() {
      this._remember();
      const previous = this.state.bases[0];
      this.state = freshState();
      const choices = PRIMARY_BASES.filter(key => key !== previous);
      this.state.bases = [choices[Math.floor(Math.random() * choices.length)]];
      if (Math.random() > .5) this.state.bases.push(previous);
      const shuffle = items => {
        const result = [...items];
        for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; }
        return result;
      };
      const fruit = shuffle(Object.keys(INGREDIENTS).filter(key => INGREDIENTS[key].group === 'fruit')).slice(0, 3);
      const extras = shuffle(Object.keys(INGREDIENTS).filter(key => INGREDIENTS[key].group !== 'fruit')).slice(0, 3);
      [...fruit, ...extras].forEach((key, i) => this.state.portions.push(this._newPortion(key, null, i * 100)));
      this.state.drizzles = Math.random() > .25 ? shuffle(Object.keys(SAUCES)).slice(0, Math.random() > .7 ? 2 : 1) : [];
      for (const key of this.state.drizzles) this.state.drizzleSeeds[key] = Math.floor(Math.random() * 100000);

      return this._changed();
    }

    _settle() {
      for (const portion of this.state.portions) for (const piece of portion.pieces) piece.born = -1000000;
    }

    _foodClip(context) {
      const g = this.geometry;
      context.beginPath();
      context.ellipse(g.cx, g.cy, g.rx * 1.10, g.ry * 1.10, 0, 0, Math.PI * 2);
      context.clip();
    }

    _drawBase() {
      const context = this.ctx, g = this.geometry;
      context.save();
      context.fillStyle = 'rgba(26,8,35,.15)';
      context.shadowColor = 'rgba(26,8,35,.22)';
      context.shadowBlur = 36; context.shadowOffsetY = 20;
      context.beginPath(); context.ellipse(500, g.y + g.h * .75, g.w * .40, g.h * .22, 0, 0, Math.PI * 2); context.fill();
      context.restore();
      context.drawImage(this.sprites['base-' + this.state.bases[0]], g.x, g.y, g.w, g.h);
      if (this.state.bases.length > 1) {
        const slice = Math.PI * 2 / this.state.bases.length;
        for (let i = 1; i < this.state.bases.length; i++) {
          context.save();
          this._foodClip(context);
          const start = -Math.PI / 2 + i * slice;
          context.beginPath(); context.moveTo(g.cx, g.cy);
          context.arc(g.cx, g.cy, SIZE, start, start + slice); context.closePath(); context.clip();
          context.drawImage(this.sprites['base-' + this.state.bases[i]], g.x, g.y, g.w, g.h);
          context.restore();
        }
      }
    }

    _drawPiece(piece, key, time, forceSettled) {
      const age = forceSettled || this.reducedMotion ? 1 : (time - piece.born) / piece.duration;
      if (age < 0) return true;
      const t = clamp(age, 0, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const bounce = t < 1 ? Math.sin(t * Math.PI * 3) * (1 - t) * 18 : 0;
      const x = piece.x + piece.drift * (1 - eased);
      const y = piece.y - piece.fall * (1 - eased) - bounce;
      const rotation = piece.rotation + piece.spin * (1 - eased);
      const scale = 1 + (1 - eased) * .22;
      const sprite = this.sprites[key];
      const ratio = sprite.height / sprite.width;
      const w = ratio > 1 ? piece.size / ratio : piece.size;
      const h = ratio > 1 ? piece.size : piece.size * ratio;
      const context = this.ctx;
      context.save(); context.translate(x, y); context.rotate(rotation); context.scale(scale, scale);
      context.shadowColor = 'rgba(28,10,27,' + (.18 + (1 - eased) * .09) + ')';
      context.shadowBlur = t >= 1 ? 3 : 9; context.shadowOffsetY = t >= 1 ? 3 : 12 * (1 - eased) + 3;
      context.drawImage(sprite, -w / 2, -h / 2, w, h);
      context.restore();
      return age < 1;
    }

    _drawDrizzle(key) {
      const meta = SAUCES[key], index = Object.keys(SAUCES).indexOf(key);
      const context = this.ctx, g = this.geometry, random = seeded(this.state.drizzleSeeds[key] || this.state.drizzleSeed);
      const translucent = key === 'honey' || key === 'agave';
      context.save(); this._foodClip(context);
      context.translate(g.cx, g.cy); context.rotate(-.19 + index * .073); context.translate(-g.cx, -g.cy);
      context.globalAlpha = translucent ? .68 : .96;
      const path = new Path2D();
      const left = g.cx - g.rx * .91, right = g.cx + g.rx * .91;
      const top = g.cy - g.ry * (.65 - index * .023), step = g.ry * .41;
      path.moveTo(left, top);
      for (let row = 0; row < 4; row++) {
        const y = top + row * step;
        const from = row % 2 ? right : left, to = row % 2 ? left : right;
        const wiggle = random() * 24 - 12;
        path.bezierCurveTo(from + (to - from) * .32, y + wiggle, from + (to - from) * .68, y - wiggle, to, y + 8);
        if (row < 3) {
          const bend = row % 2 ? -25 : 25;
          path.bezierCurveTo(to + bend, y + step * .28, to + bend, y + step * .76, to, y + step);
        }
      }
      context.lineCap = 'round'; context.lineJoin = 'round';
      const width = meta.width * (translucent ? .48 : .58);
      context.shadowColor = 'rgba(45,21,6,.16)'; context.shadowBlur = 3; context.shadowOffsetY = 2;
      context.strokeStyle = meta.color; context.lineWidth = width; context.stroke(path);
      context.shadowColor = 'transparent'; context.translate(-.7, -.7);
      context.strokeStyle = meta.highlight; context.lineWidth = Math.max(1, width * .20); context.stroke(path);
      context.restore();
    }

    _draw(time = performance.now(), forceSettled = false) {
      if (!this.loaded || this.destroyed) return false;
      this.ctx.clearRect(0, 0, SIZE, SIZE);
      this._drawBase();
      let active = false;
      for (const portion of this.state.portions) for (const piece of portion.pieces) {
        if (this._drawPiece(piece, portion.key, time, forceSettled)) active = true;
      }
      for (const key of this.state.drizzles) this._drawDrizzle(key);
      return active;
    }

    _paint() {
      if (!this.loaded || this.destroyed) return;
      if (this.raf !== null) cancelAnimationFrame(this.raf);
      this.raf = null;
      if (this._draw()) this._schedule();
    }

    _schedule() {
      if (this.raf !== null || this.destroyed) return;
      this.raf = requestAnimationFrame(time => {
        this.raf = null;
        if (this._draw(time)) this._schedule();
      });
    }

    exportPNG() {
      if (!this.loaded) throw new Error('The bowl artwork is still loading.');
      this._draw(performance.now(), true);
      const image = this.canvas.toDataURL('image/png');
      this._paint();
      return image;
    }

    destroy() {
      this.destroyed = true;
      if (this.raf !== null) cancelAnimationFrame(this.raf);
      this.motionQuery.removeEventListener('change', this.motionListener);
      this.raf = null;
    }
  }

  window.BOWL_INGREDIENTS = Object.fromEntries(Object.entries(INGREDIENTS).map(([key, value]) => [key, { ...value, position: [...value.position] }]));
  window.BOWL_SAUCES = Object.fromEntries(Object.entries(SAUCES).map(([key, value]) => [key, { ...value }]));
  window.BOWL_BASES = Object.fromEntries(PRIMARY_BASES.map((key,index)=>[key,{label:BASE_LABELS[key],col:index%3,row:Math.floor(index/3),illustrated:true}]));
  window.BowlLab = BowlLab;
})();
