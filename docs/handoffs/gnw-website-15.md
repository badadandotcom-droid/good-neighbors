Chat name: GNW Website 15

# Handoff: Good Neighbors Wildlife website (Oct 28 2026; written by GNW Website 14, for GNW Website 15)

Previous chat: GNW Website 14 (before it, GNW Website 13). Renamed from docs/handoffs/gnw-website-14.md and cut down to what is current (it had grown to 105 KB, about 40,000 tokens to read at every chat start). The full record of GNW Website 7 to 13 is in git: `git show 801d5a5:docs/handoffs/gnw-website-14.md`; every page's decisions are also in its review file in docs/reviews/.
Scheduled checks: none yet. GNW Website 15 sets two in its own chat once the owner approves the November page (job A): Nov 1, early morning Toronto (go live and the live note) and Dec 1 (take the page down). List them here when set.

## After the handoff (from GNW Website 14, Oct 28, 12:41 PM; read this first)
- After the owner had started GNW Website 15, GNW Website 14 drafted a reply note to ADS 35 (12:32 PM). The owner has NOT pasted it to the ads chat. GNW Website 15 owns it now: get the owner's answers to calls 1 to 3 in docs/reviews/2026-10-28-november-special-review.md, change the note where an answer differs from the defaults it assumes (regular price off; "every animal"; the guarantee line stays), head it "from GNW Website 15" with the time it is given, and give it to the owner in one code box. If the owner's answers mean the page changes, rebuild and run the checks first.
- Nothing else changed after the handoff: the November page and its review are as described below. GNW Website 14 is closed.
- The draft, word for word:

```
For the ads chat (reply to ADS 35's note of Wed Oct 28, 9:25 AM), from GNW Website 14, Wed Oct 28, 12:32 PM

A. /november-special is rebuilt to your note: the price and what it covers, nothing else. Built and waiting for Duane's approval; not live. It goes live Nov 1, and the live note follows then.
- Title and H1: November Special: $699 + HST
- Under it: "Covers removing every animal that got into your home through one entry hole, and sealing that hole." Changed from "one animal": Duane's price covers every animal that came in through that hole, babies included.
- Then the same Call button (416-900-WILD), "A real person answers 24/7.", the Google rating line, Get Help Now (photos and text) and trust row as the other landing pages. No regular price, no extra entry-point pricing, no FAQs, no "starting at" or "from".
- Noindex, out of the sitemap, off the menus and the /wildlife index: reached from the ad only. Google Ads does not need it indexed.
- Two things in the ad text from 1:10 AM need to match the page:
  1. "Normally $850" is not on the page. Drop the headline "Normally $850, Now $699 + HST" and "normally $850" in description 1 too. Canada's Competition Act allows a "normally $X" claim only if most sales were at $X, or $X was the real price for most of the months around the ad. $850 only became the regular price Oct 16, and October was $599 all month.
  2. The page keeps the one standard trust-row line "Lifetime guarantee on every entry point we seal." until Duane decides. If he takes it off, drop the headline "Lifetime Re-Entry Guarantee" and description 2 as well.

B. Received. The three pages go to the next website chat, GNW Website 15, with your note word for word. Each page gets its own live note (URL, title, H1, trust row, banned words).

Needed back: the in-house ad group names for the November page before Nov 1, for the landing-page list.
```

FIRST: say the model. The owner's standing call is Fable for website writing; Fable ran out on Oct 28 until Sunday, so Opus 5.5 at Max effort is the fallback (owner, Oct 28, 9:23 AM). Explain the plan in a line or two and ask "Ready to start?". Follow the first rule in CLAUDE.md, "Best result first".

## Start here (GNW Website 15)
1. Act first on any note the owner pastes from the ads chat.
2. JOB A, nearly done: the November special page /november-special, built on the branch `claude/gnw-website-14` (its tip has this file), WAITING for the owner's "approved" and his answers to calls 1–3 in docs/reviews/2026-10-28-november-special-review.md: (1) "Normally $850" off (ads chat; safer under the Competition Act, explained there) or on (owner, 9:22 AM); (2) "every animal that got into your home through one entry hole" instead of the ads chat's "one animal"; (3) the one trust-row guarantee line stays or goes. If the owner answered in GNW Website 14, the top of the review file says so.
   After "approved": add /november-special to the landing-page list in CLAUDE.md with a short November special rule (the one page with a price; what it says; noindex; live Nov 1 to Dec 1; whether it carries the guarantee line) and set the two scheduled checks. Nov 1: the November commits must sit on top of the live branch (if job B went live first, rebase them onto `origin/claude/good-neighbors-v2-visual-redesign`), rebuild, run every check, fast-forward the live branch, then the live note headed "For the ads chat (…), from GNW Website 15": URL https://www.goodneighborswildlife.ca/november-special, title, H1, the trust-row line, the banned-words line, that the page is noindex and off the sitemap, and that the ad must match the page (no "Normally $850", and no guarantee claim if the page has none). Dec 1: a 302 /november-special → /wildlife/something-in-the-attic in next.config.ts (owner's call 6, pending), the page removed, `EXTRA_PATHS` in crawl.mjs and the firstscreen.mjs list updated, live.
   Never put the November page live before Nov 1: job B goes live from its own branch, without it.
3. JOB B (new): ADS 35's note of Oct 28, 9:25 AM, part B, word for word below: two new landing pages and one new section. Start a new session branch `claude/gnw-website-15` from the live branch (NOT from `claude/gnw-website-14`, which carries the November page). Plan first (a line or two, "Ready to start?"); then, page by page: every sentence in a review file, the owner approves, live, and the live note the ads chat asked for (URL, title, H1, a line confirming the trust row and that no banned words appear). Raise these in the plan (seen by GNW Website 14, not yet asked):
   - Animal under deck, /wildlife/animal-under-deck: overlaps /wildlife/skunks, which leads with a skunk under the deck (keep every sentence unique across the two). No lifetime guarantee, by the owner's skunk rule (the mesh along the base seals the ground, not an entry into the house): `trustRow: "no-guarantee"`, in `NO_GUARANTEE`. Raccoons and squirrels under a deck are new on the site in any depth.
   - Attic cleanup, /wildlife/attic-cleanup: overlaps /wildlife/raccoon-feces-removal (attics are its second case; its retitle to "Raccoon Poop Removal in Toronto" is still an open owner's call; ask whether the new page changes that). "Do NOT mention insulation replacement (Duane's rule)": the live attic page, the feces page's FAQ "Do you replace attic insulation soiled by raccoon feces?", /wildlife/damage-repair and the repairs line in CLAUDE.md all name insulation replacement; ask whether the rule is for the new page only or the whole site. Garages and crawl spaces are new places on the site. Guarantee: the cleanup seals nothing, so none, as on the feces page, unless the owner says otherwise. Disinfecting is owner-confirmed; never say it kills roundworm eggs (CLAUDE.md feces rule).
   - Dead birds, a new section on /wildlife/dead-animal-removal: link /wildlife/balcony-pigeons (dead birds on a balcony are part of its package) and /wildlife/birds (vents, chimneys); keep "Your property, not the road"; still no "odour" and no guarantee on that page.
   - The three new URLs join the landing-page list (CLAUDE.md, firstscreen.mjs) when live; the must-not-move list is unchanged.
   - The ads chat may have saved the same note in the Project as claude/website-note-pages-2026-10-28.md (GNW Website 14 did not open it).
4. Owner's open calls carried (unchanged): the feces page retitle; his photos for the feces and balcony pages; whether attic, walls and raccoons lose their one "latrine" each; /wildlife/bats under 250 words.
5. The gnw-pricing skill still says the website carries the "Additional entry points found during the job are quoted before they're sealed." line; the owner took it off the page (Oct 28, 9:22 AM). GNW Website 14 offered to update the skill with a save card; check whether the owner took it.
6. Checks: scripts/checks/README.md. Lint with `npx eslint . --ignore-pattern '.scratch/**'`. npm through the proxy: `env npm_config_noproxy=localhost,127.0.0.1 NO_PROXY=localhost,127.0.0.1 no_proxy=localhost,127.0.0.1 npm ci`. First-screen check without installing anything: `mkdir -p <scratchpad>/tools/node_modules && ln -sfn $(npm root -g)/playwright <scratchpad>/tools/node_modules/playwright-core`, copy `firstscreen.mjs` there and run it from that folder (Chromium at /opt/pw-browsers/chromium). Baseline for the compare: `git worktree add -f .scratch/base origin/claude/good-neighbors-v2-visual-redesign`, copy `node_modules` in, `npm run build`, `npx next start -p 3001`, crawl with `http://localhost:3001` as the second argument. Stop servers with `pkill -f "next[-]server"`. The live sitemap has 37 pages; on a branch with the November page the crawl adds it by hand (38). The first-screen list is 32 landing pages on the live branch, 33 with the November page; job B adds three.
7. Going live = fast-forward `claude/good-neighbors-v2-visual-redesign` to the session branch, only after the owner's "approved" or "go live" and every check passing. Never start from the repository's default branch (older code, Wasp Problem). Relay headings: this chat's notes are headed "For the ads chat (…), from GNW Website 15"; the ads chat's come headed "For the website chat". Anything to paste goes alone in a code box.

## ADS 35's note, Oct 28 2026, 9:25 AM (word for word, as the owner pasted it into GNW Website 14)
For the website chat (reply to GNW Website 13, from ADS 35, Wed Oct 28, 9:25 AM)

A. /november-special: keep it to the price and what it covers. Nothing more on the page; anything else Duane says on the phone.
The page says only:
- November Special: $699 + HST
- Covers removal of one animal from your home and sealing the one entry hole it used.
- Call button (416-900-WILD, calls answered 24/7) and the photo/text option, same as the other pages.
Do not add: extra entry-point pricing, the regular price, what-if cases, FAQs, guarantee wording, "starting at" or "from". No other page on the site shows a price.
Send the live URL, title and H1 when it's up; the ads chat adds the November test ad on Nov 1.

B. Three pages for three new ad groups. The campaign split went live this morning: Postal Codes (in-house animals), Skunks & Deck, Birds, Dead Animal & Cleanup. Three new ad groups are landing on the nearest existing page, which Google scores as a partial match. Please build these, each built for its phrase (H1 repeats it, trust row, Call button first screen, same rules as the other landing pages, no prices):

1. Animal under the deck. Phrase: "animal under deck". Covers skunk, raccoon or squirrel under a deck, shed or porch: find the den, one-way door out at dusk, babies checked first, gap sealed so nothing digs back in. Suggested URL: /wildlife/animal-under-deck. Ad group "Animal Under Deck" lands on /wildlife/skunks until this exists.

2. Attic cleanup and disinfection. Phrase: "attic cleanup" (title and H1 must say "attic cleanup", not "feces"; nobody searches "feces"). Covers raccoon and squirrel waste removed, space disinfected, entry sealed so it stops, attics, decks, garages, crawl spaces. Do NOT mention insulation replacement (Duane's rule). Suggested URL: /wildlife/attic-cleanup. Ad group "Attic Cleanup & Disinfection" lands on /wildlife/raccoon-feces-removal until this exists.

3. Dead birds on the dead-animal page (/wildlife/dead-animal-removal): add a section for a dead bird or pigeon in a vent, chimney or on a balcony: removed, nest and droppings cleared, area cleaned. Keep the line that street and road pickups are the city's job. Ad group "Dead Bird Removal" already lands here.

When each is live, send: URL, title, H1, and a line confirming the trust row and that no banned words (cheapest, fastest, discreet, before 4 PM, subject to availability) appear. The ads chat then moves the final URLs and checks the page live. Must-not-move list unchanged.

## GNW Website 14 (Oct 28, inside the GNWW Project; Fable 5.1, then Opus 5.5 at Max from 9:23 AM)
- Session branch `claude/gnw-website-14` from the live branch at 801d5a5. The live branch did not move in this chat.
- Built /november-special for ADS 35's November test ad: first a 1,547-word page (2:33 AM, Fable), cut by the owner (2:57 AM to 9:22 AM), then rebuilt to ADS 35's 9:25 AM note as a 94-word page (Opus): title and H1 "November Special: $699 + HST", the line "Covers removing every animal that got into your home through one entry hole, and sealing that hole.", the standard landing-page hero and trust row, the closing band; noindex, off the menus, the /wildlife index and the sitemap. Review with the three open calls: docs/reviews/2026-10-28-november-special-review.md. Checks passed (crawl 38 pages, Problems: none; compare: only the new page; first screen 33 of 33).
- Check scripts: crawl.mjs gained `EXTRA_PATHS` (pages crawled outside the sitemap) and `ALLOWED_FIGURES` (a price allowed on /november-special only: $699 and $850; GNW Website 13's guess that "$699" would pass the old dollar-figure ban was wrong); firstscreen.mjs lists the page (33); README updated.
- Fact checked for call 1: the Competition Act's ordinary-selling-price tests (Competition Bureau, "Ordinary selling price"; BLG, May 2025).
- Relay: a reply note to ADS 35 drafted Oct 28, 12:32 PM, after GNW Website 15 had started, and NOT sent (the owner had not pasted it); GNW Website 15 owns it (see "After the handoff" at the top). The live note follows on Nov 1. ADS 35 still owes the in-house ad group names before Nov 1.
