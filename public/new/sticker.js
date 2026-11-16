'use strict';
(() => {
  const SIZE = 1600;
  const INK = '#261336';
  const MINT = '#d6efbd';
  const GREEN = '#35c25e';
  let fontsReady;

  function fonts() {
    if (!fontsReady) fontsReady = (async () => {
      await document.fonts.ready;
      // Load the shared site's brand faces explicitly before baking text into pixels.
      await Promise.all([
        document.fonts.load('900 100px FSBrandon'),
        document.fonts.load('600 32px FSProxima')
      ]);
    })();
    return fontsReady;
  }

  function loadImage(source) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('Your bowl picture could not be loaded. Please try again.'));
      image.src = source;
    });
  }

  function roundedRect(ctx, x, y, w, h, radius) {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, radius);
  }

  function scallop(ctx, cx, cy, radius, amplitude = 11, lobes = 44) {
    ctx.beginPath();
    for (let i = 0; i <= 880; i++) {
      const angle = i / 880 * Math.PI * 2;
      const r = radius + Math.cos(angle * lobes) * amplitude;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (!i) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
  }

  function wrap(ctx, text, maxWidth) {
    const words = String(text).trim().split(/\s+/).filter(Boolean);
    const lines = [];
    let line = '';
    for (const word of words) {
      const candidate = line ? line + ' ' + word : word;
      if (line && ctx.measureText(candidate).width > maxWidth) {
        lines.push(line);
        line = word;
      } else line = candidate;
    }
    if (line) lines.push(line);
    return lines.length ? lines : ['MY WHATEVER'];
  }

  function fit(ctx, text, maxWidth, maxLines, startingSize, minSize, family, weight = 900) {
    let lines;
    let size = startingSize;
    for (; size >= minSize; size -= 2) {
      ctx.font = `${weight} ${size}px ${family}`;
      lines = wrap(ctx, text, maxWidth);
      if (lines.length <= maxLines && lines.every(line => ctx.measureText(line).width <= maxWidth)) break;
    }
    // A single uninterrupted nickname also fits; never clip its last characters.
    if (lines.some(line => ctx.measureText(line).width > maxWidth)) {
      const longest = Math.max(...lines.map(line => ctx.measureText(line).width));
      size = Math.max(14, size * maxWidth / longest);
      ctx.font = `${weight} ${size}px ${family}`;
      lines = wrap(ctx, text, maxWidth);
    }
    return { size, lines };
  }

  function labelList(values) {
    return [...new Set(values.map(v => String(v || '').trim()).filter(Boolean))];
  }

  function filenameFor(name) {
    const slug = name.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 64);
    return (slug || 'my-whatever') + '-everbowl-sticker.png';
  }

  async function create({ bowlDataUrl, name = '', baseLabels = [], portions = [], drizzle = false, drizzleLabels } = {}) {
    if (typeof bowlDataUrl !== 'string' || !bowlDataUrl.startsWith('data:image/')) {
      throw new Error('Build a bowl before making your sticker.');
    }
    const nickname = Array.from(String(name).trim().replace(/\s+/g, ' ')).slice(0, 48).join('') || 'MY WHATEVER';
    const [bowl, brand] = await Promise.all([loadImage(bowlDataUrl), loadImage(window.EVERBOWL_BRAND_LOGO), fonts()]);
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = SIZE;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('This browser cannot create a sticker picture.');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // An opaque white die-cut edge with transparent canvas outside the sticker.
    scallop(ctx, 800, 800, 744);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(800, 800, 706, 0, Math.PI * 2);
    ctx.fillStyle = INK;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(800, 800, 679, 0, Math.PI * 2);
    ctx.strokeStyle = MINT;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = MINT;
    ctx.save();
    ctx.filter = 'brightness(0) invert(1)';
    ctx.drawImage(brand, 490, 132, 620, 620 * 51 / 191);
    ctx.restore();
    ctx.fillStyle = '#fff';
    ctx.font = '600 29px FSProxima, Arial, sans-serif';
    ctx.fillText('YOUR WHATEVER. YOUR WAY.', 800, 330);

    // The image is the actual creation exported by the bowl engine, never a stand-in.
    ctx.save();
    ctx.translate(800, 736);
    ctx.rotate(-0.055);
    ctx.shadowColor = 'rgba(0,0,0,.25)';
    ctx.shadowBlur = 22;
    ctx.shadowOffsetY = 16;
    ctx.drawImage(bowl, -416, -416, 832, 832);
    ctx.restore();

    // A small green stamp belongs to the label system, not an earned-rewards claim.
    ctx.save();
    ctx.translate(1203, 443);
    ctx.rotate(0.15);
    ctx.beginPath();
    ctx.arc(0, 0, 80, 0, Math.PI * 2);
    ctx.fillStyle = GREEN;
    ctx.fill();
    ctx.strokeStyle = INK;
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fillStyle = INK;
    ctx.font = '900 25px FSBrandon, Arial, sans-serif';
    ctx.fillText('MADE', 0, -17);
    ctx.fillText('BY YOU', 0, 17);
    ctx.restore();

    ctx.save();
    ctx.translate(800, 1140);
    ctx.rotate(-0.035);
    roundedRect(ctx, -590, -112, 1180, 224, 22);
    ctx.fillStyle = '#fff';
    ctx.fill();
    roundedRect(ctx, -572, -94, 1144, 188, 12);
    ctx.fillStyle = MINT;
    ctx.fill();
    ctx.fillStyle = INK;
    const title = fit(ctx, nickname, 1060, 2, 104, 48, 'FSBrandon, Arial, sans-serif');
    const lineHeight = title.size * 0.97;
    title.lines.forEach((line, i) => ctx.fillText(line, 0, (i - (title.lines.length - 1) / 2) * lineHeight + 2));
    ctx.restore();

    const bases = labelList(baseLabels);
    const toppings = labelList(portions.map(p => p.label || p.key));
    const sauces = Array.isArray(drizzleLabels) ? labelList(drizzleLabels) : drizzle ? ['Peanut butter'] : [];
    toppings.push(...sauces.map(label => label + ' drizzle'));
    const ingredients = (bases.length ? bases.join(' + ') : 'Your chosen base') +
      (toppings.length ? ' / ' + toppings.join(' · ') : ' / All yours');
    // Fit every selected label into the curved lower badge; never truncate a recipe.
    const words = ingredients.split(/\s+/).filter(Boolean);
    let ingredientLines = [], ingredientSize = 24, ingredientLeading = 27;
    for (let size = 24; size >= 14; size -= 1) {
      ctx.font = `600 ${size}px FSProxima, Arial, sans-serif`;
      const leading = size * 1.16, lines = []; let line = '';
      for (const word of words) {
        const y = 1284 + lines.length * leading;
        const halfChord = Math.sqrt(Math.max(0, 679 * 679 - (y - 800) ** 2));
        const width = Math.max(280, halfChord * 2 - 90);
        const next = line ? line + ' ' + word : word;
        if (line && ctx.measureText(next).width > width) { lines.push(line); line = word; } else line = next;
      }
      if (line) lines.push(line);
      ingredientLines = lines; ingredientSize = size; ingredientLeading = leading;
      if (1284 + (lines.length - 1) * leading <= 1433) break;
    }
    ctx.font = `600 ${ingredientSize}px FSProxima, Arial, sans-serif`;
    ctx.fillStyle = '#fff'; ctx.textAlign = 'center';
    ingredientLines.forEach((line, i) => ctx.fillText(line, 800, 1284 + i * ingredientLeading));
    ctx.fillStyle = MINT;
    ctx.font = '600 23px FSProxima, Arial, sans-serif';
    ctx.fillText('SPOKANE VALLEY', 800, 1468);

    return { url: canvas.toDataURL('image/png'), filename: filenameFor(nickname) };
  }

  window.CounterSticker = Object.freeze({ create });
})();
