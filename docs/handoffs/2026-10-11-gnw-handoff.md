# Handoff: Good Neighbors Wildlife website (from the "GNW Websites October 5th" chat, Oct 11 2026)

Good Neighbors Wildlife only, never Wasp Problem.

## Branch state (Oct 11, 2026)
- Live branch `claude/good-neighbors-v2-visual-redesign` is at commit c5f432c (insurance line and FAQ). Vercel deploys it to www.goodneighborswildlife.ca.
- Session branch `claude/gnw-websites-october-5-4p19rh` is one commit ahead (f1cc9fb: the Privacy Policy correction and notes refresh), **not yet approved by the owner**. Start the next job from this branch so that commit comes along; get the owner's "approved" before it goes live.
- Test scripts from the old chat (page checks, form tests, screenshots) lived in that chat's scratchpad and are gone. Rebuild what you need: the checks were a crawl of every sitemap page for 200s, unique titles/H1s/descriptions, FAQPage schema matching the rendered questions, tel: links present, banned words absent, and word counts.

## Rules (also saved in the repo's CLAUDE.md, which a new chat reads automatically)
- Work on a session branch started from the live branch `claude/good-neighbors-v2-visual-redesign`. Show the owner everything first; push to the live branch only after "approved".
- SEO on every change. Guarantee wording exact (GUARANTEE in lib/config/site.ts). Insurance only as "$5 million liability insurance" (INSURANCE in lib/config/site.ts). No prices, reviews, ratings, years, awards, certifications, "fully insured", "bonded", "licensed", "background-checked", "vetted", "block and lock".
- Never change: tel: links, the contact form, the thank-you page, GA4 G-MLBBT02NEC, Google Ads AW-18430229184, the two conversions. Never touch Wasp Problem or G-2NETZXNWVG.

## Live as of Oct 11
Form improvements + thank-you page; 16 city pages (/service-areas/[city]); 4 region hubs; rewritten attic and walls pages; insurance line + "Are you insured?" FAQ; photo upload. Ads brief with the keyword-to-URL map was sent to the owner for the ads chat.

## Saved on the session branch, waiting for "approved"
Privacy Policy correction (photos, GA4/Ads) + README/PLACEHOLDERS refresh. Commit f1cc9fb on `claude/gnw-websites-october-5-4p19rh`.

## Next job (owner asked, not urgent)
Thicken the three ad landing pages the same way as attic/walls: /wildlife/raccoons, /wildlife/squirrels, /service-areas/toronto (now about 310-440 words). Real sections, FAQ with FAQPage schema, neighbourhood mentions, the insurance line. No invented facts. Show before pushing; report word counts.
How the site is built: copy for city pages is in lib/data/cities.ts, attic/walls in lib/data/situations.ts (template components/wildlife/SituationPage.tsx), wildlife entries in lib/data/wildlife.ts, hubs in components/service-areas/MarketHub.tsx. Test scripts live in the old chat's scratchpad and may need rebuilding.

## Still the owner's
Gmail filters; invoices with the guarantee terms (before the first job); replace photos showing "Good Neighbors Wildlife Inc." on shirts/van; the Google Ads changes.
