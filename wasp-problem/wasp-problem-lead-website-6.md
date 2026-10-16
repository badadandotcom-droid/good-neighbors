Chat name: Wasp Problem Lead Website 6

Written Oct 16, 2026 by Wasp Problem Lead Website 5. This chat is for Wasp Problem only: the site in
`wasp-problem/`, live at www.waspproblem.ca. Good Neighbors Wildlife has its own chats; if Duane brings
it up here, say this is the Wasp Problem website chat. Replaces `wasp-problem-lead-website-5.md` (marked DONE).

Model: Fable for page copy (judgment-heavy, paid ad traffic). Page 1's copy was drafted on Sonnet and has had no
Fable pass yet; Duane can have it re-read on Fable before he OKs it. Sonnet is fine for lint, build, screenshots, merging.

## Start here

0. PR #12 (docs only: `/bee-removal` in the roadmap, the H1 decision, chat 4's handoff) was open when chat 4
   finished. Its branch `claude/wasp-problem-lead-website-4-0st8h5` is merged into the page-1 branch, so merging
   the page-1 PR lands it too. Check PR #12's state first; if it merged on its own, nothing is lost.
1. Read `wasp-problem/AGENTS.md` (rules, accounts, roadmap) and the Wasp Problem rules in the root `CLAUDE.md`.
2. Page 1 is built but NOT live. It is on branch `ccr-48cbf059-7xs6dz`, which also holds this doc, and it waits
   for Duane's OK. To read or publish it: `git fetch origin ccr-48cbf059-7xs6dz`.
3. Start every NEW job from the production branch:
   `git fetch origin claude/good-neighbors-website-17l0bw && git checkout -B <your session branch> origin/claude/good-neighbors-website-17l0bw`
4. Show Duane every change (wording plus a 390px phone screenshot) and wait for OK.
5. To go live: PR from the session branch into `claude/good-neighbors-website-17l0bw`, merge commit, then wait
   until Vercel's production deploy of the merge commit shows Ready. Only then say "live" (Oct 14 lesson). Then
   give Duane a paste box for the ads chat saying what went live.

## Where things stand (Oct 16)

- Live: PR #10 (flat "Visible nest $180 · Hidden nest $250" line, schema priceRange, generic bees) and PR #11
  (homepage H1 "Professional Wasp Nest Removal / Serving Toronto & the GTA" under the big sign; "Call
  1-800-800-WASP" instead of "call or text" beside the 1-800 line).
- Request form: Resend domain verified Oct 12; leads come from website@waspproblem.ca to
  duane@goodneighborswildlife.ca, subject "Wasp Problem lead — …". `/review` goes to the Google review link.
- Brampton page is live but not featured; never point Google Ads at it.
- Homepage H1 stays "Professional Wasp Nest Removal / Serving Toronto & the GTA" (Duane, Oct 16: if the ads chat
  wants the phrase to match, the ad changes, not the site).

## Page 1: /wasp-nest-removal-cost (ad group "Wasp Nest Removal Cost") — BUILT, WAITING FOR DUANE'S OK

Ads chat's brief: exact-match keywords [wasp nest removal cost] [cost of wasp nest removal] [wasp removal cost]
[cost of wasp removal] [wasp nest removal price]; headline 1 pinned "Wasp Nest Removal Cost"; no "exterminator";
flat prices; first phone screen = H1 with the phrase, flat price, 90-day service guarantee, big Call button.

- Files: `lib/cost-page.ts` (copy, figures read from `lib/pricing.ts`), `components/CostPage.tsx`,
  `app/wasp-nest-removal-cost/page.tsx`, `lib/page-metadata.ts` (new shared title/description/share-card helper;
  `locationMetadata()` now calls it), `app/sitemap.ts` (`THEMED_PAGES`), plus a `title` prop on `FaqAccordion` and
  an exported `Check` in `TrustPoints`. Existing pages' built HTML was compared before and after: content,
  metadata and schema identical.
- Title: "Wasp Nest Removal Cost: $180 Visible, $250 Hidden | Wasp Problem". Description 149 characters.
- Order: hero, price list, examples, what the price covers, what happens if you wait, guarantee, FAQ (11 items,
  FAQPage schema), reviews, how it works, 11 featured city links plus the homepage, request form, closing CTA.
- Checked locally: eslint, tsc and build clean; no horizontal scroll at 360/390/768/1280; Call button fully on the
  first screen at 390x844 and 360x640 (form on and off); `cta_call`/`cta_text` fire with `phone_number` and `page`
  (read from `window.dataLayer`, tel:/sms: navigation blocked: this is NOT a phone test); copy grep clean (no
  can't, licensed, certified, exterminator, warranty, "from $", "starting at"); Lighthouse mobile (simulated)
  Performance 94, Accessibility 100, SEO 100, best practices 96 (the one console error is the blocked Google tag).
- NOT met: Lighthouse LCP 2.9 s against the 2.5 s target (render delay 2.4 s; same cause as the homepage's ~2.8 s).
  Its own site-wide speed job: see AGENTS.md open items.
- NOT checked: the live site or Vercel (blocked here), a real call or text, PageSpeed Insights on the live URL.

Waiting on Duane before publishing (he confirms each):
1. The five example totals: $180, $250, $255 (visible + ladder), $325 (hidden + ladder), $280 (visible + one extra
   nest). The $280 line assumes an extra nest is $100 whatever its type. No example mixes a ladder fee with several
   nests because it is not known whether the ladder fee is per nest.
2. "What your cost includes": treatment at the source; visible nest taken down and away; ladder work under 10 ft;
   total confirmed before work; the 90-day service guarantee. "Quoted separately": over 25 ft, opening a wall,
   commercial and institutional. Every line is reused from existing site copy; listing them as "included" is new.
3. Cities section says the price list is the same one shown on each city page.
4. "What happens if you wait" copy.
5. The page says nothing on free quotes, HST, hornets or yellow jackets, bees, or evenings and weekends, on purpose.
6. Title: built "Wasp Nest Removal Cost: $180 Visible, $250 Hidden" (price in the title; the area is in the H1
   subline and the description). Chat 4's plan was "Wasp Nest Removal Cost in Toronto & the GTA". H1 is "Wasp Nest
   Removal Cost" with "Serving Toronto & the GTA" under it, as planned.
7. Hero differs from chat 4's plan: no same-day badge, no TrustPoints list, no SameDayNote; two price tiles instead,
   so the first phone screen holds the H1, prices, guarantee and Call button. Same-day appears only in an FAQ, with
   "based on availability".

After his OK: publish (steps above), then paste box for the ads chat: page live at
https://www.waspproblem.ca/wasp-nest-removal-cost, so it can point the "Wasp Nest Removal Cost" ad group at it
(never before). The bee ad stays on /#bees until the bee page is live and Duane OKs the switch.

## Next jobs

- Page 2: `/yellow-jacket-removal`. Needs the ads chat's ad group name, keywords and headline 1 (Duane pastes
  them). Ask Duane first: which price covers a nest in the ground, visible $180 or hidden $250? Same price for
  yellow jackets and hornets? (The ads rules say wasps and bees are priced the same.)
- Page 3: a bee page; the ads chat sends URL, keywords and headline 1. Bees stay generic.
- Speed job (LCP), in AGENTS.md open items. Tell Duane plainly it is important: it feeds landing-page experience.
- Owner's call (Oct 16): don't make the homepage look worse for ad score; themed pages carry the specific searches.
- Suggest Fable for writing the page copy; Sonnet is fine for building and checking.
- Idea not done, needs Duane's OK: a link from the homepage and city price tables to the cost page (touches 15
  pages; helps organic ranking).

## Open items (Duane's side, not code)

- Gmail filter on "Wasp Problem lead" (skipped for now; come back to it).
- GA4: register `phone_number` and `page` as event-scoped custom dimensions.
- Google Business Profile: find who owns it, set "Open 24 hours", put Toronto first.
- Optional: send waspproblem.com to www.waspproblem.ca (Vercel → Domains).
- Ads chat account work, each on Duane's OK: bee ad to /#bees, "bee removal" out of the wasp group, themed ad
  groups as pages go live, lower bids over the winter.
- Emergency page needs Duane's real hours first. Drione page and licence wording wait for the Dec 7 exam.

## Tips that saved time

- Checks from `wasp-problem/`: `npx eslint .`, `npx tsc --noEmit -p .`, `npx next build`. Playwright:
  `/opt/node22/lib/node_modules/playwright` with `/opt/pw-browsers/chromium`.
- Lighthouse: `CHROME_PATH=/opt/pw-browsers/chromium npx -y lighthouse@12 <url> --chrome-flags="--headless=new --no-sandbox"`
  (the `--chrome-path` flag is not supported).
- See the request form and the "Send a request online" link locally: build and start with
  `RESEND_API_KEY=x LEAD_TO_EMAIL=y@example.test` (dummy; nothing is sent). Production has them set.
- Click events: read `window.dataLayer` (the site's own Google tag replaces any `window.gtag` stub).
- Prove existing pages did not change: copy `.next/server/app/*.html` before, then compare after stripping
  scripts and asset hashes (only the position of `next-size-adjust` differs).
- Never `pkill -f "next start"` from a command that also contains that text: it kills your own shell. Kill by
  `ps -eo pid,args | grep '[n]ext-server'`.
- Text inside an inline-flex link loses plain spaces: wrap it in a `<span>`. Keep phone numbers on one line
  with `whitespace-nowrap`.
- Bash `sleep` is blocked: wait on a deploy with a background until-loop or Monitor.
- Red "Error" preview builds from other chats' branches in Vercel are harmless. To redeploy: Overview →
  Production Deployment → the deployment → ⋯ → Redeploy.
