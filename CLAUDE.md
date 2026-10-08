@AGENTS.md

## Good Neighbors Wildlife standing rules (from the owner)

These rules apply only to Good Neighbors Wildlife (the site at the repo root: `app/`, `components/`, `lib/`; live at www.goodneighborswildlife.ca). They do not apply to Wasp Problem (`wasp-problem/`), which has its own rules.

- Business: Good Neighbors Wildlife, humane wildlife removal in Toronto, York Region, Durham Region and Peel Region (raccoons, squirrels, skunks, birds, bats), plus sealing the entry point and repairing the damage the animal caused. Written for owners of larger, higher-end homes: calm, careful and respectful of the home, with nothing meant to scare.
- Going live: the live site deploys from `claude/good-neighbors-v2-visual-redesign` (Vercel). The site code on the repository's default branch is older than the live site, so start Good Neighbors work from the live branch. Work on the session's own branch, show the owner every new page and all new wording first, and merge into the live branch only after the owner approves.
- SEO on every change, without being asked: each page title and H1 names the animal or problem and Toronto (a service-area page names its own area instead). Titles end in " | Good Neighbors Wildlife" through the layout template, so pass `pageMetadata` a bare title. Give each page its own meta description of about 150–160 characters, link pages to each other with descriptive anchor text, keep structured data accurate (`lib/seo.ts`, rendered with `components/shared/JsonLd`), and add every new public page to `app/sitemap.ts`. Tell the owner what changed.
- Guarantee: the only guarantee is the lifetime guarantee on entry points we seal, in the owner's exact wording (`GUARANTEE` in `lib/config/site.ts`). Never paraphrase it. No separate guarantee page, no other guarantees or warranties, no prices.
- Repairs: name only the owner-confirmed repairs in `lib/data/repairs.ts`, which are matched to the home's existing materials and colours. Ask the owner before naming any other repair type.
- No whole-home prevention ("block and lock") on public pages. Repair talk stays limited to the spot the animal used and the damage it caused. An unlisted page for it may come later (see PLACEHOLDERS.md).
- No made-up trust signals: no reviews, ratings, insurance or certification claims until the owner confirms they are real (see PLACEHOLDERS.md).
- Phone links, the contact form and Google tracking change only on an explicit request. Tracking: GA4 G-MLBBT02NEC and Google Ads AW-18430229184 share one gtag load. Never use Wasp Problem's G-2NETZXNWVG here.
