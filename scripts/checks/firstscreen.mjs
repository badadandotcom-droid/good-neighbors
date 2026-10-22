// Phone first-screen check for the ad landing pages (owner/ads chat rule, Oct 2026): at 375 x 812 the H1, the
// guarantee line and the page's own big Call button must all sit above the fixed Call Now / Get Help Now bar.
// /contact is reported but not failed: it has no guarantee line or hero buttons by design.
// Usage: node firstscreen.mjs [outDir]   (server on :3000; needs playwright-core, see README.md)
// Writes a viewport screenshot per page into outDir and exits 1 if any page fails.
import { chromium } from "playwright-core";
import fs from "node:fs";

const outDir = process.argv[2] ?? "firstscreen";
fs.mkdirSync(outDir, { recursive: true });
const GUARANTEE = "Lifetime guarantee on every entry point we seal";
const PAGES = [
  "/wildlife/something-in-the-attic", "/wildlife/something-in-the-walls", "/wildlife/raccoons", "/wildlife/squirrels",
  "/wildlife/birds", "/wildlife/bats", "/wildlife/damage-repair", "/contact",
  "/service-areas/toronto", "/service-areas/scarborough", "/service-areas/north-york", "/service-areas/etobicoke",
  "/service-areas/peel-region", "/service-areas/brampton", "/service-areas/mississauga", "/service-areas/caledon",
  "/service-areas/pickering", "/service-areas/ajax", "/service-areas/whitby", "/service-areas/oshawa",
  "/service-areas/durham-region", "/wildlife/raccoon-feces-removal", "/wildlife/skunks", "/wildlife/dead-animal-removal",
  "/service-areas/york-region", "/service-areas/markham", "/service-areas/vaughan", "/service-areas/richmond-hill",
  "/service-areas/newmarket", "/service-areas/aurora", "/service-areas/stouffville",
];

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--no-sandbox"] });
const ctx = await browser.newContext({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
const rows = [];
for (const p of PAGES) {
  const page = await ctx.newPage();
  await page.goto(`http://localhost:3000${p}`, { waitUntil: "load" });
  await page.waitForTimeout(400);
  const m = await page.evaluate((GUARANTEE) => {
    const visible = (el) => {
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== "hidden" && getComputedStyle(el).display !== "none";
    };
    const bottom = (el) => (el ? Math.round(el.getBoundingClientRect().bottom + scrollY) : null);
    const guarantee = [...document.querySelectorAll("main *")].find(
      (el) => visible(el) && el.textContent.includes(GUARANTEE) && ![...el.children].some((c) => c.textContent.includes(GUARANTEE)),
    );
    const bar = [...document.querySelectorAll("div.fixed")].find((el) => el.textContent.includes("Call Now") && getComputedStyle(el).visibility !== "hidden");
    return {
      h1: bottom(document.querySelector("main h1")),
      guarantee: bottom(guarantee),
      call: bottom([...document.querySelectorAll('main a[href^="tel:"]')].find(visible)),
      fold: bar ? Math.round(bar.getBoundingClientRect().top) : 812,
    };
  }, GUARANTEE);
  const ok = (y) => y !== null && y <= m.fold;
  rows.push({ path: p, h1: m.h1, guarantee: m.guarantee ?? "none", call: m.call, fold: m.fold, pass: ok(m.h1) && ok(m.guarantee) && ok(m.call) });
  await page.screenshot({ path: `${outDir}/${p.replace(/^\//, "").replace(/\//g, "__")}.png` });
  await page.close();
}
await browser.close();
console.table(rows);
const failed = rows.filter((r) => !r.pass && r.path !== "/contact");
console.log(failed.length ? `FAIL: ${failed.map((r) => r.path).join(", ")}` : "First screen: all pass (except /contact, by design)");
process.exit(failed.length ? 1 : 0);
