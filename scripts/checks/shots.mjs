// Full-page screenshots of the three pages, desktop and phone widths.
import { chromium } from "playwright-core";
import fs from "node:fs";

const outDir = process.argv[2] ?? "shots";
fs.mkdirSync(outDir, { recursive: true });
const pages = ["/wildlife/raccoons", "/wildlife/squirrels", "/service-areas/toronto"];
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
for (const [name, viewport] of [
  ["desktop", { width: 1280, height: 900 }],
  ["phone", { width: 390, height: 844 }],
]) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  for (const p of pages) {
    await page.goto(`http://localhost:3000${p}`, { waitUntil: "networkidle" });
    // Open every FAQ so the answers are in the picture.
    await page.evaluate(() => document.querySelectorAll("details").forEach((d) => (d.open = true)));
    const file = `${outDir}/${p.replace(/^\//, "").replace(/\//g, "__")}--${name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(file);
  }
  await ctx.close();
}
await browser.close();
