Chat name: GNW Website 26

# GNW Website 25 handoff to GNW Website 26 (written Mon Nov 9, 2026, about 11:45 PM Toronto)

Read order at open: claude/board.md, the newest claude/sync-log-*.md, then this file (on the Project as claude/gnw-website-26.md; in the repo as docs/handoffs/gnw-website-26.md on the live branch). GNW Website 25 ran Nov 5 to Nov 9 on Sonnet 5.5, then Opus 5.5 (Duane switched Nov 6). It ran far past full; it was compacted once.

## FIRST, at open (without asking, Duane's standing rule)
1. Say the model. Reading and checks: Sonnet is fine. Any new page wording: Opus or Fable.
2. Move the Dec 1 scheduled check into this chat: list_triggers, delete trig_01Ss3xMHvsi9JU4VkcUpcUpS ("Dec 1: November page down (GNW Website 25)", one-time, fires 2026-12-01T05:05:00Z = Tue Dec 1, 12:05 AM Toronto), and recreate it in this chat with send_later / create_trigger at the same time with the same text, changing only "moved from GNW Website 24 to GNW Website 25" to "moved from GNW Website 25 to GNW Website 26". Load the tools first (ToolSearch select:) and only delete once the new one exists; read the list back. Text to copy is the old check's prompt (read it with list_triggers).

## Done in GNW Website 25 (all live, read back)
- Dec 1 check moved in from GNW Website 24 (Nov 5).
- Sheila & Jim's testimonial + 5 garage-frame job photos on /wildlife/damage-repair (commit 1cc1f51, Nov 6; Duane's yes 1:05 PM). components/wildlife/CustomerJob.tsx, lib/data/testimonials.ts. Repo testimonial ban lifted (CLAUDE.md, site.ts comment, PLACEHOLDERS.md). Search Console: indexing requested Nov 6. PageSpeed Nov 9: 0.9 s, 99.
- Jump link "See a recent job: before, during and after" on damage-repair, between the two intro paragraphs, to #recent-job (commit 9a2acd8, Nov 8, Duane's "y").
- Google rating stars now link to the Google listing (https://www.google.com/maps?cid=10804586855027865417), not the write-a-review box (commits 42a2711 then cd771f7, Nov 8; Duane: "fix"; the Reviews-tab deep link showed one review on a phone). /review short link unchanged. CLAUDE.md updated.
- Logo references saved to Duane's Mac: Downloads > GNW photo library > logo-references (INDEX.md updated); notes added to claude/google-profile-and-reviews-14.md (Nov 8).
- ADS 58 note (Nov 8, three "Below average" landing pages): findings given, nothing changed. Fresh PageSpeed Nov 9 (3 runs, middle): dead-animal 0.9 s, birds 1.2 s, balcony-pigeons 1.2 s, raccoon-under-deck 0.9 s. Speed is not the cause. Note for the ads chat given twice (Nov 8 findings; Nov 9 speed). WAITING on the ads chat: OK or no on dead-animal 1(a) title "Dead Animal Removal Toronto: On Your Property, Same Day" (H1 kept), 1(b) a short GTA-cities line in the first section (body copy, open under the gate), 1(c) the [dead animal removal markham] keyword; and its call on the pigeon ad headline 2 ("Pigeons on Your Balcony?" matches /wildlife/balcony-pigeons, not /wildlife/birds). Record: claude/qs-fix-2026-11-08.md (ads chat's).
- Duane's decisions Nov 6 (on the board): owns raccoonproblem.ca and raccoonproblem.com; blog posts 15-17 yes (GNW Blog 7); US site name goodneighborswildlife.com (forward to the .ca; not checked live); attic-page em dash: leave it; /blog index guarantee line: stays off.
- Wrong-chat skill update proposed Nov 8 (customer work in the GNWW project goes to the Canadian operations project): save card shown; NOT confirmed saved. Check the synced wrong-chat-check skill for a "Project map" section; if missing, ask Duane once.

## Owed by GNW Website 26
1. Search Console Pages report re-read about Nov 11 (31 indexed / 10 not on Nov 4-5; dead-animal "Crawled, not indexed"). Request indexing for any new post or page (GNW Blog 7's posts 15-17 when live).
2. The ads chat's answers on the ADS 58 items above; build only what it OKs; show Duane wording first.
3. Remind Duane of his "when I'm home" list (board line "Reminders for Duane when he is home"). Duane, Nov 6: the GNW Website chats track the other chats and remind him what to do in them.
4. Dec 1 check (above). Odour/smell wording only after the ads chat's OK and a Quality Score gate check.

## How-to that worked
- Repo: /home/claude/good-neighbors; branch claude/gnw-website-N from the live branch; fetch with an explicit refspec (the clone is shallow and its fetch refspec covers one branch): git fetch origin +refs/heads/claude/good-neighbors-v2-visual-redesign:refs/remotes/origin/live, then git merge-base --is-ancestor origin/live HEAD and git push origin HEAD:claude/good-neighbors-v2-visual-redesign. Stop hooks ask for every change to be committed and pushed: push the session branch only until Duane approves.
- Checks: npm run build; npx next start -p 3000; node scripts/checks/crawl.mjs <dir>; firstscreen.mjs (playwright-core from /opt/npm-tools); repeats.mjs <dir> <page.html> <before.html>; a before crawl from a git worktree needs node_modules copied with cp -al (a symlink breaks Turbopack).
- PageSpeed in the built-in pane WORKED with the pane hidden on Nov 9 (it stalled on Nov 6): navigate to pagespeed.web.dev/analysis?url=...&form_factor=mobile&r=N, then poll document.body.innerText for "Largest Contentful Paint" for up to 40 s.
- Search Console: typing into the inspect field fails while the pane is hidden; set the input value by JS (native value setter + input event + Enter keydown), then click REQUEST INDEXING by JS and read "Indexing requested".
- Live read-backs: fetch(path+'?v='+Date.now(),{cache:'no-store'}) in the pane (the shell cannot reach the site).
- Board writes: re-read the board right before writing, pull the exact project_read text out of the session transcript with a script, assertion-checked replacements of your own lines only, project_write with local_path.

## Scheduled checks
- trig_01Ss3xMHvsi9JU4VkcUpcUpS (Dec 1, 12:05 AM): move it at open (above).
