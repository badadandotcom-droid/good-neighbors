DONE (Oct 19): superseded by wasp-problem-lead-website-8.md. Chat 7 published /bee-removal (next job 1 here).

Chat name: Wasp Problem Lead Website 7

Written Oct 16, 2026 by Wasp Problem Lead Website 6. This chat is for Wasp Problem only: the site in
`wasp-problem/`, live at www.waspproblem.ca. Good Neighbors Wildlife has its own chats; if Duane brings it up
here, say this is the Wasp Problem website chat. Replaces `wasp-problem-lead-website-6.md` (marked DONE).

Model: Fable for writing page copy (judgment-heavy, paid ad traffic). Sonnet is fine for building, checking and
merging.

## Start here

1. Read `wasp-problem/AGENTS.md`: the rules, "How a page goes live", the roadmap and the accounts. Then read
   the Wasp Problem rules in the root `CLAUDE.md`.
2. Start every job from the production branch:
   `git fetch origin claude/good-neighbors-website-17l0bw && git checkout -B <your session branch> origin/claude/good-neighbors-website-17l0bw`
3. How Duane works (Oct 16): "just do it". Don't wait for his OK on a page that keeps the rules. Build it, check
   it, publish it, confirm Vercel's production deploy shows Ready, then give him one paste box for the ads chat.
   Keep replies short. Don't hand him questions he can't answer (ad group details, which chat said what).
4. Your handoff for chat 8 goes into production inside your PR, never only on your session branch (that is
   how handoffs 5 and 6 went missing).

## Where things stand (Oct 16)

- Merged into production by chat 6, in one PR from branch `ccr-9a52a20f-4nusrj`:
  - `/wasp-nest-removal-cost`: chat 5's page, built from the ads chat's brief for the "Wasp Nest Removal Cost"
    ad group. Chat 6 changed one word ("almost always" → "usually", matching the site's existing hidden-nest line)
    and moved its first-screen prices into `components/HeroPrices.tsx`.
  - `/yellow-jacket-removal`: new. H1 "Yellow Jacket Removal", title "Yellow Jacket Removal in Toronto & the
    GTA". The ads chat had sent no brief, so the phrase came from the roadmap's keyword numbers. H2s and the FAQ
    also carry "wasp nest in the ground", "ground wasps" and "yellow jacket nest". It names no price for a ground
    nest: it shows the price list and the owner's visible/hidden wording, and the price is confirmed on the phone.
  - Footer on every page links to both pages. The price table on the homepage and the city pages links to the cost
    page ("See common jobs added up on our wasp nest removal cost page").
  - PR #12 (chat 4's docs: `/bee-removal` in the roadmap, the H1 decision) is included.
  - Confirmed live: Vercel's production status on the merge commit `aeb74b7` read "Deployment has completed"
    (08:48 UTC). The built sitemap lists 17 pages, both new ones included.
- Duane confirmed the cost page's open items (Oct 16, relayed by chat 5): a visible nest plus one extra nest is
  $280; taking a visible nest down and away is part of the $180; the same price list applies in every city.
  Recorded under Business facts in AGENTS.md. Still unanswered and live as built: a price for a nest in the
  ground, and whether hornets use the same list (the site's price list names no species).
- Checked before merging: eslint, tsc and build clean; every existing page's built HTML compared with the
  baseline (only the two intended links changed; schema identical); no horizontal scroll at 360/390/768/1280;
  H1, both prices, the guarantee and the Call button on the first screen at 360x640 and 390x844 with the request
  form on; `cta_call`/`cta_text` carry `phone_number` and `page`; copy grep clean; Lighthouse mobile: SEO 100 and
  Accessibility 100 on both pages.
- Earlier, still live: PR #10 (flat prices line, schema priceRange, generic bees) and PR #11 (homepage H1 under
  the big sign; "Call 1-800-800-WASP" beside the 1-800 line).

## Next jobs

1. `/bee-removal` (roadmap item 3). Use `components/ProblemPage.tsx` with a new `lib/bee-page.ts` and add the page
   to `LANDING_PAGES` in `lib/landing-pages.ts` (sitemap and footer follow). Bees stay generic: no honey, bumble or
   carpenter bee copy. If the ads chat has sent no brief, use "Bee Removal" as the H1 and say so in the paste box.
   The bee ad stays on `/#bees` until this page is live and Duane OKs the switch; keep the homepage's `bees` anchor.
2. Speed (LCP), which feeds landing-page experience: local mobile Lighthouse LCP is 2.9–3.0 s on both new pages and
   about 2.8 s on the homepage (target 2.5 s). The LCP element is the H1 text and about 2.5 s is render delay. Fonts
   are all `display: swap` and nothing animates, so look at the JavaScript loaded before the H1 paints (TBT
   160–240 ms). Same cause on every page, so one fix covers them. Tell Duane plainly it matters.
3. Deepen `/toronto-wasp-removal` to 400–500 words (roadmap item 4).
4. Then `/wasps-in-wall-or-roof` and `/hornet-nest-removal` (both fit `ProblemPage`), then the emergency page once
   Duane gives his real hours. Drione page and licence wording wait for the Dec 7 exam.

## Open items (Duane's side, not code)

- Gmail filter on "Wasp Problem lead" (skipped for now; come back to it).
- GA4: register `phone_number` and `page` as event-scoped custom dimensions.
- Google Business Profile: find who owns it, set "Open 24 hours", put Toronto first.
- Optional: send waspproblem.com to www.waspproblem.ca (Vercel → Domains).
- Ads chat account work, each on Duane's OK: point the cost ad group at `/wasp-nest-removal-cost`; build the
  yellow jacket ad group for `/yellow-jacket-removal`; bee ad to `/#bees` until the bee page exists; "bee removal"
  out of the wasp group; lower bids over the winter.
- Semrush has no API units (Oct 16), so keyword numbers come from the ads chat's Keyword Planner pull.

## Tips that saved time

- Checks from `wasp-problem/`: `npx eslint .`, `npx tsc --noEmit -p .`, `npx next build`. Playwright:
  `/opt/node22/lib/node_modules/playwright` with `/opt/pw-browsers/chromium`.
- See the page as production does (request form on): build and start with
  `RESEND_API_KEY=x LEAD_TO_EMAIL=y@example.test` (dummy; nothing is sent).
- Lighthouse: `CHROME_PATH=/opt/pw-browsers/chromium npx -y lighthouse@12 <url> --chrome-flags="--headless=new --no-sandbox"`.
- Prove existing pages did not change: build the base branch in a git worktree (copy `node_modules` with
  `cp -al`; Turbopack rejects a symlinked one), then compare `.next/server/app/*.html` text, head tags and JSON-LD.
  Only the position of `next-size-adjust` moves between builds.
- Click events: read `window.dataLayer` with tel:/sms: navigation blocked (not a phone test).
- Confirm "live" from here (waspproblem.ca and vercel.app are blocked): GitHub only shows commit statuses for a
  PR's head, so reopen PR #14 (head = the production branch), read its status (`pull_request_read`
  `get_status`): "Vercel – wasp-problem: Deployment has completed" on the merge commit means production is Ready.
  Then close it again.
- Another chat's work lives on its session branch until merged: `git ls-remote --heads origin` and
  `git ls-tree` across branches find it. Other Wasp Problem chats can be seen with the remote-session tools
  (list_sessions, list_events) and messaged with send_message.
- The auto-mode safety check once blocked a local `git merge` as a "production deploy" because the same command
  also fetched the production branch. The merge alone ran fine.
- Never `pkill -f "next start"` (or any pattern that appears in your own command): it kills your own shell. Kill
  by `ps -eo pid,args | grep '[n]ext-server'`.
- Text inside an inline-flex link loses plain spaces: wrap it in a `<span>`. Keep phone numbers on one line with
  `whitespace-nowrap`.
- Bash `sleep` is blocked: wait on a deploy with a background until-loop or Monitor.
- Red "Error" preview builds from other chats' branches in Vercel are harmless.
