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
- City pages: 13, one per `CITY_LOCATIONS` entry (Brampton has none). Each has its own
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
| Homepage section order | `app/page.tsx` |
| Online request form (Resend delivery, env vars) | `lib/leads.ts`, `app/actions.ts`, `components/LeadForm*.tsx` |
| Link preview when the URL is texted/shared (image, og title/description) | `app/opengraph-image.tsx` (drawn at build time; assets in `assets/og/`), `SERVICE_REGION` + `SHARE_PREVIEW` in `lib/site.ts` |

City pages don't inherit the `opengraph-image` file convention from the root — it is
scoped per route segment, so `locationMetadata()` wires the share card explicitly.
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
- `claude/wasp-problem-website-h1a4xo` — kept in sync; push to both.

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
- [ ] Verify waspproblem.ca in Resend (DNS records), THEN set `LEAD_FROM_EMAIL` =
      `Wasp Problem <website@waspproblem.ca>` in Vercel and redeploy. Never set it before the
      domain shows Verified — Resend rejects the sender and every lead fails. Lead subjects
      start "Wasp Problem lead —" (owner's Gmail filter keys on it; don't change it).
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
- [ ] In Vercel → Settings → Domains, confirm bare `waspproblem.ca` redirects to `www.waspproblem.ca` and not the
      other way round (owner's action; the code now assumes www is primary).

## Accounts

Which login each service uses. Emails and sign-in method only — never passwords or API keys.

| Service | Login | How to sign in | Notes |
|---|---|---|---|
| Resend (request form email) | duane@goodneighborswildlife.ca | "Log in with Google", from the **Work** (Good Neighbors) Chrome profile | Shared with Good Neighbors. Wasp Problem's key is named "Wasp Problem website" — don't delete it, the form stops sending. Requests go to `LEAD_TO_EMAIL` = duane@goodneighborswildlife.ca. |
| Resend (unused) | badadandotcom@gmail.com | — | Created by mistake Oct 1, 2026. Not used; safe to ignore or delete. |
| Vercel (hosting) | badadandotcom-droid team | the Chrome profile with the wasp picture | Project `wasp-problem`. Holds `RESEND_API_KEY` and `LEAD_TO_EMAIL`. |

Chrome profiles: the one with the **wasp picture** is signed in to Google as
badadandotcom@gmail.com, not a Wasp Problem address — there is no Wasp Problem email yet.
"Log in with Google" from that profile signs in as badadandotcom. Use the **Work** profile
for anything that should be under duane@goodneighborswildlife.ca.
