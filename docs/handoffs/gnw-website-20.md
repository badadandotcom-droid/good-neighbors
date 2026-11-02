Chat name: GNW Website 20

# Handoff: Good Neighbors Wildlife website (Mon Nov 2 2026, about 7 AM; written by GNW Website 19, for GNW Website 20)

Previous: GNW Website 19 (its log is in `docs/handoffs/gnw-website-19.md` on this branch). Older: `gnw-website-17.md` and `gnw-website-16.md` on branch `claude/gnw-website-16` (how-to for the checks, item 8; going live, item 9).

FIRST: say the model, explain the plan in a line or two and ask "Ready to start?" (Duane's rule). Fable is back from Nov 1 and is Duane's pick for website writing; Opus 5.5 at Medium is enough for small edits and go-lives. Follow CLAUDE.md.

## Setup
- `add_repo` with access "push" (needed to save pages and put them live). Clone with a generous timeout: `git clone --depth 50 --branch claude/gnw-website-19 https://github.com/badadandotcom-droid/good-neighbors /home/claude/good-neighbors`. Fetch the live branch with an explicit refspec: `git fetch --depth 50 origin +refs/heads/claude/good-neighbors-v2-visual-redesign:refs/remotes/origin/claude/good-neighbors-v2-visual-redesign`.
- Work on a new branch `claude/gnw-website-20` made from `origin/claude/good-neighbors-v2-visual-redesign` (the live branch; it holds everything from GNW Website 19 except this file and the last CLAUDE.md edits, which are on `claude/gnw-website-19`: merge or cherry-pick them in). `git branch --unset-upstream`; push only with `git push origin claude/gnw-website-20`; after the first push add its fetch refspec and set `branch.claude/gnw-website-20.remote` origin and `.merge` refs/heads/claude/gnw-website-20 (the stop hook otherwise reports it unpushed). Never leave a temporary local branch without a remote (the hook flags it).

## Scheduled check: move it into this chat at the start
GNW Website 19 holds one: `trig_01Piqcafu6KWvTEwtqyDfDxx`, Tue Dec 1, 12:05 AM Toronto (`at` 2026-12-01T05:05:00Z), "Dec 1: November page down (GNW Website 19)". Approved by Duane (Oct 28, 1:35 PM). Create the new one here with `send_later` (text at the end of this file, word for word; `initiation` human_request), delete the old one with `delete_trigger`, confirm with `list_triggers`, and record the new ID in this file. (The Nov 1 go-live check already ran: the November page went live Nov 1, 12:10 AM.)

DONE in GNW Website 20 (Nov 2, about 10:59 AM, Duane's "do what you gotta do now"): new check `trig_019TpsUpLRnxPxeaVgeCBcbZ`, "Dec 1: November page down (GNW Website 20)", `at` 2026-12-01T05:05:00Z, text word for word from the end of this file; the old `trig_01Piqcafu6KWvTEwtqyDfDxx` deleted; `list_triggers` shows only the new one for Dec 1. The next chat moves it again the same way.

## Live now
Live branch `claude/good-neighbors-v2-visual-redesign` at 5b685e2 (Nov 1, 12:10 AM; Vercel success; read live 12:11 AM).
- /november-special live (title and H1 "November Special: $699 + HST", guarantee and insurance lines, noindex, off the sitemap). The ads chat's November ad points at it (live since Nov 1); keep it up through Nov 30.
- Oct 29: the poop page's deck section links "raccoons under a deck" and the skunk page's raccoon line links "raccoons under decks and in sheds", both to /wildlife/raccoon-under-deck.

## Jobs for GNW Website 20, in order
1. The 311 line (asked by the ads chat, ADS 46, Nov 1, recorded in claude/sync-log-2026-11-01.md in the GNWW Project; the ads chat is "still waiting on your live note"; GNW Website 19 never received the request before Nov 2). Their words: one line above the Call button on /wildlife/dead-animal-removal and /wildlife/dead-bird-removal: "A dead animal on the road, a sidewalk or in a park? That's the City's job: call 311." No H1, trust row or URL change. Both pages already say 311 further down (situations.ts, the dead-animal entry; lib/data/dead-bird-removal.ts). Things to settle before building: (a) a line above the Call button pushes the button down on the phone's first screen; run firstscreen.mjs; (b) word it each page's own way (best-result-first rule: varied wording; the dead-bird page is about birds, "dead bird on the road" may fit better); (c) show Duane the wording and a phone screenshot, get his yes, go live, read live, send the ads chat URL + exact line for each page.
2. Balcony netting, waiting on Duane: ADS 45 says he hasn't confirmed he installs netting; CLAUDE.md records it as owner-confirmed (Oct 27–28) and /wildlife/balcony-pigeons says so. Asked Nov 1, 12:49 PM; no answer yet. If "netting no": cut netting from the page (keep spikes or wire), show him first; the title and H1 say "Netting", so the ads chat must be told before any title or H1 change.
3. Poop page is organic-only now (its ad group paused, ADS 45). Suggested to Duane, not decided: he requests indexing in Search Console (URL inspection > Request indexing); offered to check the page against the saved search research and suggest additions.
4. Still open from earlier: Duane's photos for the feces and balcony pages; the one "latrine" each on the attic, walls and raccoon pages (leave unless he says); /wildlife/bats under 250 words; the North York page speed test (offered Oct 29, not answered).

## Decisions in GNW Website 19 (Duane's words, Toronto time)
- Oct 29, 5:03 PM: "Yes. Yes, do whatever the answer I told you. Whatever is the best for our plan." (links a and c live, on the descriptive link words).
- Oct 30, 2:23 AM: "do option A." The "5.0 on Google · 4 reviews" line stays on the site; the Project instructions (claude/project-instructions-current.md) now allow that one real rating line on the website and still ban ratings and reviews in ad text.
- Oct 30, 1:58 AM (ads chat): /wildlife/raccoon-under-deck carries the "Raccoon Under Deck" ad group; title, H1 and the one-way-door / babies-first / buried-mesh wording change only after telling the ads chat (in CLAUDE.md).
- Nov 1 (ADS 45, Oct 30–31): pending sitelinks to /faq, /about, the deck, balcony, dead-bird, dead-animal and cleanup pages, and three FAQ questions are tell-the-ads-chat-first (in CLAUDE.md). ADS 45 also said the "Contact & Send Photos" sitelink was coming off, but the ads chat's Nov 1 log (ADS 46) says Duane reversed that and it stays; CLAUDE.md now says it stays.
- Nov 2, ads chat note: the November ad is live; before the Dec 1 take-down the ads chat pauses the November ad group and confirms.

## How-to that worked
- Checks: `npm ci` with `npm_config_noproxy=localhost,127.0.0.1` and the same NO_PROXY/no_proxy; `npx eslint . --ignore-pattern '.scratch/**'`; `npm run build`; servers with run_in_background (`npx next start -p 3000`, base build in `.scratch/base` worktree on `-p 3001`); wait with `curl --retry 40 --retry-connrefused --retry-delay 1`; `node scripts/checks/crawl.mjs <dir> <url>` (40 sitemap pages + /november-special), `compare.mjs`; firstscreen from `<scratchpad>/tools` with a `node_modules/playwright-core` symlink to `$(npm root -g)/playwright` (36 pages now). Stop servers with `pkill -f "next[-]server"` (exit-143 notices follow; harmless). Background servers stop on their own after their time limit.
- Words-unchanged check: strip scripts, styles and `<a>` tags from both crawls and compare the text.
- Phone screenshots of one paragraph: Playwright at 390 wide, hide fixed/sticky elements, clip to the heading and paragraph; send with SendUserFile.
- Deploy: `gh api repos/badadandotcom-droid/good-neighbors/commits/<sha>/statuses`, wait for "Vercel – good-neighbors" success ("Vercel – wasp-problem: failure" shows on every push; not ours).
- Live read: built-in browser `preview_start` on a live page, then one `javascript_tool` fetch-and-parse of the pages (status, title, H1, robots, the lines and links).
- The Project's "Custom instructions" box only points to claude/project-instructions-current.md; Claude can update that doc but not the box.

## Dec 1 scheduled-check text for `send_later` (word for word; `initiation` human_request)

`at` 2026-12-01T05:05:00Z, name "Dec 1: November page down (GNW Website 20)":
```
Scheduled check, moved from GNW Website 19 to GNW Website 20 (Duane said yes to it on Oct 28 at 1:35 PM). It is now Tue Dec 1, 12:05 AM Toronto: take the November special page down. Duane approved this with the page on Oct 28, 1:11 PM (review call 6), so no further yes is needed. The ads chat said (Nov 2) it pauses the November ad group before this and confirms; if no confirmation has reached this chat, take the page down anyway (the redirect lands on the attic page, so a still-running ad does no harm) and say so in the note. Follow item 3 ("Dec 1") of docs/handoffs/gnw-website-16.md on claude/gnw-website-14, or the newest handoff in docs/handoffs/ on the live branch:
1. In /home/claude/good-neighbors (if it is gone, re-clone with push access), fetch origin and start a fresh branch from origin/claude/good-neighbors-v2-visual-redesign (unset its upstream; push with an explicit branch name).
2. next.config.ts: add a temporary (302) redirect from /november-special to /wildlife/something-in-the-attic.
3. Remove app/november-special and lib/data/november-special.ts. Take /november-special out of EXTRA_PATHS and ALLOWED_FIGURES in scripts/checks/crawl.mjs and out of the list in scripts/checks/firstscreen.mjs, and update scripts/checks/README.md.
4. CLAUDE.md: cut the "November special page" rule and its landing-page entry down to a one-line record, and drop the "one exception" wording (the guarantee rule and the speed rule) so the site is price-free again.
5. Run every check. If anything fails, stop and tell Duane. Then fast-forward the live branch, push, and once Vercel has deployed, confirm in the built-in browser that https://www.goodneighborswildlife.ca/november-special lands on the attic page.
6. Give Duane the note for the ads chat, alone in a code box, headed "For the ads chat (…), from" this chat's name. It says the page is down, /november-special now redirects (302) to /wildlife/something-in-the-attic, and the November ad should already be paused (due by the end of Nov 30). Record it in the handoff and send Duane one push notification.
```

## GNW Website 20 log (Toronto time)
- Nov 2, 10:59 AM: Dec 1 check moved into this chat (above). Model: Sonnet for the move, then Opus 5.5 at Max (Duane's switch) for the 311 line.
- Nov 2, about 11:15 AM: the 311 line built on `claude/gnw-website-20`, not live. New optional field `aboveCallLine` in `SituationContent` (lib/data/situations.ts), rendered by `SituationPage` right above the Call button (order 4 on phones, between the H1 and the buttons; above the buttons from `sm` up). Plain text, never a tel: link (PhoneClickTracker counts every tel: tap as the Ads phone-tap conversion). Wording, each page its own (best-result-first; facts re-checked on the City of Toronto's "Enforcement & assistance" page Nov 2: large dead animals and larger birds on public property are picked up on a 311 request, small ones are not):
  - /wildlife/dead-animal-removal: "Is it on a road, a sidewalk or in a park? That's for the City: in Toronto, call 311."
  - /wildlife/dead-bird-removal: "A dead bird on the street or in a park? Call the City instead: in Toronto, that's 311."
  - Checks: lint, types, build; crawl (no problems); compare: only these two pages changed, and the only text change on each is the new line; firstscreen: all 36 pass, Call button bottom 403 → 460 px (dead animal) and 440 → 497 px (dead bird), fold 738. Waiting on Duane's yes.
- Nov 2, 11:17 AM, owner's yes on both lines as shown (phone before/after screenshots): "Yes. Makes sense. I'm glad you thought about it and doing the right thing." Recorded in CLAUDE.md (the dead animal and dead bird page rules, and the first-phone-screen rule).
