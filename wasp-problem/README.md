# Wasp Problem

Seasonal lead-capture site for Wasp Problem (WaspProblem.ca). One page, one
job: get a visitor on their phone to 416-700-4259 as fast as possible.

This app is **fully isolated** from the Good Neighbors Wildlife app that
lives at the repo root — separate `package.json`, separate `node_modules`,
separate lockfile, no shared imports. It is meant to be deployed as its own
Vercel project.

## Stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** (CSS-first `@theme` config in `app/globals.css`)
- No web fonts (system font stack), no client-side libraries. The only
  client components are two small ones that fire a click-tracking event on
  the phone links (`components/PhoneLink.tsx`, `components/StickyCallBar.tsx`).
  The FAQ accordion is a native `<details>` — no JS.

## Getting started

```bash
cd wasp-problem
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint      # ESLint
```

## Editing content

Everything editorial (phone number, domain, service-area city list) lives in
`lib/site.ts`. Page copy lives in `app/page.tsx`. There's intentionally no
CMS or data layer — this is a one-page seasonal site.

## Analytics / lead tracking

`lib/analytics.ts` exports `trackEvent`, which every phone link already
calls on click. It's a no-op until GA4/GTM/Google Ads/CallRail are wired up.
To connect one:

1. Load the provider's script tag in `app/layout.tsx` (e.g. GTM's snippet,
   or a CallRail swap-tracking script).
2. If it uses `window.dataLayer` (GA4/GTM), `trackEvent` already pushes to
   it automatically — nothing else to change.
3. For a different queue (e.g. `gtag`, CallRail's own JS API), edit the body
   of `trackEvent` in `lib/analytics.ts`. Every call site keeps working.

## Deploying as a separate Vercel project

Do this once, from the Vercel dashboard:

1. **New Project → Import** the `badadandotcom-droid/good-neighbors` GitHub repo.
2. When asked for the **Root Directory**, set it to `wasp-problem`. This is
   the key step that keeps this project's build completely separate from
   the Good Neighbors app at the repo root — Vercel will `cd` into
   `wasp-problem/` and use its own `package.json`/lockfile.
3. Framework preset should auto-detect as **Next.js**. Build command
   `next build`, output is handled automatically — no overrides needed.
4. Deploy. You'll get a `*.vercel.app` preview URL first.
5. **Project Settings → Domains** → add `waspproblem.ca` (and `www.waspproblem.ca`
   if you want the www variant, redirecting to the apex or vice versa —
   your call). Vercel will show the DNS records to add:
   - Either point the domain's nameservers at Vercel, or
   - Add an `A` record for `waspproblem.ca` pointing at Vercel's IP and a
     `CNAME` for `www` pointing at `cname.vercel-dns.com`, per whatever
     Vercel's dashboard shows for your exact case.
6. Once DNS propagates, Vercel issues the SSL certificate automatically.

Because this is a **second, independent Vercel project** pointed at a
subfolder, pushes to this repo only redeploy Good Neighbors' project if
files under its own root change, and only redeploy this project if files
under `wasp-problem/` change (Vercel's default "ignore build if no relevant
changes" behavior, driven by the Root Directory setting) — the two
deployments can't clobber each other.

## Adding analytics IDs later

No IDs are hardcoded anywhere. When ready:

- **Google Analytics / Google Ads conversion tracking**: add the GA4/gtag
  script in `app/layout.tsx`, and fire a conversion event from
  `trackEvent`'s body in `lib/analytics.ts` on the `"cta_call"` event.
- **CallRail**: swap `PHONE.display`/`PHONE.href` in `lib/site.ts` for
  CallRail's dynamic number insertion snippet, or point `trackEvent` at
  CallRail's JS API — whichever their current integration guide recommends.

## Adding location pages later

The brief intentionally keeps this a single page for now, but the service
area list already lives as data (`SERVICE_AREAS` in `lib/site.ts`) rather
than being hand-written into markup. If ad or search data shows strong
demand for a specific city (Markham, Pickering, Ajax, Scarborough, etc.),
add a `app/[slug]/page.tsx` (or `app/wasp-removal-markham/page.tsx`-style
static route) that reuses the same sections/copy with a city-specific
headline and `<link rel="canonical">` — no restructuring required.
