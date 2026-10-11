# Handoff: Good Neighbors Wildlife website (Oct 11 2026; last updated late evening by the ads-sync chat, after the "GNW Websites October 5th" and landing-pages chats the same day)

Good Neighbors Wildlife only, never Wasp Problem.

## Branch state (Oct 11, 2026, late evening)
- Live branch `claude/good-neighbors-v2-visual-redesign` is at 32f4804. Everything in "Live as of Oct 11" below is deployed by Vercel to www.goodneighborswildlife.ca.
- Session branch `ccr-220fb330-k6qhkj` = the live branch + the trust-row change and these docs (see "Waiting for approved"). Not merged to live.
- Going live = fast-forward the live branch to the session branch (`git push origin <session-branch>:claude/good-neighbors-v2-visual-redesign`), only after the owner says "approved" or "go live". Before the push: `npm ci && npm run build`, then `npx next start -p 3000` and `node scripts/checks/crawl.mjs <outDir>` must end with "Problems: none"; `node scripts/checks/compare.mjs <before> <after>` must list only the pages the change meant to touch.
- Start every new session branch from the live branch, not from the repository's default branch (which carries Wasp Problem and older site code).

## Rules (also in the repo's CLAUDE.md, which a new chat reads automatically)
- Work on a session branch started from the live branch. Show the owner everything first; push to the live branch only after "approved".
- SEO on every change. Guarantee wording exact (GUARANTEE in lib/config/site.ts). Insurance only as "$5 million liability insurance" (INSURANCE in lib/config/site.ts). No prices, reviews, ratings, years, awards, certifications, "fully insured", "bonded", "licensed", "background-checked", "vetted", "block and lock".
- Never change: tel: links, the contact form, the thank-you page, GA4 G-MLBBT02NEC, Google Ads AW-18430229184, the two conversions. Never touch Wasp Problem or G-2NETZXNWVG.
- Google Ads landing pages: the URLs listed in CLAUDE.md never move. Tell the ads chat (through the owner) before changing any of them.
- Relay between chats (owner's rule, Oct 11): after every major task, end with a "For the other chat" note the owner carries to the ads chat by hand ("Nothing for the other chat." if there is nothing). Act first on any note the owner pastes from the ads chat. Paste text goes in a fenced code block on its own. Record the same entries in this file.
- Sync (owner's decision, Oct 11, 6:35 PM): the Wasp Problem way. No shared doc. Each chat keeps its own record: this file and CLAUDE.md here; the ads chat's `claude/sync-log.md` in its GNWW Project. The shared Claude Doc "Good Neighbors: website ↔ ads sync" is retired.
- Start of every chat: say which model the chat is on; Sonnet is fine for reading and planning, switch to Fable before writing or judgment-heavy work (saved in the owner's preferences).

## Owner decisions (Oct 11)
- Build first, then show the rendered pages and the wording together (not wording first).
- Toronto hub: optional long-form fields on the shared hub template (`Market.hubSections`, `Market.hubFaqs`); the other three hubs render unchanged until they get copy.
- East York and downtown Toronto have no owner neighbourhood list, so they stay general. Never invent a neighbourhood.
- Trust row (the guarantee, insurance and 24/7 lines under the hero buttons) on every ad landing page: approved Oct 11, 6:35 PM. Built; see below.
- Bird ads: bid about half the squirrel bid (ads side: Peel birds $4.50, Toronto birds $6).
- Birds page long-form: the owner's rule is to build it if GTA bird searches run over 50 a month in Oct–Dec. The website chat's judgment: build it anyway (pigeons are year-round and /wildlife/birds is already an ad landing page). Keyword Planner numbers are coming from the ads chat; the owner decides.
- Region hubs (York, Durham, Peel): long-form copy later, all together, except Peel, which the ads chat needs first (below).

## Waiting for "approved" (built on the session branch, not live)
Trust row on the ad landing pages that lacked it: /wildlife/something-in-the-attic and /wildlife/something-in-the-walls (`trustRow: true` in lib/data/situations.ts), /wildlife/birds and /wildlife/bats (`trustRow: true` in lib/data/wildlife.ts, which replaced the old `showGuaranteeLine` flag) and /wildlife/damage-repair. The three lines now come from one shared component, components/shared/TrustRow.tsx, also used by the homepage, the Toronto hub, the city pages, raccoons and squirrels (those pages render byte-identical, per the compare check). On birds, bats and damage repair the guarantee line moved from above the buttons into the row under them. No new wording; URLs, titles, H1s, phone links, form and tracking unchanged. Skunks keeps its old layout (it was never flagged for the guarantee line). Crawl after the change: 34 pages, all 200, Problems: none.

## Next (owner's call; in this order)
1. Peel hub long-form copy, requested by the ads chat Oct 11: three Peel ad groups ("near me" and no-city searches from people in Peel) land on /service-areas/peel-region, so it needs copy before the Peel ads go live. Same way as Toronto: `hubSections` + `hubFaqs` on the Peel entry in lib/data/markets.ts, about 1,000 words, Peel facts only (Mississauga, Brampton, Caledon, Bolton), the owner's neighbourhood lists only, no new claims. URL, title and H1 unchanged. The trust row appears automatically once `hubSections` exists (MarketHub renders it with long-form copy). Tell the ads chat when it is live.
2. Birds long-form (/wildlife/birds), the way raccoons and squirrels were done: an entry in lib/data/species-pages.ts (SituationPage template), about 1,500 words, ten FAQs; pigeons year-round, starlings and sparrows in vents in spring and early summer, "we check for eggs and young first", bats and birds protected where they are, no relocation promises, and how we work described only as the live site already does. URL, title and H1 unchanged. Gate: the owner decision above.
3. York and Durham hubs long-form, same template (the Durham ads land on the city pages; nothing points at the Durham hub).
4. "Do you relocate the raccoon?" FAQ: needs the owner's answer first.

## Live as of Oct 11
Went live Oct 11, late evening (492337a, docs to 32f4804): the Privacy Policy correction (photo and analytics statements); the long-form /wildlife/raccoons (1,785 words), /wildlife/squirrels (1,651) and /service-areas/toronto (1,546); the check scripts; the sync and relay rules in CLAUDE.md. The owner approved without striking any of the 11 judgment calls in the review document, so they are live as written. Crawl check before the push: 34 pages, all 200, no duplicates, no problems.

Live earlier on Oct 11: form improvements + thank-you page; 16 city pages (/service-areas/[city]); 4 region hubs; rewritten attic and walls pages; insurance line + "Are you insured?" FAQ; photo upload. Ads brief with the keyword-to-URL map was sent to the owner for the ads chat.

Copy lives in: lib/data/species-pages.ts (raccoons, squirrels), lib/data/situations.ts (attic, walls), lib/data/cities.ts (16 cities), lib/data/markets.ts (4 hubs; Toronto's `hubSections`/`hubFaqs`). Templates: components/wildlife/SituationPage.tsx (attic, walls, raccoons, squirrels), components/service-areas/CityPage.tsx and MarketHub.tsx, app/wildlife/[slug]/page.tsx (skunks, birds, bats).

## Ads side (what the website chat knows, Oct 11)
- Toronto campaign built and paused. Landing pages: the list in CLAUDE.md. Sitelinks "Damage Repair" → /wildlife/damage-repair, "Contact & Send Photos" → /contact.
- Durham (Part 5) ads land on /service-areas/pickering, /ajax and /whitby; no Oshawa ads at launch; nothing points at /service-areas/durham-region.
- Peel ads land on /service-areas/brampton, /mississauga, /caledon and /peel-region (hub copy needed first), plus the shared pages.
- Birds: Keyword Planner numbers (Toronto geo, by month) are being pulled by the ads chat; they arrive in its next note.

## Check scripts (in the repo)
`scripts/checks/`: crawl.mjs (200s, unique titles/H1s/descriptions, FAQ schema vs rendered questions, tel: links, banned words, exact guarantee wording, word counts), compare.mjs (before/after diff ignoring build hashes), wording.mjs (page text as markdown for the owner), shots.mjs (screenshots; needs playwright-core outside the repo, e.g. installed in a scratch folder with a copy of the script beside it, since ESM imports resolve from the script's own folder). See scripts/checks/README.md.

## Tools and credits (Oct 11)
- Semrush MCP: no API units left (https://www.semrush.com/mcp-access). Supermetrics: the free trial expired Oct 11, so Google Trends, Keyword Planner and Search Console queries are refused. Good Neighbors' Search Console is not connected in Supermetrics anyway (only waspproblem.ca and lockoutsealing.ca are). Keyword numbers come from the ads chat's Keyword Planner for now.
- The live site cannot be fetched from a cloud session (proxy and DNS both blocked); verify with the local build and crawl instead.

## Still the owner's
Gmail filters; invoices with the guarantee terms (before the first job); replace photos showing "Good Neighbors Wildlife Inc." on shirts/van; the Google Ads changes; update the project instructions' sync line (the shared Claude Doc is retired).
