Chat name: GNW Website 25

# Handoff: Good Neighbors Wildlife website (Thu Nov 5 2026, about 4:50 PM Toronto; written by GNW Website 24, for GNW Website 25)

Previous: GNW Website 24 (Sonnet 5.5). The handoff it received is `docs/handoffs/gnw-website-24.md` on branch `claude/gnw-website-23`. Older how-to: `gnw-website-16.md` on branch `claude/gnw-website-16` (the checks, item 8; going live, item 9).

FIRST: say the model, explain the plan in a line or two and ask "Ready to start?" (Duane's rule). Sonnet is enough for reading, indexing requests and checks; Fable or Opus for any judgment writing. Remind Duane of the `/model` and effort for each new task. Follow CLAUDE.md. Read in this order: `claude/board.md` in the GNWW Project (update this chat's lines at close; read it again right before every write, because the Blog, Ads and Website chats all write it), the newest `claude/sync-log-YYYY-MM-DD.md`, `claude/accounts-list.md` (BEFORE asking Duane for any sign-in), then this file. The ads chat is ADS 53 (or the next number); the blog chat is GNW Blog 7 (or the next).

WARN DUANE EARLY about chat length (his rule). GNW Website 24 compressed once at about 4 PM Nov 5 and Duane was angry that no warning came first. Warn when the chat is about half full, not after.

## Scheduled check: move it at open, WITHOUT asking (Duane's standing rule, Nov 4: "That happens every time automatically.")
GNW Website 24 holds `trig_01QsEkoANKJyPXgADD2z1928`, "Dec 1: November page down (GNW Website 24)", `at` 2026-12-01T05:05:00Z (Tue Dec 1, 12:05 AM Toronto). Create the new one with `send_later` (text at the end of this file, word for word; `initiation` human_request), delete the old one with `delete_trigger`, confirm with `list_triggers` (`recurring: false`, `enabled: true`), record the new ID in this file's chat record and on the board. `delete_trigger` and `list_triggers` load through ToolSearch.

## Setup
- The clone GNW Website 24 used: `/home/claude/badadandotcom-droid/good-neighbors` (from `add_repo`; push worked). If it is gone: `add_repo` with access "push", then clone. Fetch the live branch with an explicit refspec before every push: `git fetch origin claude/good-neighbors-v2-visual-redesign` (then `FETCH_HEAD`). The live branch MOVES without this chat (the blog chats push posts to it): push the live branch only as a fast-forward (`git merge-base --is-ancestor FETCH_HEAD HEAD`, then `git push origin HEAD:claude/good-neighbors-v2-visual-redesign`).
- Work on a new branch `claude/gnw-website-25` made from the live branch (`git checkout -B claude/gnw-website-25 FETCH_HEAD`). Branch `claude/gnw-website-24` is at 04f4fd8, the same as the live tip when this was written.
- Deps: `npm ci` worked with the default environment on Nov 5 (24 s). If it fails, use `npm_config_noproxy=localhost,127.0.0.1` and NO_PROXY/no_proxy the same.
- Checks (scripts/checks/README.md): `npm run build && npx next start -p 3000`, then `node scripts/checks/crawl.mjs <outDir>`, compare.mjs (a "before" crawl of the live tip), and repeats.mjs (the "written fresh" sentence check; now on the live branch). firstscreen.mjs needs playwright-core: scratch folder with `node_modules/playwright-core` symlinked to `/opt/npm-tools/node_modules/playwright-core` and a copy of firstscreen.mjs, run from the repo root. Stop the server with `pkill -f "next[-]server"`.
- Built-in browser (the pane, `mcp__remote-devices__Claude_Browser__*`): keeps its sign-ins. Search Console is under duane@goodneighborswildlife.ca (URLs carry `/u/1/`). Vercel: via Google as badadandotcom@gmail.com. A hidden pane stalls PageSpeed; ask Duane to show it (Windows key + Shift + B on his Mac with the Windows keyboard). Claude in Chrome would not connect. Reading the live site: `javascript_tool` with `fetch(path+'?v='+Date.now())` inside the pane; shell `curl` to the live site is not used.

## Live now
Live branch `claude/good-neighbors-v2-visual-redesign` at 04f4fd8 (Nov 5, about 4:45 PM: "fully insured" unbanned in the repo checker, the site.ts comment and CLAUDE.md, plus repeats.mjs; docs and tools only, no page changed). Before it: df0af5f (blog posts 12 to 14, GNW Blog 6), 32fc2e6 (audit items G1 to G5, this chat), deb994f (bats page). /november-special is live until Dec 1 (the scheduled check). 14 blog posts are live.

## Done in GNW Website 24 (all on the board's DONE table too)
- Dec 1 check moved from 23 (the old one deleted).
- Vercel firewall look: nothing to fix (129 requests denied in a day, 128 from one Google LLC address probing for secret files, 1 from DomainTools; real Googlebot allowed; no setting changed).
- G1 to G5 live (commit 32fc2e6), read back live: "latrine" off /wildlife/raccoons, the attic page and the walls page; em dashes off /, /faq, /wildlife; the /wildlife index summaries and "Learn more" labels; the /about meta description; six neighbourhoods on Markham, Etobicoke, Newmarket, Ajax, Oshawa and Caledon only.
- Search Console requests: REQUESTED /blog/raccoon-and-squirrel-removal-cost, /blog/dead-animal-smell-in-attic, /blog/get-rid-of-skunks-under-deck, /wildlife/bats (recrawl), /blog/what-does-raccoon-poop-look-like, /blog/baby-raccoons-in-attic, /blog/what-is-humane-wildlife-removal. ALREADY ON GOOGLE (no request): the first posts, posts 3 to 5, /blog/signs-of-squirrels-in-attic, /blog/how-do-raccoons-get-in-the-attic, /blog/are-raccoons-in-attics-dangerous (the last one rechecked Nov 5, 4:33 PM). No "Quota Exceeded" Nov 5.
- Checker fix (04f4fd8).

## Jobs for GNW Website 25, in order
1. Search Console: re-read the Pages report about Nov 11 (31 indexed / 10 not on Nov 4 and Nov 5) and say what moved. Any NEW blog post or page (GNW Blog 7 may push 15 to 17) needs its own request: inspect first, request only if not on Google; about 10 to 20 a day; stop at the first "Quota Exceeded". Method that works in the pane: click the field at (460, 25), press Ctrl+A, type the full URL, wait 2 s, check the screenshot shows only that one URL (the field once kept the old URL and the new text was appended; do NOT request indexing for a garbled URL), press Return, wait about 5 s, screenshot. If "URL is not on Google", click "Request indexing" at about (724, 283), wait 15 to 30 s (the live-URL test takes up to two minutes on an indexed page), read "Indexing requested" or "Quota Exceeded", click Dismiss at (570, 355). Screenshots at scale 0.5. Duane said "Stop waiting 10 seconds": use waits of 2 to 8 s and re-screenshot, not long fixed waits.
2. raccoonproblem.ca: waiting on Duane's confirmation that he owns it; the forward is set in the DNS chat (GNW DNS 1). Site side optional, shown first.
3. Re-reads at about 100 impressions (the ads chat brings the numbers): Scarborough, Vaughan, walls, the Birds groups, the five bat groups.
4. Bat keyword numbers ("bats in attic", "bat exclusion", "bat control"): ADS 53 pulls them; record them when they come.
5. Work photos: waiting on Duane (shot list in `gnw-website-22.md` on `claude/gnw-website-21`, job 3).
6. Odour wording: Duane's call, still open (see the board). Do nothing on the dead-animal page until he decides.
7. One small leftover, not done on purpose: an em dash remains in `lib/data/wildlife.ts` on the attic situation's `approach` line ("handle the removal, then let you know" style line, outside the /, /faq, /wildlife scope Duane approved). The attic page may carry keywords scored 7+, which Duane does not want touched even for body copy: ask the ads chat before changing it.
8. FYI: "Vercel – wasp-problem" reads failure on every recent push to the shared repo (ed47e74 to 04f4fd8). Good Neighbors deploys fine. It is on the board as Duane's / the Wasp Problem chat's job; do not touch Wasp Problem.
9. Older: the poop page is organic-only; photos for the feces and balcony pages; a North York speed test.

## Decisions in GNW Website 24 (Duane's words, Toronto time)
- Nov 5, 3:40 PM: city pages whose keywords score 7 or higher are NOT touched at all, even body copy ("we don't want to fuck with it"). Neighbourhood lists: the first 6 of each list, higher-end first, not population; done on 6 pages, the other 8 keep their lists.
- Nov 5, about 4 PM: "Go ahead, do the whole batch. Plus G5." and "Okay, go ahead for both." (the Dec 1 check move and the indexing requests).
- Nov 5, 4:06 PM: "Stop waiting 10 seconds."
- Nov 5, 4:26 PM: "Fully insured is true and it's allowed." (the checker fix; he also wants it done without being asked twice once he has agreed).
- Nov 5, 4:33 PM: asked for one last check (`/blog/signs-of-squirrels-in-attic`, confirmed on Google), then this handoff.

## Slips in GNW Website 24 (told to Duane)
- G5: my first script overwrote Brampton's neighbourhood list in the working copy; caught in the diff before the commit; nothing wrong was pushed.
- Search Console: one lookup ran on a garbled URL (old and new text joined); no request was sent for it.
- No chat-length warning before the compression; see the top of this file.

## Dec 1 scheduled-check text for `send_later` (word for word; `initiation` human_request)

`at` 2026-12-01T05:05:00Z, name "Dec 1: November page down (GNW Website 25)":
```
Scheduled check, moved from GNW Website 24 to GNW Website 25 (Duane said yes to it on Oct 28 at 1:35 PM). It is now Tue Dec 1, 12:05 AM Toronto: take the November special page down. Duane approved this with the page on Oct 28, 1:11 PM (review call 6), so no further yes is needed. The ads chat said (Nov 2) it pauses the November ad group before this and confirms; if no confirmation has reached this chat, take the page down anyway (the redirect lands on the attic page, so a still-running ad does no harm) and say so in the note. Follow item 3 ("Dec 1") of docs/handoffs/gnw-website-16.md on claude/gnw-website-14, or the newest handoff in docs/handoffs/ on the live branch:
1. In /home/claude/good-neighbors (if it is gone, re-clone with push access), fetch origin and start a fresh branch from origin/claude/good-neighbors-v2-visual-redesign (unset its upstream; push with an explicit branch name).
2. next.config.ts: add a temporary (302) redirect from /november-special to /wildlife/something-in-the-attic.
3. Remove app/november-special and lib/data/november-special.ts. Take /november-special out of EXTRA_PATHS and ALLOWED_FIGURES in scripts/checks/crawl.mjs and out of the list in scripts/checks/firstscreen.mjs, and update scripts/checks/README.md.
4. CLAUDE.md: cut the "November special page" rule and its landing-page entry down to a one-line record, and drop the "one exception" wording (the guarantee rule and the speed rule) so the site is price-free again.
5. Run every check. If anything fails, stop and tell Duane. Then fast-forward the live branch, push, and once Vercel has deployed, confirm in the built-in browser that https://www.goodneighborswildlife.ca/november-special lands on the attic page.
6. Give Duane the note for the ads chat, alone in a code box, headed "For the ads chat (…), from" this chat's name. It says the page is down, /november-special now redirects (302) to /wildlife/something-in-the-attic, and the November ad should already be paused (due by the end of Nov 30). Record it in the handoff and send Duane one push notification.
```
