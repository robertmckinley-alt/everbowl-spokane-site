// Everbowl Spokane — blog generator.
// Renders every post in posts.mjs to a static HTML file under public/blog/,
// builds public/blog/index.html, and regenerates public/sitemap.xml.
// Run: node scripts/generate-blog.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { POSTS, SITE, CDN } from "./posts.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const BLOG_DIR = path.join(ROOT, "public", "blog");
fs.mkdirSync(BLOG_DIR, { recursive: true });

const LOGO = `${CDN}/d786c528-0377-4f20-9f7a-05b7308b91d7.png`;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const fmtDate = (iso) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

const NAV = `
  <nav class="eb-nav">
    <a class="eb-brand" href="/"><img src="${LOGO}" alt="Everbowl Spokane" /><span>everbowl <span class="g">spokane</span></span></a>
    <div class="eb-nav-links">
      <a href="/#menu">Menu</a>
      <a href="/#location">Visit</a>
      <a href="/blog/">Journal</a>
      <a class="eb-nav-cta" href="/#order">Order online</a>
    </div>
  </nav>`;

const FOOTER = `
  <footer class="eb-foot">
    <div class="wrap-wide row">
      <div>© ${new Date().getUTCFullYear()} Everbowl Spokane · 13324 E Sprague Ave, Suite 101, Spokane Valley, WA</div>
      <div><a href="/">Home</a> · <a href="/blog/">Journal</a> · <a href="/#order">Order</a> · <a href="https://www.instagram.com/everbowl/" rel="noopener">Instagram</a></div>
    </div>
  </footer>`;

const CTA = `
  <div class="callout">
    <h3>Refuel at Everbowl Spokane Valley</h3>
    <p>Cold-blended açaí, pitaya, and smoothie bowls made to order at 13324 E Sprague Ave. Perfect after the trail, the river, or the gym.</p>
    <a class="btn" href="/#menu">See the menu →</a>
  </div>`;

function postHtml(p) {
  const url = `${SITE}/blog/${p.slug}.html`;
  const hero = p.image ? `${CDN}/${p.image}` : `${CDN}/6ba26f97-d429-4d26-badf-9f5e631c7da6.png`;
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
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700;800;900&display=swap" />
  <link rel="preconnect" href="https://api.fontshare.com" crossorigin />
  <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap" />
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
      const hero = p.image ? `${CDN}/${p.image}` : `${CDN}/6ba26f97-d429-4d26-badf-9f5e631c7da6.png`;
      return `      <a class="card" href="/blog/${p.slug}.html">
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
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Everbowl Spokane Journal",
    "description": "Fitness, health, and nutrition from Spokane Valley's superfood bowl bar.",
    "url": SITE + "/blog/",
    "publisher": { "@type": "Organization", "name": "Everbowl Spokane", "logo": { "@type": "ImageObject", "url": LOGO } },
    "blogPost": posts.map((p) => ({ "@type": "BlogPosting", "headline": p.title, "url": `${SITE}/blog/${p.slug}.html`, "datePublished": p.date })),
  };
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The Journal | Fitness, Health &amp; Nutrition — Everbowl Spokane</title>
  <meta name="description" content="Fitness, health, and nutrition tips from Everbowl Spokane Valley — superfoods, açaí bowls, workout fuel, and eating well in the Inland Northwest." />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${SITE}/blog/" />
  <meta name="theme-color" content="#211037" />
  <link rel="icon" href="${LOGO}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Everbowl Spokane" />
  <meta property="og:title" content="The Journal — Fitness, Health &amp; Nutrition | Everbowl Spokane" />
  <meta property="og:description" content="Fitness, health, and nutrition from Spokane Valley's superfood bowl bar." />
  <meta property="og:url" content="${SITE}/blog/" />
  <meta property="og:image" content="${CDN}/6ba26f97-d429-4d26-badf-9f5e631c7da6.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700;800;900&display=swap" />
  <link rel="preconnect" href="https://api.fontshare.com" crossorigin />
  <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap" />
  <link rel="stylesheet" href="/blog/blog.css" />
  <script type="application/ld+json">${JSON.stringify(jsonld)}</script>
</head>
<body>
  ${NAV}
  <header class="hero-index">
    <div class="wrap-wide">
      <p class="kicker">The Journal</p>
      <h1>Fuel, moved forward.</h1>
      <p>Fitness, health, and nutrition from Spokane Valley's superfood bowl bar — what to eat around training, what's actually in your bowl, and how to feel good doing it.</p>
    </div>
  </header>
  <main class="wrap-wide">
    <div class="post-grid">
${cards}
    </div>
  </main>
  ${FOOTER}
</body>
</html>`;
}

// --- run ---
// Date gate: only publish posts whose date has arrived in Pacific time.
// Future-dated posts stay in posts.mjs and go live automatically on the
// first build on/after their date (a scheduled daily rebuild handles this).
const TODAY = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Los_Angeles" }).format(new Date());
const published = POSTS.filter((p) => p.date <= TODAY);
const sorted = [...published].sort((a, b) => (a.date < b.date ? 1 : -1));
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
