import type { Market } from "@/lib/types";
import { DEFAULT_SAME_DAY_SERVICE } from "@/lib/config/site";

/**
 * ============================================================================
 * MARKET DATA — the scalable location model
 * ============================================================================
 * Good Neighbors is one brand and one codebase serving many local markets.
 * Each entry below is a genuine local expression of that single brand
 * ("Good Neighbors Toronto"), never a separate company or site.
 *
 * This list is a LAUNCH-CONFIGURATION SNAPSHOT for Southern Ontario, not a
 * locked national map. Add, disable, or edit markets here — no other file
 * needs to change, and no page needs to be hand-built. Underneath, the model
 * already understands Country -> Region (province/state) -> Metro -> local
 * service area, which is what lets this same file eventually hold Canadian
 * markets outside Ontario and U.S. markets without a redesign.
 *
 * URL STRUCTURE — a deliberate, documented decision:
 * Every market currently resolves at /service-areas/[slug]. This is a
 * placeholder-but-functional convention, not a permanent one. Because pages
 * are generated from `slug` alone (see app/service-areas/[slug]/page.tsx),
 * promoting a market to a root-level path later (e.g. "/toronto") is a
 * routing change (a Next.js rewrite/redirect, or an additional route
 * segment), not a data-model change. Do not let any component construct a
 * market URL by hand — always go through `marketHref(market)` below.
 * ============================================================================
 */

export const marketHref = (market: Pick<Market, "slug">) => `/service-areas/${market.slug}`;

export const MARKETS: Market[] = [
  {
    slug: "toronto",
    displayName: "Toronto",
    brandName: "Good Neighbors Toronto",
    heroHeading: "Wildlife Removal in Toronto",
    hubTitle: "Wildlife Removal in Toronto: Scarborough, North York & Etobicoke",
    alsoCovered: ["East York", "downtown Toronto"],
    status: "active",
    country: "CA",
    region: "Ontario",
    metro: "Greater Toronto Area",
    serviceArea: ["Toronto", "Scarborough", "North York", "Etobicoke", "East York"],
    heroBlurb:
      "Toronto's raccoons are famous for a reason, and they share the city with squirrels in every mature tree, skunks under the decks and bats in the older attics. From the Bluffs in Scarborough to the Kingsway in Etobicoke, the ravine lots of North York and the century homes of East York, York and downtown, we remove the animal humanely, seal the way in and repair the damage it caused.",
    seoDescription:
      "Humane raccoon, squirrel, skunk, bat and bird removal in Toronto. We seal the way in and repair the damage. Lifetime guarantee on every entry point we seal.",
    // Long-form hub copy (Oct 2026). Same rules as the city pages: real
    // neighbourhoods from the owner's lists only, general facts about the
    // city's homes and landscape, nothing about the business that the live
    // site doesn't already say. East York, York and downtown have no
    // neighbourhood list yet, so they stay general.
    hubSections: [
      {
        heading: "Why Toronto has so much wildlife",
        paragraphs: [
          "Toronto is a city of ravines. The Don, the Humber and the Rouge, Highland Creek, Mimico Creek and the smaller valleys that feed them run through every part of the city, and they are home to raccoons, squirrels, skunks and, around the older homes, bats. A house that backs onto a ravine, or sits a few streets from one, has wildlife for neighbours whether it ever sees them or not.",
          "The trees do the rest. The oaks and maples planted when the postwar neighbourhoods went up are now big enough to hang over the roof, and in the older neighbourhoods they have had a century. A branch near the eaves is a bridge for a squirrel; a tree trunk or a downspout is a ladder for a raccoon. Add rooflines with sixty-year-old wood soffits, gable vents, plastic roof vents and chimneys that have never had a cap, and you have the reason Toronto's raccoons are famous.",
        ],
      },
      {
        heading: "Toronto, part by part",
        paragraphs: [
          "[Scarborough](/service-areas/scarborough) is one of the busiest parts of the city for raccoons and squirrels: postwar bungalows, side-splits and back-splits from the 1950s and 60s in Cliffside, Bendale, Wexford and Scarborough Village, wooded lots in Guildwood and Birch Cliff and along the Bluffs, and the deep valleys of Highland Creek and the Rouge in the east. Agincourt and Malvern are newer, with aluminum soffit that lifts at the corners.",
          "[North York](/service-areas/north-york) is ravine country. The Don's east and west branches run through York Mills, Hoggs Hollow, Armour Heights and the Bridle Path, where large older homes sit under trees that reach well over the roof, and Don Mills and Bayview Village were laid out around the same ravines. Willowdale, Bathurst Manor, Newtonbrook and Downsview mix sixty-year-old bungalows with big new rebuilds, whose complicated rooflines have more vents, more soffit and more places where two roofs meet.",
          "[Etobicoke](/service-areas/etobicoke) is old trees and old rooflines. The Kingsway, Humber Valley Village and Sunnylea sit along the Humber in stone and brick homes from the 1930s to the 50s, with wood soffits, big chimneys and oaks that have had ninety years to grow; Mimico, Long Branch and Alderwood line the lake; Islington, Princess Gardens, Markland Wood and Eringate are 1950s and 60s streets under mature trees; and Rexdale, to the north, is postwar bungalows and semis beside the hydro corridors and the Humber's west branch.",
          "East York, York and the older neighbourhoods downtown are the century homes: brick semis and narrow detached houses on small lots, with wood trim, old chimneys and street trees as old as the houses. We cover all of them, along with the rest of the city.",
        ],
      },
      {
        heading: "Which animal, and where",
        paragraphs: [
          "Raccoons are the night sound: heavy, slow footsteps overhead, a thump, sometimes a growl, and in spring the chirping of kits. They pull roof vents apart, push up the soffit at the eaves and den in attics and chimneys from late winter to early summer. See [raccoon removal](/wildlife/raccoons).",
          "Squirrels are the day sound: light, fast scampering around sunrise and again before dusk, and gnawing. They chew in at soffit corners, fascia boards and roof vents, nest in the insulation and raise young twice a year. See [squirrel removal](/wildlife/squirrels).",
          "Skunks dig in under decks, porches, sheds and front steps, and the ravine neighbourhoods have the most of them ([skunk removal](/wildlife/skunks)). Starlings and sparrows nest in uncovered dryer and bathroom vents and in uncapped chimneys, busiest in spring ([bird removal](/wildlife/birds)). Bats roost in the attics and behind the fascia of the older homes near the ravines and the lake; they are protected in Ontario, so we assess the timing and explain the method before any work begins ([bat removal](/wildlife/bats)).",
          "Not sure which it is? [Something in the attic](/wildlife/something-in-the-attic) and [something in the walls](/wildlife/something-in-the-walls) go by the sound and the time of day, and you don't need to identify the animal yourself.",
        ],
      },
      {
        heading: "How a visit works in Toronto",
        paragraphs: [
          "Usually, we can solve the wildlife problem entirely from outside without needing to enter your home. The visit starts with a full inspection of the roofline, because the opening is often nowhere near where you hear the noise, and on an older home there may be more than one. We identify the animal, check for young, and remove it humanely, with mother and young kept together.",
          "Then we seal the entry point and repair what the animal damaged: roof boards and shingles, soffits, fascia, roof vents, chimney caps, eavestroughs, siding, and flattened or soiled attic insulation, matched to your home's existing materials and colours, which on a Kingsway or York Mills home matters. See [damage repair](/wildlife/damage-repair) for the full list.",
        ],
      },
    ],
    hubFaqs: [
      {
        question: "Which parts of Toronto do you cover?",
        answer:
          "All of it: Scarborough, North York, Etobicoke, East York, York, downtown and everything in between. Scarborough, North York and Etobicoke each have a page of their own with the neighbourhoods listed.",
      },
      {
        question: "Do you cover the Kingsway, York Mills and the Bluffs?",
        answer:
          "Yes. The Kingsway, Humber Valley Village and Sunnylea in Etobicoke; York Mills, the Bridle Path, Hoggs Hollow and Don Mills in North York; Guildwood, Cliffside, Birch Cliff and the Scarborough Bluffs along the lake; and the rest of the city.",
      },
      {
        question: "Why does Toronto have so many raccoons?",
        answer:
          "Ravines, mature trees and older rooflines. The Don, the Humber and the Rouge give raccoons somewhere to live, the trees and downspouts give them a way onto the roof, and sixty-year-old soffits, roof vents and uncapped chimneys give them a way in. Toronto has one of the densest urban raccoon populations anywhere.",
      },
      {
        question: "What's the most common wildlife problem in a Toronto home?",
        answer:
          "Usually a raccoon or a squirrel in the attic. Raccoons at night, squirrels by day. Both come in at the roofline, and both are usually solved from outside the house.",
      },
      {
        question: "Can you match the repairs on an older home?",
        answer:
          "Yes. Repairs are matched to your home's existing materials and colours, so the fix blends in with the rest of the house.",
      },
      {
        question: "How quickly can you get to a Toronto home?",
        answer: `${DEFAULT_SAME_DAY_SERVICE.qualificationMessage} Calls are answered 24 hours a day, 7 days a week, and we confirm the timing with you when you call or send a request.`,
      },
    ],
  },
  {
    slug: "york-region",
    displayName: "York Region",
    brandName: "Good Neighbors York Region",
    heroHeading: "Wildlife Removal in York Region",
    hubTitle: "Wildlife Removal in York Region: Markham, Vaughan & Richmond Hill",
    alsoCovered: ["King Township", "Thornhill", "East Gwillimbury", "Georgina"],
    status: "active",
    country: "CA",
    region: "Ontario",
    metro: "Greater Toronto Area",
    serviceArea: ["Markham", "Richmond Hill", "Vaughan", "Thornhill", "Aurora", "Newmarket", "Stouffville", "King Township", "East Gwillimbury", "Georgina"],
    heroBlurb:
      "York Region climbs from the older streets of Thornhill and Markham, through the big newer subdivisions of Vaughan and Richmond Hill, up onto the Oak Ridges Moraine at Aurora, Newmarket, Stouffville and King Township. More trees, bigger lots and more open country mean more raccoons and squirrels at the roofline and more skunks under the deck. Across York, we get the animal out humanely, seal the entry point and repair what it damaged.",
    seoDescription:
      "Humane wildlife removal in Markham, Vaughan and across York Region. We seal the way in and repair the damage. Lifetime guarantee on every entry point we seal.",
    // Long-form hub copy (Oct 2026), done the same way as Toronto and Peel:
    // York facts only, neighbourhood names from the York city pages (the
    // owner's lists), King Township rather than its villages, plain
    // Thornhill, nothing about the business that the live site doesn't
    // already say. Thornhill, King Township, East Gwillimbury and Georgina
    // have no page of their own, so they are named, never linked (the owner
    // covers all of York Region, Oct 14 2026).
    hubSections: [
      {
        heading: "Why York Region has so much wildlife",
        paragraphs: [
          "The Oak Ridges Moraine runs across the middle of York Region, a broad band of hills, woodlots and kettle lakes, and the rivers that run through York's cities have their headwaters there. The Humber, the Don and the Rouge run south from it through Vaughan, Richmond Hill and Markham toward Lake Ontario; the Holland River and its branches run the other way, through Newmarket, East Gwillimbury and the Holland Marsh to Lake Simcoe. Every one of those valleys is a travel route for raccoons, skunks and squirrels, and the conservation areas, forest tracts and golf courses between them give the animals somewhere to live within sight of the houses.",
          "The houses do the rest. Thornhill, Richmond Hill and Aurora grew up along Yonge Street, and Unionville, Markham Village, Woodbridge, Kleinburg and Newmarket are old towns and villages too, with century homes, wood trim, deep eaves and chimneys that were never capped. Around those old cores, most of York is new: the region had about 170,000 people when it was formed in 1971 and has well over a million today, and many of its subdivisions went up on the edge of farmland and woodlots where the animals already lived. A large new home, with a long roofline, a row of plastic roof vents and aluminum or vinyl soffit, gives a raccoon or a squirrel more places to try, not fewer.",
        ],
      },
      {
        heading: "York Region, part by part",
        paragraphs: [
          "[Markham](/service-areas/markham) has some of York's oldest streets and some of its biggest new homes. Unionville's Main Street and Markham Village go back well over a century, with mature trees and old brick chimneys; Cachet and Angus Glen are large 1990s and 2000s homes on big lots, many backing onto a golf course or a woodlot; Berczy, Wismer, Cornell, Box Grove and Milliken are two-storey subdivisions with aluminum soffit and attached garages. The Rouge and its branches wind through the middle of the city, and their valleys keep every part of it supplied with wildlife.",
          "[Vaughan](/service-areas/vaughan) follows the Humber. Kleinburg's old village and estate lots sit on the river, Boyd Conservation Area and the treed lots of Islington Woods line it further down, and Woodbridge wraps newer streets around its old village core. Maple, Vellore Village, Patterson and Sonoma Heights are the big subdivisions of the 1990s onward, two-storeys with several roof vents each and a garage roof that makes an easy climb, and Concord is a little of everything.",
          "[Richmond Hill](/service-areas/richmond-hill) climbs from its south end onto the moraine. Bayview Hill is large homes on large lots, the streets around Mill Pond and in Richvale are older, from the 1950s on, under trees that have had decades to grow, and Doncrest and Westbrook are newer subdivisions. North of them, Oak Ridges, Jefferson and the homes around Lake Wilcox sit among the moraine's woods and kettle lakes, where the trees come right up to the back fences.",
          "Further up Yonge Street, [Aurora](/service-areas/aurora) and [Newmarket](/service-areas/newmarket) each have an old core and newer edges. Aurora Estates and Hills of St Andrew are big properties against the moraine's woodlots, Aurora Village along Yonge is Victorian and Edwardian brick under century-old trees, and Aurora Highlands, Bayview Northeast and Bayview Wellington are newer. Newmarket's historic Main Street and Fairy Lake sit on the Holland River, with the larger homes of Stonehaven, Summerhill and Woodland Hill and the established streets of Glenway, Armitage, Huron Heights and Bristol-London around the old town.",
          "[Stouffville](/service-areas/stouffville), the main town in Whitchurch-Stouffville, is where the subdivisions give way to countryside. Ballantrae's homes sit on a golf course ringed by woods, cottages and newer houses share the shore of Musselman's Lake, the town centre has a village core with new streets around it, and the forest tracts and rural lots around Vandorf and Gormley are countryside outright.",
          "Thornhill and King Township have no page of their own, and both are covered. Thornhill goes back to the 1790s as a village on Yonge Street, and its heritage core is surrounded by quiet streets of 1950s to 80s homes under mature trees. King Township is the countryside on York's west side: farms, estates, woodlots and small villages spread across the moraine, with the Holland Marsh in the north. Out there a raccoon or a skunk may be living in a barn, a garage or under a porch long before it tries the house, so the outbuildings get a look too.",
          "North of Newmarket, East Gwillimbury and Georgina take York Region up to Lake Simcoe, and both are covered too. East Gwillimbury is farmland and fast-growing new subdivisions along the Holland River; Georgina, on the lake's southeast shore, mixes cottages, year-round lakefront homes and older town streets, and an older cottage by the water has as many ways in as a century home.",
        ],
      },
      {
        heading: "Which animal, and where",
        paragraphs: [
          "Raccoons live in every part of York, from the old streets of Thornhill to the farms of King Township. Most calls start with a sound after dark: something heavy crossing the ceiling, a thump, and in spring the chittering of kits. On a large newer home the way in is usually a roof vent torn open or a soffit lifted where two rooflines meet; on an old village house it may be an uncapped chimney. See [raccoon removal](/wildlife/raccoons).",
          "Squirrels are the daytime noise, busiest at first light and again late in the afternoon. The old trees of Unionville, Thornhill, Aurora Village and Newmarket's Main Street give them a bridge to the roof, and in the subdivisions they chew in at a soffit corner, a fascia edge or the rim of a roof vent; from early spring to late summer there may be young in the nest. See [squirrel removal](/wildlife/squirrels).",
          "Skunks den under decks, porches, sheds and front steps, and the moraine, the river valleys and the big lots from Kleinburg to Ballantrae keep plenty of them close ([skunk removal](/wildlife/skunks)). Starlings and sparrows build nests in uncovered dryer and bathroom vents and in old chimneys, mostly in spring; we check for eggs and young before a vent is screened ([bird removal](/wildlife/birds)).",
          "Bats turn up more often on the moraine than in the city, because the woods and lakes feed them; they roost behind loose fascia and in the attics of older homes and cottages, from Richmond Hill and Aurora to Stouffville and King Township. They are protected in Ontario, so we look at the timing first and explain the method before any work begins ([bat removal](/wildlife/bats)).",
          "Only heard it, never seen it? The [something in the attic](/wildlife/something-in-the-attic) and [something in the walls](/wildlife/something-in-the-walls) pages go by the sound and the time of day, and nobody needs to go up into the attic to look.",
        ],
      },
      {
        heading: "How a visit works in York Region",
        paragraphs: [
          "Usually, we can solve the wildlife problem entirely from outside without needing to enter your home. On a York Region house that starts with the whole roofline, every slope, vent and corner of it, because the opening is often on the far side from the noise, and a large roof can have more than one. We confirm which animal it is, check for young before anything is removed, and see mother and young out together, humanely. The price is explained before any work begins.",
          "Then we seal the opening the animal used and repair the damage it left: a torn roof vent, a chewed soffit or fascia board, shingles and roof boards, a chimney cap or vent cover, an eavestrough or a piece of siding, and attic insulation that has been soiled or flattened. Repairs are matched to your home's existing materials and colours, on a heritage house in Unionville as much as a new build in Vellore Village, and where a skunk has dug in, the ground along the deck or shed is sealed with wire mesh set into the soil. [Damage repair](/wildlife/damage-repair) has the complete list.",
        ],
      },
    ],
    hubFaqs: [
      {
        question: "Which parts of York Region do you cover?",
        answer:
          "Markham, Vaughan (Woodbridge included), Richmond Hill, Newmarket, Aurora and Stouffville each have a page of their own. Thornhill, King Township, East Gwillimbury and Georgina are covered too, rural roads and the Lake Simcoe shore included: all of York Region.",
      },
      {
        question: "Do you cover Unionville, Kleinburg and Bayview Hill?",
        answer:
          "Yes. Unionville, Cachet and Angus Glen in Markham; Kleinburg, Woodbridge and Islington Woods in Vaughan; Bayview Hill, Mill Pond and Oak Ridges in Richmond Hill; Aurora Estates and Hills of St Andrew in Aurora; Stonehaven in Newmarket; Ballantrae and Musselman's Lake in Stouffville; and everywhere in between.",
      },
      {
        question: "Do you come out to rural properties in King Township and Stouffville?",
        answer:
          "Yes. Farms, estates, woodlots and lake properties are all covered. Same-day service works the same way out there as in town: requests received before 4 PM, subject to technician availability.",
      },
      {
        question: "Our house is only a few years old. How did an animal get in?",
        answer:
          "New homes have their own weak points: plastic roof vents a raccoon can tear open, aluminum or vinyl soffit that lifts at the corners, and the places where a garage roof or a second roofline meets the house. Many York subdivisions were also built beside woodlots and ravines, so the animals were living next door before the house went up. Age doesn't change the job: we find where it got in, get it out humanely, then seal and repair that spot.",
      },
      {
        question: "We back onto a ravine or a woodlot. Is that why the animals keep coming?",
        answer:
          "Very likely. Raccoons, skunks and squirrels live in the valleys and woodlots, and the houses along the edge are the nearest roofs, decks and sheds. It doesn't change the visit, and there is nothing you need to do about the trees or the ravine: the work is on the opening the animal used and the damage it caused.",
      },
      {
        question: "How quickly can you get to a York Region home?",
        answer: `${DEFAULT_SAME_DAY_SERVICE.qualificationMessage} Calls are answered 24 hours a day, 7 days a week; tell us where you are, and we confirm the timing with you before anyone sets out.`,
      },
    ],
  },
  {
    slug: "durham-region",
    displayName: "Durham Region",
    brandName: "Good Neighbors Durham Region",
    heroHeading: "Wildlife Removal in Durham Region",
    hubTitle: "Wildlife Removal in Durham Region: Pickering, Ajax, Whitby & Oshawa",
    alsoCovered: ["Uxbridge", "Scugog", "Bowmanville", "Courtice"],
    status: "active",
    country: "CA",
    region: "Ontario",
    metro: "Greater Toronto Area",
    serviceArea: ["Pickering", "Ajax", "Whitby", "Oshawa"],
    heroBlurb:
      "Durham Region runs along the lake from Pickering through Ajax and Whitby to Oshawa and Bowmanville, with the Rouge, Duffins Creek, Lynde Creek and Oshawa Creek cutting green corridors through it. Lakefront homes, postwar neighbourhoods and new subdivisions all get the same visitors. Wherever you are in Durham, we remove the animal humanely, seal the way in and repair the damage.",
    seoDescription:
      "Humane wildlife removal in Pickering, Ajax, Whitby and Oshawa. We seal the way in and repair the damage. Lifetime guarantee on every entry point we seal.",
  },
  {
    slug: "peel-region",
    displayName: "Peel Region",
    brandName: "Good Neighbors Peel Region",
    heroHeading: "Wildlife Removal in Peel Region",
    hubTitle: "Wildlife Removal in Peel Region: Brampton, Mississauga & Caledon",
    alsoCovered: ["Bolton"],
    status: "active",
    country: "CA",
    region: "Ontario",
    metro: "Greater Toronto Area",
    serviceArea: ["Mississauga", "Brampton", "Caledon"],
    heroBlurb:
      "Peel Region runs from the Mississauga lakefront, through Brampton's big subdivisions, to the estates, barns and conservation land of Caledon, and the wildlife changes along the way: raccoons and squirrels in the treed older neighbourhoods, more skunks and bats as the lots get larger. Wherever you are in Peel, we get the animal out humanely, seal the entry point and repair what it damaged.",
    seoDescription:
      "Humane wildlife removal in Mississauga, Brampton and Caledon. We seal the way in and repair the damage. Lifetime guarantee on every entry point we seal.",
    // Long-form hub copy (Oct 2026), done the same way as Toronto: Peel facts
    // only, the owner's neighbourhood lists only, nothing about the business
    // that the live site doesn't already say. Bolton has no page of its own,
    // so it is named inside Caledon's paragraph, never linked.
    hubSections: [
      {
        heading: "Why Peel has so much wildlife",
        paragraphs: [
          "Peel runs from the lake at Mississauga up to the Niagara Escarpment and the Oak Ridges Moraine in Caledon, and its rivers run with it. The Credit comes down off the Escarpment at Belfountain and Inglewood, runs through Meadowvale and Streetsville and meets the lake at Port Credit; Etobicoke Creek cuts through the middle of Brampton and along Mississauga's eastern edge; the Humber comes through Bolton on its way to Toronto. Those valleys, and the creeks and conservation lands between them, are home to raccoons, squirrels and skunks, and the older houses along them get the occasional bat.",
          "The houses do the rest. In south Mississauga and in Peel Village the oaks and maples have had half a century or more to reach over the roof, with wood soffits and fascia underneath them. Much of Brampton and the north and west of Mississauga are newer, with vinyl or aluminum soffit, plastic roof vents and a garage roof that meets the house at a climbable angle, and twenty summers of sun are enough to make a vent cap brittle and a soffit panel loose. In Caledon, the barns, sheds and woodlots mean the animals were there first.",
        ],
      },
      {
        heading: "Peel, part by part",
        paragraphs: [
          "[Brampton](/service-areas/brampton) is mostly newer homes on long, low rooflines: Springdale, Sandringham-Wellington, Fletcher's Meadow and Mount Pleasant from the 1990s on, Bramalea and Heart Lake a generation older, the estate lots of Castlemore and the Vales of Castlemore in the northeast, and the mature trees of Peel Village, downtown and the streets around Professor's Lake. Etobicoke Creek, Heart Lake Conservation Area and the valleys between the subdivisions keep every part of the city supplied with wildlife.",
          "[Mississauga](/service-areas/mississauga) is two cities. Along the lake and the Credit, Lorne Park, Mineola and Clarkson are big treed lots and older homes, from 1950s bungalows to large rebuilds, and the heritage streets of Port Credit and Streetsville add uncapped chimneys and additions that meet the original roof. Cooksville, Applewood and Lakeview are postwar streets with the trees now as tall as the houses; Erin Mills, Meadowvale, Churchill Meadows and Sheridan are 1970s to 2000s subdivisions with the usual roof vents and soffit panels.",
          "[Caledon](/service-areas/caledon) is more than half of Peel's land and mostly countryside: the Escarpment villages of Belfountain, Inglewood, Cheltenham and Alton, the moraine country around Palgrave and Caledon East, Caledon Village and Mono Mills, and the estates and farms between them. Bolton, on the Humber in the southeast corner, is the town: an old village core ringed by three decades of subdivisions. Out here skunks and bats are a bigger part of the picture, and a raccoon has a barn or a shed to try before it tries the house. We cover all of it, Bolton and the rural roads included.",
        ],
      },
      {
        heading: "Which animal, and where",
        paragraphs: [
          "Raccoons are in every part of Peel, from the Lakeview waterfront to the farms above Caledon East. You hear them after dark: slow, heavy steps across the ceiling, a thump, and in spring a high chirping from the kits. They get in through a roof vent they have pulled apart or a soffit lifted at the eaves; on a newer Brampton two-storey, the favourite spot is where the garage roof meets the second storey. See [raccoon removal](/wildlife/raccoons).",
          "Squirrels are the daytime version: quick scampering overhead at first light and again in the late afternoon, and the sound of chewing. The wood trim of Lorne Park, Peel Village and the old villages is the easiest for them, but a loose vinyl panel in Springdale or Churchill Meadows works just as well. See [squirrel removal](/wildlife/squirrels).",
          "Skunks dig in under decks, sheds, porches and front steps, and the big lots of Castlemore and Lorne Park, and most of Caledon, give them the most room to do it ([skunk removal](/wildlife/skunks)). Starlings and sparrows nest in open dryer and bathroom vents and in the uncapped chimneys of older homes, mostly in spring ([bird removal](/wildlife/birds)). Bats roost behind the fascia and in the attics of the older houses near the Credit and the lake, and in Caledon's barns; they are protected in Ontario, so the timing and the method are explained before any work begins ([bat removal](/wildlife/bats)).",
          "If all you have is a noise, start with [something in the attic](/wildlife/something-in-the-attic) or [something in the walls](/wildlife/something-in-the-walls). The sound and the time of day usually say which animal it is, and there is no need to go up and look yourself.",
        ],
      },
      {
        heading: "How a visit works in Peel",
        paragraphs: [
          "Usually, we can solve the wildlife problem entirely from outside without needing to enter your home. We start with the whole roofline, not just the corner the noise came from, because the opening is often somewhere else, and on a big Castlemore or Lorne Park roof there may be more than one. We confirm which animal it is, check for young before anything is removed, and get the family out together, humanely.",
          "Then we seal the entry point and repair what the animal damaged: the roof vent, soffit or fascia, torn shingles and roof boards, the chimney cap, the eavestrough or siding, and attic insulation that has been flattened or soiled, matched to your home's existing materials and colours, on a Mineola rebuild and a Bolton two-storey alike. The full list is on [damage repair](/wildlife/damage-repair).",
        ],
      },
    ],
    hubFaqs: [
      {
        question: "Which parts of Peel Region do you cover?",
        answer:
          "All of Peel: Mississauga, Brampton and Caledon, including Bolton and the rural roads between the villages. Brampton, Mississauga and Caledon each have a page of their own with the neighbourhoods listed.",
      },
      {
        question: "Do you cover Lorne Park, Castlemore and Bolton?",
        answer:
          "Yes. Lorne Park, Mineola, Port Credit and Clarkson in south Mississauga; Castlemore, the Vales of Castlemore and Peel Village in Brampton; Bolton, Caledon East and the Escarpment villages in Caledon; and everywhere in between.",
      },
      {
        question: "Do you come out to rural Caledon?",
        answer:
          "Yes. Farms, estates and the villages are all covered, and same-day service applies to rural addresses on the same terms as the towns: requests before 4 PM, subject to technician availability.",
      },
      {
        question: "What's the most common wildlife problem in a Peel home?",
        answer:
          "Something in the attic, and it is nearly always a raccoon or a squirrel: raccoons after dark, squirrels in daylight, both in through a gap at the roofline. Skunks under a deck or a shed come next, and there are more of them in Caledon and on the larger lots.",
      },
      {
        question: "Does it matter whether the house is new or old?",
        answer:
          "Only in where the animal gets in. Older homes have wood trim, big trees and uncapped chimneys; newer ones have plastic roof vents, vinyl soffit and a garage roof that makes an easy climb. The visit is the same on both: find every opening, get the animal out, seal and repair.",
      },
      {
        question: "How quickly can you get to a Peel home?",
        answer: `${DEFAULT_SAME_DAY_SERVICE.qualificationMessage} The phone is answered 24 hours a day, 7 days a week, and the timing is confirmed with you before anyone heads out.`,
      },
    ],
  },
  {
    slug: "oakville-burlington",
    displayName: "Oakville & Burlington",
    brandName: "Good Neighbors Oakville & Burlington",
    status: "hidden",
    country: "CA",
    region: "Ontario",
    metro: "Halton Region",
    serviceArea: ["Oakville", "Burlington"],
    heroBlurb:
      "Good Neighbors is expanding into Oakville and Burlington. Reach out and we'll let you know about coverage and availability in your area.",
    seoDescription:
      "Good Neighbors is coming soon to Oakville and Burlington. Humane wildlife removal, expanding across the Halton Region.",
  },
  {
    slug: "hamilton",
    displayName: "Hamilton",
    brandName: "Good Neighbors Hamilton",
    status: "hidden",
    country: "CA",
    region: "Ontario",
    metro: "Hamilton–Niagara",
    serviceArea: ["Hamilton", "Ancaster", "Dundas", "Stoney Creek"],
    heroBlurb:
      "Good Neighbors is expanding into Hamilton. Reach out and we'll let you know about coverage and availability in your area.",
    seoDescription:
      "Good Neighbors is coming soon to Hamilton, Ancaster, Dundas, and Stoney Creek. Humane wildlife removal, expanding across Southern Ontario.",
  },
  {
    slug: "barrie",
    displayName: "Barrie",
    brandName: "Good Neighbors Barrie",
    status: "hidden",
    country: "CA",
    region: "Ontario",
    metro: "Simcoe County",
    serviceArea: ["Barrie", "Innisfil", "Springwater"],
    heroBlurb:
      "Good Neighbors is expanding into Barrie and Simcoe County. Reach out and we'll let you know about coverage and availability in your area.",
    seoDescription:
      "Good Neighbors is coming soon to Barrie and Simcoe County. Humane wildlife removal, expanding across Southern Ontario.",
  },
  {
    slug: "niagara-region",
    displayName: "Niagara Region",
    brandName: "Good Neighbors Niagara Region",
    status: "hidden",
    country: "CA",
    region: "Ontario",
    metro: "Hamilton–Niagara",
    serviceArea: ["St. Catharines", "Niagara Falls", "Welland", "Niagara-on-the-Lake"],
    heroBlurb:
      "Good Neighbors is expanding into the Niagara Region. Reach out and we'll let you know about coverage and availability in your area.",
    seoDescription:
      "Good Neighbors is coming soon to the Niagara Region, including St. Catharines, Niagara Falls, and Welland.",
  },
];

export function getActiveMarkets(): Market[] {
  return MARKETS.filter((m) => m.status === "active");
}

export function getMarketBySlug(slug: string): Market | undefined {
  return MARKETS.find((m) => m.slug === slug);
}
