// Everbowl Spokane — blog generator.
// Renders every post in posts.mjs to a static HTML file under public/blog/,
// builds public/blog/index.html, and regenerates public/sitemap.xml.
// Run: node scripts/generate-blog.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { POSTS as ARCHIVE_POSTS, SITE, CDN } from "./posts.mjs";
import { LOCAL_POSTS } from "./local-posts.mjs";

const POSTS = [...LOCAL_POSTS, ...ARCHIVE_POSTS];

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const BLOG_DIR = path.join(ROOT, "public", "blog");
fs.mkdirSync(BLOG_DIR, { recursive: true });

const LOGO = `${SITE}/new/assets/brand/logo-white.png`;
const THEME_DESCRIPTION = "Everbowl menu favorites and things to do around Spokane, the Inland Northwest, and North Idaho.";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const fmtDate = (iso) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

const NAV = `
  <nav class="eb-nav">
    <a class="eb-brand" href="/new"><img src="${LOGO}" alt="Everbowl Spokane Valley" width="500" height="135" /></a>
    <div class="eb-nav-links">
      <a href="/new#menu">Menu</a>
      <a href="/new#location">Visit</a>
      <a href="/blog/">Journal</a>
    </div>
  </nav>`;

const FOOTER = `
  <footer class="eb-foot">
    <div class="wrap-wide row">
      <div>© ${new Date().getUTCFullYear()} Everbowl Spokane · 13324 E Sprague Ave, Suite 101, Spokane Valley, WA</div>
      <div><a href="/new">Home</a> · <a href="/blog/">Journal</a> · <a href="https://www.instagram.com/everbowl/" rel="noopener">Instagram</a></div>
    </div>
  </footer>`;

const CTA = `
  <div class="callout">
    <h3>Refuel at Everbowl Spokane Valley</h3>
    <p>Cold-blended açaí, pitaya, and smoothie bowls made to order at 13324 E Sprague Ave. Perfect after the trail, the river, or the gym.</p>
    <a class="btn" href="/new#menu">See the menu →</a>
  </div>`;

function postHtml(p) {
  const url = `${SITE}/blog/${p.slug}.html`;
  const hero = p.image ? (p.image.startsWith("/") ? `${SITE}${p.image}` : `${CDN}/${p.image}`) : `${CDN}/6ba26f97-d429-4d26-badf-9f5e631c7da6.png`;
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "headline": p.title,
    "description": p.description,
    "image": hero,
    "datePublished": p.date,
    "dateModified": p.updated || p.date,
    "author": { "@type": "Organization", "name": "Everbowl Spokane", "url": SITE },
    "publisher": {
      "@type": "Organization",
      "name": "Everbowl Spokane",
      "logo": { "@type": "ImageObject", "url": LOGO },
    },
    "articleSection": p.category,
    "keywords": (p.keywords || []).join(", "),
  };
  const crumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: "Journal", item: SITE + "/blog/" },
      { "@type": "ListItem", position: 3, name: p.title, item: url },
    ],
  };
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(p.title)} | Everbowl Spokane</title>
  <meta name="description" content="${esc(p.description)}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${url}" />
  <meta name="theme-color" content="#211037" />
  <link rel="icon" href="${LOGO}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Everbowl Spokane" />
  <meta property="og:title" content="${esc(p.title)}" />
  <meta property="og:description" content="${esc(p.description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${hero}" />
  <meta property="article:published_time" content="${p.date}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(p.title)}" />
  <meta name="twitter:description" content="${esc(p.description)}" />
  <meta name="twitter:image" content="${hero}" />
  <link rel="preload" href="/new/assets/brand/brandon-grotesque-black.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="/new/assets/brand/proxima-nova-regular.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="stylesheet" href="/blog/blog.css" />
  <script type="application/ld+json">${JSON.stringify(jsonld)}</script>
  <script type="application/ld+json">${JSON.stringify(crumb)}</script>
</head>
<body>
  ${NAV}
  <div class="wrap">
    <header class="post-header">
      <p class="kicker">${esc(p.category)}</p>
      <h1>${esc(p.title)}</h1>
      <div class="post-meta">
        <span>By ${esc(p.author || "the Everbowl Spokane kitchen")}</span>
        <span>·</span>
        <time datetime="${p.date}">${fmtDate(p.date)}</time>
        <span>·</span>
        <span>${p.readMins || 4} min read</span>
      </div>
    </header>
    <div class="post-hero"><img src="${hero}" alt="${esc(p.imageAlt || p.title)}" width="1200" height="675" /></div>
    <article>
      ${p.body}
      ${CTA}
      <p class="disclaimer">${esc(p.disclaimer || "This article is general wellness information from Everbowl Spokane and is not medical or dietary advice. Talk to a qualified health professional about your individual needs.")}</p>
    </article>
    <p style="margin:2rem 0 3rem"><a href="/blog/">← Back to the Journal</a></p>
  </div>
  ${FOOTER}
</body>
</html>`;
}

function indexHtml(posts) {
  const cards = posts
    .map((p) => {
      const hero = p.image ? (p.image.startsWith("/") ? `${SITE}${p.image}` : `${CDN}/${p.image}`) : `${CDN}/6ba26f97-d429-4d26-badf-9f5e631c7da6.png`;
      return `      <a class="card" href="/blog/${p.slug}.html" data-category="${esc(p.category)}">
        <div class="card-img"><img src="${hero}" alt="${esc(p.imageAlt || p.title)}" loading="lazy" /></div>
        <div class="card-body">
          <span class="card-cat">${esc(p.category)}</span>
          <h2>${esc(p.title)}</h2>
          <p>${esc(p.description)}</p>
          <time datetime="${p.date}">${fmtDate(p.date)}</time>
        </div>
      </a>`;
    })
    .join("\n");
  const categories = [...new Set(posts.map(post => post.category))].sort();
  const options = categories.map(category => `<option>${esc(category)}</option>`).join("");
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Everbowl Spokane Journal",
    "description": THEME_DESCRIPTION,
    "url": SITE + "/blog/",
    "publisher": { "@type": "Organization", "name": "Everbowl Spokane", "logo": { "@type": "ImageObject", "url": LOGO } },
    "blogPost": posts.map((p) => ({ "@type": "BlogPosting", "headline": p.title, "url": `${SITE}/blog/${p.slug}.html`, "datePublished": p.date })),
  };
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The Journal | Local Outings &amp; Menu Favorites — Everbowl Spokane</title>
  <meta name="description" content="${THEME_DESCRIPTION}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${SITE}/blog/" />
  <meta name="theme-color" content="#211037" />
  <link rel="icon" href="${LOGO}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Everbowl Spokane" />
  <meta property="og:title" content="The Journal — Local Outings &amp; Menu Favorites | Everbowl Spokane" />
  <meta property="og:description" content="${THEME_DESCRIPTION}" />
  <meta property="og:url" content="${SITE}/blog/" />
  <meta property="og:image" content="${CDN}/6ba26f97-d429-4d26-badf-9f5e631c7da6.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="preload" href="/new/assets/brand/brandon-grotesque-black.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="/new/assets/brand/proxima-nova-regular.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="stylesheet" href="/blog/blog.css" />
  <script type="application/ld+json">${JSON.stringify(jsonld)}</script>
</head>
<body>
  ${NAV}
  <header class="hero-index">
    <div class="wrap-wide">
      <h1>The Everbowl Journal</h1>
      <p>${THEME_DESCRIPTION}</p>
    </div>
  </header>
  <main class="wrap-wide">
    <div class="journal-filters" hidden>
      <label>Search articles <input id="journal-query" type="search" placeholder="Try Post Falls or matcha" /></label>
      <label>Topic <select id="journal-topic"><option value="">All topics</option>${options}</select></label>
    </div>
    <p id="journal-results" role="status" hidden></p>
    <div class="post-grid">
${cards}
    </div>
  </main>
  ${FOOTER}
  <script>
    const query = document.querySelector("#journal-query");
    const topic = document.querySelector("#journal-topic");
    const results = document.querySelector("#journal-results");
    const cards = [...document.querySelectorAll(".post-grid .card")];
    const normalize = value => value.toLowerCase().normalize("NFD").replace(/\\p{Mark}/gu, "");
    function filterArticles() {
      const words = normalize(query.value).trim().split(/\\s+/).filter(Boolean);
      let count = 0;
      for (const card of cards) {
        const matchesTopic = !topic.value || topic.value === card.dataset.category;
        const text = normalize(card.textContent);
        card.hidden = !matchesTopic || !words.every(word => text.includes(word));
        if (!card.hidden) count++;
      }
      results.hidden = !topic.value && !words.length;
      results.textContent = count === 1 ? "1 article" : count ? count + " articles" : "No articles match your search.";
    }
    document.querySelector(".journal-filters").hidden = false;
    query.addEventListener("input", filterArticles);
    topic.addEventListener("change", filterArticles);
  </script>
</body>
</html>`;
}

// --- run ---
// Date gate: only publish posts whose date has arrived in Pacific time.
// Future-dated posts stay in posts.mjs and go live automatically on the
// first build on/after their date (a scheduled daily rebuild handles this).
// --- UNIQUE IMAGE GUARD (owner requirement: no photo may be used by two posts) ---
{
  const counts = {};
  for (const p of POSTS) counts[p.image] = (counts[p.image] || 0) + 1;
  const dups = Object.entries(counts).filter(([, n]) => n > 1);
  const AI_BANNED = ["9a971840-0b65-4f07-ab00-54336a4f0f74.jpg", "b5c5a817-5e1e-4b3f-b7c3-61c677f0a7bb.jpg", "b52051c7-b0fd-466d-a0e3-45d75298d6fa.jpg", "ee557844-fb66-41b2-8d32-c78a539eb48b.jpg", "a0f7344d-7ab1-4371-a11e-ba41e440b4dd.jpg"];
  const banned = POSTS.filter((p) => AI_BANNED.includes(p.image));
  if (dups.length || banned.length) {
    console.error("BUILD REFUSED: every post must use a UNIQUE, real image.");
    if (dups.length) console.error("Duplicated images:", dups.map(([i, n]) => n + "x " + i).join("; "));
    if (banned.length) console.error("Banned AI images used by:", banned.map((p) => p.slug).join(", "));
    console.error("Fix: run `node scripts/pick-image.mjs` and use exactly the IMAGE/ALT it prints for the offending post(s).");
    process.exit(1);
  }
}

const TODAY = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Los_Angeles" }).format(new Date());
const published = POSTS.filter((p) => p.date <= TODAY);
const sorted = [...published].sort((a, b) => b.date.localeCompare(a.date));
for (const p of sorted) {
  fs.writeFileSync(path.join(BLOG_DIR, `${p.slug}.html`), postHtml(p));
}
fs.writeFileSync(path.join(BLOG_DIR, "index.html"), indexHtml(sorted));

// Remove stale pages (e.g. renamed slugs) so unpublished posts never leak.
const keep = new Set([...sorted.map((p) => `${p.slug}.html`), "index.html", "blog.css"]);
for (const f of fs.readdirSync(BLOG_DIR)) {
  if (f.endsWith(".html") && !keep.has(f)) fs.unlinkSync(path.join(BLOG_DIR, f));
}

// sitemap
const smUrls = [
  `  <url>\n    <loc>${SITE}/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>`,
  `  <url>\n    <loc>${SITE}/blog/</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`,
  ...sorted.map(
    (p) =>
      `  <url>\n    <loc>${SITE}/blog/${p.slug}.html</loc>\n    <lastmod>${p.updated || p.date}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
  ),
];
fs.writeFileSync(
  path.join(ROOT, "public", "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${smUrls.join("\n")}\n</urlset>\n`,
);

console.log(`Generated ${sorted.length}/${POSTS.length} posts (date-gated at ${TODAY} Pacific) + blog index + sitemap.xml`);
