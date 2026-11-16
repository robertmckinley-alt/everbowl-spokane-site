(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const canvas = $('#bowl-canvas');
  if (!canvas) return;
  let lab = null, isReady = false, stickerRequest = 0, stickerTimer = null, returnFocus = null;
  const baseButtons = [...document.querySelectorAll('[data-base]')];
  const catalog = window.COUNTER_TOPPINGS || [];
  const choices = new Map(catalog.map(item => [item.key, item]));
  const tabs = [...document.querySelectorAll('[data-topping-group]')];
  let activeGroup = 'fruit', latestState = null;
  const sauceKeys = state => Array.isArray(state.drizzles) ? state.drizzles : state.drizzle ? ['peanut-butter'] : [];
  const sauceLabels = state => Array.isArray(state.drizzleLabels) ? state.drizzleLabels : sauceKeys(state).map(key => choices.get(key)?.label || key);
  function renderBins(state) {
    const row = $('#counter-bin-row');
    if (row.dataset.group !== activeGroup) {
      row.dataset.group = activeGroup;
      row.innerHTML = catalog.filter(item => item.group === activeGroup).map(item => {
        const sprite = item.sprite, expanded = sprite.sheet === 'expanded', size = expanded ? 4 : 3;
        const image = expanded ? 'assets/toppings-atlas.png' : 'assets/bowl-atlas.png';
        const style = `background-image:url('${image}');background-size:${size * 100}% ${size * 100}%;background-position:${sprite.col / (size - 1) * 100}% ${sprite.row / (size - 1) * 100}%`;
        const keyAttribute = item.kind === 'sauce' ? 'data-sauce' : 'data-ingredient';
        return '<button type="button" class="ct-bin" data-topping-key="' + esc(item.key) + '" ' + keyAttribute + '="' + esc(item.key) + '"' + (item.kind === 'sauce' ? ' aria-pressed="false"' : '') + '><span class="ct-bin-well"><span class="ct-pile">' + [1,2,3].map(() => '<i class="ct-sprite" style="' + style + '" aria-hidden="true"></i>').join('') + '</span></span><span class="ct-bin-label"><span class="ct-label-text">' + esc(item.label) + '</span><b aria-hidden="true">+</b></span></button>';
      }).join('');
    }
    for (const bin of row.querySelectorAll('[data-topping-key]')) {
      const selected = !!bin.dataset.sauce && sauceKeys(state).includes(bin.dataset.sauce);
      bin.disabled = !isReady || (!bin.dataset.sauce && state.atLimit);
      if (bin.dataset.sauce) bin.setAttribute('aria-pressed', String(selected));
      bin.classList.toggle('ct-bin-selected', selected);
      bin.querySelector('.ct-bin-label b').textContent = selected ? '✓' : '+';
    }
  }
  function selectGroup(group, focus = false) {
    activeGroup = group;
    for (const tab of tabs) { const selected = tab.dataset.toppingGroup === group; tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1; if (selected && focus) tab.focus(); }
    $('#counter-topping-panel').setAttribute('aria-labelledby', 'topping-tab-' + group);
    renderBins(latestState || {portions:[],drizzles:[],atLimit:false});
  }
  tabs.forEach((tab,index) => {
    tab.addEventListener('click', () => selectGroup(tab.dataset.toppingGroup));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectGroup(tabs[next].dataset.toppingGroup, true); }
    });
  });
  const dialog = $('#sticker-dialog');
  const nameInput = $('#sticker-name');
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const announce = text => { $('#counter-status').textContent = text; };
  function render(state) {
    latestState = state;
    renderBins(state);
    for (const button of baseButtons) button.setAttribute('aria-pressed', String(state.bases.includes(button.dataset.base)));
    $('#counter-base-controls').disabled = !isReady;
    $('#counter-ingredients').disabled = !isReady;

    $('#counter-drizzle').disabled = !isReady;
    $('#counter-drizzle').setAttribute('aria-pressed', String(state.drizzle));
    $('#counter-drizzle b').textContent = state.drizzle ? '✓' : '+';
    $('#counter-undo').disabled = !isReady || !state.canUndo;
    $('#counter-reset').disabled = !isReady || (!state.portions.length && !sauceKeys(state).length && state.bases.length === 1 && state.bases[0] === 'acai');
    $('#counter-surprise').disabled = !isReady;
    $('#counter-clear').disabled = !isReady || (!state.portions.length && !sauceKeys(state).length);
    $('#stamp-bowl').disabled = !isReady;
    $('#counter-base-summary').textContent = state.baseLabels.join(' + ');
    const selectedSauces = sauceKeys(state);
    const selectionCount = state.portions.length + selectedSauces.length;
    $('#counter-bowl-summary').textContent = state.atLimit ? 'A very full Whatever.' : selectionCount ? [state.portions.length ? state.portions.length + (state.portions.length === 1 ? ' scoop' : ' scoops') : '', selectedSauces.length ? selectedSauces.length + (selectedSauces.length === 1 ? ' drizzle' : ' drizzles') : ''].filter(Boolean).join(' + ') : 'Ready when you are.';
    $('#counter-bowl-greeting').textContent = state.atLimit ? 'ALL PILED UP. ALL YOURS.' : selectionCount ? 'LOOKING GOOD. KEEP MAKING IT YOURS.' : 'A BLANK CANVAS. A VERY GOOD START.';
    const portionChips = state.portions.map(portion => '<button type="button" data-remove-portion="' + esc(portion.id) + '" aria-label="Remove ' + esc(portion.label) + ' scoop"><span>' + esc(portion.label) + '</span><span aria-hidden="true">×</span></button>').join('');
    const sauceChips = sauceKeys(state).map(key => '<button type="button" data-remove-sauce="' + esc(key) + '" aria-label="Remove ' + esc(choices.get(key)?.label || key) + ' drizzle"><span>' + esc(choices.get(key)?.label || key) + ' drizzle</span><span aria-hidden="true">×</span></button>').join('');
    $('#counter-portions').innerHTML = portionChips + sauceChips || '<p class="ct-empty-ticket">A little fruit?<br>A little crunch?<br>It’s all on the counter.</p>';
    canvas.setAttribute('aria-label', 'Your illustrated bowl. Bases: ' + state.baseLabels.join(', ') + '. Toppings: ' + (state.portions.length ? state.portions.map(p => p.label).join(', ') : 'none yet') + (sauceLabels(state).length ? '. Drizzles: ' + sauceLabels(state).join(', ') + '.' : '.'));
  }
  function act(action, message) {
    if (!isReady) return;
    const result = action();
    if (result === false) { announce('Your bowl is full. Remove a scoop to make room.'); return; }
    announce(message);
  }
  for (const button of baseButtons) button.addEventListener('click', () => {
    if (!isReady) return;
    const current = lab.getState().bases;
    const key = button.dataset.base;
    if (current.includes(key) && current.length === 1) { announce('Keep one base in your bowl. Add another to mix it up.'); return; }
    const next = current.includes(key) ? current.filter(x => x !== key) : [...current, key];
    act(() => lab.setBases(next), 'Your base mix is ready.');
  });
  $('#counter-bin-row').addEventListener('click', event => {
    const bin = event.target.closest('[data-topping-key]');
    if (!bin || !isReady || bin.disabled) return;
    const key = bin.dataset.toppingKey, item = choices.get(key);
    const wasSelected = item.kind === 'sauce' && sauceKeys(lab.getState()).includes(key);
    const result = item.kind === 'sauce' ? lab.toggleSauce(key) : lab.addIngredient(key);
    if (result === false) { announce('Your bowl is full. Remove a scoop to make room.'); return; }
    bin.classList.remove('ct-scooping'); void bin.offsetWidth; bin.classList.add('ct-scooping');
    announce(item.label + (wasSelected ? ' removed from your bowl.' : ' added to your bowl.'));
  });
  $('#counter-portions').addEventListener('click', event => {
    const portion = event.target.closest('[data-remove-portion]');
    const sauce = event.target.closest('[data-remove-sauce]');
    if (portion) act(() => lab.removePortion(portion.dataset.removePortion), 'Scoop removed. There’s room for something else.');
    else if (sauce) act(() => lab.toggleSauce(sauce.dataset.removeSauce), 'Drizzle removed.');
  });
  $('#counter-drizzle').addEventListener('click', () => act(() => lab.toggleDrizzle(), lab.getState().drizzle ? 'Peanut butter drizzle removed.' : 'A little peanut butter, coming right up.'));
  $('#counter-undo').addEventListener('click', () => act(() => lab.undo(), 'Last change undone.'));
  $('#counter-reset').addEventListener('click', () => act(() => lab.reset(), 'Fresh bowl. Fresh start.'));
  $('#counter-clear').addEventListener('click', () => act(() => lab.clearToppings(), 'Toppings cleared. Your bases are still here.'));
  $('#counter-surprise').addEventListener('click', () => act(() => lab.surprise(), 'A little Whatever, on the counter. Make it yours.'));
  function recipeText() {
    const state = lab.getState();
    const name = nameInput.value.trim() || 'My Whatever';
    return [name, 'Everbowl Spokane Valley — illustrated concept', '', 'Bases: ' + state.baseLabels.join(' + '), 'Toppings:', ...state.portions.map(p => '• ' + p.label + ' — 1 scoop'), ...sauceLabels(state).map(label => '• ' + label + ' drizzle'), '', 'Illustrated creation only. This does not place an order.'].join('\n');
  }
  async function renderSticker(request) {
    try {
      if (!window.CounterSticker || typeof window.CounterSticker.create !== 'function') throw new Error('The sticker studio is not available.');
      const state = lab.getState();
      const bowl = lab.exportPNG();
      const name = nameInput.value.trim() || 'My Whatever';
      const result = await window.CounterSticker.create({bowlDataUrl:bowl, name, baseLabels:state.baseLabels, portions:state.portions, drizzle:state.drizzle, drizzleLabels:sauceLabels(state)});
      if (request !== stickerRequest || !dialog.open) return;
      $('#sticker-preview').src = result.url;
      $('#sticker-preview').alt = name + ' — your personalized Everbowl sticker, showing the bowl you built';
      $('#download-sticker').href = result.url;
      $('#download-sticker').download = result.filename;
      $('#download-sticker').removeAttribute('aria-disabled');
      $('#download-bowl').href = bowl;
      $('#download-bowl').download = name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'') + '-bowl.png';
      $('#sticker-progress').textContent = 'Freshly stamped. Entirely yours.';
    } catch (error) {
      if (request !== stickerRequest || !dialog.open) return;
      $('#sticker-progress').textContent = 'The sticker could not be stamped. Your bowl is safe; close this and try again.';
      console.error(error);
    }
  }
  function queueSticker(immediate = false) {
    const request = ++stickerRequest;
    clearTimeout(stickerTimer);
    $('#download-sticker').setAttribute('aria-disabled','true');
    $('#download-sticker').removeAttribute('href');
    $('#sticker-progress').textContent = 'Stamping your Whatever…';
    if (immediate) renderSticker(request); else stickerTimer = setTimeout(() => renderSticker(request), 150);
  }
  $('#stamp-bowl').addEventListener('click', () => {
    if (!isReady) return;
    const state = lab.getState();
    returnFocus = document.activeElement;
    $('#sticker-recipe').innerHTML = '<p><strong>Your base</strong><br>' + esc(state.baseLabels.join(' + ')) + '</p><p><strong>The good stuff</strong><br>' + esc(state.portions.length ? state.portions.map(p => p.label).join(', ') : 'Just the bases, your way.') + (sauceLabels(state).length ? '<br><strong>Drizzles</strong><br>' + esc(sauceLabels(state).join(', ')) : '') + '</p>';
    dialog.showModal();
    nameInput.focus(); nameInput.select(); queueSticker(true);
  });
  nameInput.addEventListener('input', () => { if (dialog.open) queueSticker(); });
  $('#close-sticker').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { stickerRequest++; clearTimeout(stickerTimer); if (returnFocus && returnFocus.isConnected) returnFocus.focus(); });
  dialog.addEventListener('click', event => { if (event.target !== dialog) return; const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close(); });
  $('#download-counter-recipe').addEventListener('click', () => {
    const blob = new Blob([recipeText()], {type:'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob); const a = document.createElement('a');a.href=url;a.download='my-whatever-recipe.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  selectGroup(activeGroup);
  (async () => {
    try {
      lab = new window.BowlLab(canvas, {onChange:render});
      window.bowlLab = lab;
      await lab.ready;
      isReady = true;
      render(lab.getState());
      $('#counter-loading').hidden = true;
      window.counterReady = true;
    } catch (error) {
      $('#counter-loading').textContent = 'The counter couldn’t load. You can still explore the full menu below.';
      console.error(error);
    }
  })();
})();
