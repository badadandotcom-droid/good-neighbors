# Handoff: Good Neighbors Wildlife website (from the "GNW Websites October 5th" chat, Oct 11 2026; updated the same day by the landing-pages chat)

Good Neighbors Wildlife only, never Wasp Problem.

## Branch state (Oct 11, 2026, evening)
- Live branch `claude/good-neighbors-v2-visual-redesign` is at commit c5f432c (insurance line and FAQ). Vercel deploys it to www.goodneighborswildlife.ca.
- Session branch `claude/gnw-websites-october-5-4p19rh` is ahead of live by:
  - f1cc9fb Privacy Policy correction + notes refresh. **Owner approved Oct 11.** The push to the live branch was blocked by the cloud session's permission check ("production deploy"); it needs the owner's OK on the prompt, or a permission rule for pushes to the live branch.
  - 57f9743 the first version of this handoff.
  - The landing-pages commit (see "Waiting for approved" below).
- Going live = fast-forward the live branch to the session branch (`git push origin <session-branch>:claude/good-neighbors-v2-visual-redesign`), only after the owner says "approved".

## Rules (also in the repo's CLAUDE.md, which a new chat reads automatically)
- Work on a session branch started from the live branch `claude/good-neighbors-v2-visual-redesign`. Show the owner everything first; push to the live branch only after "approved".
- SEO on every change. Guarantee wording exact (GUARANTEE in lib/config/site.ts). Insurance only as "$5 million liability insurance" (INSURANCE in lib/config/site.ts). No prices, reviews, ratings, years, awards, certifications, "fully insured", "bonded", "licensed", "background-checked", "vetted", "block and lock".
- Never change: tel: links, the contact form, the thank-you page, GA4 G-MLBBT02NEC, Google Ads AW-18430229184, the two conversions. Never touch Wasp Problem or G-2NETZXNWVG.

## Owner decisions from the landing-pages chat (Oct 11)
- Keep working on the session branch; merge to live only after "approved".
- Build first, then show the rendered pages and the wording together (not wording first).
- Toronto hub: optional long-form fields on the shared hub template (`Market.hubSections`, `Market.hubFaqs`); the other three hubs render unchanged until they get copy.
- East York and downtown Toronto have no owner neighbourhood list, so they stay general. Never invent a neighbourhood.
- Start of every chat: say which model the chat is on; Sonnet is fine for reading and planning, switch to Fable before writing or judgment-heavy work (saved in the owner's preferences).

## Sync with the ads chat (owner's rule, Oct 11)
The Google Ads chat can't see this repo. Both chats read and write one shared Claude Doc, "Good Neighbors: website ↔ ads sync", https://claude.ai/code/artifact/6eba0798-46b5-4c5b-bafe-309a0899635f (Claude Docs tools, never a web fetch). Start of every task: read it, act on "For the website chat". End of every task: update "Website side", add dated entries to "For the ads chat", tick what you handled, never delete. The same rule is in CLAUDE.md and in the owner's project instructions.

## Live as of Oct 11
Form improvements + thank-you page; 16 city pages (/service-areas/[city]); 4 region hubs; rewritten attic and walls pages; insurance line + "Are you insured?" FAQ; photo upload. Ads brief with the keyword-to-URL map was sent to the owner for the ads chat.

## Waiting for "approved" (on the session branch)
1. Privacy Policy correction (f1cc9fb), approved, push blocked (above).
2. Three ad landing pages thickened the same way as attic/walls:
   - /wildlife/raccoons 368 → 1,785 words, /wildlife/squirrels 359 → 1,651, /service-areas/toronto 496 → 1,546 (visible words between header and footer; attic measures 1,292, walls 1,100 the same way).
   - Copy: lib/data/species-pages.ts (raccoons, squirrels) and the Toronto entry in lib/data/markets.ts. Template: components/wildlife/SituationPage.tsx now serves attic, walls, raccoons and squirrels (species variant keeps the live hero, photo, intro, signs and areas; adds the trust row, sections, process and FAQ). components/service-areas/MarketHub.tsx renders `hubSections`/`hubFaqs` and the trust row when present.
   - Titles, H1s, meta descriptions, URLs, phone links, form, tracking unchanged. Every other page byte-identical (crawl compare).
   - The review document with every word went to the owner from the chat (scratchpad file `2026-10-11-landing-pages-review.md`); it lists 11 judgment calls (general animal/home facts not on the live site) for the owner to strike or keep.

## Check scripts (now in the repo)
`scripts/checks/` — crawl.mjs (200s, unique titles/H1s/descriptions, FAQ schema vs rendered questions, tel: links, banned words, exact guarantee wording, word counts), compare.mjs (before/after diff ignoring build hashes), wording.mjs (page text as markdown for the owner), shots.mjs (screenshots; needs playwright-core outside the repo). See scripts/checks/README.md.

## Next candidates (owner's call, none started)
- Trust row (guarantee / insurance / 24/7) under the buttons on attic, walls and the York, Peel and Durham hubs: one flag each.
- "Do you relocate the raccoon?" FAQ: needs the owner's answer first.
- Thicken the York, Peel and Durham hubs the same way as Toronto (copy only; the template is ready).

## Still the owner's
Gmail filters; invoices with the guarantee terms (before the first job); replace photos showing "Good Neighbors Wildlife Inc." on shirts/van; the Google Ads changes.
