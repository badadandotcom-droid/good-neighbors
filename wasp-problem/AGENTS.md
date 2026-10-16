<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Wasp Problem — project rules

Everything below is outside the Next.js block above, so `next dev` preserves it.

## What this is

`wasp-problem/` is the marketing site for **Wasp Problem** (waspproblem.ca) — wasp,
hornet and bee nest removal in Toronto and the GTA. Owner: Duane. Bees are described
generically on purpose (owner's call) — callers say "bees", not a species.
Next.js 16 App Router, React 19, TypeScript strict, Tailwind v4 (`@theme` in
`app/globals.css`; there is no `tailwind.config`).

**The repo root is a different business.** `good-neighbors/` at the monorepo root is
Good Neighbors Wildlife — a separate company with its own branding and deployment.
Never touch anything outside `wasp-problem/` unless asked in those words.

## Hard rules

These are not style preferences. Breaking one is a real-world problem for the owner.

1. **Never invent, reword, extend, or "clean up" a customer review.** Quotes in
   `lib/testimonials.ts` are reproduced character-for-character from Google,
   including grammar and spacing quirks ("is gone is one day", "Dwayne" for Duane,
   a space before a period). Those are deliberate — do not fix them. Google's
   attribute chips ("Reasonable price", "Pest type") and owner replies are Google's
   words, not the customer's: never quote them.
2. **Never write "licensed" or "certified" anywhere on the site.** The licence exam
   is not sat until December. Insurance is real and may be stated; credentials are
   not. Revisit only when the owner says the exam is passed.
3. **SMS goes to the local number only.** `PHONE_LOCAL.smsHref`. The toll-free
   number is not text-capable — never present it as one. `components/TextLink.tsx`
   has no `number` prop on purpose, so this can't drift.
4. **Never invent facts.** No service dates, no offers or discounts, no team-size or
   office claims, no tracking IDs, no before/after imagery that isn't a real photo.
   Don't attach a photo or a review link to a customer unless given that pairing
   explicitly — misattributing a review is worse than having no link.
5. **Never claim a change is live.** Google, goo.gl, googletagmanager.com and
   waspproblem.ca/.com are all blocked from the sandbox. Verify the code and a local
   build; the owner verifies the live site.
6. **Never claim a phone or SMS test happened.** No tool here can place a call.
7. **The word "can't" stays out of site copy.** Owner's preference, applies to user-
   facing text only.
8. **It's a "90-day service guarantee", never a "warranty".** Don't change the
   guarantee wording, the prices, or the "Simple. Fast. Local." heading.
9. **Same-day service always carries "based on availability".** 24/7 is about
   answering phone calls, not texts and not arrival times. The one exception is the
   owner-specified homepage title, which says "24/7 Same-Day Service*" — the asterisk
   stands in for the qualifier.
10. **Don't touch the GA4 tag or rename `cta_call` / `cta_text`.** Google Ads imports
   them as conversions. Every `tel:` link goes through `PhoneLink` and every `sms:`
   link through `TextLink`, so each one fires its event.

## Business facts (source of truth is the code, not this list)

- Toll-free **1-800-800-WASP** (1-800-800-9277) — primary, shown with `(9277)` under
  the letters via `components/TollFreeNumber.tsx`. Local **416-700-4259** — secondary,
  and the only textable number.
- Pricing (`lib/pricing.ts`), displayed **without "+ HST"**: visible nest **$180**,
  hidden **$250**, each additional nest **+$100**, ladder fees **+$75** (10–25 ft;
  under 10 ft included; over 25 ft quoted separately).
  The $180 is a deliberate loss-leader anchor so the site can say "transparent
  pricing from $180" — do not "correct" it upward to match the others.
  Owner-confirmed Oct 16 (relayed by chat 5, his words): a visible nest plus one extra nest is $280 ($180 + $100);
  taking a visible nest down and away is part of the $180; the same price list applies in every city.
- 90-day guarantee (`GUARANTEE` in `lib/site.ts`): *"If wasps return to the nest we
  treated within 90 days, we come back and deal with it at no additional charge."*
  The owner chose this wording over alternatives. Don't re-litigate it.
- Hero badge (`SAME_DAY_SERVICE.headline`): "Same-Day & Emergency Service*" — emergency is owner-confirmed;
  the asterisk points to "based on availability". Never write "24/7 emergency" or "24-hour emergency".
- `INSURANCE` in `lib/site.ts`: "Fully insured — $5,000,000 liability coverage".
- **Phone calls** are answered **24/7** (`AVAILABILITY_24_7` in `lib/site.ts`); the business
  schema says so too. **Texts and online requests are not** — the owner may not hear them
  overnight. Never write "day or night", "24/7" or "any time" as a promise about replying to a text or
  a request. The owner-vetted expectation, from their own description of when they reply, is:
  "usually within a few hours; overnight, first thing in the morning". Don't shorten it to a
  flat time promise, and don't revert it to "as soon as we see it" — that reads unstaffed.
- Based in **Toronto**, serves the whole GTA. `SERVICE_AREAS` is 14 cities, Toronto
  first. Oakville, Burlington and Brampton are kept but **not featured**: listed last,
  and left out of other city pages' cross-links (`featured: false`). There is no public
  street address — it's a service-area business.
- City pages: 14, one per `CITY_LOCATIONS` entry. Brampton's was added Oct 2026 for people who
  find the site on their own — it is not featured and gets no Google Ads. Each has its own
  hand-written copy — never clone one and swap the name.
- Canonical domain is `https://www.waspproblem.ca` (`BRAND.url` in `lib/site.ts`; the canonical tag, og:url,
  og:image, sitemap, robots and schema all follow it). Vercel's Domains list shows the www addresses
  (.ca and .com) as serving the site. The share image prints `waspproblem.ca` without the www.
- GA4 `G-2NETZXNWVG`. Conversion events: `cta_call`, `cta_text`, `lead_form` (a request
  from the online form was delivered).

## Where things live

| Thing | File |
|---|---|
| Brand, phones, guarantee, insurance, service areas, GA id | `lib/site.ts` |
| Prices and the visible/hidden explainer | `lib/pricing.ts` |
| Reviews and job photos | `lib/testimonials.ts` |
| FAQ copy | `lib/content.ts` |
| City landing pages | `lib/locations.ts` + `components/CityPage.tsx` |
| Ad-group landing pages | `/wasp-nest-removal-cost`: `lib/cost-page.ts` + `components/CostPage.tsx`. `/yellow-jacket-removal`: `lib/yellow-jacket-page.ts` + `components/ProblemPage.tsx`, the shared layout for problem pages (the bee, wall/roof and hornet pages fit it too). First-screen prices: `components/HeroPrices.tsx`. Every live one is listed in `LANDING_PAGES` (`lib/landing-pages.ts`), which feeds the sitemap and the footer links on every page |
| Title, description, canonical and share card for any page | `pageMetadata()` in `lib/page-metadata.ts` (city pages reach it through `locationMetadata()`) |
| Homepage section order | `app/page.tsx` |
| Online request form (Resend delivery, env vars) | `lib/leads.ts`, `app/actions.ts`, `components/LeadForm*.tsx` |
| Link preview when the URL is texted/shared (image, og title/description) | `app/opengraph-image.tsx` (drawn at build time; assets in `assets/og/`), `SERVICE_REGION` + `SHARE_PREVIEW` in `lib/site.ts` |

City pages don't inherit the `opengraph-image` file convention from the root — it is
scoped per route segment, so `pageMetadata()` (which `locationMetadata()` calls) wires the share card explicitly.
Don't "simplify" that away.

The request form renders nowhere until `RESEND_API_KEY` and `LEAD_TO_EMAIL` are set in
Vercel — deliberately, so the site never takes a request it drops. Don't make it render
unconditionally, and don't point it at an address nobody reads.

## Verifying

From `wasp-problem/`: `npx next build` and `npx eslint .` must both pass clean.

For anything about layout, overflow, tap targets or contrast, measure it — don't eyeball
a screenshot. Playwright is at `/opt/node22/lib/node_modules/playwright` with Chromium
at `/opt/pw-browsers/chromium`; run `npx next dev` and drive a real page at 390/768/1280.
Note that a contrast check reading only the alpha in a colour value misses CSS
`opacity` — that has shipped a 4.01:1 failure here before.

## Branches

- `claude/good-neighbors-website-17l0bw` — tracked by Vercel production. Commit here.
  A change is "done" or "live" only once it is merged into this branch AND Vercel's production
  deploy of that commit shows Ready. Committed or pushed to a session branch is not live — never
  report it as done (Oct 14 lesson: the ads chat found the live site unchanged).
- `claude/wasp-problem-website-h1a4xo` — was meant to be kept in sync, but nothing has been pushed to it since
  Oct 1 (22 commits behind production on Oct 16). Nothing in the repo deploys from it; ask Duane before reviving
  or deleting it.
- Handoff docs: a new chat starts from the production branch and sees only what is merged there. The next chat's
  handoff goes to production inside your PR (or a docs-only PR when no page is going out), never only on a
  session branch (Oct 16: chats 5 and 6 each reported the handoff missing). If it truly cannot be merged yet, the
  paste box must also name the branch and a `git show origin/<branch>:<path>` line.

## Expanding beyond the GTA

The owner plans to expand (BC and elsewhere) in 2027. When that happens:

1. Change `SERVICE_REGION` in `lib/site.ts`. The link-preview image, og:title and
   og:description update from it on the next deploy. Check the image afterwards at
   `/opengraph-image`, since the region sits on one line.
2. Then update the places that still name Toronto / the GTA directly: `BRAND.description`
   and `SERVICE_AREAS` (`lib/site.ts`), the homepage title and the LocalBusiness schema
   (`app/layout.tsx`, address and `areaServed`), the hero (`app/page.tsx`),
   `components/FinalCta.tsx`, `SiteFooter.tsx`, `ServiceAreaList.tsx`, `PricingTable.tsx`,
   `CityPage.tsx`, and the city pages in `lib/locations.ts`.
3. Off the site: Google Business Profile service areas, Google Ads locations and ad copy.

Never rename or remove an existing `/<city>-wasp-removal` URL while doing this, because Google
Ads points at them. Add new pages alongside them.

## Open items

- [x] Turn on the request form — done Oct 1, 2026. `RESEND_API_KEY` + `LEAD_TO_EMAIL` set in
      Vercel (Production), redeployed, test request delivered to the inbox (not spam).
- [x] `lead_form` marked as a key event in GA4 — done Oct 2, 2026 (starred next to `cta_call` / `cta_text`).
- [x] Verify waspproblem.ca in Resend — done Oct 12, 2026 (DNS records at GoDaddy; region North
      Virginia). `LEAD_FROM_EMAIL` = `Wasp Problem <website@waspproblem.ca>` is set in Vercel
      (Production) and redeployed; leads now arrive from website@waspproblem.ca. If the domain
      ever stops showing Verified, Resend rejects the sender and every lead fails. Lead subjects
      start "Wasp Problem lead —" (the owner's Gmail filter will key on it; don't change it).
- [ ] Separate from Wasp Problem: check how Good Neighbors' own form is set up in Resend
      (it delivers to hello@goodneighborswildlife.ca from the same Resend account).
- [ ] Reorder the Business Profile service areas so Toronto is first (owner's action).
- [ ] Google Ads: after a few real web requests, decide whether to import `lead_form` as an Ads
      conversion (owner's call; Ads counts `cta_call` today).
- [ ] Build one `/emergency-wasp-removal` page for "24 hour / emergency / late-night / open now"
      searches (owner's plan; do it from the terminal). One strong page — not one per phrase or
      per city. Needs from the owner first: the hours he actually goes out, and what counts as
      urgent. Copy: calls answered 24/7; urgent and evening jobs based on availability — never
      "24/7 emergency". Pull search volumes in Semrush once the account has API units.
- [ ] Product & safety page (owner's plan; build from the terminal). Product: **Drione
      Insecticide Dust** (Envu / Environmental Science CA Inc., Kitchener ON; formerly Bayer).
      Verified from the Canadian label and SDS in Oct 2026 — re-check every fact against a
      photo of the label on the container the owner actually uses before publishing:
      - PCP Registration No. 15255. Guarantee: pyrethrins 1.0%, piperonyl butoxide 9.7%,
        amorphous silica gel 40.0%.
      - Current label: PMRA approved 2024-03-19 (correction 2024-07-17), updated after the
        pyrethrins / piperonyl butoxide re-evaluations; the older label expired 2025-03-02.
      - SDS 2023-09-25: GHS "Not a hazardous substance or mixture"; repeated exposure may
        cause skin dryness or cracking. Label: "Keep out of reach of children"; harmful if
        swallowed; avoid skin contact and inhaling the powder. Earlier Canadian labels: toxic
        to fish, keep out of lakes, streams and ponds. Applicator PPE on the label: long
        sleeves, long pants, chemical-resistant gloves, socks, shoes, N95-minimum respirator.
      - Envu's wasp guidance (marketing copy, not label text): treat nests in the evening;
        dust the nest, its entrance and the surrounding area (0.25–0.5 g per average nest);
        keep people and pets out of treated areas until the dust has completely settled.
      - Page copy may use only label/SDS wording and the owner's own practice. Never
        "non-toxic", "100% safe", "eco-friendly", "organic" or "licensed". The Canadian label
        lists wasps; bees were not confirmed on it — keep bee claims off this page unless the
        owner's label says otherwise.
      Sources: ca.envu.com/pest-management/products/drione (label + SDS PDFs);
      labelsds.com "Canada Drione Dust En-Fr Label 7-17-24" and "SDS 9-25-23".
- [ ] Google Business Profile: set hours to "Open 24 hours" if not already (calls are answered
      24/7) — drives "open now" searches in Maps (owner's action).
- [ ] Licence wording — only after the December exam is passed.
- [ ] Speed, which feeds Google Ads landing-page experience: mobile Lighthouse LCP (local, simulated) is 2.9 s on
      `/wasp-nest-removal-cost`, 3.0 s on `/yellow-jacket-removal` and about 2.8 s on the homepage, against the 2.5 s
      target. Fonts are all `display: swap` and nothing animates, so the delay is not a font block or a fade-in. On the cost page the LCP
      element is the H1 text, and 2.4 s of the 2.9 s is render delay, not images or downloads (fonts 70 KB, CSS 8 KB,
      JS 114 KB). Same cause site-wide, so one job for fonts and hydration JS. After a deploy, check the live URL in
      PageSpeed Insights (blocked from the sandbox).
- [ ] In Vercel → Settings → Domains, confirm bare `waspproblem.ca` redirects to `www.waspproblem.ca` and not the
      other way round (owner's action; the code now assumes www is primary).

## Accounts

Which login each service uses. Emails and sign-in method only — never passwords or API keys.

| Service | Login | How to sign in | Notes |
|---|---|---|---|
| Resend (request form email) | duane@goodneighborswildlife.ca | "Log in with Google", from the **Work** (Good Neighbors) Chrome profile | Shared with Good Neighbors. Wasp Problem's key is named "Wasp Problem website" — don't delete it, the form stops sending. Requests go to `LEAD_TO_EMAIL` = duane@goodneighborswildlife.ca. |
| Resend (unused) | badadandotcom@gmail.com | — | Created by mistake Oct 1, 2026. Not used; safe to ignore or delete. |
| Vercel (hosting) | badadandotcom-droid team | the Chrome profile with the wasp picture | Project `wasp-problem`. Holds `RESEND_API_KEY`, `LEAD_TO_EMAIL` and `LEAD_FROM_EMAIL`. |

Chrome profiles: the one with the **wasp picture** is signed in to Google as
badadandotcom@gmail.com, not a Wasp Problem address — there is no Wasp Problem email yet.
"Log in with Google" from that profile signs in as badadandotcom. Use the **Work** profile
for anything that should be under duane@goodneighborswildlife.ca.

## Google Ads & SEO roadmap (Oct 2026)

From the Oct 10, 2026 Google Ads data pull (kept in the owner's ads chat, not in this repo: 90
days of search terms, keywords with quality scores, the negative list, conversions, ads and
Keyword Planner volumes). Facts that drive the plan:

- Search volume, Toronto geo, 12-month averages (Jul–Aug runs ~10x these; Nov–Apr is near zero):
  wasp nest removal 390/mo · wasp removal toronto 260 · wasp exterminator 110 · yellow jacket
  exterminator 110 (Low competition) · mud dauber nest removal 90 · wasp removal 70 · ground wasps
  70 (Low) · wasp nest in ground 50 (Low) · hornet nest removal 40 · wasp removal near me 40 ·
  every other city term ~10/mo.
- Every non-city keyword lands on the homepage. "wasps in wall" scores landing-page experience
  Below average; the city pages score Above average (Toronto QS 9). The only tracked conversion
  in 90 days came from a "wasp nest removal cost" search.
- Hire-intent clicks cost CA$11–12. The bee ad group sends traffic to the homepage, not /#bees.

Homepage hero (owner's call, Oct 16): the big "WASP PROBLEM?" lawn-sign lockup stays as the
brand look; it is a `<p>`, not a heading. The H1 is the line under it, "Professional Wasp Nest
Removal / Serving Toronto & the GTA". Don't make the homepage look worse for ad score: the
themed pages below carry the specific searches. Owner's call (Oct 16): the H1 stays "Serving
Toronto & the GTA"; the ads chat suggested "in Toronto & the GTA" to match the search phrase,
and the owner said no — change the ad if anything, not the site.

Pages to build. New URLs only — never rename the homepage or a city page. The ads chat's order (Oct 16):
cost page first, `/yellow-jacket-removal` second, `/bee-removal` third (the list numbers below predate that).
Status Oct 16: `/wasp-nest-removal-cost` and `/yellow-jacket-removal` merged into production by chat 6 (Wasp
Problem Lead Website 6). Next: `/bee-removal`.

How a page goes live (owner's call, Oct 16: "just do it ... go live ... make sure it's live"): don't wait for
Duane's OK on a page that keeps every rule in this file. Build it, check it (lint, types, build, 360/390 first
screen, events, copy grep, Lighthouse), publish it through a PR into production, confirm Vercel's production
deploy shows Ready, then give Duane one paste box for the ads chat. If the ads chat has sent the ad group's
keywords and headline 1, the page title and H1 use that main phrase word for word; if not, pick the phrase from
the keyword numbers above and tell the ads chat in the paste box, so the ad group is built to match the page.
Never point an ad group at a page before it is live. Don't hand Duane questions he can't answer (ad group
details, which chat said what); ask only what truly needs him, like a price or a fact about his work.

1. `/yellow-jacket-removal` (merged Oct 16) — yellow jackets, ground wasps, nests in the lawn, under steps and
   in wall voids. Targets ~260/mo of mostly Low-competition searches (yellow jacket exterminator,
   ground wasps, wasp nest in ground, yellow jacket nest removal).
2. `/wasp-nest-removal-cost` (merged Oct 16) — the price table ($180 visible, $250 hidden, +$100 each extra nest,
   ladder fees), what changes the price, what is included, the 90-day service guarantee. Cost
   searches are hire-intent and convert; upfront pricing is the differentiator.
3. `/bee-removal` — added Oct 16 on the owner's OK. A real page for the bee ad, because Google
   ignores the `#bees` part of `/#bees` and scores the whole homepage (which is about wasps).
   Bees stay generic: no honey, bumble or carpenter bee copy. Keep the "bees" anchor on the
   homepage; the bee ad keeps linking to `/#bees` until this page is live and the owner OKs the
   switch. Needs the ads chat's ad group name, keywords and headline 1 first.
4. Deepen `/toronto-wasp-removal` to 400–500 words (neighbourhoods, housing types, where nests
   turn up). It carries "wasp removal toronto" (260/mo); the other city pages carry ~10/mo each
   and already score well — leave them as they are.
5. `/wasps-in-wall-or-roof` — hidden nests: wall voids, behind siding, brick weep holes, soffits,
   roof edges, attics. Matches the "Wasps in Your Wall or Roof?" ad headline and the $250
   hidden-nest price.
6. `/hornet-nest-removal` — bald-faced hornets and paper nests in trees, eaves and sheds.
7. `/emergency-wasp-removal` — supports the 24/7 ad (see the open item above).
8. Product & safety page (Drione; see the open item above). Best after the Dec 7 exam, since
   it describes commercial pesticide use.

Every page: the first phone screen holds the H1 with the phrase, the flat price, the 90-day service guarantee and a big Call button (mobile Lighthouse LCP target: under 2.5 s); the search phrase is in the title, H1 and H2s; a "what you're seeing → what it
probably is" section; what happens if you wait; what we do; the prices that apply; the
guarantee; an FAQ with FAQPage schema; links to the homepage and the city pages. Same rules as
the rest of the site: never "licensed" or "certified", no "can't", 24/7 means calls only, bees
stay generic.

Hold until after the Dec 7 exterminator exam: the word "exterminator" anywhere on the site or in
ad headlines — Ontario licenses that role.

Account-side work (owner and the ads chat, not code) was listed in the Oct 11 chat: call-asset
conversion tracking, pause the old RSA, point the bee ad at /#bees, split the single ad group
into themed groups once the pages exist, lower bids over the winter, find who owns the Wasp
Problem Business Profile.

