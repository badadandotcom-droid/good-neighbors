// Compare two crawl directories page by page, ignoring build-specific noise
// (asset hashes, preload links, scripts). Usage: node compare.mjs <before> <after>
import fs from "node:fs";
import path from "node:path";

const [before, after] = process.argv.slice(2);
function norm(html) {
  return html
    .replace(/<link [^>]*>/g, "")
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/\/_next\/static\/[^"')\s]+/g, "/_next/static/X")
    .replace(/favicon\.ico\?[^"]*/g, "favicon.ico")
    .replace(/\/_next\/image\?url=([^&"]+)&[^"]*/g, "/_next/image?url=$1");
}
let changed = 0;
for (const f of fs.readdirSync(before).filter((f) => f.endsWith(".html") && !f.endsWith(".norm.html")).sort()) {
  const a = norm(fs.readFileSync(path.join(before, f), "utf8"));
  const b = norm(fs.readFileSync(path.join(after, f), "utf8"));
  if (a !== b) {
    changed++;
    let i = 0;
    while (i < a.length && a[i] === b[i]) i++;
    console.log(`CHANGED ${f}\n   before: …${a.slice(Math.max(0, i - 60), i + 120).replace(/\s+/g, " ")}…\n   after:  …${b.slice(Math.max(0, i - 60), i + 120).replace(/\s+/g, " ")}…`);
  }
}
console.log(`${changed} page(s) changed`);
