Chat name: GNW Website 27

# GNW Website 26 handoff to GNW Website 27 (written Wed Nov 11, 2026, about 11:15 PM Toronto)

Read order at open: claude/board.md, the newest claude/sync-log-*.md, then this file (on the Project as claude/gnw-website-27.md; in the repo as docs/handoffs/gnw-website-27.md on the live branch). GNW Website 26 ran Nov 9 to Nov 11 on Opus 5.5. It ran long; it was not compacted.

## FIRST, at open
1. Say the model. Reading and checks: Sonnet is fine. Any new page wording: Opus or Fable.
2. Duane's standing rule (memory): explain the plan in a line or two and ask "Ready to start?" before using tools.
3. Move the Dec 1 scheduled check into this chat (standing rule, no need to ask): load the tools first in ONE ToolSearch call (select:mcp__claude-code-remote__list_triggers,mcp__claude-code-remote__delete_trigger; send_later is already loaded), read trig_01Ct8172GiD1mLRMUv5vBUc7 ("Dec 1: November page down (GNW Website 26)", one-time, fires 2026-12-01T05:05:00Z = Tue Dec 1, 12:05 AM Toronto) with list_triggers, recreate it with send_later at the same time with the same text, changing only "moved from GNW Website 25 to GNW Website 26" to "moved from GNW Website 26 to GNW Website 27", name it "Dec 1: November page down (GNW Website 27)". Delete the old one only after the new one exists; read the list back. Slip in 26: the list/delete tools were not loaded at open, so the move waited a turn. Load them first.

## Done in GNW Website 26 (all live, read back)
- Review count 6 → 8 on every page (commit e3c6496, Nov 9; Google Profile and Reviews 16 note). lib/config/site.ts `count`. Read back live on /, the York hub, damage-repair.
- "Same-day service before 4 PM" in Google snippets for /service-areas and /contact: NOT on the live pages (Google's old copy). Search Console "Indexing requested" for both (Nov 9).
- Dead Animal page (ADS 58 answers; Duane, Nov 10, 11:00 PM: "if you in the ads chat decide it's the best chance of getting the highest score, I'm okay with all of it. Do it all."): title "Dead Animal Removal Toronto: On Your Property, Same Day" (H1 unchanged); first section now "...across the GTA in Markham, Vaughan, Mississauga and the rest of Peel, York and Durham Region." Commit b4bc96e. Indexing requested.
- Birds page (ADS 60 note, Nov 11; gate OPEN, scores 2 and 3): "Pigeons in Toronto" second paragraph now ends "We do pigeon control and pigeon removal across the GTA too, in Markham, Vaughan, Richmond Hill, Mississauga, Brampton, Ajax, Pickering and Whitby." Title, H1, URL, first phone screen unchanged. Commit 0142212. Indexing requested.
- CLAUDE.md carries both page changes.
- Dec 1 check moved from 25 into 26 (trig_01Ct8172GiD1mLRMUv5vBUc7; 25's deleted).
- Wrong-chat skill: SAVED (has the "Project map" section).
- Board: Swabbed line now covers Wasp Problem too (Duane, Nov 9, 11:54 PM: "Those things for Swab, they're also for Wasp problem, which is in a different project as well"). Nothing for either is done in this Project.

## Standing yes (Duane, Nov 10, 11:00 PM)
When the ads chat decides a page change gives the best chance at the highest Quality Score, build it without asking Duane again; still check the gate (no page whose keywords score 7+), keep title/H1/URL/first screen unless the note says otherwise, show him the wording in the reply, and give the ads chat the commit hash and live read-back.

## Owed by GNW Website 27
1. Search Console Pages report re-read: was DUE Nov 11, NOT DONE in 26. Nov 4/5 reading: 31 indexed, 10 not (dead-animal "Crawled, not indexed"; north-york, /wildlife, attic, walls "Discovered, not indexed"). Write the new numbers on the board's Search Console line. Request indexing for any page still out, and for GNW Blog 7's posts 15 to 17 once live.
2. Remind Duane of his "when I'm home" list. He said Nov 9 "We'll do it tomorrow"; not started. In order, with the brain for each (Duane asked for this every time):
   1. Close the old "CHATGPT AUDIT 1" chat: no brain needed (he taps it).
   2. Pick about 3 jobs for Profile photos (Google Profile and Reviews N): Opus medium to choose; Sonnet to upload.
   3. Local Services Ads insurance certificate: Sonnet low.
   4. Google Sheets connector in the ads chat: Sonnet low to switch on; Sonnet medium to read the call sources.
   5. Wasp Problem's failing Vercel build (Wasp chat): Sonnet medium to read the log; Opus if code changes.
   6. Ad photos (trial crops exist: Downloads > GNW photo library > ads-image-assets > trial, contact sheet): Opus medium to pick; the ads chat uploads on Fable.
   7. Parked: GNW DNS 1 (Fable), AI SEARCH 2 (Sonnet medium), Swabbed/Wasp Problem blog setup (Opus, in their own Projects), humanizing pass (Opus or Fable).
3. Odour/smell wording: only after the ads chat's OK and a gate check.
4. Whatever the ads chat sends next (ADS 61 is current; claude/ads-61.md).

## How-to that worked
- Repo: /home/claude/good-neighbors may be gone in a new chat. If push says the repo is "not in this session's authorized repository set", call add_repo (owner badadandotcom-droid, repo good-neighbors, access push) first, then clone/push. Fetch with an explicit refspec: git fetch origin +refs/heads/claude/good-neighbors-v2-visual-redesign:refs/remotes/origin/live; branch claude/gnw-website-27 from origin/live; git merge-base --is-ancestor origin/live HEAD; git push origin HEAD:claude/good-neighbors-v2-visual-redesign.
- Checks: npm run build; npx next start -p 3000 (in the background); node scripts/checks/crawl.mjs <out dir> (give it a scratch folder, NOT a URL: a URL argument makes a stray "http:" folder); firstscreen.mjs <out dir> needs playwright-core: ln -sfn /home/claude/.npm-global/lib/node_modules/@playwright/mcp/node_modules/playwright-core node_modules/playwright-core, run, then rm the link.
- Live read-back: in the built-in pane, fetch(path+'?v='+Date.now(),{cache:'no-store'}); wait about 40 s after the push for Vercel.
- Search Console: the built-in pane's first Google account is badadandotcom (no access). Use /u/1/: https://search.google.com/u/1/search-console?resource_id=sc-domain%3Agoodneighborswildlife.ca. Set the inspect field by JS (native value setter + input event + Enter keydown), wait for the REQUEST INDEXING button, click it by JS, then wait about 40 s in a SEPARATE call (one call over 45 s times out) and read "Indexing requested".
- Board writes: read the board, then pull the exact project_read text out of this session's transcript (/root/.claude/projects/-home-claude/<session>.jsonl, the last string starting {"method":"project_read","path":"claude/board.md") with a script, change only your own lines with asserted replacements, project_write with local_path.

## Scheduled checks
- trig_01Ct8172GiD1mLRMUv5vBUc7 (Dec 1, 12:05 AM): move it at open (above).
