# Place names: audit of the live site against the owner's rule (Oct 12, 2026)

**Status (GNW Website 7, Oct 13):** the owner answered all five decisions on Oct 12, 6:15 PM, as proposed, with one change: "downtown Toronto" stays (the live ad text and a live keyword use it). The answers are recorded in CLAUDE.md under "Place names". Batch 1 (the ten ad-traffic pages: Toronto hub and its three cities, Peel hub and its three cities, raccoons, squirrels) is built and reviewed in `docs/reviews/2026-10-13-place-names-batch-1-review.md`, waiting for the owner's "approved". Batch 2 (York and Durham cities and hubs, the /service-areas index) follows.

Scope document for the place-names job (GNW Website 7). Made by GNW Website 6 from a crawl of the live build after the second batch went live (ef04aeb). The rule is in CLAUDE.md ("Place names"): name only big areas; no neighbourhoods or small villages anywhere on the site.

## The size of it

- 131 neighbourhood, hamlet and village names appear on 23 pages, 279 page-mentions in all. Every one of the 16 city pages, all four region hubs, the /service-areas index, and the raccoon, squirrel and bird pages carry some.
- On the 16 city pages the names are structural, not decorative: the "Neighbourhoods we cover in X" section (the `neighbourhoods` list in lib/data/cities.ts, rendered as pills by components/service-areas/CityPage.tsx), the intro, the three "problems" paragraphs, the raccoon and squirrel paragraphs, the other-wildlife paragraph, the card line on the /service-areas index (`cardLine`), the meta descriptions in some cases, and FAQs such as "Do you cover Lorne Park, Castlemore and Bolton?". Removing the names means rewriting those paragraphs so each page still has 500+ words of its own, factual, about that city.
- The Toronto and Peel hubs' long-form sections (`hubSections`, `hubFaqs` in lib/data/markets.ts) name 30+ places each. The York and Durham hubs have short copy plus `alsoCovered`.
- The header comment in lib/data/cities.ts still states the old rule ("only real neighbourhoods, from the owner's lists"); replace it with the new one.
- Structured data: `areaServed` on the hubs comes from `marketAreaNames(market)` (planned cities + `alsoCovered`), so it follows the data; check it after the change.

## Decisions the owner needs to make before the writing

1. Landscape features. The rule bans neighbourhoods and villages. Rivers, creeks, lakes, the Oak Ridges Moraine, the Niagara Escarpment, the Scarborough Bluffs, conservation areas and parks are landscape, and they are why the animals are where they are. Proposal: keep them (the Rouge, the Humber, the Don, the Credit, Etobicoke Creek, Duffins Creek, Lynde Creek, Oshawa Creek, Mimico Creek, Lake Ontario, the Oak Ridges Moraine, the Niagara Escarpment, the Bluffs, Rouge National Urban Park, Heart Lake Conservation Area, Lynde Shores, Frenchman's Bay, Fairy Lake, Boyd Conservation Area), and drop a name when it is used as a neighbourhood ("Oak Ridges" the Richmond Hill neighbourhood, "Lake Wilcox", "Mill Pond", "Heart Lake" the Brampton neighbourhood, "Highland Creek" and "Lynde Creek" as neighbourhoods, "Lakeview", "Taunton"). Roads (Yonge, Main Street) and institutions (Ontario Tech, Durham College): proposal, keep, they are not neighbourhoods.
2. What replaces the "Neighbourhoods we cover in X" section on the city pages. Proposal: remove the section; say "all of X" in the intro and in the first FAQ, and describe the city by its parts without names ("the older streets south of the 401", "the lakefront", "the newer subdivisions in the north", housing eras, lot sizes, the rivers). Alternative: keep a short "Areas we cover" line naming only allowed places (the city and its allowed neighbours).
3. The Toronto hub names "downtown Toronto" (`alsoCovered`) and the homepage and raccoon copy name Toronto neighbourhoods (the Bluffs in Scarborough, the Kingsway, Hoggs Hollow, Don Mills and others). The owner's Toronto list is Scarborough, North York, Etobicoke, East York and York. Proposal: the Toronto hub names those five, drops "downtown Toronto" (or keeps it: it is not a neighbourhood but it is not on the list), and the city of York, named nowhere today, gets a mention.
4. Stouffville: the town is Whitchurch-Stouffville (over 20,000). The page, URL and title say "Stouffville". Proposal: keep "Stouffville" as the common name (no URL or title change), name Whitchurch-Stouffville once in the copy.
5. Markham's and Vaughan's lists say "Thornhill (east)" and "Thornhill (west)"; Thornhill is allowed. Proposal: plain "Thornhill".

## Names to remove, page by page

Names marked * are landscape features or double-use names; decision 1 above decides them. Everything else goes.

- /service-areas/toronto (32): Agincourt, Alderwood, Armour Heights, Bathurst Manor, Bayview Village, Bendale, Birch Cliff, Bridle Path, Cliffside, Don Mills, Downsview, Eringate, Guildwood, Highland Creek*, Hoggs Hollow, Humber Valley Village, Islington, Long Branch, Malvern, Markland Wood, Mimico, Newtonbrook, Princess Gardens, Rexdale, Rouge*, Scarborough Bluffs*, Scarborough Village, Sunnylea, The Kingsway, Wexford, Willowdale, York Mills
- /service-areas/peel-region (31): Alton, Applewood, Belfountain, Bramalea, Caledon East, Caledon Village, Castlemore, Cheltenham, Churchill Meadows, Clarkson, Cooksville, Erin Mills, Fletcher's Meadow, Heart Lake*, Inglewood, Lakeview*, Lorne Park, Meadowvale, Mineola, Mono Mills, Mount Pleasant, Oak Ridges*, Palgrave, Peel Village, Port Credit, Professor's Lake*, Sandringham-Wellington, Sheridan, Springdale, Streetsville, Vales of Castlemore
- /service-areas/york-region (23): Angus Glen, Aurora Estates, Aurora Village, Ballantrae, Bayview Hill, Bayview Wellington, Cornell, Glenway, Hills of St Andrew, King City, Kleinburg, Lake Wilcox*, Maple, Mill Pond*, Milliken, Musselman's Lake*, Nobleton, Oak Ridges*, Schomberg, Stonehaven, Unionville, Vandorf, Woodland Hill
- /service-areas/durham-region (19): Amberlea, Bay Ridges, Brock Ridge, Brooklin, Centennial, Kedron, Lakeview*, Lynde Creek*, McLaughlin, Nottingham, Pickering Village, Port Perry, Port Whitby, Riverside, Rosebank, Rouge*, Taunton*, Taunton North, Windfields
- /service-areas/brampton (12): Bramalea, Castlemore, Downtown Brampton, Fletcher's Meadow, Heart Lake*, Mount Pleasant, Peel Village, Professor's Lake*, Sandringham-Wellington, Snelgrove, Springdale, Vales of Castlemore
- /service-areas/mississauga (12): Applewood, Churchill Meadows, Clarkson, Cooksville, Erin Mills, Lakeview*, Lorne Park, Meadowvale, Mineola, Port Credit, Sheridan, Streetsville
- /service-areas/scarborough (12): Agincourt, Bendale, Birch Cliff, Cliffside, Guildwood, Highland Creek*, Malvern, Rouge*, Scarborough Bluffs*, Scarborough Village, West Hill, Wexford
- /service-areas/etobicoke (11): Alderwood, Eringate, Humber Valley Village, Islington, Long Branch, Markland Wood, Mimico, Princess Gardens, Rexdale, Sunnylea, The Kingsway
- /wildlife/raccoons (11): Cliffside, Don Mills, Guildwood, Hoggs Hollow, Humber Valley Village, Rexdale, Rouge*, Scarborough Bluffs*, Sunnylea, Willowdale, York Mills
- /service-areas/markham (10): Angus Glen, Berczy, Box Grove, Cachet, Cornell, Markham Village, Milliken, Rouge*, Unionville, Wismer
- /service-areas/north-york (10): Armour Heights, Bathurst Manor, Bayview Village, Bridle Path, Don Mills, Downsview, Hoggs Hollow, Newtonbrook, Willowdale, York Mills
- /service-areas/oshawa (10): Centennial, Eastdale, Kedron, Lakeview*, McLaughlin, Northglen, Pinecrest, Samac, Taunton*, Windfields
- /service-areas/pickering (10): Amberlea, Bay Ridges, Brock Ridge, Claremont, Dunbarton, Liverpool, Rosebank, Rouge*, Rouge Park*, Whitevale
- /service-areas/caledon (9): Alton, Belfountain, Caledon East, Caledon Village, Cheltenham, Inglewood, Mono Mills, Oak Ridges*, Palgrave
- /service-areas/richmond-hill (9): Bayview Hill, Doncrest, Jefferson, King City, Lake Wilcox*, Mill Pond*, Oak Ridges*, Richvale, Westbrook
- /service-areas/vaughan (9): Concord, Islington, Islington Woods, King City, Kleinburg, Maple, Patterson, Sonoma Heights, Vellore Village
- /service-areas/whitby (9): Blue Grass Meadows, Brooklin, Lynde Creek*, Port Whitby, Pringle Creek*, Rolling Acres, Taunton*, Taunton North, Williamsburg
- /service-areas/ajax (8): Applecroft, Central Ajax, Hermitage, Lakeside, Nottingham, Pickering Village, Riverside, Salem
- /service-areas/aurora (8): Aurora Estates, Aurora Highlands, Aurora Village, Bayview Northeast, Bayview Wellington, Hills of St Andrew, King City, Oak Ridges*
- /service-areas/newmarket (7): Armitage, Bristol-London, Glenway, Huron Heights, Stonehaven, Summerhill, Woodland Hill
- /wildlife/squirrels (7): Bendale, Cliffside, Don Mills, Hoggs Hollow, Sunnylea, Wexford, York Mills
- /service-areas/stouffville (6): Ballantrae, Gormley, Musselman's Lake*, Oak Ridges*, Stouffville town centre, Vandorf
- /service-areas (4): King City, Nobleton, Port Perry, Schomberg

## Names the hubs and the /service-areas index must say instead

- York hub and /service-areas: "King Township" replaces King City, Nobleton and Schomberg; keep Thornhill. (`alsoCovered` on the york-region entry in lib/data/markets.ts, and the hero blurb, which names King City and Stouffville.)
- Durham hub and /service-areas: "Scugog" replaces Port Perry; keep Uxbridge, Bowmanville and Courtice. (`alsoCovered` on durham-region; the hero blurb names Bowmanville, fine.)
- Allowed outside Toronto besides the city names: Thornhill, Woodbridge, Bolton, Bowmanville, Courtice, King Township, Uxbridge, Scugog. Woodbridge is allowed and is in Vaughan's copy today; Bolton is in Caledon's and the Peel hub's.

## How to check the result

Re-run the audit (the script is in the GNW Website 6 transcript; it is a 60-line Python pass over `scripts/checks/crawl.mjs` output: visible text of <main> per page, every name from the old `neighbourhoods` lists, plus any capitalised phrase not on an allowed list). The crawl's word counts must stay at 500+ per city page; `compare.mjs` lists the pages that changed; every sentence touched goes to the owner as before/after.
