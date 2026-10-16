Chat name: Wasp Problem Lead Website 5

Written Oct 16, 2026 by Wasp Problem Lead Website 4. This chat is for Wasp Problem only: the
site in `wasp-problem/`, live at www.waspproblem.ca. Good Neighbors Wildlife has its own chats;
if Duane brings it up here, say this is the Wasp Problem website chat.

Model: start this chat on Fable. The copy and page structure are the judgment-heavy part and
this page takes paid ad traffic. Sonnet is fine for lint, build, screenshots and merging.

## Start here

1. Read `wasp-problem/AGENTS.md` (rules, accounts, roadmap) and the Wasp Problem rules in the
   root `CLAUDE.md`.
2. Start every job from the production branch:
   `git fetch origin claude/good-neighbors-website-17l0bw && git checkout -B <your session branch> origin/claude/good-neighbors-website-17l0bw`
3. Show Duane every change (wording plus a 390px phone screenshot) and wait for OK.
4. To go live: PR from your session branch into `claude/good-neighbors-website-17l0bw`, merge
   commit, then wait until Vercel's production deploy of the merge commit shows Ready. Only then
   say "live". Then give Duane a paste box for the ads chat saying what went live.

## Where things stand (Oct 16)

- PR #12 (docs only: `/bee-removal` added to the roadmap, H1 decision recorded) was open and
  NOT merged when this was written. Check it first. If still open, ask Duane to OK a merge
  commit, then wait for Vercel Ready. This file is in that PR too, so it only reaches the
  production branch when #12 merges.
- Homepage is unchanged by this chat. H1 stays "Professional Wasp Nest Removal / Serving
  Toronto & the GTA" (Duane's call: do not change the site to "in Toronto"; if the ads chat
  wants the phrase to match, the ad changes).
- Nothing built yet. No themed page exists.

## Next job: page 1, `/wasp-nest-removal-cost`

The ads chat picked it (Oct 16). Details from the ads chat, word for word:

- Ad group name: Wasp Nest Removal Cost
- Keywords, all exact match:
  [wasp nest removal cost]
  [cost of wasp nest removal]
  [wasp removal cost]
  [cost of wasp removal]
  [wasp nest removal price]
- Headline 1 (pinned): Wasp Nest Removal Cost
- Copy checks: no "exterminator" in the keywords, ad or page. Prices flat, never "from" or
  "starting at": visible nest $180, hidden nest $250, each extra nest $100, ladder 10-25 ft $75.
- First phone screen (390 px, no scrolling): H1 with the phrase, flat price, 90-day service
  guarantee, big Call button.
- Order: yellow jacket page is second, bee page is third. The bee ad stays on `/#bees` until
  the bee page is live and Duane OKs the switch.

Plan (Duane has NOT yet approved the wording; decide these with him first):

- Title: "Wasp Nest Removal Cost in Toronto & the GTA" (the layout adds " | Wasp Problem").
  H1: "Wasp Nest Removal Cost", with "Toronto & the GTA" on the line under it. Duane rejected
  "in Toronto" in the homepage H1, so ask whether this H1 plan is OK.
- Hero like the city pages (`components/CityPage.tsx`): badge, H1, subline, "Open 24/7 — call us
  anytime.", `ContactActions`, `TrustPoints` (already reads "Visible nest $180 · Hidden nest
  $250" and "90-day service guarantee"), `SameDayNote`.
- Sections: the four prices from `lib/pricing.ts` (`PricingTable` already exists), what changes
  the price (visible vs hidden, number of nests, ladder height; over 25 ft and commercial are
  quoted separately), what is included (only facts already on the site: a visible nest is taken
  down and taken away, a hidden nest is treated in place, opening a wall is separately quoted,
  the 90-day service guarantee), FAQ with FAQPage schema (`components/FaqAccordion.tsx` already
  emits it), links to the homepage and all featured city pages, `LeadFormSection`, `FinalCta`.
- Add the URL to `app/sitemap.ts`. Give the page its own metadata and canonical URL (copy
  how `locationMetadata` in `lib/locations.ts` wires the share card; it is per route).
- Do NOT invent: whether a quote visit is free, payment methods, or whether prices include HST
  (the site shows prices without "+ HST"; do not add or claim it). Ask Duane or leave out.
- Copy rules: never "licensed", "certified" or "exterminator"; no "can't"; 24/7 means calls
  only; same-day is "based on availability"; bees stay generic; prices flat; "call or text"
  never next to 1-800; 1-800 takes calls only, texts go to 416-700-4259.
- After Duane's OK and the deploy shows Ready, give him a paste box telling the ads chat the URL
  is live so it can point the Wasp Nest Removal Cost ad group at it (never before).

Roadmap order after page 1 (see "Google Ads & SEO roadmap" in `wasp-problem/AGENTS.md`):
`/yellow-jacket-removal`, `/bee-removal` (generic bees; for the bee ad), then Toronto page
deepening, wall/roof, hornet, emergency, product & safety. Before each page, get the ads chat's
ad group name, keywords and headline 1 (Duane pastes it).

## What this chat measured (local builds, not the live site)

- Oct 14 homepage change was small: trust line "Upfront pricing from $180" became "Visible nest
  $180 · Hidden nest $250"; schema priceRange $75-$250 became $180-$250; carpenter-bee wording
  removed from five city pages. No heading, title or body change. The ads chat saw landing page
  experience for [wasp nest removal toronto] drop from Above to Average that day; the change
  is too small to explain it.
- Mobile Lighthouse (local, simulated), Oct 13 build vs now: LCP 2.80-2.90 s vs 2.80 s, score
  94-96 vs 96, layout shift 0. Target is under 2.5 s; the LCP element is the big sign text.
  Real-phone-network Lighthouse: Duane will deal with it later.
- First 390px screen, before and after: same content except the price line.

## Open items (Duane's side, not code)

- Gmail filter on "Wasp Problem lead" (skipped for now; come back to it).
- GA4: register `phone_number` and `page` as event-scoped custom dimensions.
- Google Business Profile: find who owns it, set "Open 24 hours", put Toronto first.
- Optional: send waspproblem.com to www.waspproblem.ca (Vercel > Domains).
- Ads chat account work, each on Duane's OK: bee ad to /#bees until the bee page is live,
  "bee removal" out of the wasp group, themed ad groups as pages go live, lower bids over the
  winter. The ads chat will not move a keyword until its page is live, and will not move one
  scoring 7 or higher without Duane's OK.
- Emergency page needs Duane's real hours first. Drione page and licence wording wait for the
  Dec 7 exam.
- Speed: LCP about 2.8 s against a 2.5 s target. A separate job, not urgent in the off-season.

## Tips that saved time

- Checks from `wasp-problem/`: `npx eslint .`, `npx tsc --noEmit -p .`, `npx next build`. Run
  `npm ci` first in a fresh container (no `node_modules`).
- Playwright: `/opt/node22/lib/node_modules/playwright` with `/opt/pw-browsers/chromium`.
  Lighthouse: `npm i lighthouse@12` in a scratch folder, then `CHROME_PATH=/opt/pw-browsers/chromium
  npx lighthouse <url> --form-factor=mobile --chrome-flags="--headless --no-sandbox"`.
- To build an older commit for comparison, use a git worktree and COPY `node_modules` into it
  (`cp -a`). A symlinked `node_modules` breaks the Turbopack build. Do not run `pkill -f "next
  start"` in the main shell; it ended the shell. Stop servers by port instead.
- Text inside an inline-flex link loses plain spaces: wrap it in a `<span>`. Keep phone numbers
  on one line with `whitespace-nowrap`.
- Bash `sleep` is blocked: wait on a deploy with a background until-loop or Monitor.
- Red "Error" preview builds from other chats' branches in Vercel are harmless. To redeploy:
  Overview > Production Deployment > the deployment > ... > Redeploy.
