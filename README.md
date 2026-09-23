# Good Neighbors

Marketing website for Good Neighbors, a humane wildlife removal company
launching in Southern Ontario and built to expand across Canada and,
eventually, the United States. One brand, one codebase, many local
markets.

## Stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** (CSS-first `@theme` config in `app/globals.css` — no `tailwind.config.js`)
- No UI framework, no external form/state libraries — plain React state and native HTML where it's sufficient (e.g. the FAQ accordion is a native `<details>`, no JS).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint      # ESLint
```

## Architecture decisions that matter

**Same-day service is centrally configurable.** `lib/config/site.ts` →
`DEFAULT_SAME_DAY_SERVICE` is the only place the "Same-Day Service" promise
is defined — headline phrase, cutoff time, qualification copy, and the
fallback language used everywhere when it's turned off. Every page reads
it through `lib/config/resolvers.ts` (`getSameDayConfig`,
`getPositioningLine`, `getSameDayMessage`, `getHeroHeadline`). Flip
`enabled: false` and the "Fast Response" fallback appears everywhere
automatically — headline, badges, FAQ, footer. A market can also override
just its own cutoff/availability via `Market.sameDayService`.

**Markets are data, not pages.** `lib/data/markets.ts` holds every local
market as a plain object (name, region, status, service area, same-day
override, SEO copy, optional phone). `app/service-areas/[slug]/page.tsx`
renders all of them from one template via `generateStaticParams`. Adding a
market is a one-file edit — no new route, no new component.

**Markets are built before they're active.** Every market's `status` is
either `"active"` or `"coming-soon"`. Coming-soon markets keep their full
page, but are left out of "Currently Serving" sections, same-day claims,
and the sitemap (their pages are `noIndex`) until someone flips the
status — see [`PLACEHOLDERS.md`](./PLACEHOLDERS.md) for the current active
list and the exact activation steps.

**URL structure is deliberately not finalized.** Markets currently live at
`/service-areas/[slug]`. Every internal link goes through the
`marketHref()` helper in `lib/data/markets.ts` rather than being
hand-built, so promoting a market to a root-level path (e.g. `/toronto`)
later is a routing change, not a data-model change or a find-and-replace
across the codebase.

**Wildlife content covers species and situations.** `lib/data/wildlife.ts`
holds both species pages (raccoons, squirrels, birds, bats) and
"situation" pages (something in the attic / in the walls) in one list,
rendered by one template at `app/wildlife/[slug]/page.tsx`. This matches
how people actually search — "raccoon in attic" and "noise in my attic"
both land somewhere useful — without maintaining two page systems.

**Phone numbers and analytics IDs are centralized placeholders.** See
[`PLACEHOLDERS.md`](./PLACEHOLDERS.md) for the full audit of everything
that's fabricated-but-clearly-fake and needs to be replaced before launch.

**The primary conversion action is "Get Help Now," everywhere.** Every CTA
in the codebase goes through the `CTAButton` component and points at
`/contact`, which hosts the intake form. There's no competing CTA
language, and no pricing calculator — the site's job is to generate the
inquiry, not quote a price online (situations vary too much for that to be
honest).

## Directory guide

```
app/                    Routes (App Router)
  wildlife/[slug]        Species + situation pages
  service-areas/[slug]   Market pages
  api/get-help/           Intake form submission endpoint (validates only — see PLACEHOLDERS.md)
components/
  layout/                 Header, Footer, StickyMobileCTA
  home/                   Homepage sections
  shared/                 CTAButton, PhoneLink, SameDayBadge, FAQAccordion, PhotoPlaceholder, etc.
  forms/                  GetHelpForm, PhotoUpload
  illustrations/          Hand-built line-art icon system (stands in for photography)
lib/
  config/site.ts          Brand, contact, same-day service — the source of truth
  config/resolvers.ts     Every page reads config through these, never the raw constants
  data/                   Markets, wildlife, FAQ, nav
  seo.ts                  Metadata + JSON-LD builders
  analytics.ts             Conversion-event tracking hook (no-op until IDs exist)
```

## Known gaps before production

See [`PLACEHOLDERS.md`](./PLACEHOLDERS.md). In short: real phone/email,
real photography, a connected form backend (currently validates but
doesn't deliver anywhere), photo upload storage, analytics IDs, and legal
review of `/privacy` and `/terms`.
