// Local Lighthouse (mobile, simulated slow 4G + 4x CPU) on a production build, median of N runs per page.
// Usage: node lighthouse.mjs <runs> <path> [<path>...]   (server on :3000)
// Needs lighthouse and chrome-launcher installed outside the repo, next to a copy of this script (README.md).
// Local numbers only: they load no Google tags (the cloud session's network blocks them) and are not PageSpeed
// Insights' own numbers, but they move the same way and match it closely on the pages it was compared on.
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";

const [runsArg, ...paths] = process.argv.slice(2);
const runs = Number(runsArg);
const chrome = await chromeLauncher.launch({
  chromePath: process.env.CHROME_PATH ?? "/opt/pw-browsers/chromium",
  chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"],
});
const median = (a) => [...a].sort((x, y) => x - y)[Math.floor(a.length / 2)];
const rows = [];
for (const p of paths) {
  const m = { score: [], fcp: [], lcp: [], tbt: [], cls: [] };
  for (let i = 0; i < runs; i++) {
    const { lhr } = await lighthouse(`http://localhost:3000${p}`, { port: chrome.port, onlyCategories: ["performance"], output: "json", logLevel: "error" });
    m.score.push(Math.round(lhr.categories.performance.score * 100));
    m.fcp.push(lhr.audits["first-contentful-paint"].numericValue);
    m.lcp.push(lhr.audits["largest-contentful-paint"].numericValue);
    m.tbt.push(lhr.audits["total-blocking-time"].numericValue);
    m.cls.push(lhr.audits["cumulative-layout-shift"].numericValue);
  }
  rows.push({
    path: p,
    score: m.score.join("/"),
    fcp_s: (median(m.fcp) / 1000).toFixed(1),
    lcp_s: (median(m.lcp) / 1000).toFixed(1),
    tbt_ms: Math.round(median(m.tbt)),
    cls: median(m.cls).toFixed(3),
  });
}
await chrome.kill();
console.table(rows);
