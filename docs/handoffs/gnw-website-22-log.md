# GNW Website 22 log (Tue Nov 3, 11:20 PM to Wed Nov 4, about 2:00 AM, 2026, Toronto; Sonnet 5.5 then Fable 5.1)

Read-only chat on the site: no page change, no push to the live branch. This branch (`claude/gnw-website-22`) is `claude/gnw-website-21` plus this log and `gnw-website-23.md`.

## What happened, in order
1. Opened on Sonnet; read the board, the Nov 3 sync log and `gnw-website-22.md` (from a read-only clone of the repo; push access was added only at handoff).
2. raccoonproblem.ca (Duane's idea, 11:34 PM): checked Google's destination rules. Never an ad final URL (cross-domain redirects and send-elsewhere pages are disapproved; a countdown page would sink Quality Score); fine as a memorable forward for signs, van, posts and the phone. Board line added.
3. Cloudflare question (12:18 to 12:36 AM): hosting stays on Vercel (Next.js 16.3, LCP 0.9 s); DNS can move to Cloudflare, registrations stay at GoDaddy, in its own later chat (GNW DNS 1). Board line added.
4. GNW Audit 1's four tech questions (12:40 to 1:30 AM), on Fable: PageSpeed mobile on 20 ad landing pages (all LCP under 2.5 s); Search Console 31 indexed / 10 not (attic, walls, North York, /wildlife never crawled; dead-animal crawled but not indexed); Vercel bot settings all off, robots.txt open; the locked list vs the checker (not a full match by design; two stale "fully insured" lines). Saved as `claude/website-tech-note-2026-11-04.md` in the GNWW Project. Pane sign-ins needed from Duane: duane@goodneighborswildlife.ca for Search Console, badadandotcom@gmail.com (via Google) for Vercel.
5. Accounts list started (Duane, 1:22 AM): `claude/accounts-list.md` in the Project; no passwords.
6. Netting confirmed yes and the Dec 1 check moved into this chat without asking (Duane, 1:43 AM, via GNW Audit 2): new `trig_01Wxs8Pkc7pRycSaVnkvd5Uq`; the GNW Website 21 one deleted; list confirmed.
7. Indexing requests were about to start when Duane said "handoff" (1:49 AM). None made.

## Lessons
- A hidden browser pane stalls PageSpeed runs; two runs hung at "Running analysis" until Duane showed the pane.
- Duane's rule, 12:58 AM: "cut your wait times in half". Two 10 s waits, then read.
- The pane's Google account was badadandotcom by default; Search Console for the site is under duane@goodneighborswildlife.ca. Read `claude/accounts-list.md` before asking for any sign-in.
- The board is edited by several chats at once: `project_read` right before every write and merge.
