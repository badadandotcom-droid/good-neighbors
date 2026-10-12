// Google tag timing and queueing check, using a stand-in for gtag.js (a cloud session cannot reach Google).
// 1. On the pages in GOOGLE_TAG_LAZY_PATHS the library is requested after the page's load event; elsewhere before it.
// 2. A phone tap before the library arrives (including the Google Ads phone-tap conversion) is queued in
//    dataLayer and is still there when the library loads, so nothing is lost.
// Usage: node gtagtiming.mjs   (server on :3000; needs playwright-core, see README.md)
import { chromium } from "playwright-core";

const LAZY = ["/wildlife/something-in-the-attic", "/wildlife/something-in-the-walls", "/service-areas/peel-region"];
const OTHER = ["/wildlife/raccoons", "/service-areas/scarborough", "/contact"];
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--no-sandbox"] });

async function run(path, tapBeforeLibrary) {
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  let requestedAt = null;
  await page.route(/googletagmanager\.com\/gtag\/js/, async (route) => {
    requestedAt = Date.now();
    if (tapBeforeLibrary) await new Promise((r) => setTimeout(r, 4000));
    await route.fulfill({
      contentType: "application/javascript",
      body: "window.__libLoadedAt=Date.now();window.__queuedAtLoad=(window.dataLayer||[]).map(function(a){return Array.prototype.slice.call(a)});",
    });
  });
  await page.route(/google-analytics|doubleclick|googleadservices/, (r) => r.abort());
  await page.goto(`http://localhost:3000${path}`, { waitUntil: "load" });
  const loadEnd = Date.now();
  await page.waitForTimeout(tapBeforeLibrary ? 600 : 3500);
  const result = { path, msAfterLoad: requestedAt === null ? null : requestedAt - loadEnd, gtagDefined: await page.evaluate(() => typeof window.gtag === "function") };
  if (tapBeforeLibrary) {
    await page.evaluate(() => document.querySelector('main a[href^="tel:"]').addEventListener("click", (e) => e.preventDefault(), { once: true }));
    await page.click('main a[href^="tel:"]');
    const wanted = (a) => /conversion|phone_click|cta_call/.test(JSON.stringify(a));
    result.queuedBeforeLibrary = await page.evaluate(() => window.dataLayer.map((a) => Array.prototype.slice.call(a)));
    result.queuedBeforeLibrary = result.queuedBeforeLibrary.filter(wanted).length;
    await page.waitForFunction(() => !!window.__libLoadedAt, null, { timeout: 15000 });
    result.seenByLibrary = (await page.evaluate(() => window.__queuedAtLoad)).filter(wanted).length;
  }
  await ctx.close();
  return result;
}

let failed = false;
for (const p of LAZY) { const r = await run(p, false); const ok = r.msAfterLoad !== null && r.msAfterLoad > 0 && r.gtagDefined; failed ||= !ok; console.log(ok ? "ok  " : "FAIL", "lazy ", JSON.stringify(r)); }
for (const p of OTHER) { const r = await run(p, false); const ok = r.msAfterLoad !== null && r.msAfterLoad <= 0 && r.gtagDefined; failed ||= !ok; console.log(ok ? "ok  " : "FAIL", "early", JSON.stringify(r)); }
const q = await run(LAZY[0], true);
const qok = q.queuedBeforeLibrary >= 3 && q.seenByLibrary === q.queuedBeforeLibrary;
failed ||= !qok;
console.log(qok ? "ok  " : "FAIL", "tap before library", JSON.stringify(q));
await browser.close();
process.exit(failed ? 1 : 0);
