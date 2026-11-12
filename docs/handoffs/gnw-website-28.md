Chat name: GNW Website 28

# GNW Website 27 handoff to GNW Website 28 (written Thu Nov 12, 2026, about 10:45 AM Toronto)

Read order at open: claude/board.md, claude/sync-log-2026-11-12.md, then this file (on the Project as claude/gnw-website-28.md; in the repo as docs/handoffs/gnw-website-28.md on the live branch). GNW Website 27 ran Nov 12, 8:37 AM to about 10:45 AM on Fable 5.2, about 60 tool calls, not compacted.

## FIRST, at open
1. Say the model. Reading the plan docs and checks: Sonnet is fine. Any new page or wording: Opus or Fable. Tell Duane BEFORE the writing starts.
2. Duane's standing rule: explain the plan in a line or two and ask "Ready to start?" before using tools.
3. Move the Dec 1 scheduled check into this chat (standing rule, no need to ask). Load the tools first in ONE ToolSearch call (select:mcp__claude-code-remote__list_triggers,mcp__claude-code-remote__delete_trigger; send_later is already loaded). Read trig_01LDBhZohSS7xmRt1DccZn9e ("Dec 1: November page down (GNW Website 27)", one-time, fires 2026-12-01T05:05:00Z = Tue Dec 1, 12:05 AM Toronto) with list_triggers (enabled true, recurring false keeps the list short), recreate it with send_later at the same time with the same text, changing only "moved from GNW Website 26 to GNW Website 27" to "moved from GNW Website 27 to GNW Website 28", name it "Dec 1: November page down (GNW Website 28)". Delete the old one only after the new one exists; read the list back.

## Done in GNW Website 27 (all live, read back)
- RATING LINE: "5.0 on Google · 8 reviews" is now "4.9 on Google · Read our reviews" on every page that carries it (51 pages). NO review count (Duane, Nov 12, 8:45 AM: "No count."). The fifth star fills to 90% of the star's shape. Commits d5b5695 and 6691fbe. Rule now: update `rating` in lib/config/site.ts only when Google's figure moves (the Profile chat's maths: about 10 more five-star reviews in a row should bring 5.0 back; Google's own formula not confirmed). CLAUDE.md, crawl.mjs (allows only "N.N on Google · Read our reviews") and the site.ts comment follow. Honest limit: at phone size the unfilled tip of the fifth star is about 1 pixel wide.
- Note for the ads chat (ADS 62) given to Duane in a code box: new wording into the next Project instructions text and the gnw-voice-and-claims skill; say if there is a Quality Score objection. NOT confirmed pasted; no answer has come back.
- Dec 1 check moved from 26 into 27 (trig_01LDBhZohSS7xmRt1DccZn9e; 26's deleted; list read back).
- Search Console Pages report re-read (Google's "Last update: 11/8/26"): 56 indexed, 6 not: 4 "Excluded by 'noindex' tag" and 1 "Page with redirect" (which pages: NOT opened), 1 "Discovered - currently not indexed" = /service-areas/north-york (never crawled). North York: "Indexing requested" Nov 12, 10:43 AM (Duane's yes).
- Board and claude/sync-log-2026-11-12.md written.

## THE NEXT JOB: the organic plan (ADS 62 wrote it; the website chat builds it)
Duane, Nov 11, 11:59 PM, to the ads chat: "it's your job to make the plan and tell the website chat what to do ... high reward for little work". The ads chat plans; this chat builds. ADS 62 gave Duane a note for the website chat about 12:40 AM on Nov 12; it was NOT pasted into GNW Website 27. The plan is in four Project docs. GNW Website 27 read only the first in full:
- claude/organic-plan-2026-11-12.md (read): 1 real photos on the raccoon poop post (needs Duane's own photos; photo library INDEX.md first); 2 links from blog posts to the matching service pages; 3 Etobicoke title and meta description look (ads chat OK given for a meta description change; a title change goes back to the ads chat with scores); 4 check that non-www and http redirect to https://www. and pages carry a www canonical; 5 wait and measure.
- claude/organic-town-pages-plan-2026-11-12.md (seen only as a search excerpt): the note's steps are 0 Pages report and North York (DONE in 27); 1 links to city pages; 2 a Rexdale SECTION on the Etobicoke page and the open near-page-1 pages; 3 five NEW pages (Thornhill, Unionville, King City, Bolton, Woodbridge); 4 the Links report. Batch 2 waits about four weeks.
- claude/organic-city-pages-2026-11-12.md and claude/organic-small-places-2026-11-12.md: the data. NOT read.
RULE CHANGE to carry into the repo when the first community page is built: Duane, Nov 12, 12:32 AM (in the ads chat, quoted in the town-pages plan): "Yes, one per page per city is lifted ... It wasn't supposed to say we only want one page per city." The repo's CLAUDE.md "Place names" rule still says one page per city and never a page per neighbourhood or small village: update it with his words and the date. Read the full plan doc for the exact quote first.
Before building: read all four docs; read the gate table (section D1 of claude/GNW_AUDIT_HANDOFF.md) before adding a link to any hub or locked page (links pointing AT locked pages are fine; editing them is not); the repo's "search research first" rule applies and the plan says search volume for the towns was NOT checked, so say that to Duane plainly; new pages are written fresh and checked with repeats.mjs; show Duane every new page and all new wording before it goes live; blog-file changes follow content/blog/README.md and the gnw-voice-and-claims skill. Ask Duane which step first, as a this-or-that.

## Owed by GNW Website 28
1. The organic plan above.
2. Search Console Pages report re-read about Nov 19 (is north-york crawled?); request indexing for every new page or post.
3. The ads chat's answer to the rating note, if it comes.
4. Duane's "when I'm home" list (listed for him Nov 12, 8:37 AM; not started). With the brain for each (he asked for this every time): 1 close the old "CHATGPT AUDIT 1" chat (no brain; he taps it); 2 pick about 3 jobs for Profile photos (Opus medium to choose, Sonnet to upload); 3 Local Services Ads insurance certificate (Sonnet low); 4 Google Sheets connector in the ads chat (Sonnet low to switch on, Sonnet medium to read the call sources); 5 Wasp Problem's failing Vercel build, in the Wasp chat (Sonnet medium to read the log, Opus if code changes); 6 ad photos, trial crops in Downloads > GNW photo library > ads-image-assets > trial (Opus medium to pick; the ads chat uploads on Fable); 7 parked: GNW DNS 1 (Fable), AI SEARCH 2 (Sonnet medium), Swabbed and Wasp Problem blog setup (Opus, in their own Projects), humanizing pass (Opus or Fable).
5. Odour or smell wording: only after the ads chat's OK and a gate check.

## How-to that worked
- Repo: add_repo (owner badadandotcom-droid, repo good-neighbors, access push), clone to /home/claude/good-neighbors, then: git fetch --depth 50 origin +refs/heads/claude/good-neighbors-v2-visual-redesign:refs/remotes/origin/live; git checkout -B claude/gnw-website-28 origin/live; before a push fetch again and git merge-base --is-ancestor origin/live HEAD; git push origin HEAD:claude/good-neighbors-v2-visual-redesign.
- Checks: npm ci; npm run build; npx next start -p 3000 as a BACKGROUND command (starting it with & inside another command dies with that command); node scripts/checks/crawl.mjs <scratch dir>; for firstscreen.mjs: ln -sfn /home/claude/.npm-global/lib/node_modules/@playwright/mcp/node_modules/playwright-core node_modules/playwright-core, run, rm the link; pkill -f "next[-]server" when done.
- Live read-back: curl from the cloud container to the live site is BLOCKED (not on the allowed list). Use the built-in browser pane: open any page of the site, then run fetch(path+'?v='+Date.now(),{cache:'no-store'}) by script; the sitemap gives every path, so all pages can be read in one call. Vercel took about 25 to 40 s after the push.
- Search Console: https://search.google.com/u/1/search-console/index?resource_id=sc-domain%3Agoodneighborswildlife.ca (duane@ is account /u/1/). Read the page text by script. Inspect a URL: set the inspect field by JS (native value setter + input event + Enter key events), wait for "URL is on Google" or "URL is not on Google". The REQUEST INDEXING click was refused by the session's permission check when it came from the opening plan alone; it went through after Duane said yes to that exact click in the chat. Ask him first, then click, then read "Indexing requested" from the dialog text.
- Board writes: the board is about 66,000 characters. project_read it, pull the exact text out of the session's own transcript (/root/.claude/projects/-home-claude/<session>.jsonl, the last string starting {"method":"project_read","path":"claude/board.md") with a script, change only your own lines with asserted replacements, project_write with local_path (the file must sit in /home/claude). Re-read before a second write if time has passed.
- Times: run TZ=America/Toronto date before writing a time into a doc. GNW Website 27 guessed a time and was 20 minutes off.

## Scheduled checks
- trig_01LDBhZohSS7xmRt1DccZn9e (Dec 1, 12:05 AM Toronto): move it at open (above).

## Counts
Warn Duane at about 40 tool calls; hand off by about 60.
