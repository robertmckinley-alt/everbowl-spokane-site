/* Illustrated product scenes. All pixels remain origin-clean for local exports. */
(() => {
  'use strict';
  const SIZE=1000, INK='#203426';
  const COLORS={acai:'#5b234f',pitaya:'#e3438b',cacao:'#704638',vanilla:'#ead9ad','blue-majic':'#65bed6',coconut:'#f3ecdb',mango:'#f2aa24',ube:'#a378c4','passion-fruit':'#ecc647',guava:'#eea6a3',pineapple:'#f4d56b','greek-yogurt':'#f5f2e5','chia-pudding':'#d8cbbb',everoats:'#c6ad8c'};
  const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/^add\s+/,'').replace(/\s+base$/,'').replace(/\s+/g,' ').trim();
  const BASE_NAMES={'acai':'acai','pitaya':'pitaya','cacao wow':'cacao','vanilla':'vanilla','blue majic':'blue-majic','coco love':'coconut','mango':'mango','ube':'ube','passion fruit':'passion-fruit','guava':'guava','pineapple':'pineapple','greek yogurt':'greek-yogurt','chia pudding':'chia-pudding','everoats':'everoats'};
  const INGREDIENT_NAMES={'banana':'banana','strawberry':'strawberry','pineapple':'pineapple','blueberry':'blueberry','kiwi':'kiwi','cinnamon apples':'cinnamon-apples','granola':'granola','coconut':'coconut','coconut flakes':'coconut','almonds':'almonds','sliced almonds':'almonds','cacao nibs':'cacao-nibs','goji berries':'goji-berries','dried pineapple':'dried-pineapple','dried mango':'dried-mango','dates':'dates','date':'dates','chia seeds':'chia-seeds','flax seeds':'flax-seeds','hemp seeds':'hemp-seeds','bee pollen':'bee-pollen','cinnamon':'cinnamon'};
  const SAUCE_NAMES={'peanut butter':'peanut-butter','almond butter':'almond-butter','honey':'honey','agave':'agave','nutella':'nutella'};
  const seed=s=>{let n=2166136261;for(const c of String(s))n=Math.imul(n^c.charCodeAt(0),16777619)>>>0;return()=>{n=(Math.imul(n,1664525)+1013904223)>>>0;return n/4294967296;};};
  const load=src=>new Promise((resolve,reject)=>{const i=new Image();i.onload=()=>resolve(i);i.onerror=reject;i.src=src;});
  const rounded=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r);};
  function fit(c,text,width,size=24,min=11){for(;size>min;size--) {c.font=`700 ${size}px FSProxima,Arial,sans-serif`;if(c.measureText(text).width<=width)break;}return size;}
  function average(colors){const sums=[0,0,0];for(const color of colors){for(let i=0;i<3;i++)sums[i]+=parseInt(color.slice(i*2+1,i*2+3),16);}return '#'+sums.map(n=>Math.round(n/Math.max(1,colors.length)).toString(16).padStart(2,'0')).join('');}

  class EverbowlBuilderVisual {
    constructor(canvas){
      if(!(canvas instanceof HTMLCanvasElement))throw new TypeError('Product preview needs a canvas.');
      this.canvas=canvas;canvas.width=canvas.height=SIZE;this.ctx=canvas.getContext('2d');this.destroyed=false;this.current=null;this.photos=new Map();this.sequence=0;
      this.plate=document.createElement('canvas');this.lab=new window.BowlLab(this.plate);this.lab.reducedMotion=true;
      this.ready=this.lab.ready.then(async()=>{if(window.EVERBOWL_BRAND_LOGO){try{this.brand=await load(window.EVERBOWL_BRAND_LOGO);}catch(_){}}[this.baseTextures,this.bonusTextures]=await Promise.all([load('assets/base-textures.webp'),load('assets/bonus-textures.webp')]);this.loaded=true;if(this.current)this._paint();return this;});
    }
    render({product,options=[]}={}){if(this.destroyed)return;this.current={product:product||{name:'Your Whatever',kind:'bowl'},options:options.filter(o=>o&&o.name)};this.sequence++;if(this.loaded)this._paint();return this.canvas;}
    _mainOptions(){
      const {product,options}=this.current;const comboKeys=new Set();
      function visit(groups,combo){for(const g of groups||[]){const inCombo=combo||/\bcombo\b/i.test(g.name);if(inCombo)comboKeys.add(g.key);for(const i of g.items||[])visit(i.groups,inCombo);}}
      visit(product.groups,false);
      return options.filter(o=>!o.inCombo&&!comboKeys.has(o.groupKey));
    }
    _ingredients(){
      const options=this._mainOptions(),removed=new Set(options.filter(o=>/^remove\b/i.test(o.name)).map(o=>norm(o.name.replace(/^remove\s+/i,''))));
      const positive=options.filter(o=>!/^remove\b/i.test(o.name)&&!removed.has(norm(o.name)));
      const bases=[],ingredients=[],drizzles=[];
      for(const o of positive){const name=norm(o.name),group=String(o.groupName||'');const isFrozen=/\bbase\b/i.test(o.name)||/^bases\b/i.test(group)||/default ingredients/i.test(group)&&BASE_NAMES[name];
        if(BASE_NAMES[name]&&(isFrozen||['greek yogurt','chia pudding','everoats'].includes(name))&&!bases.includes(BASE_NAMES[name]))bases.push(BASE_NAMES[name]);
        else if(INGREDIENT_NAMES[name])ingredients.push({key:INGREDIENT_NAMES[name],quantity:o.quantity||1});
        if(SAUCE_NAMES[name]&&!drizzles.includes(SAUCE_NAMES[name]))drizzles.push(SAUCE_NAMES[name]);
      }
      const title=String(this.current.product.name||'');
      if(!bases.length&&/^(?:chia pudding|oats|everfuel greek yogurt)/i.test(title))bases.push(/chia/i.test(title)?'chia-pudding':/oats/i.test(title)?'everoats':'greek-yogurt');
      return {options:positive,bases,ingredients,drizzles,removed};
    }
    _paint(){
      if(!this.loaded||this.destroyed||!this.current)return;
      const c=this.ctx,{product}=this.current,food=this._ingredients();c.clearRect(0,0,SIZE,SIZE);c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
      const kind=product.kind||'bowl';const height=kind==='bowl'?850:1000;if(this.canvas.height!==height)this.canvas.height=height;
      if(kind==='bowl')this._bowl(food);
      else if(kind==='smoothie'||kind==='drink')this._cup(food,kind);
      else if(kind==='toast')this._toast(food);
      else this._packaged(food,kind);

      this.canvas.setAttribute('aria-label',product.name+' illustrated with '+this.current.options.map(o=>`${o.quantity>1?o.quantity+' × ':''}${o.name}`).join(', '));
    }
    _clearBowlPath(c){
      c.beginPath();c.moveTo(101,270);c.bezierCurveTo(116,407,139,549,169,666);c.bezierCurveTo(192,718,809,718,831,666);c.bezierCurveTo(861,549,884,407,899,270);c.bezierCurveTo(830,193,170,193,101,270);c.closePath();
    }
    _bowl(food){
      const c=this.ctx,keys=food.bases,small=/kids/i.test(this.current.product.name),large=/large/i.test(this.current.product.name),scale=small?.88:large?1.04:1;
      c.save();c.translate(500,425);c.scale(scale,scale);c.translate(-500,-425);
      c.save();c.fillStyle='rgba(36,48,29,.19)';c.filter='blur(18px)';c.beginPath();c.ellipse(500,717,324,24,0,0,Math.PI*2);c.fill();c.restore();
      c.save();this._clearBowlPath(c);c.clip();
      if(keys.length){
        const top=263,bottom=697,step=(bottom-top)/keys.length;
        // First pick is the bottom layer. Soft irregular seams read through clear walls.
        keys.forEach((key,i)=>{const y=bottom-(i+1)*step,low=bottom-i*step;
          c.save();c.beginPath();c.moveTo(60,y+8);c.bezierCurveTo(290,y-8,395,y+15,525,y+2);c.bezierCurveTo(680,y-12,794,y+12,940,y);c.lineTo(940,low+24);c.lineTo(60,low+24);c.closePath();c.clip();this._baseTexture(key,90,y-12,820,step+42);c.restore();
        });
        const shade=c.createLinearGradient(95,0,905,0);shade.addColorStop(0,'rgba(22,27,24,.19)');shade.addColorStop(.18,'rgba(255,255,255,.02)');shade.addColorStop(.48,'rgba(255,255,255,.07)');shade.addColorStop(.8,'rgba(255,255,255,0)');shade.addColorStop(1,'rgba(22,27,24,.20)');c.fillStyle=shade;c.fillRect(90,260,820,450);
      }else{const empty=c.createLinearGradient(100,0,900,0);empty.addColorStop(0,'rgba(255,255,255,.16)');empty.addColorStop(.5,'rgba(255,255,255,.02)');empty.addColorStop(1,'rgba(255,255,255,.20)');c.fillStyle=empty;c.fillRect(90,190,820,530);}
      c.restore();
      // A shallow elliptical food surface sits above the stacked layers.
      if(keys.length){c.save();c.beginPath();c.ellipse(500,266,390,69,0,0,Math.PI*2);c.clip();this._baseTexture(keys[keys.length-1],100,190,800,155);this._sideToppings(food);this._boostDust(food,500,266,380,66);c.restore();}
      c.save();this._clearBowlPath(c);c.clip();
      const shine=c.createLinearGradient(116,0,890,0);shine.addColorStop(0,'rgba(255,255,255,.46)');shine.addColorStop(.04,'rgba(255,255,255,.05)');shine.addColorStop(.11,'rgba(255,255,255,.18)');shine.addColorStop(.17,'rgba(255,255,255,0)');shine.addColorStop(.82,'rgba(255,255,255,0)');shine.addColorStop(.93,'rgba(255,255,255,.24)');shine.addColorStop(1,'rgba(255,255,255,.48)');c.fillStyle=shine;c.fillRect(90,240,820,470);
      c.strokeStyle='rgba(255,255,255,.48)';c.lineWidth=11;c.lineCap='round';c.beginPath();c.moveTo(147,336);c.bezierCurveTo(154,414,169,530,187,594);c.stroke();c.strokeStyle='rgba(255,255,255,.22)';c.lineWidth=5;c.beginPath();c.moveTo(849,339);c.lineTo(801,650);c.stroke();c.restore();
      c.strokeStyle='rgba(57,75,65,.28)';c.lineWidth=2.5;this._clearBowlPath(c);c.stroke();
      c.strokeStyle='rgba(255,255,255,.72)';c.lineWidth=8;c.beginPath();c.moveTo(104,283);c.bezierCurveTo(124,449,146,567,170,664);c.bezierCurveTo(194,713,806,713,830,664);c.bezierCurveTo(856,557,882,399,897,283);c.stroke();
      c.strokeStyle='rgba(255,255,255,.87)';c.lineWidth=13;c.beginPath();c.ellipse(500,268,399,75,0,0,Math.PI*2);c.stroke();c.strokeStyle='rgba(63,80,69,.23)';c.lineWidth=2;c.beginPath();c.ellipse(500,266,405,80,0,0,Math.PI*2);c.stroke();
      if(this.brand){c.save();c.globalAlpha=.95;c.shadowColor='rgba(255,255,255,.58)';c.shadowBlur=3;c.drawImage(this.brand,320,458,360,360*51/191);c.restore();}
      if(!keys.length){c.fillStyle=INK;c.textAlign='center';c.font='600 23px FSProxima,Arial,sans-serif';c.fillText('Pick your bases. Watch them stack.',500,790);}
      c.restore();
    }
    _baseTexture(key,x,y,w,h){
      const bonusIndex=['granola','chia-pudding','everoats','greek-yogurt'].indexOf(key);
      if(bonusIndex>=0){const tw=this.bonusTextures.width/2,th=this.bonusTextures.height/2;this.ctx.drawImage(this.bonusTextures,(bonusIndex%2)*tw+3,Math.floor(bonusIndex/2)*th+3,tw-6,th-6,x,y,w,h);return;}
      const index=['acai','pitaya','cacao','vanilla','blue-majic','coconut','mango','ube','passion-fruit','guava','pineapple','everoats'].indexOf(key),c=this.ctx;
      if(index<0){c.fillStyle=COLORS[key]||'#ede1cc';c.fillRect(x,y,w,h);return;}
      const tw=this.baseTextures.width/4,th=this.baseTextures.height/3;
      c.drawImage(this.baseTextures,(index%4)*tw+3,Math.floor(index/4)*th+3,tw-6,th-6,x,y,w,h);
    }
    _sideToppings(food){
      const c=this.ctx,pieces=[];
      food.ingredients.forEach(({key,quantity},i)=>{const sprite=this.lab.sprites[key];if(!sprite)return;const r=seed(key),meta=window.BOWL_INGREDIENTS?.[key],fruit=/banana|strawberry|kiwi|pineapple|blueberry|cinnamon-apples/.test(key),count=Math.min(fruit?9:32,Math.ceil((fruit?6:18)*Math.sqrt(quantity)));
        for(let n=0;n<count;n++){const a=r()*Math.PI*2,rad=Math.sqrt(r())*.84,x=500+Math.cos(a)*360*rad,y=269+Math.sin(a)*70*rad,w=fruit?62+r()*20:25+r()*16;pieces.push({sprite,x,y,w,h:w*sprite.height/sprite.width,angle:(r()-.5)*.9});}
      });
      pieces.sort((a,b)=>a.y-b.y).forEach(p=>{c.save();c.translate(p.x,p.y);c.rotate(p.angle);c.shadowColor='rgba(36,19,17,.23)';c.shadowBlur=4;c.shadowOffsetY=3;c.drawImage(p.sprite,-p.w/2,-p.h/2,p.w,p.h);c.restore();});
      const sauceColors={'peanut-butter':'#b67e43','almond-butter':'#956332',honey:'#d49b29',agave:'#c99c5c',nutella:'#4d281c'};
      food.drizzles.forEach((key,i)=>{c.save();c.strokeStyle=sauceColors[key]||'#7b4a30';c.lineWidth=/honey|agave/.test(key)?4:7;c.lineCap='round';c.shadowColor='rgba(58,25,10,.18)';c.shadowBlur=2;c.beginPath();for(let n=0;n<=120;n++){const x=145+n*5.9,y=265+Math.sin(n*.25+i*.7)*48; if(n)c.lineTo(x,y);else c.moveTo(x,y);}c.stroke();c.restore();});
    }
    _cupPath(c){c.beginPath();c.moveTo(320,185);c.lineTo(680,185);c.lineTo(638,710);c.quadraticCurveTo(635,747,600,750);c.lineTo(400,750);c.quadraticCurveTo(365,747,362,710);c.closePath();}
    _cup(food,kind){
      const c=this.ctx,product=this.current.product,title=norm(product.name),names=food.options.map(o=>norm(o.name));let color;
      if(food.bases.length)color=average(food.bases.map(k=>COLORS[k]||'#e7dccb'));
      else if(/matcha/.test(title))color='#78a447';else if(/coffee|cold brew/.test(title))color='#704a37';else if(/dragon fruit/.test(title))color='#d94783';else if(/strawberry.*lemonade/.test(title))color='#f29b9b';else if(/lemonade/.test(title))color='#f1d46a';else color='#ede8df';
      if(kind==='smoothie'&&!food.bases.length)color='#f8f7f1';
      const fruitColors={pineapple:'#ecd65a',mango:'#f3b133',strawberry:'#e77d98',spinach:'#739442',banana:'#e7dcb1'};
      if(kind==='smoothie'&&food.bases.length){const extra=names.filter(n=>/frozen fruit$/.test(n)).map(n=>fruitColors[n.replace(/ frozen fruit$/,'')]).filter(Boolean);if(extra.length)color=average([color,color,color,...extra]);}
      if(/cold brew|coffee/.test(title)&&food.bases.length)color=average([color,'#75533d']);
      const scale=/large/.test(title)||names.includes('large')?1.08:1;
      c.save();c.translate(500,430);c.scale(scale,scale);c.translate(-500,-430);
      c.save();c.fillStyle='rgba(28,29,24,.13)';c.shadowColor='rgba(28,29,24,.20)';c.shadowBlur=35;c.beginPath();c.ellipse(500,756,178,29,0,0,Math.PI*2);c.fill();c.restore();
      c.save();this._cupPath(c);c.clip();let gradient=c.createLinearGradient(325,0,680,0);gradient.addColorStop(0,'#ffffff');gradient.addColorStop(.12,color);gradient.addColorStop(.62,color);gradient.addColorStop(1,'#ffffff');c.fillStyle=gradient;c.fillRect(310,180,390,590);
      const random=seed(product.id||product.name);c.globalAlpha=.13;for(let n=0;n<1600;n++){c.fillStyle=n%2?'#fff':'#2e1d15';c.fillRect(330+random()*350,190+random()*550,1+random()*2,1+random()*2);}c.globalAlpha=1;
      const strawberry=/strawberry/.test(title)||names.some(n=>/strawberry frozen fruit/.test(n));if(strawberry){const g=c.createLinearGradient(0,630,0,750);g.addColorStop(0,'rgba(196,44,70,0)');g.addColorStop(1,'#b9405c');c.fillStyle=g;c.fillRect(335,610,330,150);}
      if(names.some(n=>/almond milk|coconut milk/.test(n))){const g=c.createLinearGradient(0,460,0,700);g.addColorStop(0,'rgba(251,246,230,0)');g.addColorStop(1,names.includes('coconut milk')?'rgba(255,255,250,.65)':'rgba(238,224,195,.52)');c.fillStyle=g;c.fillRect(320,450,360,300);}
      if(food.bases.length>1){c.globalAlpha=.35;food.bases.forEach((key,i)=>{c.fillStyle=COLORS[key];c.beginPath();c.moveTo(320,260+i*110);c.bezierCurveTo(430,200+i*90,530,400+i*80,690,260+i*110);c.lineTo(690,350+i*110);c.bezierCurveTo(500,460+i*80,430,270+i*90,320,350+i*110);c.fill();});c.globalAlpha=1;}
      if(/iced|cold brew|lemonade/.test(title)){c.fillStyle='rgba(255,255,255,.35)';c.strokeStyle='rgba(255,255,255,.45)';c.lineWidth=2;for(let n=0;n<16;n++){const x=350+random()*280,y=230+random()*400;c.save();c.translate(x,y);c.rotate(random());rounded(c,-17,-20,38,43,7);c.fill();c.stroke();c.restore();}}
      for(const [index,key] of food.drizzles.entries()){const sauce=window.BOWL_SAUCES?.[key];c.strokeStyle=sauce?.color||'#684026';c.lineWidth=10;c.lineCap='round';c.beginPath();for(let n=0;n<90;n++){const x=335+n*3.5,y=640-Math.sin(n*.13+index)*32-index*15;if(!n)c.moveTo(x,y);else c.lineTo(x,y);}c.stroke();}
      c.restore();
      c.fillStyle=color;c.beginPath();c.ellipse(500,185,180,34,0,0,Math.PI*2);c.fill();
      if(/foam/.test(title)||/everfuel.*cold brew/.test(title)){const foam=c.createRadialGradient(475,170,20,500,180,190);foam.addColorStop(0,'#fff7e7');foam.addColorStop(1,'#d9c5a9');c.fillStyle=foam;c.beginPath();c.ellipse(500,184,177,31,0,0,Math.PI*2);c.fill();c.fillStyle=/cacao/.test(title)?'#5b3424':'#a67b4b';for(let n=0;n<100;n++){c.beginPath();c.arc(350+random()*300,170+random()*24,random()*1.6+.5,0,Math.PI*2);c.fill();}}
      c.strokeStyle='rgba(255,255,255,.86)';c.lineWidth=10;this._cupPath(c);c.stroke();c.strokeStyle='rgba(71,75,67,.24)';c.lineWidth=2;this._cupPath(c);c.stroke();c.strokeStyle='rgba(255,255,255,.8)';c.lineWidth=12;c.beginPath();c.moveTo(347,240);c.lineTo(382,684);c.stroke();
      c.strokeStyle='rgba(201,209,200,.86)';c.lineWidth=8;c.beginPath();c.ellipse(500,185,187,38,0,0,Math.PI*2);c.stroke();
      if(this.brand)c.drawImage(this.brand,392,405,216,216*51/191);
      if(kind==='smoothie'&&!food.bases.length){c.textAlign='center';c.fillStyle=INK;c.font='700 22px FSProxima,Arial,sans-serif';c.fillText('Choose your bases',500,540);}
      this._boostDust(food,500,185,145,20);c.restore();
    }
    _breadPath(c,inner=false){const x=inner?198:160,y=inner?292:250,w=inner?604:680,h=inner?292:376;c.beginPath();c.moveTo(x+35,y+h);c.quadraticCurveTo(x,y+h,x,y+h-35);c.lineTo(x,y+135);c.bezierCurveTo(x-15,y+25,x+100,y-40,x+175,y-17);c.bezierCurveTo(x+295,y-69,x+w-95,y-39,x+w,y+103);c.lineTo(x+w,y+h-35);c.quadraticCurveTo(x+w,y+h,x+w-35,y+h);c.closePath();}
    _toast(food){
      const c=this.ctx,rand=seed('toast'),names=food.options.map(o=>norm(o.name)),nutella=!food.removed.has('nutella')&&!food.removed.has('nutella spread')&&(names.some(n=>n==='nutella'||n==='nutella spread')||/nutella/i.test(this.current.product.name)),avocado=!food.removed.has('avocado spread')&&(names.some(n=>n==='avocado spread')||/avocado|bruschetta/i.test(this.current.product.name));
      c.save();c.shadowColor='rgba(56,33,12,.25)';c.shadowBlur=20;c.shadowOffsetY=17;this._breadPath(c);c.fillStyle='#ae6e30';c.fill();c.restore();
      c.save();this._breadPath(c);c.clip();const crust=c.createLinearGradient(100,240,800,600);crust.addColorStop(0,'#f8dfa2');crust.addColorStop(.5,'#dbb66d');crust.addColorStop(1,'#a96930');c.fillStyle=crust;c.fillRect(130,160,740,500);
      for(let n=0;n<1350;n++){c.fillStyle=n%3?'rgba(91,49,13,.2)':'rgba(255,246,210,.6)';c.beginPath();c.ellipse(130+rand()*740,180+rand()*500,1+rand()*4,1+rand()*3,rand()*Math.PI,0,Math.PI*2);c.fill();}c.restore();
      if(nutella||avocado){c.save();this._breadPath(c,true);c.clip();const spread=c.createLinearGradient(200,260,790,580);spread.addColorStop(0,nutella?'#83513b':'#b8cb5e');spread.addColorStop(.5,nutella?'#62392b':'#91b546');spread.addColorStop(1,nutella?'#7f513b':'#b1c65e');c.fillStyle=spread;c.fillRect(180,220,650,390);for(let n=0;n<650;n++){c.fillStyle=nutella?'rgba(236,176,119,.16)':'rgba(72,111,33,.22)';c.beginPath();c.ellipse(190+rand()*610,230+rand()*350,rand()*7+1,rand()*4+1,rand()*Math.PI,0,Math.PI*2);c.fill();}c.restore();}
      food.ingredients.forEach(({key,quantity},index)=>{const sprite=this.lab.sprites[key];if(!sprite)return;const random=seed(key);let count=Math.min(35,(window.BOWL_INGREDIENTS?.[key]?.count||8)*Math.sqrt(quantity));for(let n=0;n<count;n++){const x=235+random()*530,y=295+random()*245,meta=window.BOWL_INGREDIENTS?.[key],w=(meta?.size||50)*(.57+random()*.12),h=w*sprite.height/sprite.width;c.save();c.translate(x,y);c.rotate((random()-.5)*.6);c.shadowColor='rgba(55,35,10,.17)';c.shadowBlur=3;c.shadowOffsetY=3;c.drawImage(sprite,-w/2,-h/2,w,h);c.restore();}});
      if(names.some(n=>/marinated tomatoes/.test(n))){for(let n=0;n<15;n++){const x=240+rand()*520,y=285+rand()*250;c.save();c.translate(x,y);c.rotate(rand());c.fillStyle='#d85138';rounded(c,-18,-14,36,28,7);c.fill();c.fillStyle='#f7ae61';c.fillRect(-9,-5,10,3);c.restore();}}
      const extras=names.filter(n=>/basil|chili flakes|everything seasoning/.test(n));for(const n of extras){const random=seed(n);for(let i=0;i<90;i++){c.fillStyle=/basil/.test(n)?'#355f29':/chili/.test(n)?'#a54423':i%3?'#f3ddb6':'#302b22';const x=220+random()*560,y=265+random()*295;c.save();c.translate(x,y);c.rotate(random()*Math.PI);c.fillRect(-2,-1,/basil/.test(n)?10:3,/basil/.test(n)?4:2);c.restore();}}
      for(const [index,key] of food.drizzles.entries()){c.strokeStyle=window.BOWL_SAUCES?.[key]?.color||'#5a3927';c.lineWidth=key==='honey'||key==='agave'?5:9;c.lineCap='round';c.beginPath();for(let row=0;row<5;row++){const y=300+row*54+index*8;if(!row)c.moveTo(222,y);c.bezierCurveTo(400,y-28,610,y+25,796,y);if(row<4)c.bezierCurveTo(820,y+20,180,y+24,222,y+54);}c.stroke();}
      if(!avocado&&!nutella&&!food.ingredients.length){c.fillStyle=INK;c.textAlign='center';c.font='700 25px FSProxima,Arial,sans-serif';c.fillText('Pick your spread',500,450);}
    }
    _photo(product){
      const url=product.imageUrl||product.photoUrl;if(!url)return null;
      const known=window.EVERBOWL_BEVERLY_PHOTOS?.[url];
      const cached=this.photos.get(url);if(cached?.image)return cached.image;if(cached)return null;
      const record={image:null,pending:true};this.photos.set(url,record);const id=product.id;
      (async()=>{try{let src=known;if(!src){const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),5000);try{const r=await fetch(url,{mode:'cors',credentials:'omit',signal:controller.signal});if(!r.ok)throw Error('Image unavailable');const blob=await r.blob();if(blob.size>5000000)throw Error('Image too large');src=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(blob);});}finally{clearTimeout(timer);}}record.image=await load(src);}catch(_){record.failed=true;}finally{record.pending=false;if(!this.destroyed&&this.current?.product.id===id)this._paint();}})();return null;
    }
    _packaged(food,kind){
      const c=this.ctx,p=this.current.product,photo=this._photo(p);if(photo){const ratio=photo.width/photo.height,w=650,h=w/ratio,scale=Math.min(1,650/h);c.drawImage(photo,500-w*scale/2,410-h*scale/2,w*scale,h*scale);return;}
      if(kind==='pint'){
        const name=norm(p.name).replace(/\s+pint$/,'');const key=BASE_NAMES[name.replace(/\s+base$/,'')]||'vanilla',color=COLORS[key];c.save();c.fillStyle='rgba(25,38,25,.13)';c.shadowColor='rgba(25,38,25,.20)';c.shadowBlur=25;c.beginPath();c.ellipse(500,690,230,35,0,0,Math.PI*2);c.fill();c.restore();
        c.beginPath();c.moveTo(280,240);c.lineTo(720,240);c.lineTo(670,665);c.quadraticCurveTo(500,705,330,665);c.closePath();const g=c.createLinearGradient(280,0,720,0);g.addColorStop(0,'#d6c4a0');g.addColorStop(.3,'#f6edda');g.addColorStop(1,'#dfc9a2');c.fillStyle=g;c.fill();c.fillStyle=color;c.beginPath();c.ellipse(500,240,220,56,0,0,Math.PI*2);c.fill();c.strokeStyle='#e9dfca';c.lineWidth=18;c.stroke();rounded(c,312,370,376,165,3);c.fillStyle='#f9f8ee';c.fill();if(this.brand)c.drawImage(this.brand,354,401,292,292*51/191);c.fillStyle=INK;c.textAlign='center';c.font='700 23px FSProxima,Arial,sans-serif';c.fillText('TAKE SOME GOOD HOME.',500,578);return;
      }
      c.save();c.fillStyle='#e8d9b7';c.shadowColor='rgba(25,38,25,.18)';c.shadowBlur=25;c.shadowOffsetY=15;rounded(c,220,225,560,435,22);c.fill();c.restore();c.strokeStyle='#a99c7b';c.lineWidth=2;rounded(c,220,225,560,435,22);c.stroke();c.fillStyle='#d9f58d';c.fillRect(220,267,560,74);c.fillStyle=INK;c.textAlign='center';c.font='800 20px FSProxima,Arial,sans-serif';c.fillText(kind==='merch'?'GOOD VIBES TO TAKE WITH YOU':'SOMETHING GOOD TO GO',500,311);if(this.brand)c.drawImage(this.brand,345,390,310,310*51/191);
      const words=String(p.name).split(' ');let lines=[''];for(const word of words){const last=lines.length-1;if((lines[last]+' '+word).length>29)lines.push(word);else lines[last]=(lines[last]+' '+word).trim();}c.fillStyle=INK;for(let i=0;i<lines.length;i++){fit(c,lines[i],480,28);c.fillText(lines[i],500,545+i*37);}c.font='500 15px FSProxima,Arial,sans-serif';c.fillText('ILLUSTRATED SELECTION',500,730);
    }
    _boostDust(food,x,y,rx,ry){
      const boosts=food.options.filter(o=>/superboost/i.test(o.groupName||''));if(!boosts.length)return;const c=this.ctx;c.save();c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.clip();for(const boost of boosts){const r=seed(boost.name);c.fillStyle=/spirulina|greens|wheatgrass|spinach/.test(norm(boost.name))?'rgba(55,91,32,.65)':/beet/.test(norm(boost.name))?'rgba(146,43,60,.6)':/turmeric/.test(norm(boost.name))?'rgba(216,153,27,.65)':'rgba(213,190,151,.6)';for(let n=0;n<70;n++){c.beginPath();c.arc(x+(r()-.5)*rx*2,y+(r()-.5)*ry*2,r()*1.8+.6,0,Math.PI*2);c.fill();}}c.restore();
    }
    _selectionRibbon(){
      const c=this.ctx,product=this.current.product;const list=this.current.options.filter(o=>!/^regular$|^large$/i.test(o.name)).map(o=>`${o.quantity>1?o.quantity+' × ':''}${o.name}`);
      c.fillStyle='rgba(247,249,239,.96)';rounded(c,55,825,890,150,10);c.fill();c.strokeStyle='#c1ccb6';c.lineWidth=1;rounded(c,55,825,890,150,10);c.stroke();c.textAlign='left';c.fillStyle=INK;c.font='800 15px FSProxima,Arial,sans-serif';c.fillText((product.kind||'bowl').toUpperCase()+' · YOUR MIX',78,850);
      if(!list.length){c.font='500 18px FSProxima,Arial,sans-serif';c.fillText('Click your favorites. Watch it come together.',78,893);return;}
      const columns=list.length>20?4:3,rows=Math.ceil(list.length/columns),height=Math.min(25,106/rows),font=Math.min(14,height*.78),width=844/columns;
      for(let n=0;n<list.length;n++){const row=Math.floor(n/columns),col=n%columns;c.fillStyle=INK;fit(c,list[n],width-12,font,Math.min(7,font));c.fillText(list[n],78+col*width,874+row*height);}
    }
    exportPNG(){if(!this.loaded)throw new Error('The product illustration is still loading.');this._paint();return this.canvas.toDataURL('image/png');}
    destroy(){this.destroyed=true;this.lab.destroy();this.current=null;}
  }
  window.EverbowlBuilderVisual=EverbowlBuilderVisual;
})();
