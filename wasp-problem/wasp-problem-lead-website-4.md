DONE (Oct 16): superseded by wasp-problem-lead-website-5.md

Chat name: Wasp Problem Lead Website 4

Written Oct 16, 2026 by Wasp Problem Lead Website 3. This chat is for Wasp Problem only: the
site in `wasp-problem/`, live at www.waspproblem.ca. Good Neighbors Wildlife has its own chats;
if Duane brings it up here, say this is the Wasp Problem website chat.

## Start here

1. Read `wasp-problem/AGENTS.md` (rules, accounts, roadmap) and the Wasp Problem rules in the
   root `CLAUDE.md`.
2. Start every job from the production branch:
   `git fetch origin claude/good-neighbors-website-17l0bw && git checkout -B <your session branch> origin/claude/good-neighbors-website-17l0bw`
3. Show Duane every change (wording plus a 390px phone screenshot) and wait for OK.
4. To go live: PR from your session branch into `claude/good-neighbors-website-17l0bw`, merge
   commit, then wait until Vercel's production deploy of the merge commit shows Ready. Only then
   say "live" (Oct 14 lesson). Then give Duane a paste box for the ads chat saying what went live.

## Where things stand (Oct 16)

- Live (PR #11): the homepage's big WASP PROBLEM? sign stays as the brand look (a `<p>`); the H1
  is "Professional Wasp Nest Removal / Serving Toronto & the GTA". "Call 1-800-800-WASP"
  replaces "call or text" next to the 1-800 line: the star note on the homepage and all 14 city
  pages (`components/SameDayNote.tsx`), the homepage FAQ on same-day service, the bees section.
  Footer "Call or text: 416-700-4259" and the Text buttons stay.
- Live (PR #10): "Visible nest $180 · Hidden nest $250" in the trust points; schema priceRange
  $180-$250; bee wording on city pages is generic (no carpenter bees).
- Request form: Resend domain verified Oct 12; leads come from website@waspproblem.ca to
  duane@goodneighborswildlife.ca, subject "Wasp Problem lead — …".
- `/review` sends customers to the Google review link (temporary redirect, on purpose).
- Brampton page is live but not featured; never point Google Ads at it.

## Next job: the themed pages

Roadmap and page checklist: "Google Ads & SEO roadmap" in `wasp-problem/AGENTS.md`. None is
built yet. First page: `/yellow-jacket-removal`.

- Before building a page, get the ads chat's ad group name, keywords and headline 1 (Duane
  pastes it). The page title and H1 use that main phrase word for word.
- Owner's call (Oct 16): don't make the homepage look worse for ad score. The themed pages
  carry the specific searches.
- One page at a time: build, show Duane, publish on OK, then a paste box telling the ads chat
  the URL is live so it can point that ad group at it (never before).
- Every new page goes in `app/sitemap.ts`, links to the homepage and the city pages, and keeps
  the copy rules: never "licensed", "certified" or "exterminator" (until after the Dec 7 exam),
  no "can't", 24/7 means calls only, same-day is "based on availability", bees stay generic,
  prices flat, "call or text" never next to 1-800.

## Open items (Duane's side, not code)

- Gmail filter on "Wasp Problem lead" (skipped for now; come back to it).
- GA4: register `phone_number` and `page` as event-scoped custom dimensions.
- Google Business Profile: find who owns it, set "Open 24 hours", put Toronto first.
- Optional: send waspproblem.com to www.waspproblem.ca (Vercel → Domains).
- Ads chat account work, each on Duane's OK: bee ad to /#bees, "bee removal" out of the wasp
  group, themed ad groups as pages go live, lower bids over the winter.
- Emergency page needs Duane's real hours first. Drione page and licence wording wait for the
  Dec 7 exam.
- Speed: mobile Lighthouse (local, simulated) LCP is about 2.8 s against a 2.5 s target. The LCP
  element is the big sign text (font and CSS render delay). A separate job, not urgent in the
  off-season.

## Tips that saved time

- Checks from `wasp-problem/`: `npx eslint .`, `npx tsc --noEmit -p .`, `npx next build`.
  Playwright: `/opt/node22/lib/node_modules/playwright` with `/opt/pw-browsers/chromium`.
- Text inside an inline-flex link loses plain spaces: wrap it in a `<span>`. Keep phone numbers
  on one line with `whitespace-nowrap`.
- Bash `sleep` is blocked: wait on a deploy with a background until-loop or Monitor.
- Red "Error" preview builds from other chats' branches in Vercel are harmless. To redeploy:
  Overview → Production Deployment → the deployment → ⋯ → Redeploy.
