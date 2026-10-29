Chat name: GNW Website 18

# Handoff: Good Neighbors Wildlife website (Thu Oct 29 2026, about 12:15 AM; written by GNW Website 17, for GNW Website 18)

Previous chats: GNW Website 17 (its log: `docs/handoffs/gnw-website-17.md` on this branch, `claude/gnw-website-16`) and GNW Website 16 before it. Older records are in git and in docs/reviews/.

FIRST: say the model. The owner's standing pick for website writing is Fable, back from Sunday Nov 1; before then Opus 5.5 at Max effort. This chat's real job is writing three new pages, so Opus 5.5 at Max from the start (GNW Website 17 told the owner so). Explain the plan in a line or two and ask "Ready to start?". Follow CLAUDE.md ("Best result first", "Search research first", "One page per job") and the owner's "slow down" (Oct 28, 1:52 PM): facts and research first, talk it through, then one finished version.

Setup: `add_repo` with access "push" (the access every GNW Website chat uses to save pages and put them live; say so in one line when asking). Clone the live branch with a generous timeout: `git clone --depth 50 --branch claude/good-neighbors-v2-visual-redesign https://github.com/badadandotcom-droid/good-neighbors /home/claude/good-neighbors`. A shallow clone tracks one branch only, so fetch the others with explicit refspecs: `git fetch --depth 50 origin +refs/heads/claude/gnw-website-16:refs/remotes/origin/claude/gnw-website-16` (the same for `claude/gnw-website-14`). Work on a new branch `claude/gnw-website-18` made from `origin/claude/good-neighbors-v2-visual-redesign`; run `git branch --unset-upstream` (otherwise a plain `git push` puts it live) and push only with `git push origin claude/gnw-website-18`. After the first push, add its refspec (`git config --add remote.origin.fetch +refs/heads/claude/gnw-website-18:refs/remotes/origin/claude/gnw-website-18`, then fetch) and set `branch.claude/gnw-website-18.remote` to origin and `.merge` to `refs/heads/claude/gnw-website-18`; without that the session's stop hook reports the branch as unpushed (GNW Website 17, Oct 28).

## Scheduled checks: move them into this chat at the start
GNW Website 17 holds two (it moved them from GNW Website 16 on Oct 28, about 9:25 PM). Create the new pair here with `send_later` (texts at the end of this file, word for word; `initiation` human_request), then delete the old pair (`delete_trigger`), then run `list_triggers` to confirm only the new pair is left, and record the new IDs in this file.
- `trig_0157iAXbVmKaPhacqsPfi34D`: Sun Nov 1, 12:05 AM Toronto (`at` 2026-11-01T04:05:00Z; still daylight time then), "Nov 1: November page live (GNW Website 17)".
- `trig_01QGFk9XbunGr55fxo73fn7V`: Tue Dec 1, 12:05 AM Toronto (`at` 2026-12-01T05:05:00Z), "Dec 1: November page down (GNW Website 17)".
Both were approved by the owner (Oct 28, 1:35 PM; the page itself 1:11 PM), so neither run needs a further yes. If this chat hands off before they fire, the next chat moves them again.

## The job: three new pages, the cleanup lines off the animal pages, quiet links. One review batch.
Source of truth: `claude/keyword-page-map-final-2026-10-28.md` (ADS 38, Oct 28, about 11:55 PM). Read it in full with the Projects tool: it quotes each of the owner's decisions with its time. The pattern behind the account's best Quality Scores: `claude/qs7-pattern-2026-10-28.md` (part done; ADS 39 adds the ad and page reads). Raw Keyword Planner table: `claude/keyword-page-map-2026-10-28.md` (Canada, Google, Oct 2025 to Sep 2026; "10" means 0 to 10 a month). Competitor look: `claude/competitor-pages-2026-10-28.md`. These replace the page requests in `claude/website-note-pages-2026-10-28.md` and Job B in gnw-website-17.md.
1. NEW /wildlife/raccoon-under-deck. Main phrase "raccoon under deck" (70 a month, plus about 40 typed "racoon"). The new ad's pinned headline 1 is "Raccoon Under Your Deck?". No lifetime guarantee by the Oct 27 rule in CLAUDE.md (the deck mesh seals the ground, not an opening into the house): `trustRow: "no-guarantee"`. The final doc notes the owner hasn't been asked about deck work: call 6.
2. NEW /wildlife/attic-cleanup. Main phrase "attic cleanup services" (Google's pool with "attic cleaning services": 110 a month, down 81% on a year). Soiled insulation removed and replaced belongs here (owner, ADS 38, 11:28 PM: "If you want it for organic search, sure."; owner, GNW Website 17, 11:17 PM: "Yes, we do."). No lifetime guarantee: a cleanup is not a sealing job (the feces page rule, Oct 22).
3. NEW /wildlife/dead-bird-removal. Main phrase "dead bird removal" (every phrase 10 a month). Written fresh: nothing carried over from /wildlife/dead-animal-removal. No guarantee (pickup seals nothing; dead-animal rule, Oct 22).
Each page's must-cover phrases, the ad claims it must back and what stays off it are in the final doc. The URLs are the ads chat's suggestions. Title and H1 carry the doc's main phrase, plus Toronto per CLAUDE.md's SEO rule.
4. Off the animal pages (rule 1; owner, ADS 38, 11:31 PM: "I don't want someone who's searching [animal] in attic, and then somehow they're seeing attic cleanup. They shouldn't see it on the site"). Lines that offer cleanup or insulation replacement (GNW Website 17 scan of the live branch at 39f6c6a):
   - Raccoon page: species-pages.ts:91 (repair paragraph: "plus flattened or soiled attic insulation", and its link to the feces page); :111 ("which is why the attic cleanup is part of the job rather than something left to you"); wildlife.ts:50 (repair block; check whether it renders on the page).
   - Attic page: situations.ts:157 (process step "Cleanup, insulation and roof repair"); :183-185 (FAQ "Do you clean up and replace the insulation?"); wildlife.ts:218-222 (section "Attic cleanup, insulation and roof repair" and its feces-page link).
   - Lines that only describe the animal (squirrels nest in the insulation; insulation gets soiled, as damage): raccoon species-pages.ts:64, :70, :71; squirrel :159, :167; attic situations.ts:129, :136, :142, :176; walls :250, :271. Claude's reading: keep them (call 5).
   Both pages are ad landing pages (must-not-move list): URLs, titles and H1s stay, and the ads chat gets a note when they change. The attic page is one of the account's best landing pages ("Above average" landing page on all 8 of the attic and walls pages' keywords, qs7 doc). The change keeps its main subject, so the risk to that rating looks small (my estimate; it can't be measured until Google re-rates the page).
5. Quiet links (rule 3; owner, ADS 38, 11:35 PM). Each new page, and the feces page (it loses its only two links in item 4), gets a low-key link from the main site, for example in the footer's Wildlife column, where "Dead Animal Removal" already sits (components/layout/Footer.tsx:43). Each new page is `unlisted` (off the /wildlife index), in the sitemap, and, once live, on CLAUDE.md's landing-page list and in firstscreen.mjs (in `NO_GUARANTEE` where it has no guarantee).
6. Rule 2 (owner, ADS 38, 11:45 PM: "I don't even want you to look at the other page when you're deciding what to write for a new page"): write each page without reading the other pages' copy; CLAUDE.md's rules still apply. Afterwards, check by script that no sentence repeats one on any other page.
7. Rule 4 (owner, ADS 37, 8:33 PM: "We shouldn't give a time of day either."): no time of day for when an animal leaves on the new pages. The skunk page is call 2.

## Calls for the batch (the owner decides; Claude's picks are suggestions, not decisions)
1. Insulation on pages ADS 38 didn't name. GNW Website 17 asked at 11:45 PM with the full explanation; not answered. The pages: the bird page (species-pages.ts:305, wildlife.ts:158), the four region hubs (markets.ts:83, 172, 262, 343), the FAQ (faq.ts:78), damage-repair (app/wildlife/damage-repair/page.tsx:53-54, repairs.ts:27). A: the bird page and the hubs follow rule 1; damage-repair and the FAQ keep insulation (Claude's pick: removal searchers land on the first two, and the last two are where people ask about repairs). B: only ADS 38's six pages. C: all seven drop it. Competitors: Skedaddle's bird page and Critter Control's Toronto page both mention insulation (competitor doc).
2. Skunk page and rule 4. The final doc lists /wildlife/skunks as unchanged, but two lines give the exit time: species-pages.ts:402 ("The skunk goes out at dusk as it always does and cannot get back in.") and :414 ("so the skunk can leave at dusk but not come back"). Claude's pick: drop the time from those two lines only; keep :381 (the skunk's daily routine, which helps people recognize one) and :424 ("Keep pets in at dusk and dawn"). /wildlife/skunks is an ad landing page: note to the ads chat when it changes.
3. A dead-bird do-it-yourself answer section ("how to dispose a dead bird", 110 a month): the ads chat's suggestion; the owner has not been asked.
4. The feces page's deck section could link to the new raccoon-under-deck page, the way it already links to /wildlife/skunks: Claude's suggestion.
5. The animal-description lines in item 4: keep (Claude's reading) or cut.
6. Deck page guarantee: none, by the Oct 27 rule (the mesh seals the ground, not an opening into the house). Confirm.

## Facts to check before writing (say plainly what is not checked)
- Dead birds: the federal Migratory Birds Convention Act and the Migratory Birds Regulations, 2022, on handling and disposing of a dead migratory bird, and on nests (a nest in use stays until the young have left; some species' nests are protected all year). The page's "nest and droppings cleared" must stay inside the law. Pigeons, starlings and house sparrows are not protected (verify). CLAUDE.md's birds rule applies.
- Attic cleanup: never say the disinfecting kills roundworm eggs; no "latrine"; "clean and safe" must not suggest the eggs are dead. Insulation search volumes are not checked yet (final doc).
- Raccoon under the deck: babies checked first; no time of day; no attic or cleanup content; skunks stay the skunk page's job; groundhogs wait for spring (final doc).

## Coming from the ads chat later
- ADS 38/39 runs the full audit of every keyword and landing page against the research; the website side acts on its notes (owner's Kaizen order, Oct 28).
- The North York city page is the only city page rated "Below average" on landing page (qs7 doc, point 6; cause not checked).

## Still open from earlier (unchanged)
The owner's photos for the feces and balcony pages; the one "latrine" each on the attic, walls and raccoon pages (leave unless he says); /wildlife/bats under 250 words.

## Decisions recorded (audit-ready-decisions)
- Oct 28, 9:22 PM, owner: "Start." The plan was approved in GNW Website 17: read the handoff, move the two scheduled checks, bring what's open. Applied: checks moved and read back with list_triggers at about 9:26 PM.
- Oct 28, 11:17 PM, owner: "Yes, we do." He still removes and replaces soiled attic insulation (GNW Website 16's question). Since ADS 38's rule 1 (11:31 PM), it appears on the cleanup page only. Item 2 of GNW Website 17's 11:20 PM note to ADS 38 ("every page that already offers it stays") was superseded by that rule.
- ADS 38's decisions: quoted with their times in the final doc (rules 1 to 7, pages 1 to 3, the unchanged pages).
- Open: calls 1 to 6 above.

## Checks and going live
As in docs/handoffs/gnw-website-17.md items 8 and 9 (this branch): npm through the proxy, lint, build, the baseline worktree, crawl and compare, first screen, the banned-word count, deploy status, the live read in the built-in browser, and going live by fast-forwarding the live branch only after the owner's yes and every check passing. Notes for the ads chat are headed "For the ads chat (…), from GNW Website 18", alone in a code box. For each new page, once live, send back what the final doc asks: URL, title, H1, where the quiet link sits, and one line confirming the trust row and that no banned word or time of day appears.

## Branch tips (Oct 29, about 12:15 AM)
Live `claude/good-neighbors-v2-visual-redesign` 39f6c6a; `claude/gnw-website-16` (handoffs only) at the commit that added this file; `claude/gnw-website-14` (November page) 8f863ce.

## Scheduled-check texts for `send_later` (word for word; `initiation` human_request)

Nov 1, `at` 2026-11-01T04:05:00Z, name "Nov 1: November page live (GNW Website 18)":
```
Scheduled check, moved from GNW Website 17 to GNW Website 18 (Duane said yes to it on Oct 28 at 1:35 PM). It is now Sun Nov 1, 12:05 AM Toronto: put the November special page live. Duane approved the page (Oct 28, 1:11 PM) and this go-live, so no further yes is needed. Follow item 3 ("Nov 1") of docs/handoffs/gnw-website-16.md on branch claude/gnw-website-14:
1. In /home/claude/good-neighbors (if it is gone, re-clone with push access), fetch origin. The live branch claude/good-neighbors-v2-visual-redesign has moved past 801d5a5 (39f6c6a, the feces page title, at least; more if GNW Website 18's pages went live), so rebase claude/gnw-website-14 onto origin/claude/good-neighbors-v2-visual-redesign; in CLAUDE.md (the landing-page list and the rules next to "no prices") and docs/handoffs keep both sides.
2. Rebuild and run every check (scripts/checks/README.md; how-to in docs/handoffs/gnw-website-17.md item 8, on branch claude/gnw-website-16): lint, crawl (sitemap pages plus /november-special; exactly $699 allowed, on that page only), first screen (every landing page plus /november-special). If anything fails, stop and tell Duane; never go live on a failure.
3. Fast-forward claude/good-neighbors-v2-visual-redesign to the branch and push. Once Vercel has deployed (gh api .../commits/<sha>/status: "Vercel – good-neighbors: success"), open https://www.goodneighborswildlife.ca/november-special in the built-in browser and check the title, H1, trust row with its guarantee line, noindex, and that it is not in /sitemap.xml.
4. Give Duane the live note for the ads chat, alone in a code box, headed "For the ads chat (…), from GNW Website 18" (or this chat's current name). It covers the URL https://www.goodneighborswildlife.ca/november-special, the title "November Special: $699 + HST | Good Neighbors Wildlife" and the H1 "November Special: $699 + HST". It also says the trust row with its guarantee line is there, that none of the banned words appear (cheapest, fastest, discreet, before 4 PM, subject to availability), that the page is noindex and off the sitemap, that the ad must match the page (no "Normally $850", no "per entry point"; the guarantee claim is fine), and that the ad should be paused by the end of Nov 30.
5. Record it as live in CLAUDE.md and the handoff. Send Duane one push notification that the page is live and the note is waiting. Remind him that Fable (his standing pick for website writing) should be back from today.
```

Dec 1, `at` 2026-12-01T05:05:00Z, name "Dec 1: November page down (GNW Website 18)":
```
Scheduled check, moved from GNW Website 17 to GNW Website 18 (Duane said yes to it on Oct 28 at 1:35 PM). It is now Tue Dec 1, 12:05 AM Toronto: take the November special page down. Duane approved this with the page on Oct 28, 1:11 PM (review call 6), so no further yes is needed. Follow item 3 ("Dec 1") of docs/handoffs/gnw-website-16.md on claude/gnw-website-14, or the newest handoff in docs/handoffs/ on the live branch:
1. In /home/claude/good-neighbors (if it is gone, re-clone with push access), fetch origin and start a fresh branch from origin/claude/good-neighbors-v2-visual-redesign (unset its upstream; push with an explicit branch name).
2. next.config.ts: add a temporary (302) redirect from /november-special to /wildlife/something-in-the-attic.
3. Remove app/november-special and lib/data/november-special.ts. Take /november-special out of EXTRA_PATHS and ALLOWED_FIGURES in scripts/checks/crawl.mjs and out of the list in scripts/checks/firstscreen.mjs, and update scripts/checks/README.md.
4. CLAUDE.md: cut the "November special page" rule and its landing-page entry down to a one-line record, and drop the "one exception" wording so the site is price-free again.
5. Run every check. If anything fails, stop and tell Duane. Then fast-forward the live branch, push, and once Vercel has deployed, confirm in the built-in browser that https://www.goodneighborswildlife.ca/november-special lands on the attic page.
6. Give Duane the note for the ads chat, alone in a code box, headed "For the ads chat (…), from" this chat's name. It says the page is down, /november-special now redirects (302) to /wildlife/something-in-the-attic, and the November ad should already be paused (due by the end of Nov 30). Record it in the handoff and send Duane one push notification.
```
