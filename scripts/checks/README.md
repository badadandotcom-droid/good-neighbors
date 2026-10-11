# Page checks (Good Neighbors Wildlife)

Run against a local production build: `npm run build && npx next start -p 3000`.

- `node scripts/checks/crawl.mjs <outDir>` — crawls every sitemap page: 200s, unique titles/H1s/descriptions, FAQPage schema matching the rendered questions, tel: links, banned words, exact guarantee wording, word counts. Saves each page's HTML into `<outDir>` and prints problems.
- `node scripts/checks/compare.mjs <beforeDir> <afterDir>` — diffs two crawls page by page, ignoring build hashes, so a change can be shown to touch only the pages it meant to.
- `node scripts/checks/wording.mjs <crawlDir> <page.html>...` — renders a crawled page's content as markdown, for the owner to read every word.
- `node scripts/checks/shots.mjs <outDir>` — full-page screenshots at desktop and phone widths. Needs `playwright-core` (install it outside the repo, e.g. `npm i --no-save playwright-core`, or in a scratch folder) and a Chromium at `/opt/pw-browsers/chromium`; adjust `executablePath` otherwise.

Run everything from the repo root; put output folders outside the repo or in a gitignored place.
