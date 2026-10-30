Chat name: GNW Website 19

# Handoff: Good Neighbors Wildlife website (Thu Oct 29 2026, about 11:40 AM; written by GNW Website 18, for GNW Website 19)

Previous chats: GNW Website 18 (its log is below) and GNW Website 17 (`docs/handoffs/gnw-website-17.md` on branch `claude/gnw-website-16`). Older records are in git and in docs/reviews/.

FIRST: say the model, explain the plan in a line or two and ask "Ready to start?" (Duane's rule). Fable, Duane's standing pick for website writing, is back from Sunday Nov 1; until then Opus 5.5 at Max for writing. The jobs below are small, so Sonnet 5.5 at Medium is enough unless a new page gets written. Follow CLAUDE.md: it now carries the Oct 28-29 rules (everyone sees only what they searched; no time of day for when an animal leaves; new pages written fresh) and the three new pages.

Setup: `add_repo` with access "push" (the access every GNW Website chat uses to save pages and put them live; say so in one line when asking). Clone the live branch with a generous timeout: `git clone --depth 50 --branch claude/good-neighbors-v2-visual-redesign https://github.com/badadandotcom-droid/good-neighbors /home/claude/good-neighbors`. Fetch other branches with explicit refspecs: `git fetch --depth 50 origin +refs/heads/claude/gnw-website-18:refs/remotes/origin/claude/gnw-website-18` (this file), the same for `claude/gnw-website-16` (the GNW Website 17 handoff and the checks how-to) and `claude/gnw-website-14` (the November page). Work on a new branch `claude/gnw-website-19` made from `origin/claude/good-neighbors-v2-visual-redesign`; run `git branch --unset-upstream` and push only with `git push origin claude/gnw-website-19`. After the first push, add its fetch refspec and set `branch.claude/gnw-website-19.remote` to origin and `.merge` to `refs/heads/claude/gnw-website-19` (otherwise the stop hook reports the branch as unpushed).

## Scheduled checks: move them into this chat at the start
GNW Website 18 holds two (moved from GNW Website 17 on Oct 29, 10:03 AM). Create the new pair here with `send_later` (texts at the end of this file, word for word; `initiation` human_request), then delete the old pair (`delete_trigger`), then run `list_triggers` to confirm only the new pair is left, and record the new IDs in this file.
- `trig_01PvxWBt8hCMNygWzQZDEdqT`: Sun Nov 1, 12:05 AM Toronto (`at` 2026-11-01T04:05:00Z; still daylight time then), "Nov 1: November page live (GNW Website 18)".
- `trig_01HBFRfvdNVy1qAzt3AUaEZL`: Tue Dec 1, 12:05 AM Toronto (`at` 2026-12-01T05:05:00Z), "Dec 1: November page down (GNW Website 18)".
Both were approved by Duane (Oct 28, 1:35 PM; the page itself 1:11 PM), so neither run needs a further yes. If this chat hands off before they fire, the next chat moves them again.

## Live now (GNW Website 18)
286bf42 on the live branch: pushed Oct 29, 11:32 AM; Vercel "good-neighbors: success" 11:33 AM; read live in the built-in browser 11:33 AM. All three pages: status 200, robots "index, follow", the insurance and 24/7 lines, no guarantee line, no banned word, no time of day, four footer links, 3 of 3 in the sitemap.
1. /wildlife/raccoon-under-deck: title "Raccoon Under Deck Removal in Toronto", H1 "Raccoon Under Your Deck? Humane Removal in Toronto" (`lib/data/raccoon-under-deck.ts`).
2. /wildlife/attic-cleanup: title "Attic Cleanup Services in Toronto", H1 "Droppings in Your Attic? Attic Cleanup Services in Toronto" (`lib/data/attic-cleanup.ts`).
3. /wildlife/dead-bird-removal: title "Dead Bird Removal in Toronto", H1 "Dead Bird in a Vent, Chimney or Wall? Removal in Toronto" (`lib/data/dead-bird-removal.ts`).
Each page lives in its own data file (entry plus content), appended to `WILDLIFE` (lib/data/wildlife.ts) and `SITUATIONS` (lib/data/situations.ts). Also changed: the cleanup and insulation offers off the raccoon and attic pages, insulation off the bird page and the four hubs, "at dusk" off two skunk lines, damage repair's insulation card now links to the cleanup page, quiet footer links to the three pages and the feces page. The ads chat's copy of all this, with the facts' sources: `claude/website-live-2026-10-29.md` in the GNWW Project.

## Waiting on
1. ADS 40's reply to `claude/website-live-2026-10-29.md`: yes or no on the three links (the feces page's deck section to /wildlife/raccoon-under-deck; the cleanup page to the feces page; the skunk page's raccoon line to the deck page), the insulation search numbers, and the attic ad without "safe". Build the links it says yes to (small edits; every check; Duane's yes; tell the ads chat when live). Duane gave this call to the ads chat (Oct 29, 10:29 AM).
2. Duane: the North York page speed test (offered Oct 29, 10:23 AM; not answered). The "5.0 on Google · 4 reviews" line versus the project instructions' no-ratings rule: Duane is deciding (ADS 39, SYSTEM AUDIT); no site change until he does.
3. The ads chat's Kaizen audit notes (every landing page against the research; change little, add what's missing).
4. Still open from earlier: Duane's photos for the feces and balcony pages; the one "latrine" each on the attic, walls and raccoon pages (leave unless he says); /wildlife/bats under 250 words.

## GNW Website 18 log (decisions with Duane's words; audit-ready)
- 9:59 AM, Duane: "Yeah, start." Checks moved 10:03 AM (new `trig_01PvxWBt8hCMNygWzQZDEdqT` and `trig_01HBFRfvdNVy1qAzt3AUaEZL`; old pair deleted; read back with list_triggers).
- 10:11 AM: ADS 39's note for GNW Website 17, pasted by Duane. Acted on: titles carry the main phrase plus Toronto; H1s open with the problem and still name Toronto (CLAUDE.md); the deck page uses living, shed, porch and den; no guarantee on the deck page; the rating line stays as it is until Duane decides.
- 10:23 AM, Duane: "I don't care how long it takes. I don't care if I gotta start over from scratch." Claude's advice, not a decision: don't start over (the attic, walls, Toronto, Whitby and Vaughan pages are rated "Above average" on landing page); keep what works and add what's missing (his Oct 28 rule).
- 10:25 AM, Duane, on the attic ad's "attic left clean and safe": "it's left clean. Alright, and disinfected, but safe." Applied: the page says clean and disinfected, never safe; the ads chat is asked to drop "safe".
- 10:29 AM, Duane's answers to the eight questions: (1) "Number one, yes": insulation off the bird page and the four hubs, kept on the FAQ and damage repair. (2) "Number two, yes": "at dusk" cut from the two skunk lines. (3) "Number three, yes": the do-it-yourself dead-bird section. (4) "I'm not sure about number four. That's up to the abstract to decide based on what it thinks the score will be": the links go to the ads chat. (5) "Number five, yes": lines that only describe the animal stay. (6) "Number six, yes": no lifetime guarantee on the deck page. (7) "yeah, that's how we do it. We dig it under the ground and bend it outward so when they get to it, they can't do it. So yeah, you got it exactly right." (8) "Yes, for number eight, yes, we'll do that": vermiculite, the crew stops and tells the homeowner.
- 10:42 AM, Duane on the write-fresh rule: "When you're writing a new page, you don't even look at any other pages. That way there's no chance that you're copying stuff over. That makes sense."
- 11:30 AM, Duane: "go live and then hand off." Applied 11:32 AM; read back 11:33 AM.
- Checks before going live, all passing: eslint; build; crawl (40 sitemap pages, no duplicate titles, H1s or descriptions, "Problems: none"); compare (37 pages changed: every footer, plus the intended lines); first screen (all pass, the three pages in `NO_GUARANTEE`); banned words none; the sentence-repeat script (0 repeats after one shared region list on the attic page was reworded). Duane saw phone screenshots of the three pages before saying go live.
- Research: two Sonnet helper agents for the facts (sources in the Project doc above); a Haiku helper could not open Project docs (the known limit), so those reads were done in the main chat. Semrush returned "no API units".
- Chat length at handoff: about 66 tool calls and 12 messages from Duane.

## How-to added in GNW Website 18 (on top of gnw-website-17.md items 8 and 9)
- Sentence-repeat check: take the string literals from the new page's data file, split them into sentences of 5 or more words, and look for each in every sitemap page's main text (scripts, styles, header, nav and footer stripped) on a local `next start`.
- Phone screenshots for Duane: Playwright from `<scratchpad>/tools` (the playwright-core symlink), 390 x 844, deviceScaleFactor 1, full page, JPEG quality 70, FAQ buttons opened; send with SendUserFile (it scales images taller than 8000 px).
- Waiting for Vercel: a background Bash loop on `commits/<sha>/statuses` for "Vercel – good-neighbors" created after the push time (a preview of the same commit already shows success).
- Live read: built-in browser `preview_start` on a live page, then one `javascript_tool` call that fetches the pages and parses the title, H1, robots, trust lines and footer links.

## Branch tips (Oct 29, about 11:40 AM)
Live `claude/good-neighbors-v2-visual-redesign` 286bf42; `claude/gnw-website-18` is 286bf42 plus this file; `claude/gnw-website-14` (November page) 8f863ce, not rebased (the Nov 1 check does it); `claude/gnw-website-16` holds the older handoffs.

## Scheduled-check texts for `send_later` (word for word; `initiation` human_request)

Nov 1, `at` 2026-11-01T04:05:00Z, name "Nov 1: November page live (GNW Website 19)":
```
Scheduled check, moved from GNW Website 18 to GNW Website 19 (Duane said yes to it on Oct 28 at 1:35 PM). It is now Sun Nov 1, 12:05 AM Toronto: put the November special page live. Duane approved the page (Oct 28, 1:11 PM) and this go-live, so no further yes is needed. Follow item 3 ("Nov 1") of docs/handoffs/gnw-website-16.md on branch claude/gnw-website-14:
1. In /home/claude/good-neighbors (if it is gone, re-clone with push access), fetch origin. The live branch claude/good-neighbors-v2-visual-redesign has moved past 801d5a5 (to 286bf42 at least: GNW Website 18's three pages, Oct 29), so rebase claude/gnw-website-14 onto origin/claude/good-neighbors-v2-visual-redesign; in CLAUDE.md (the landing-page list, the guarantee exceptions and the rules next to "no prices"), scripts/checks/firstscreen.mjs (the PAGES list and the NO_GUARANTEE set) and docs/handoffs keep both sides.
2. Rebuild and run every check (scripts/checks/README.md; how-to in docs/handoffs/gnw-website-17.md item 8, on branch claude/gnw-website-16): lint, crawl (sitemap pages plus /november-special; exactly $699 allowed, on that page only), first screen (every landing page plus /november-special). If anything fails, stop and tell Duane; never go live on a failure.
3. Fast-forward claude/good-neighbors-v2-visual-redesign to the branch and push. Once Vercel has deployed (gh api .../commits/<sha>/statuses: "Vercel – good-neighbors: success" created after the push), open https://www.goodneighborswildlife.ca/november-special in the built-in browser and check the title, H1, trust row with its guarantee line, noindex, and that it is not in /sitemap.xml.
4. Give Duane the live note for the ads chat, alone in a code box, headed "For the ads chat (…), from GNW Website 19" (or this chat's current name). It covers the URL https://www.goodneighborswildlife.ca/november-special, the title "November Special: $699 + HST | Good Neighbors Wildlife" and the H1 "November Special: $699 + HST". It also says the trust row with its guarantee line is there, that none of the banned words appear (cheapest, fastest, discreet, before 4 PM, subject to availability), that the page is noindex and off the sitemap, that the ad must match the page (no "Normally $850", no "per entry point"; the guarantee claim is fine), and that the ad should be paused by the end of Nov 30.
5. Record it as live in CLAUDE.md and the handoff. Send Duane one push notification that the page is live and the note is waiting. Remind him that Fable (his standing pick for website writing) should be back from today.
```

Dec 1, `at` 2026-12-01T05:05:00Z, name "Dec 1: November page down (GNW Website 19)":
```
Scheduled check, moved from GNW Website 18 to GNW Website 19 (Duane said yes to it on Oct 28 at 1:35 PM). It is now Tue Dec 1, 12:05 AM Toronto: take the November special page down. Duane approved this with the page on Oct 28, 1:11 PM (review call 6), so no further yes is needed. Follow item 3 ("Dec 1") of docs/handoffs/gnw-website-16.md on claude/gnw-website-14, or the newest handoff in docs/handoffs/ on the live branch:
1. In /home/claude/good-neighbors (if it is gone, re-clone with push access), fetch origin and start a fresh branch from origin/claude/good-neighbors-v2-visual-redesign (unset its upstream; push with an explicit branch name).
2. next.config.ts: add a temporary (302) redirect from /november-special to /wildlife/something-in-the-attic.
3. Remove app/november-special and lib/data/november-special.ts. Take /november-special out of EXTRA_PATHS and ALLOWED_FIGURES in scripts/checks/crawl.mjs and out of the list in scripts/checks/firstscreen.mjs, and update scripts/checks/README.md.
4. CLAUDE.md: cut the "November special page" rule and its landing-page entry down to a one-line record, and drop the "one exception" wording so the site is price-free again.
5. Run every check. If anything fails, stop and tell Duane. Then fast-forward the live branch, push, and once Vercel has deployed, confirm in the built-in browser that https://www.goodneighborswildlife.ca/november-special lands on the attic page.
6. Give Duane the note for the ads chat, alone in a code box, headed "For the ads chat (…), from" this chat's name. It says the page is down, /november-special now redirects (302) to /wildlife/something-in-the-attic, and the November ad should already be paused (due by the end of Nov 30). Record it in the handoff and send Duane one push notification.
```

## GNW Website 19 log (Thu Oct 29 2026)
- Model: Sonnet 5.5 at the start; Opus 5.5 from about 2:49 PM (Duane: "model change. So you go again."); Duane asked at 5:02 PM which to use: Claude's advice Opus 5.5 at Medium for the go-live.
- Scheduled checks moved at 4:31 PM: new `trig_01Jt3AttwGb67fcA9iHhgp3Z` (Nov 1, 12:05 AM, "Nov 1: November page live (GNW Website 19)") and `trig_01Piqcafu6KWvTEwtqyDfDxx` (Dec 1, 12:05 AM, "Dec 1: November page down (GNW Website 19)"); GNW Website 18's pair deleted; read back with list_triggers.
- 2:49 PM: ADS 41's note (claude/ads-41.md section 6), pasted by Duane. Acted on: link a YES, link b NO, link c YES; insulation: no new heading or section.
- Built on `claude/gnw-website-19` (d902025): poop page deck section, "How to get rid of [raccoons under a deck](/wildlife/raccoon-under-deck) comes down to two things..."; skunk page, "...the job is much the same; raccoon removal covers [raccoons under decks and in sheds](/wildlife/raccoon-under-deck)." The link on the skunk line was moved off "raccoon removal" onto the descriptive words (Claude's proposal, Google's link guide: anchor text should describe the page it opens); no words changed on either page.
- Checks: eslint clean; build OK; crawl 40 pages "Problems: none", no duplicates; compare: 2 pages changed (feces, skunks), words identical on both; first screen 35 of 35 pass.
- 5:03 PM, Duane: "Yes. Yes, do whatever the answer I told you. Whatever is the best for our plan." (read as yes, with the descriptive link words). Live branch 286bf42 -> b3465b0, pushed 5:03 PM.
- Fri Oct 30, 1:58 AM: ads chat note pasted by Duane: /wildlife/raccoon-under-deck is live in Google Ads since 1:20 AM ("Raccoon Under Deck", 6 keywords); title, H1 and the one-way-door / babies-first / buried-mesh wording are matched to the ad, change only after telling the ads chat. Recorded in CLAUDE.md (deck page rule). The 5.0 rating line vs the project instructions' no-ratings rule (from ADS 39) put to Duane, unanswered so far; no site change.
