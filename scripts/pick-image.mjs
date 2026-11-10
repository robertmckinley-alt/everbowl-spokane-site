// Prints ONE image path that has never been used by any post, plus its suggested alt.
// Usage: node scripts/pick-image.mjs
// Rule: every Journal post must have a UNIQUE image. Never reuse a filename
// that already appears in posts.mjs. This script enforces that: use exactly
// what it prints. If it warns the pool is low, say so in your final report so
// the owner can add fresh store photography to public/blog-img/.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { POSTS } from "./posts.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMG_DIR = path.join(__dirname, "..", "public", "blog-img");

const used = new Set(POSTS.map((p) => p.image));
const all = fs
  .readdirSync(IMG_DIR)
  .filter((f) => /\.jpe?g$/i.test(f))
  .map((f) => "/blog-img/" + f);
const unused = all.filter((f) => !used.has(f));

if (unused.length === 0) {
  console.log("NO_UNUSED_IMAGES");
  console.log(
    "Every image in public/blog-img has been used. DO NOT reuse one. " +
      "Report that the image pool is empty and that fresh real store photos are needed.",
  );
  process.exit(1);
}

// Prefer singles over duo montages, alphabetical for determinism.
const singles = unused.filter((f) => !f.includes("/duo-")).sort();
const pick = (singles[0] ?? unused.sort()[0]);

const nice = (s) =>
  s
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bPb\b/g, "PB");
const base = pick.replace("/blog-img/", "").replace(/\.jpe?g$/i, "");
const alt = base.startsWith("duo-")
  ? base
      .replace("duo-", "")
      .split("--")
      .map(nice)
      .join(" and ") + " from Everbowl"
  : nice(base) + " from Everbowl";

console.log("IMAGE:", pick);
console.log("ALT:", alt);
console.log("REMAINING_UNUSED:", unused.length - 1);
if (unused.length - 1 < 10) {
  console.log(
    "WARNING: fewer than 10 unused images remain. Include this in your final report: the Journal image pool is nearly empty — fresh real store photos should be added to public/blog-img/.",
  );
}
