@AGENTS.md

## Wasp Problem standing rules (from the Google Ads side)

These rules apply only to Wasp Problem (the site in `wasp-problem/`). They do not apply to Good Neighbors Wildlife or any other work in this repo.

- Business: Wasp Problem, waspproblem.ca, wasp / hornet / yellow jacket / bee removal in Toronto and the GTA. Google Ads sends paid traffic to the homepage and the city pages.
- 24/7 means PHONE CALLS ONLY. The owner answers calls around the clock but may not see texts or web requests until morning. Never promise a 24/7 reply to a text. Hero line: "Open 24/7 — call us anytime." Texts and web requests: "usually within a few hours; overnight, first thing in the morning." Ad copy matches: "Open 24/7 — Call Now", never "Call or Text 24/7".
- Same-day service is always "based on availability". Homepage title: "Wasp Nest Removal Toronto & GTA | 24/7 Same-Day Service* | Wasp Problem" (the asterisk points to that line on the page).
- Words: never "licensed" or "certified". Use "fully insured — $5,000,000 liability coverage". Use "90-day service guarantee", never "warranty". The word "can't" stays out of site copy.
- Phones: texts go to 416-700-4259 only. 1-800-800-WASP (1-800-800-9277) takes calls only.
- URLs: do NOT rename, move or delete the homepage or any /<city>-wasp-removal page, because Google Ads keywords point to them. 13 city pages. Featured: toronto, mississauga, markham, vaughan, richmond-hill, thornhill, pickering, ajax, whitby, newmarket, whitchurch-stouffville. Kept but not featured: oakville, burlington. Brampton is a service area with no page.
- Bees: the bee section lives at /#bees. Google Ads' bee ad links to it, so keep the "bees" anchor id. Bees are described generically on purpose: no honey bee, bumble bee or carpenter bee specific copy. City pages carry one bee line.
- Tracking: GA4 ID G-2NETZXNWVG. Keep the existing cta_call and cta_text events; Google Ads counts cta_call, so never rename or remove it, never add a second Google tag, and never add a separate phone_call_click event. Every cta_call and cta_text event carries phone_number and page. The online request form fires lead_form (never form_submit, which collides with GA4's automatic event); it goes live once the owner connects the email service.
- Open item for the owner (not code): register phone_number and page as event-scoped custom dimensions in GA4 (Admin > Custom definitions).

## Good Neighbors Wildlife standing rules (from the owner)

These rules apply only to Good Neighbors Wildlife (the site at the repo root: `app/`, `components/`, `lib/`; live at www.goodneighborswildlife.ca). They do not apply to Wasp Problem (`wasp-problem/`), whose rules are above.

- Business: Good Neighbors Wildlife, humane wildlife removal in Toronto, York Region, Durham Region and Peel Region (raccoons, squirrels, skunks, birds, bats), plus sealing the entry point and repairing the damage the animal caused. Written for owners of larger, higher-end homes: calm, careful and respectful of the home, with nothing meant to scare.
- Going live: the live site deploys from `claude/good-neighbors-v2-visual-redesign` (Vercel). The site code on the repository's default branch is older than the live site, so start Good Neighbors work from the live branch. Work on the session's own branch, show the owner every new page and all new wording first, and merge into the live branch only after the owner approves.
- SEO on every change, without being asked: each page title and H1 names the animal or problem and Toronto (a service-area page names its own area instead). Titles end in " | Good Neighbors Wildlife" through the layout template, so pass `pageMetadata` a bare title. Give each page its own meta description of about 150–160 characters, link pages to each other with descriptive anchor text, keep structured data accurate (`lib/seo.ts`, rendered with `components/shared/JsonLd`), and add every new public page to `app/sitemap.ts`. Tell the owner what changed.
- Guarantee: the only guarantee is the lifetime guarantee on entry points we seal, in the owner's exact wording (`GUARANTEE` in `lib/config/site.ts`). Never paraphrase it. No separate guarantee page, no other guarantees or warranties, no prices.
- Repairs: name only the owner-confirmed repairs in `lib/data/repairs.ts`, which are matched to the home's existing materials and colours. Ask the owner before naming any other repair type.
- No whole-home prevention ("block and lock") on public pages. Repair talk stays limited to the spot the animal used and the damage it caused. An unlisted page for it may come later (see PLACEHOLDERS.md).
- No made-up trust signals: no reviews, ratings, insurance or certification claims until the owner confirms they are real (see PLACEHOLDERS.md).
- Phone links, the contact form and Google tracking change only on an explicit request. Tracking: GA4 G-MLBBT02NEC and Google Ads AW-18430229184 share one gtag load. Never use Wasp Problem's G-2NETZXNWVG here.
