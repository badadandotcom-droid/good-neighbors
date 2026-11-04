// Sentence-repeat check (GNW Website 23, Nov 4 2026): does any NEW sentence on a page repeat a
// sentence on another page exactly, or share a run of 8+ words with one? The owner's rule: each page
// is written fresh. Usage, on two crawl folders from crawl.mjs (before = the live build, after = yours):
//   node scripts/checks/repeats.mjs <afterCrawlDir> <page.html> [<beforeCrawlDir>/<page.html>]
// The optional third argument skips sentences the page already had. Lines on 5+ other pages
// (the shared template: trust row, guarantee box, closing band) are listed and skipped.
import fs from "node:fs";
import path from "node:path";

const [dir, target, beforeFile] = process.argv.slice(2);
const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;|&rsquo;|&lsquo;/g, "'").replace(/&quot;|&ldquo;|&rdquo;/g, '"')
   .replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&rarr;|&larr;/g, " ");
function mainText(html) {
  const m = html.match(/<main[\s\S]*?<\/main>/i);
  let t = m ? m[0] : html;
  t = t.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ");
  t = t.replace(/<\/(p|h1|h2|h3|li|dd|dt|div|section|summary|button)>/gi, "\n").replace(/<[^>]+>/g, " ");
  return decode(t);
}
function sentences(text) {
  return text
    .split(/\n+/)
    .flatMap((block) => block.split(/(?<=[.!?:])\s+(?=[A-Z0-9"'])/))
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter((s) => s.split(" ").length >= 6);
}
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();
const words = (s) => norm(s).split(" ");

const files = fs.readdirSync(dir).filter((f) => f.endsWith(".html") && !f.endsWith(".norm.html"));
const beforeSet = new Set(beforeFile ? sentences(mainText(fs.readFileSync(beforeFile, "utf8"))).map(norm) : []);
let targetSents = sentences(mainText(fs.readFileSync(path.join(dir, target), "utf8"))).filter((s) => !beforeSet.has(norm(s)));
const others = new Map();
for (const f of files) {
  if (f === target) continue;
  others.set(f, sentences(mainText(fs.readFileSync(path.join(dir, f), "utf8"))));
}

// Template lines (same sentence on 5+ other pages) are the shared layout, not page copy.
const count = new Map();
for (const list of others.values()) for (const o of new Set(list.map(norm))) count.set(o, (count.get(o) || 0) + 1);
const template = targetSents.filter((s) => (count.get(norm(s)) || 0) >= 5);
targetSents = targetSents.filter((s) => (count.get(norm(s)) || 0) < 5);
console.log(`Skipped as shared template lines (on 5+ pages): ${template.length}`);
for (const t of template) console.log(`  template: ${t}`);
let exact = 0, shared = 0;
const N = 8;
for (const s of targetSents) {
  const ns = norm(s);
  const ws = words(s);
  const grams = new Set();
  for (let i = 0; i + N <= ws.length; i++) grams.add(ws.slice(i, i + N).join(" "));
  for (const [f, list] of others) {
    for (const o of list) {
      if (norm(o) === ns) { exact++; console.log(`EXACT  [${f}] ${s}`); continue; }
      const ow = words(o);
      for (let i = 0; i + N <= ow.length; i++) {
        if (grams.has(ow.slice(i, i + N).join(" "))) { shared++; console.log(`SHARED [${f}] ${s}\n        other: ${o}`); break; }
      }
    }
  }
}
console.log(`\n${targetSents.length} sentences checked on ${target} against ${others.size} pages: ${exact} exact repeats, ${shared} with an ${N}-word run in common.`);
