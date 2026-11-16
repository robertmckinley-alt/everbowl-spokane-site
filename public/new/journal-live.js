(() => {
  'use strict';
  const origin = 'https://everbowlspokane.com';
  const posts = window.EVERBOWL_JOURNAL_DATA;
  if (!Array.isArray(posts)) return;
  const clean = (value, limit) => String(value || '').replace(/\s+/g, ' ').trim().slice(0, limit);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  window.EverbowlJournalLive = (async () => {
    try {
      const response = await fetch(origin + '/blog/', {mode:'cors', credentials:'omit', signal:controller.signal});
      if (!response.ok) throw new Error('Journal unavailable');
      const markup = await response.text();
      if (markup.length > 2500000) throw new Error('Journal response too large');
      const doc = new DOMParser().parseFromString(markup, 'text/html');
      const bySlug = new Map(posts.map(post => [post.slug, post]));
      const incoming = [], seen = new Set();
      for (const card of [...doc.querySelectorAll('a.card[href]')].slice(0, 1000)) {
        const url = new URL(card.getAttribute('href'), origin + '/blog/');
        const match = url.pathname.match(/^\/blog\/([a-z0-9][a-z0-9_-]{0,180})\.html$/);
        if (url.origin !== origin || !match || seen.has(match[1])) continue;
        const title = clean(card.querySelector('.card-body h2')?.textContent, 240);
        const date = String(card.querySelector('time[datetime]')?.getAttribute('datetime') || '').slice(0, 10);
        if (!title || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date))) continue;
        const old = bySlug.get(match[1]);
        const img = card.querySelector('.card-img img[src]');
        let image = old?.image || '';
        if (img) {
          const candidate = new URL(img.getAttribute('src'), origin);
          if (candidate.origin === origin && /^\/blog-img\/[a-zA-Z0-9_.-]+\.(?:png|jpe?g|webp)$/i.test(candidate.pathname)) image = candidate.href;
        }
        incoming.push({...old, slug:match[1], title, date,
          dateLabel:new Intl.DateTimeFormat('en-US', {year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}).format(new Date(date+'T12:00:00Z')),
          excerpt:clean(card.querySelector('.card-body p')?.textContent, 600),
          category:clean(card.querySelector('.card-cat')?.textContent, 80), image,
          imageAlt:clean(img?.getAttribute('alt') || title, 240),
          liveUrl:origin+'/blog/'+match[1]+'.html', liveOnly:!old?.html});
        seen.add(match[1]);
      }
      if (!incoming.length) throw new Error('No journal entries found');
      const merged = [...incoming, ...posts.filter(post => !seen.has(post.slug))];
      merged.sort((a,b) => String(b.date).localeCompare(String(a.date)));
      posts.splice(0, posts.length, ...merged);
      return {status:'live',count:incoming.length};
    } catch (_) {
      return {status:'offline',count:posts.length};
    } finally { clearTimeout(timeout); }
  })();
})();
