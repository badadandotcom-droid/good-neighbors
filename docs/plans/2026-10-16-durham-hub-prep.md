# Durham hub long-form copy: prep notes (GNW Website 8, Oct 16, 2026, on Sonnet)

For the Fable (or Opus) chat that writes the copy. Reading and fact-checking only; no site code changed. Brief: docs/handoffs/gnw-website-8.md, "Start here", item 1. Model for York: docs/reviews/2026-10-13-york-hub-review.md; copy: `hubSections` and `hubFaqs` on york-region in lib/data/markets.ts.

## Where the work goes
- `lib/data/markets.ts`, entry `durham-region` (line ~214): add `hubSections` (four sections) and `hubFaqs` (six). `hubSections` turns the trust row on. Leave `hubTitle`, `heroHeading`, `seoDescription` and `heroBlurb` alone.
- Headings (same as the other hubs): "Why Durham Region has so much wildlife", "Durham Region, part by part", "Which animal, and where", "How a visit works in Durham Region".
- Also check: structured-data area list for the hub (`lib/seo.ts`), FAQ schema matches the rendered questions, and the /service-areas index card needs no change (it already lists Uxbridge, Scugog, Bowmanville, Courtice).

## Allowed place names (owner's lists, higher-end areas first as on the city pages)
- Pickering: Rosebank, Rouge Park, Whitevale, Amberlea, Dunbarton, Bay Ridges, Liverpool, Brock Ridge, Claremont.
- Ajax: Riverside, Nottingham, Pickering Village, Lakeside, Applecroft, Hermitage, Salem, Central Ajax.
- Whitby: Brooklin, Lynde Creek, Port Whitby, Pringle Creek, Rolling Acres, Blue Grass Meadows, Williamsburg, Taunton North.
- Oshawa: Windfields, Kedron, McLaughlin, Northglen, Samac, Taunton, Pinecrest, Centennial, Eastdale, Lakeview.
- Plus: Uxbridge, Scugog (never Port Perry), Bowmanville, Courtice. No village names. Not on the owner's list, so do not name: Brock Township (Beaverton, Cannington, Sunderland), Newcastle, Orono, Seaton, Blackstock. Ask the owner if he covers Brock and Clarington's other towns (he said Oct 14 that he covers all of York; he has not said it for Durham).
- City page links: /service-areas/pickering, /ajax, /whitby, /oshawa.

## Facts found online (Oct 16; standard web search, nothing else checked)
- Durham Region has 8 municipalities; the seat is Whitby. Source: https://en.wikipedia.org/wiki/Regional_Municipality_of_Durham
- 2021 census population 696,992 (+7.92% from 2016); Oshawa the largest municipality, 175,383. Sources: https://www.Durham.Ca/en/regional-government/resources/Documents/Council/CIP-Reports/CIP-Reports-2022/2022-INFO-31.pdf and https://durham.ca/en/living-here/resources/Documents/Attachment-2---DRP-Technical-Report-and-Appendices.pdf
- Clarington is on the lake; its centres include Courtice and Bowmanville. Scugog Township has Lake Scugog. Uxbridge sits in the Oak Ridges Moraine, in the Greenbelt. The region's western edge is the Rouge Valley (Rouge National Urban Park). Pickering, Ajax and Uxbridge are in the Toronto census metropolitan area; Oshawa, Whitby and Clarington in the Oshawa one. Sources: Wikipedia page above; https://invest.durham.ca/blog

## Not yet checked (do before writing)
- Watersheds: Duffins Creek, Lynde Creek and Oshawa Creek running south to the lake from the Oak Ridges Moraine; Carruthers Creek; Lake Scugog draining north (Trent system). Use conservation-authority pages (TRCA, CLOCA, GRCA not applicable).
- Region population in 1974 (formed as a regional municipality) for a "then and now" line, if wanted (York used 1971).
- Lynde Shores Conservation Area, Heber Down, Second Marsh, Darlington Provincial Park, Pickering Village's founding, Brooklin's history: only if used; the city pages already carry some.
- Whether Durham has anything different about wildlife (more farmland and woodland in the north, the lakefront marshes); keep it general where unchecked and say so in the review.

## Rules reminder for the writer
- Unique sentences across the site (run the shared-sentence check), only the approved how-we-work line may repeat.
- No "guarantee" in the new copy (trust row carries it), no prices, reviews, ratings, years, "fully insured", "licensed", "block and lock". Repairs only from lib/data/repairs.ts. Same-day wording: requests before 4 PM, subject to technician availability.
- Phone links, form, tracking untouched. Show the owner every new sentence in docs/reviews/2026-10-16-durham-hub-review.md with numbered judgment calls; merge only after "approved"; then the live note "For the ads chat".
- Tooling: `npm i playwright-core lighthouse chrome-launcher` in the scratchpad with copies of scripts/checks beside it; crawl must end "Problems: none"; compare must list only the Durham hub (and none other).
