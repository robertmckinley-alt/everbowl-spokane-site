// Post-build step: inject the server-rendered app HTML into the client
// index.html so crawlers (and the first paint) get real content. No headless
// browser required — this uses react-dom/server output built by `vite build --ssr`.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distIndex = path.join(__dirname, "dist", "index.html");
const serverEntry = path.join(__dirname, "dist-ssr", "entry-server.js");

const template = fs.readFileSync(distIndex, "utf-8");
const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();

if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find empty <div id="root"></div> in dist/index.html');
}

const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
fs.writeFileSync(distIndex, html);
console.log(`Prerendered dist/index.html (+${appHtml.length} chars of static HTML)`);
