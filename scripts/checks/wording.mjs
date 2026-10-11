// Render the main content of a crawled page as readable markdown, so the
// owner can read every word exactly as it appears on the page.
// Usage: node wording.mjs <crawlDir> <page.html> ...
import fs from "node:fs";
import path from "node:path";

const [dir, ...files] = process.argv.slice(2);

function decode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&rarr;/g, "→")
    .replace(/&larr;/g, "←")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}

function render(html) {
  const title = decode((html.match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? "");
  const description = decode((html.match(/<meta name="description" content="([^"]*)"/) ?? [])[1] ?? "");
  const start = html.indexOf("</header>");
  const end = html.lastIndexOf("<footer");
  let main = html.slice(start, end).replace(/<script[\s\S]*?<\/script>/g, "").replace(/<svg[\s\S]*?<\/svg>/g, "");
  // Inline links become markdown links; everything else is reduced to block text.
  main = main.replace(/<a [^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, (_, href, label) => {
    const text = decode(label.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
    return href.startsWith("tel:") ? `**${text}** (${href})` : `[${text}](${href})`;
  });
  const out = [`# ${title}`, `*Meta description (${description.length} chars):* ${description}`, ""];
  const re = /<(h1|h2|h3|p|li|summary|dt|dd)\b[^>]*>([\s\S]*?)<\/\1>/g;
  for (const m of main.matchAll(re)) {
    const tag = m[1];
    const text = decode(m[2].replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
    if (!text) continue;
    if (tag === "h1") out.push(`## H1: ${text}`, "");
    else if (tag === "h2") out.push(`## ${text}`, "");
    else if (tag === "h3") out.push(`### ${text}`, "");
    else if (tag === "li") out.push(`- ${text}`);
    else if (tag === "summary") out.push(`**Q: ${text}**`);
    else if (tag === "dt") out.push(`**${text}**`);
    else out.push(text, "");
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n");
}

for (const f of files) {
  console.log(render(fs.readFileSync(path.join(dir, f), "utf8")));
  console.log("\n---\n");
}
