(() => {
  'use strict';
  function render() {
    const data = window.EVERBOWL_BEVERLY_MENU;
    if (!data || document.getElementById('more-everbowl')) return;
    const anchor = document.getElementById('sips') || document.getElementById('toast');
    if (!anchor) return;
    const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const normalize = value => String(value).toLowerCase().split('$')[0].replace(/\bwith\b/g, '').replace(/\bpb\b/g, 'peanut butter').replace(/[^a-z0-9]/g, '');
    const aliases = {
      'Chia Pudding Whatever Bowl': 'Chia Pudding Bowl',
      'Oats Whatever Bowl': 'Oats Bowl'
    };
    const existing = [...document.querySelectorAll('.fs-menu-item h4,.fs-whatever-item>span,.fs-smoothie h3,.fs-toast h3,.fs-sips li,#bowls [data-preset] strong,#whatever .prices li,#smoothies .cups h3,#toast .toasts h3,#toast .drinks li')];
    const coverage = {sourceCount: 0, representedByExisting: [], addedIds: [], missingIds: [], pricePolicy: 'New public prices omitted pending Spokane confirmation; Beverly prices remain in reference data.'};
    const groups = [];
    for (const cat of data.categories) {
      const missing = [];
      for (const item of cat.items) {
        coverage.sourceCount++;
        const target = normalize(aliases[item.name] || item.name);
        const el = existing.find(node => normalize(node.textContent) === target);
        if (el) {
          const host = el.closest('[data-menu-item],.fs-whatever-item,[data-preset],.cups li,.toasts li,.prices li,.drinks li') || el;
          host.dataset.sourceItemId = item.id;
          host.dataset.sourceItemName = item.name;
          coverage.representedByExisting.push({id:item.id,sourceName:item.name,renderedName:el.textContent.trim()});
        } else missing.push(item);
      }
      if (missing.length) groups.push({...cat,items:missing});
    }
    const hubPhotos = {
      "Acai Base Pint": "assets/brand/pint-acai.webp",
      "Pitaya Base Pint": "assets/brand/pint-pitaya.webp",
      "Cacao Wow Base Pint": "assets/brand/pint-cacao.webp",
      "Vanilla Base Pint": "assets/brand/pint-vanilla.webp",
      "Blue Majic Base Pint": "assets/brand/pint-blue-majic.webp",
      "Coco Love Base Pint": "assets/brand/pint-coco-love.webp",
      "Vanilla Everwich": "assets/brand/vanilla-everwich.webp"
    };
    const photoMap = window.EVERBOWL_BEVERLY_PHOTOS || {};
    const optionGroups = item => (item.optionGroupIds || []).map(id => data.optionGroups[id]).filter(Boolean).filter(group => !/default ingredients|make it a combo/i.test(group.name));
    const choices = item => {
      const list = optionGroups(item);
      if (!list.length) return '';
      return `<details class="bv-choices"><summary>See menu choices <span aria-hidden="true">+</span></summary><dl>${list.map(group => `<div><dt>${esc(group.name)}</dt><dd>${group.choices.map(choice => esc(choice.name)).join(' · ')}</dd></div>`).join('')}</dl></details>`;
    };
    const card = item => {
      coverage.addedIds.push(item.id);
      const hubPhoto = hubPhotos[item.name];
      const image = hubPhoto || (item.photoUrl && photoMap[item.photoUrl]);
      return `<article class="bv-product${image ? ' bv-has-photo' : ' bv-type-card'}" data-source-item-id="${esc(item.id)}" data-source-item-name="${esc(item.name)}">${image ? `<div class="bv-product-photo"><img style="--bv-photo-scale:${hubPhoto ? 1 : Number((window.EVERBOWL_BEVERLY_PHOTO_SCALES || {})[item.photoUrl]) || 1}" src="${image}" alt="${esc(item.name)}" loading="lazy" decoding="async"></div>` : ''}<div class="bv-product-copy"><h4>${esc(item.name)}</h4>${item.description ? `<p>${esc(item.description)}</p>` : ''}${choices(item)}</div></article>`;
    };
    const headings = {
      'everfuel-protein-craft-superfoods-lto': ['THE NEW GOOD STUFF.', 'everFuel Protein Craft Superfoods LTO', 'Four ways to mix things up with Greek yogurt, protein and nutella.'],
      'whatever-smoothies': ['BLEND IT YOUR WAY.', 'Whatever Smoothies', 'Your bases. Your fruit. Your favorite combination.'],
      'toast': ['ANOTHER SLICE OF GOOD.', 'More Toast', 'A little something for the toast lovers.'],
      'grab-n-go': ['GOOD TO GO.', "Grab N’ Go", 'Cold drinks and something crunchy for the road.'],
      'merchandise': ['TAKE THE GOOD VIBES.', 'Merchandise', 'A few Everbowl favorites for your everyday.'],
      'take-me-homes': ['SAVE SOME FOR LATER.', 'Take Me Homes', 'Your favorite bases, ready for the freezer. Plus the Vanilla Everwich.']
    };
    const section = document.createElement('section');
    section.id = 'more-everbowl'; section.className = 'bv-section';
    section.setAttribute('aria-labelledby', 'bv-heading');
    section.innerHTML = `<div class="bv-wrap"><header class="bv-opening"><div><p class="bv-eyebrow">MORE FROM EVERBOWL</p><h2 id="bv-heading">A WHOLE LOT<br>MORE GOOD.</h2></div><div class="bv-opening-copy"><p>Protein favorites. Grab-and-go sips. Pints for later. There’s more to explore beyond your usual bowl.</p><span class="bv-order-status">Online ordering coming soon</span></div></header><p class="bv-reference">Additional items shown from Everbowl’s Beverly reference menu. Spokane selection, prices and limited-time availability are still to be confirmed.</p><nav class="bv-filters" aria-label="Explore more menu categories"><button type="button" data-bv-filter="all" aria-pressed="true" aria-controls="bv-groups">Everything <span>${coverage.addedIds.length || groups.reduce((n,g)=>n+g.items.length,0)}</span></button>${groups.map(group => `<button type="button" data-bv-filter="${esc(group.id)}" aria-pressed="false" aria-controls="bv-groups">${esc((headings[group.id] || [null,group.name])[1])} <span>${group.items.length}</span></button>`).join('')}</nav><div class="bv-groups" id="bv-groups">${groups.map(group => {const copy = headings[group.id] || [group.name,group.name,''];return `<section class="bv-category bv-category-${esc(group.id)}" data-bv-category="${esc(group.id)}" aria-labelledby="bv-title-${esc(group.id)}"><header class="bv-category-heading"><div><p class="bv-eyebrow">${esc(copy[0])}</p><h3 id="bv-title-${esc(group.id)}">${esc(copy[1])}</h3></div><p>${esc(copy[2])}</p></header><div class="bv-products">${group.items.map(card).join('')}</div></section>`;}).join('')}</div><p class="bv-menu-note">Menu display only. Ordering will open through Spokane’s own ordering page when it is ready. <a href="${esc(data.sourceUrl)}" target="_blank" rel="noopener noreferrer">Beverly menu reference <span aria-hidden="true">↗</span></a></p><p class="bv-filter-status" role="status" aria-live="polite"></p></div>`;
    anchor.insertAdjacentElement('afterend', section);
    const buttons = [...section.querySelectorAll('[data-bv-filter]')];
    const cats = [...section.querySelectorAll('[data-bv-category]')];
    for (const button of buttons) button.addEventListener('click', () => {
      const id = button.dataset.bvFilter;
      buttons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      cats.forEach(cat => {cat.hidden = id !== 'all' && cat.dataset.bvCategory !== id;});
      section.querySelector('.bv-filter-status').textContent = id === 'all' ? 'Showing all additional menu categories.' : `Showing ${button.textContent.trim()}.`;
    });
    const all = data.categories.flatMap(cat => cat.items);
    const present = new Set([...document.querySelectorAll('[data-source-item-id]')].map(node => node.dataset.sourceItemId));
    coverage.missingIds = all.filter(item => !present.has(item.id)).map(item => item.id);
    coverage.addedCategories = groups.map(group => ({id:group.id,name:group.name,count:group.items.length}));
    window.EverbowlBeverlyCoverage = coverage;
    window.everbowlBeverlyReady = true;
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render, {once:true});
  else render();
})();
