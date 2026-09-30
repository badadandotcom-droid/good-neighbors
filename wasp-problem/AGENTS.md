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
hornet and carpenter bee nest removal in Toronto and the GTA. Owner: Duane.
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
- Canonical domain is bare `https://waspproblem.ca`. The `.com` redirects to it.
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

## Open items

- [ ] Turn on the request form: Resend account, then `RESEND_API_KEY` + `LEAD_TO_EMAIL`
      in Vercel and redeploy (owner's action; details in `lib/leads.ts`). Then mark
      `lead_form` as a key event in GA4.
- [ ] Reorder the Business Profile service areas so Toronto is first (owner's action).
- [ ] Licence wording — only after the December exam is passed.
- [ ] Confirm in Vercel that bare `waspproblem.ca` is primary, matching the code.
