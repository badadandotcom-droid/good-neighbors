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
- Plus: Uxbridge, Scugog (never Port Perry), Bowmanville, Courtice. No village names. Owner, Oct 16: "I'll cover all of Durham", so the hub says it covers all of Durham Region and also names Brock Township, the same way York's hub names East Gwillimbury and Georgina: as a township, without its villages (not Beaverton, Cannington or Sunderland). Clarington may be named as the municipality that holds Bowmanville and Courtice (make it a numbered judgment call in the review). Still not named: Newcastle, Orono, Seaton, Blackstock (villages or not on the owner's list). Where York's change touched them, do the Durham equivalents: the list under the H1 and "We also cover" (`alsoCovered`), the /service-areas index card, the structured-data area list, a line in the CLAUDE.md place-names rule.
- City page links: /service-areas/pickering, /ajax, /whitby, /oshawa.

## Facts found online (Oct 16; standard web search, nothing else checked)
- Durham Region has 8 municipalities; the seat is Whitby. Source: https://en.wikipedia.org/wiki/Regional_Municipality_of_Durham
- 2021 census population 696,992 (+7.92% from 2016); Oshawa the largest municipality, 175,383. Sources: https://www.Durham.Ca/en/regional-government/resources/Documents/Council/CIP-Reports/CIP-Reports-2022/2022-INFO-31.pdf and https://durham.ca/en/living-here/resources/Documents/Attachment-2---DRP-Technical-Report-and-Appendices.pdf
- Clarington is on the lake; its centres include Courtice and Bowmanville. Scugog Township has Lake Scugog. Uxbridge sits in the Oak Ridges Moraine, in the Greenbelt. The region's western edge is the Rouge Valley (Rouge National Urban Park). Pickering, Ajax and Uxbridge are in the Toronto census metropolitan area; Oshawa, Whitby and Clarington in the Oshawa one. Sources: Wikipedia page above; https://invest.durham.ca/blog

## More facts found online (Oct 16, second round; standard web search only, not cross-checked beyond the source named)
- Region formed Jan 1, 1974 (Regional Municipality of Durham Act, 1973), from 21 local municipalities in the old counties of Ontario, Northumberland and Durham. Population 247,473 in 1976 (earliest census figure; one Region source says about 228,000 at the start), 696,992 in 2021, about 753,000 estimated end of 2023; Region projects 1.3 million by 2051. Land area just over 2,500 sq km. Sources: https://en.wikipedia.org/wiki/Regional_Municipality_of_Durham, https://durham.ca/en/news/durham-region-celebrates-50-years.aspx, https://www.durham.ca/en/living-here/resources/Documents/EnvironmentalStability/Durham-Region-Profile-Detailed-Report.pdf. If a "then and now" line is used, quote 1976 (247,473) and 2021 (696,992), not 1974.
- Duffins Creek: runs from the Oak Ridges Moraine to the Lake Ontario waterfront, about 28,300 hectares (TRCA). Source: https://en.wikipedia.org/wiki/Hydrography_of_the_Oak_Ridges_Moraine
- Carruthers Creek: about 20 km, watershed in Pickering and Ajax, mouth at Richardson Point in Ajax; its headwaters are south of the Moraine in Pickering. Source: https://en.wikipedia.org/wiki/Carruthers_Creek_(Canada)
- Lynde Creek: begins on the Moraine in Scugog (Reach Township), flows south to its mouth in the southwest of Whitby; about 130 sq km. Source: https://en.wikipedia.org/wiki/Lynde_Creek and CLOCA.
- Oshawa Creek: about 50 km from its Moraine headwaters to the lake at Oshawa, drains about 120 sq km. Source: https://en.wikipedia.org/wiki/Oshawa_Creek
- Bowmanville and Soper Creeks are CLOCA watersheds (Clarington). Source: Wikipedia, Hydrography of the Oak Ridges Moraine.
- Lynde Shores Conservation Area (Whitby): marsh at the bottom of Lynde Creek, bird habitat (CLOCA is adding wetlands there). Second Marsh (Oshawa): 137 ha coastal wetland, Provincially Significant Wetland; with McLaughlin Bay Wildlife Reserve and Darlington Provincial Park (Clarington) it makes nearly 400 ha of waterfront green space. Sources: https://www.durham.ca/news/posts/second-marsh-is-an-ideal-spot-for-newcomers-to-birdwatching/, https://www.insauga.com/three-new-wetlands-to-be-created-at-urban-ontario-conservation-area/
- Lake Scugog (Scugog): fed by streams that mostly start on the Moraine; its only outlet is the Scugog River, which runs north through Lindsay to Sturgeon Lake and the Trent system. So the Moraine splits Durham's water: south to Lake Ontario (Duffins, Carruthers, Lynde, Oshawa, Bowmanville creeks), north to the Kawarthas through Scugog. Sources: https://en.wikipedia.org/wiki/Lake_Scugog, https://en.wikipedia.org/wiki/Scugog_River
- Not found: Frenchman's Bay facts (the Pickering city page already mentions the bay as a waterfront feature; reuse only what that page says). Seaton: not found, and not on the owner's list, so not named.

## Still not checked (say so in the review file, keep these general)
- Wildlife claims specific to Durham (marsh and lakefront skunks, northern farmland). Keep them general, as the Peel and York hubs did.
- Uxbridge, Scugog, Bowmanville and Courtice as places: the only facts above are the Moraine (Uxbridge), Lake Scugog (Scugog) and the lakeshore with Darlington Provincial Park and Bowmanville Creek in Clarington. Nothing about their houses, so no street or subdivision names and no claims about their housing stock beyond "town cores, newer edges, rural lots" kept loose.

## Rules reminder for the writer
- Unique sentences across the site (run the shared-sentence check), only the approved how-we-work line may repeat.
- No "guarantee" in the new copy (trust row carries it), no prices, reviews, ratings, years, "fully insured", "licensed", "block and lock". Repairs only from lib/data/repairs.ts. Same-day wording: requests before 4 PM, subject to technician availability.
- Phone links, form, tracking untouched. Show the owner every new sentence in docs/reviews/2026-10-16-durham-hub-review.md with numbered judgment calls; merge only after "approved"; then the live note "For the ads chat".
- Tooling: `npm i playwright-core lighthouse chrome-launcher` in the scratchpad with copies of scripts/checks beside it; crawl must end "Problems: none"; compare must list only the Durham hub (and none other).
