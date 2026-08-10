// Helper for the daily content workflow.
//
//   node scripts/new-post.mjs            -> print the next queued topic to write
//   node scripts/new-post.mjs --list     -> show remaining queued topics
//   node scripts/new-post.mjs --done "<title>"  -> mark a topic as used
//
// The daily agent uses `next` to pick a topic, hand-writes a real ~800-word
// post object into scripts/posts.mjs, marks the topic done, then runs
// `npm run blog` to regenerate the static files + sitemap.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const QUEUE = path.join(__dirname, "topic-queue.json");
const q = JSON.parse(fs.readFileSync(QUEUE, "utf-8"));
const args = process.argv.slice(2);

if (args[0] === "--list") {
  const left = q.topics.filter((t) => !t.used);
  console.log(`${left.length} topics remaining:`);
  left.forEach((t, i) => console.log(`  ${i + 1}. [${t.category}] ${t.title}`));
} else if (args[0] === "--done") {
  const title = args[1];
  const t = q.topics.find((x) => x.title === title);
  if (!t) { console.error(`No topic titled: ${title}`); process.exit(1); }
  t.used = true;
  fs.writeFileSync(QUEUE, JSON.stringify(q, null, 2) + "\n");
  console.log(`Marked done: ${title}`);
} else {
  const next = q.topics.find((t) => !t.used);
  if (!next) { console.log("Queue empty — add more topics to topic-queue.json."); process.exit(0); }
  console.log(JSON.stringify(next, null, 2));
}
