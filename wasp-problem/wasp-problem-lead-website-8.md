Chat name: Wasp Problem Lead Website 8

Written Oct 19, 2026 by Wasp Problem Lead Website 7. This chat is for Wasp Problem only: the site in
`wasp-problem/`, live at www.waspproblem.ca. Good Neighbors Wildlife has its own chats; if Duane brings it up
here, say this is the Wasp Problem website chat. Replaces `wasp-problem-lead-website-7.md` (marked DONE).

Model: Fable for writing page copy (judgment-heavy, paid ad traffic). Sonnet is fine for building, checking and
merging. The speed job (next job 1) is code, not copy: Sonnet.

## Start here

1. Read `wasp-problem/AGENTS.md`: the rules, "How a page goes live", the roadmap and the accounts. Then read
   the Wasp Problem rules in the root `CLAUDE.md`.
2. Start every job from the production branch:
   `git fetch origin claude/good-neighbors-website-17l0bw && git checkout -B <your session branch> origin/claude/good-neighbors-website-17l0bw`
3. How Duane works: "just do it". Don't wait for his OK on a page that keeps the rules. Build it, check it,
   publish it, confirm Vercel's production deploy shows Ready, then give him one paste box for the ads chat.
   Keep replies short. Don't hand him questions he can't answer (ad group details, which chat said what).
4. Your handoff for chat 9 goes into production inside your PR, never only on your session branch.

## Where things stand (Oct 19)

- Merged into production by chat 7: `/bee-removal`. H1 "Bee Removal", title "Bee Removal in Toronto & the GTA",
  from the ads chat's brief (ad group "Bee Removal", already in the account; headline 1 "Bee Removal"; phrases:
  bee removal, bee removal near me, bee nest removal near me, bee removal company near me, bees in wall).
  Built on `components/ProblemPage.tsx` with `lib/bee-page.ts`; listed in `LANDING_PAGES`, so the footer on every
  page and the sitemap (18 URLs) carry it. The yellow jacket page's "bees" link now points at `/bee-removal`
  instead of `/#bees`. Bees stay generic; no species named anywhere. The homepage keeps its `bees` anchor and
  section unchanged.
- The bee ad still links to `/#bees`. Switching it to `/bee-removal` is the ads chat's job, on Duane's OK, now
  that the page is live (the paste box asked for it).
- Prices on the bee page are the site's one residential price list ($180 visible / $250 hidden / +$100 / $75
  ladder), shown the same way as on the other landing pages; the FAQ says the total is confirmed before work
  starts. Chat 7 told Duane: if bees are priced differently, say so and the page changes. No answer yet when
  this was written; if he says they differ, that is a copy change in `lib/bee-page.ts` and possibly a
  `heroPrices` switch in `ProblemPage`.
- Still unanswered from chat 6: a price for a nest in the ground, and whether hornets use the same list.
- Checked before merging: eslint, tsc, build clean; copy grep clean (no licensed/certified/exterminator/warranty/
  can't/species/24-7 reply promise); no horizontal scroll at 360/390/768/1280; H1, both prices, the guarantee and
  the hero Call button on the first screen at 360x640 and 390x844 with the request form on; `cta_call`/`cta_text`
  carry `phone_number` and `page`; one H1, FAQPage schema with 11 questions, canonical and og:url on www; every
  existing page's built HTML compared with the production baseline (only the intended links changed). Lighthouse
  mobile on the bee page: SEO 100, Accessibility 100, Performance 90, LCP 2.9 s.

## Next jobs

1. Speed (LCP), which feeds landing-page experience. Local mobile Lighthouse LCP is 2.9–3.0 s on all three
   landing pages and about 2.8 s on the homepage (target 2.5 s); TBT 160–280 ms. On the bee page the LCP element
   was the intro H2 (the first big text block after the hero), on the cost page the H1; either way it is text and
   most of the time is render delay, not downloads. Fonts are `display: swap` and nothing animates, so look at
   the JavaScript that runs before first paint (hydration of the header, the FAQ accordion, the lead form). One
   fix covers every page. Tell Duane plainly it matters for his ad costs. Check the live URL in PageSpeed
   Insights afterwards (he has to; it is blocked from the sandbox).
2. Deepen `/toronto-wasp-removal` to 400–500 words (roadmap item 4).
3. Then `/wasps-in-wall-or-roof` and `/hornet-nest-removal` (both fit `ProblemPage`), then the emergency page
   once Duane gives his real hours. Drione page and licence wording wait for the Dec 7 exam.

## Open items (Duane's side, not code)

- Ads chat: switch the bee ad's final URL from `/#bees` to `/bee-removal` (page is live).
- Gmail filter on "Wasp Problem lead" (skipped for now; come back to it).
- GA4: register `phone_number` and `page` as event-scoped custom dimensions.
- Google Business Profile: find who owns it, set "Open 24 hours", put Toronto first.
- Optional: send waspproblem.com to www.waspproblem.ca (Vercel → Domains).
- Ads chat account work, each on Duane's OK: cost ad group at `/wasp-nest-removal-cost`; yellow jacket ad group
  for `/yellow-jacket-removal`; "bee removal" out of the wasp group; lower bids over the winter.
- Semrush had no API units on Oct 16; keyword numbers come from the ads chat's Keyword Planner pull.

## Tips that saved time

- Checks from `wasp-problem/`: `npx eslint .`, `npx tsc --noEmit -p .`, `npx next build`. Playwright:
  `/opt/node22/lib/node_modules/playwright/index.mjs` with `/opt/pw-browsers/chromium`.
- See the page as production does (request form on): build and start with
  `RESEND_API_KEY=x LEAD_TO_EMAIL=y@example.test` (dummy; nothing is sent). `next start` can take 20–30 s to
  answer the first request; loop on curl, don't give up after one try.
- Lighthouse: `CHROME_PATH=/opt/pw-browsers/chromium npx -y lighthouse@12 <url> --chrome-flags="--headless=new --no-sandbox"`.
- First-screen check: measure the hero's `a[href="tel:+18008009277"]`, not the first `tel:` link on the page
  (that is the header's local number). Click events: dispatch a click with navigation prevented and read
  `window.dataLayer` (not a phone test).
- "day or night" in a rendered page comes from the shared request-form section and is about phone calls, which
  is allowed; the copy grep on a new page should run on the page's own copy file.
- Prove existing pages did not change: build the base branch in a git worktree (copy `node_modules` with
  `cp -al`; Turbopack rejects a symlinked one), then compare `.next/server/app/*.html` text, head tags and
  JSON-LD. Only the position of `next-size-adjust` moves between builds, and the CSS bundle's hash changes
  whenever Tailwind picks up a new bare word in copy as a utility (the bee FAQ's "grow" added an unused
  `.grow{flex-grow:1}`; harmless).
- Confirm "live" from here (waspproblem.ca and vercel.app are blocked): GitHub only shows commit statuses for a
  PR's head, so reopen PR #14 (head = the production branch), read its status (`pull_request_read`
  `get_status`): "Vercel – wasp-problem: Deployment has completed" on the merge commit means production is Ready.
  Then close it again.
- Another chat's work lives on its session branch until merged: `git ls-remote --heads origin` and
  `git ls-tree` across branches find it.
- Never `pkill -f "next start"` (or any pattern that appears in your own command): it kills your own shell. Kill
  by `ps -eo pid,args | grep '[n]ext-server'`.
- Text inside an inline-flex link loses plain spaces: wrap it in a `<span>`. Keep phone numbers on one line with
  `whitespace-nowrap`.
- Bash `sleep` is blocked: wait on a deploy with a background until-loop or Monitor.
- Red "Error" preview builds from other chats' branches in Vercel are harmless.
