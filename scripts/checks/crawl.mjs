// Crawl every sitemap page of the locally served site and run the page checks
// the handoff describes: 200s, unique titles/H1s/descriptions, FAQPage schema
// matching the rendered questions, tel: links present, banned words absent,
// word counts. Usage: node crawl.mjs <outDir> [baseUrl]
// Saves raw and normalized HTML per page into <outDir> for before/after diffs
// and writes <outDir>/report.json.
import fs from "node:fs";
import path from "node:path";

const outDir = process.argv[2];
const base = process.argv[3] ?? "http://localhost:3000";
if (!outDir) throw new Error("outDir required");
fs.mkdirSync(outDir, { recursive: true });

const GUARANTEE_SHORT = "Lifetime guarantee on every entry point we seal.";
const GUARANTEE_FULL =
  "Every entry point we seal comes with a lifetime guarantee, for as long as you own your home. If an animal gets back in through it, we come back and take care of it at no charge. Full terms are written on your invoice.";

// The one allowed mention of reviews: the real Google rating line from
// GOOGLE_RATING (lib/config/site.ts), "5.0 on Google · 4 reviews" (owner, Oct 27
// 2026). It is removed before the banned-words test; any other "review" or
// "rating" on a page still fails.
const RATING_LINE = /\b\d\.\d on Google · \d+ reviews?\b/g;

const BANNED = [
  /fully insured/i,
  /\bbonded\b/i,
  /\blicen[cs]ed\b/i,
  /background[- ]checked/i,
  /\bvetted\b/i,
  /block and lock/i,
  /\bcertified\b/i,
  /\bcertification/i,
  /\baward/i,
  /\breviews?\b/i,
  /\bratings?\b/i,
  /\bwarranty\b/i,
  /years? (of experience|in business)/i,
  /\$(?!5 million)\s?\d/,
  /G-2NETZXNWVG/,
];

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
function stripTags(html) {
  return decode(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}
function words(text) {
  return text.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
}
function normalize(html) {
  return html
    .replace(/\/_next\/static\/[^/"']+\//g, "/_next/static/HASH/")
    .replace(/"buildId":"[^"]+"/g, '"buildId":"HASH"')
    .replace(/\?dpl=[^"&]+/g, "")
    .replace(/<script[^>]*>self\.__next_f[\s\S]*?<\/script>/g, "")
    .replace(/<script[^>]*src="\/_next\/[^"]*"[^>]*><\/script>/g, "");
}

// Pages crawled on top of the sitemap: live pages kept out of the sitemap on
// purpose (noindex offers reached from an ad only). The November special page
// (owner, Oct 28 2026) is the one page allowed a price: exactly $699, nothing
// else ("Normally $850" stays off it: owner, Oct 28, 1:11 PM); every other
// page keeps the no-dollar-figure rule.
const EXTRA_PATHS = ["/november-special"];
const ALLOWED_FIGURES = { "/november-special": [/\$699\b/g] };

const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...new Set([...[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname), ...EXTRA_PATHS])];
const report = [];
const seen = { title: new Map(), h1: new Map(), description: new Map() };

for (const p of urls) {
  const res = await fetch(`${base}${p}`);
  const html = await res.text();
  const slug = p === "/" ? "home" : p.replace(/^\//, "").replace(/\//g, "__");
  fs.writeFileSync(path.join(outDir, `${slug}.html`), html);
  fs.writeFileSync(path.join(outDir, `${slug}.norm.html`), normalize(html));

  const title = decode((html.match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? "");
  const description = decode((html.match(/<meta name="description" content="([^"]*)"/) ?? [])[1] ?? "");
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => stripTags(m[1]));
  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) =>
    JSON.parse(m[1]),
  );
  const faqSchemas = jsonLd.filter((d) => d["@type"] === "FAQPage");
  const schemaQuestions = faqSchemas.flatMap((d) => d.mainEntity.map((q) => q.name));
  const schemaAnswers = faqSchemas.flatMap((d) => d.mainEntity.map((q) => q.acceptedAnswer.text));
  const renderedQuestions = [...html.matchAll(/<summary[^>]*>([\s\S]*?)<\/summary>/g)].map((m) => stripTags(m[1]));
  const telLinks = (html.match(/href="tel:\+14169009453"/g) ?? []).length;
  const otherTel = (html.match(/href="tel:[^"]*"/g) ?? []).filter((t) => !t.includes("+14169009453"));

  // Main content: everything between the header and the footer.
  const mainStart = html.indexOf("</header>");
  const mainEnd = html.lastIndexOf("<footer");
  const mainHtml = mainStart > -1 && mainEnd > mainStart ? html.slice(mainStart, mainEnd) : html;
  const mainText = stripTags(
    mainHtml.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<svg[\s\S]*?<\/svg>/g, " "),
  );
  const bodyText = stripTags(
    html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<svg[\s\S]*?<\/svg>/g, " "),
  );
  const allowFigures = (s) => (ALLOWED_FIGURES[p] ?? []).reduce((t, re) => t.replace(re, " "), s);
  const bodyForBanned = allowFigures(bodyText.replace(RATING_LINE, " "));
  const banned = BANNED.filter((re) => re.test(bodyForBanned) || re.test(allowFigures(title)) || re.test(allowFigures(description))).map(
    (re) => re.source,
  );
  // Every sentence that mentions a guarantee must be the owner's exact wording.
  // Block boundaries count as sentence boundaries so a heading never runs into
  // the paragraph after it.
  const blockText = stripTags(
    html
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<style[\s\S]*?<\/style>/g, " ")
      .replace(/<svg[\s\S]*?<\/svg>/g, " ")
      .replace(/<\/(h[1-6]|p|li|dt|dd|summary|figcaption|a|span|div|section)>/g, " ¶ "),
  );
  const guaranteeMentions = [...blockText.matchAll(/[^.!?¶]*guarantee[^.!?¶]*[.!?¶]?/gi)].map((m) => m[0].trim());
  const badGuarantee = guaranteeMentions.filter(
    (s) =>
      !GUARANTEE_FULL.includes(s) &&
      !s.includes(GUARANTEE_SHORT) &&
      !/^Lifetime guarantee$/i.test(s.replace(/[.!?]$/, "")) &&
      !/^Is your work guaranteed\?$/.test(s) &&
      !/^(Not through the opening we sealed\.|Lifetime guarantee)/.test(s),
  );

  for (const [k, v] of Object.entries({ title, h1: h1s.join(" | "), description })) {
    const list = seen[k].get(v) ?? [];
    list.push(p);
    seen[k].set(v, list);
  }

  report.push({
    path: p,
    status: res.status,
    title,
    titleLength: title.length,
    description,
    descriptionLength: description.length,
    h1s,
    faqSchemaCount: faqSchemas.length,
    schemaQuestions,
    renderedQuestions,
    faqMatch: JSON.stringify(schemaQuestions) === JSON.stringify(renderedQuestions),
    faqAnswerHasMarkup: schemaAnswers.some((a) => /[<>]|\]\(/.test(a)),
    telLinks,
    otherTel,
    wordsMain: words(mainText),
    wordsBody: words(bodyText),
    banned,
    badGuarantee,
  });
}

const dupes = {};
for (const [k, map] of Object.entries(seen)) {
  dupes[k] = [...map.entries()].filter(([, v]) => v.length > 1).map(([text, paths]) => ({ text, paths }));
}
fs.writeFileSync(path.join(outDir, "report.json"), JSON.stringify({ pages: report, dupes }, null, 2));

const problems = report.filter(
  (r) => r.status !== 200 || r.h1s.length !== 1 || !r.faqMatch || r.telLinks === 0 || r.banned.length || r.badGuarantee.length || r.otherTel.length || r.faqAnswerHasMarkup,
);
console.log(`${report.length} pages crawled`);
for (const r of report) console.log(`${String(r.status).padEnd(4)} ${String(r.wordsMain).padStart(5)}w  ${r.path}`);
console.log("\nDuplicates:", JSON.stringify(dupes));
console.log("\nProblems:", problems.length ? JSON.stringify(problems, null, 1) : "none");
