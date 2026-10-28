import type { City, RegionSlug } from "@/lib/types";

/**
 * ============================================================================
 * CITY PAGES — one page per city, each genuinely about that city
 * ============================================================================
 * Google Ads data shows people search by city ("raccoon removal brampton"),
 * not by region, so every city below gets its own page at
 * /service-areas/[slug], served by the same route as the region hubs.
 *
 * Writing rules (owner, Oct 2026), also enforced by scripts before a push:
 * - At least 500 words of body copy per city, none of it shared with another
 *   city beyond a single sentence. Vary the structure, not just the names.
 * - One page per city, never a page per neighbourhood (owner, Oct 13 2026).
 *   A city page names its biggest real neighbourhoods, from the owner's
 *   lists; never invent one. Plain "Thornhill" (no east/west).
 * - Housing and landscape stay factual and general ("postwar bungalows near
 *   the Rouge ravines"), never claims about our work there, and nothing about
 *   the business that isn't already true on the live site: no prices,
 *   reviews, counts, years, certifications, awards or "block and
 *   lock".
 * - Higher-end neighbourhoods are named first, without snobbery.
 * - Canadian spelling in the copy; the brand stays "Good Neighbors".
 *
 * CITY_INDEX lists every planned city in build order so hubs and "nearby"
 * lists can name a city before its page exists; a city is linked only once
 * it has an entry in CITIES.
 */

export const cityHref = (city: Pick<City, "slug">) => `/service-areas/${city.slug}`;

export interface PlannedCity {
  slug: string;
  name: string;
  region: RegionSlug;
}

export const CITY_INDEX: PlannedCity[] = [
  // Tier 1
  { slug: "brampton", name: "Brampton", region: "peel-region" },
  { slug: "mississauga", name: "Mississauga", region: "peel-region" },
  { slug: "scarborough", name: "Scarborough", region: "toronto" },
  // Tier 2
  { slug: "markham", name: "Markham", region: "york-region" },
  { slug: "north-york", name: "North York", region: "toronto" },
  { slug: "pickering", name: "Pickering", region: "durham-region" },
  { slug: "ajax", name: "Ajax", region: "durham-region" },
  { slug: "newmarket", name: "Newmarket", region: "york-region" },
  { slug: "richmond-hill", name: "Richmond Hill", region: "york-region" },
  { slug: "vaughan", name: "Vaughan", region: "york-region" },
  // Tier 3
  { slug: "oshawa", name: "Oshawa", region: "durham-region" },
  { slug: "whitby", name: "Whitby", region: "durham-region" },
  { slug: "etobicoke", name: "Etobicoke", region: "toronto" },
  { slug: "aurora", name: "Aurora", region: "york-region" },
  { slug: "stouffville", name: "Stouffville", region: "york-region" },
  { slug: "caledon", name: "Caledon", region: "peel-region" },
];

export const CITIES: City[] = [
  {
    slug: "brampton",
    name: "Brampton",
    region: "peel-region",
    featured: true,
    metaDescription:
      "Raccoon or squirrel in a Brampton attic? Humane removal, same-day at any hour. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
    cardLine: "Castlemore and Peel Village to Springdale and Mount Pleasant.",
    intro:
      "Brampton gives wildlife a lot to work with: the mature maples over the Castlemore estates and Peel Village, street after street of vinyl-soffit homes in Springdale and Fletcher's Meadow, and creek valleys that run right through the city. If something is scratching overhead, we come out, get the animal out humanely, seal the way in and repair the damage.",
    neighbourhoods: [
      "Castlemore",
      "Vales of Castlemore",
      "Peel Village",
      "Professor's Lake",
      "Heart Lake",
      "Snelgrove",
      "Springdale",
      "Sandringham-Wellington",
      "Bramalea",
      "Fletcher's Meadow",
      "Mount Pleasant",
      "Downtown Brampton",
    ],
    problems: [
      "Much of Brampton was built from the 1990s on, and those homes share a few features that matter to wildlife: vinyl or aluminum soffits, plastic roof vents on long, low-pitched roofs, and attached garages whose rooflines meet the house at an angle that is easy to climb. A soffit panel that has slipped out of its channel, or a vent that has gone brittle after twenty summers, is all a raccoon needs. The big subdivisions of Springdale, Sandringham-Wellington, Fletcher's Meadow and Mount Pleasant are full of exactly that kind of roofline.",
      "The older parts of the city are a different picture. Peel Village, Downtown Brampton and the streets around Professor's Lake have the mature trees that squirrels travel along, and the wood fascia and soffits that a squirrel can chew through in an afternoon. Out in Castlemore and the Vales of Castlemore, the estate lots have more tree cover and more outbuildings, so the roofline is only part of it: decks, sheds and pool houses give skunks somewhere to dig in.",
      "Then there is the water. Etobicoke Creek winds through the middle of the city, Heart Lake Conservation Area and Professor's Lake sit to the north, and the valleys and hydro corridors between subdivisions work as wildlife corridors. A home backing onto a creek or a park gets more visitors, and a [raccoon in the attic](/wildlife/something-in-the-attic) in Heart Lake or Snelgrove has often been living in the ravine behind the house all along.",
    ],
    raccoons: [
      "Raccoons are the heavy footsteps overhead after dark, most often from late winter through early summer, when a female is looking for a den to raise her kits. In Brampton that den is usually an attic reached through a roof vent or a soffit panel where the garage roof meets the second storey; they don't need a big opening, they make one.",
      "We check for young before any removal, so mother and kits leave together. Once the raccoon is out, we seal the opening and repair the vent, soffit or roof around it, matched to your home. [Raccoon removal](/wildlife/raccoons) starts with the whole roofline, not just the corner where you heard it, because the way in is often somewhere else.",
    ],
    squirrels: [
      "Squirrels are the daytime noise: scampering at first light, again in the late afternoon, and quiet at night. The grey squirrels in Brampton, including the black ones, raise two litters a year, so a squirrel in the attic in March or August is very likely a mother with a nest in the insulation.",
      "They get in by chewing. A soffit corner, the edge of a fascia board or the gap where a roof vent meets the shingles becomes a hole, and the hole becomes their regular door. The wood trim in Peel Village and downtown is the easiest for them, but vinyl soffit isn't squirrel-proof either; a loose panel gives them a way up behind it. We find every opening, confirm the squirrels and any young are out, then seal and repair the chewed spot. [Squirrel removal](/wildlife/squirrels) is the same careful job whether the house is in Bramalea or Mount Pleasant.",
    ],
    otherWildlife: [
      "Skunks are a ground-level problem, and Brampton's decks, sheds and front steps give them plenty of options, especially on the larger Castlemore lots and in the older neighbourhoods near Heart Lake. Once the skunk is out, we fix wire mesh along the base of the structure and dig it into the soil so nothing can tunnel back in. [Skunk removal](/wildlife/skunks)",
      "Birds, mostly starlings and sparrows, nest in uncovered dryer and bathroom vents on the side of the house; we check for eggs and young first, then screen the vent. [Bird removal](/wildlife/birds). Bats are less common in the newer subdivisions than in the older homes downtown and around Peel Village, where a gap behind the fascia is all they need. Bats are protected in Ontario, so timing matters, and we explain what is involved before any work begins. [Bat removal](/wildlife/bats)",
    ],
    faqs: [
      {
        question: "Do you cover Castlemore and the Vales of Castlemore?",
        answer:
          "Yes. We cover all of Brampton, from the Castlemore estates, Springdale and Sandringham-Wellington in the northeast to Mount Pleasant and Fletcher's Meadow in the west, plus Snelgrove, Heart Lake, Professor's Lake, Bramalea, Peel Village and downtown. Just outside the city, Caledon and Bolton are covered too.",
      },
    ],
    nearby: ["mississauga", "caledon", "vaughan", "etobicoke"],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    region: "peel-region",
    featured: true,
    metaDescription:
      "Mississauga raccoon & squirrel removal, humane and same-day, day or night. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
    cardLine: "Lorne Park and Port Credit to Streetsville and Meadowvale.",
    intro:
      "From the deep, treed lots of Lorne Park and Mineola to the newer streets of Churchill Meadows, Mississauga has every kind of home a raccoon or squirrel could want. Wherever you are, from Port Credit to Meadowvale, we remove the animal humanely, seal the entry point and repair the damage it caused.",
    neighbourhoods: [
      "Lorne Park",
      "Mineola",
      "Port Credit",
      "Clarkson",
      "Streetsville",
      "Sheridan",
      "Erin Mills",
      "Meadowvale",
      "Churchill Meadows",
      "Cooksville",
      "Applewood",
      "Lakeview",
    ],
    problems: [
      "South Mississauga is old by GTA standards. Lorne Park, Mineola and Clarkson were cottage country and then estate country before they were suburbs, and it shows: big lots, oaks and maples that reach over the roof, and houses that run from 1950s bungalows to large custom rebuilds. Mature trees are the main thing. A branch within a few feet of the eaves is a bridge for squirrels and raccoons, and the wood soffits and fascia on an older home are far easier to chew or pry open than vinyl.",
      "The Credit River runs from Streetsville down past Erin Mills to the lake at Port Credit, and the ravines along it are where much of the city's wildlife lives. Homes backing onto the river valley, onto Rattray Marsh in Clarkson, or onto the lakefront in Lakeview and Port Credit get more traffic than homes in the middle of a subdivision. The heritage homes in Streetsville and Port Credit add a problem of their own: old brick chimneys without caps, and gaps where an addition meets the original roof.",
      "Further north and west, Erin Mills, Meadowvale, Churchill Meadows and Sheridan are mostly 1970s to 2000s subdivisions. The houses are tighter, but they have the same weak points as anywhere: roof vents, soffit panels where the garage roof meets the second storey, and dryer vents with no cover. A [squirrel in the attic](/wildlife/something-in-the-attic) in Erin Mills usually came in at a soffit corner; in Mineola it is just as likely to have walked in along a branch.",
    ],
    raccoons: [
      "Raccoons in Mississauga have the lake, the Credit River and a lot of mature trees, and they are at home in every neighbourhood from Lakeview to Meadowvale. The attic is the usual target, reached through a roof vent they have pulled apart or a soffit they have pushed up where the roof meets the eaves. On a Lorne Park or Mineola lot with trees over the house, they often don't need the downspout at all.",
      "Spring is the busy season, when a female looks for a quiet attic to raise her kits, so we check for young before any removal and keep the family together. Then we seal the opening and repair the roof, vent or soffit, matched to your home's materials and colours. [Raccoon removal](/wildlife/raccoons) covers the whole roofline, because the way in is often not where the noise is.",
    ],
    squirrels: [
      "If the noise is during the day, think squirrel. Mississauga's grey and black squirrels are busiest around sunrise and again in the late afternoon, and they chew their way in at soffit corners, fascia edges and roof vents. The treed streets of Lorne Park, Mineola, Clarkson and Applewood give them the easiest route to the roof, but a squirrel will happily climb a brick wall or a downspout on a Churchill Meadows two-storey.",
      "They nest in the insulation and raise two litters a year, so a spring or late-summer squirrel is often a mother with young. We confirm they are all out before we seal anything, then repair the chewed soffit, fascia or roof edge so the same spot can't be reopened. [Squirrel removal](/wildlife/squirrels)",
    ],
    otherWildlife: [
      "Skunks dig in under decks, sheds and porch steps, and the big yards in Lorne Park and Clarkson and the older lots in Lakeview and Cooksville give them room to do it. Once the skunk is out, we mesh the base of the structure so nothing can dig back in. [Skunk removal](/wildlife/skunks)",
      "Birds nest in uncovered bathroom and dryer vents right across the city, and in the uncapped chimneys of older Port Credit and Streetsville homes; we check for eggs and young, then screen or cap the opening. [Bird removal](/wildlife/birds). Bats roost behind loose fascia and in attic gaps, most often in the older homes near the river and the lake. They are protected in Ontario, so we assess the timing carefully and explain the plan before any work begins. [Bat removal](/wildlife/bats)",
    ],
    faqs: [
      {
        question: "Do you cover Lorne Park, Mineola and Port Credit?",
        answer:
          "Yes. We cover all of Mississauga: the lakefront neighbourhoods of Lorne Park, Mineola, Port Credit, Clarkson and Lakeview; Cooksville, Applewood and Sheridan in the middle of the city; and Erin Mills, Streetsville, Meadowvale and Churchill Meadows to the north and west.",
      },
    ],
    nearby: ["brampton", "etobicoke", "caledon"],
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    region: "toronto",
    featured: true,
    metaDescription:
      "Humane raccoon & squirrel removal across Scarborough. Same-day visits, day and night. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
    cardLine: "The Bluffs and Guildwood to Agincourt and Malvern.",
    intro:
      "Scarborough's postwar bungalows, the wooded lots of Guildwood and the ravines of the Rouge and Highland Creek make it one of the busiest parts of Toronto for raccoons and squirrels. From the Bluffs to Malvern, we get the animal out humanely, seal the entry point and repair what it damaged.",
    neighbourhoods: [
      "Guildwood",
      "Scarborough Bluffs",
      "Cliffside",
      "Birch Cliff",
      "Highland Creek",
      "West Hill",
      "Rouge",
      "Scarborough Village",
      "Bendale",
      "Wexford",
      "Agincourt",
      "Malvern",
    ],
    problems: [
      "A lot of Scarborough went up in the 1950s and 60s: brick bungalows, side-splits and back-splits on generous lots, with wood soffits and fascia and gable vents that are now sixty years old. That trim has had decades of weather, and the trees planted when the houses were new are big enough to hang over the roof. Old wood plus mature maples and oaks is what makes Cliffside, Bendale, Wexford and Scarborough Village so attractive to squirrels and raccoons.",
      "Along the lake, Guildwood, the Scarborough Bluffs and Birch Cliff sit on wooded lots with the bluffs and their ravines right behind them. Highland Creek and the Rouge cut deep valleys through the east end, and Rouge National Urban Park is habitat on a scale no other part of the city has. A home backing onto any of this sees more raccoons, more skunks under the deck and the occasional bat in the attic, simply because the animals are already next door.",
      "The 1960s to 90s subdivisions in Agincourt and Malvern have newer materials but the same pressure points: aluminum soffit that lifts at the corners, roof vents, and dryer vents with no cover. Whether the noise is overhead in a Guildwood bungalow or above the garage in Malvern, [something in the attic](/wildlife/something-in-the-attic) nearly always came in at the roofline, and the opening is often nowhere near where you hear it.",
    ],
    raccoons: [
      "Toronto has one of the densest urban raccoon populations anywhere, and Scarborough's ravines and old rooflines are a big part of why. The sound is hard to mistake: slow, heavy footsteps overhead after dark, sometimes a thump or a growl. Raccoons pull roof vents apart and push through soffits where the roof meets the eaves, and a 1960s bungalow in West Hill or Cliffside gives them plenty of soft spots.",
      "In spring the attic is usually a nursery, so we check for kits before removal and keep mother and young together. Then we seal the opening and repair the vent, soffit or roof so it matches the rest of the house. [Raccoon removal](/wildlife/raccoons)",
    ],
    squirrels: [
      "Daytime scratching and scampering means a squirrel. Scarborough's mature trees give them an easy route to the roof, and the wood fascia on older homes is their favourite thing to chew. They widen a gap at a soffit corner or a roof edge, nest in the insulation, and come back to the same hole even after a first attempt to block it.",
      "Black and grey squirrels raise young twice a year, in early spring and again in late summer, so we confirm the whole family is out before anything is sealed, then repair the chewed wood or soffit. [Squirrel removal](/wildlife/squirrels)",
    ],
    otherWildlife: [
      "Skunks are common near the ravines and the Bluffs, and they den under decks, sheds and front steps from Guildwood to Agincourt. Once the skunk is out, we fix wire mesh along the base of the structure and dig it into the ground. [Skunk removal](/wildlife/skunks)",
      "Starlings and sparrows nest in uncovered bathroom and dryer vents and in uncapped chimneys, and they are busiest in spring; we check for eggs and young before the vent is screened. [Bird removal](/wildlife/birds). Bats roost in the attics and behind the fascia of older homes, especially near Highland Creek and the Rouge. They are protected in Ontario, so we assess each situation and explain the method and timing before any work begins. [Bat removal](/wildlife/bats)",
    ],
    faqs: [
      {
        question: "Do you cover Guildwood and the Bluffs?",
        answer:
          "Yes. We cover all of Scarborough: Guildwood, Cliffside, Birch Cliff and the Scarborough Bluffs along the lake; Highland Creek, West Hill and the Rouge in the east; Scarborough Village, Bendale and Wexford in the middle; and Agincourt and Malvern to the north. North York, East York and the rest of Toronto are covered as well.",
      },
    ],
    nearby: ["north-york", "pickering", "markham"],
  },
  {
    slug: "markham",
    name: "Markham",
    region: "york-region",
    metaDescription:
      "Humane raccoon & squirrel removal across Markham. Out the same day, any hour. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
    cardLine: "Unionville and Angus Glen to Cornell and Milliken.",
    intro:
      "Markham mixes the heritage streets of Unionville, the big newer homes of Cachet and Angus Glen, and the tight subdivisions of Milliken and Cornell, with the Rouge River threading through all of it. When something moves in overhead, we get it out humanely, seal the way in and repair the damage.",
    neighbourhoods: [
      "Unionville",
      "Cachet",
      "Angus Glen",
      "Thornhill",
      "Berczy",
      "Wismer",
      "Cornell",
      "Box Grove",
      "Markham Village",
      "Milliken",
    ],
    problems: [
      "The Rouge River's headwater streams run through Markham, past Unionville, Markham Village and Cornell, and the valley land along them is full of raccoons, squirrels and skunks. Unionville's Main Street homes date back well over a century, with mature trees, wood trim and old brick chimneys, and the same goes for the older parts of Markham Village. Houses like that have a dozen small ways in that a newer home doesn't.",
      "Cachet and Angus Glen are the other end of the scale: large homes from the 1990s and 2000s on big lots, often backing onto a golf course or a woodlot. Size works against you here. A bigger roof has more vents, more soffit and more places where two rooflines meet, and a raccoon only needs one of them.",
      "Berczy, Wismer, Box Grove and Milliken are mostly two-storey subdivision homes with aluminum soffit, roof vents and attached garages, and in Thornhill, east of Yonge, the streets are older and the trees reach over the roof. A [squirrel in the attic](/wildlife/something-in-the-attic) in Berczy almost always chewed in at a soffit corner; in Thornhill it may have simply walked in along a maple branch.",
    ],
    raccoons: [
      "A raccoon in a Markham attic usually announces itself after dark: heavy steps, a thump, sometimes a growl. They climb the downspout or a tree, pull apart a roof vent or shove up the soffit where the roof meets the eaves, and settle into the insulation. From late winter to early summer the attic is often a nursery.",
      "That is why we look for kits before anything else and keep the family together on the way out. Then the opening gets sealed and the vent, soffit or roof repaired to match your home. [Raccoon removal](/wildlife/raccoons) is about the whole roofline, not only the spot you heard.",
    ],
    squirrels: [
      "Daytime noise overhead is a squirrel, and Markham's black and grey squirrels are busiest at first light and again before dusk. They chew at soffit corners, fascia edges and roof vents, and the mature trees of Unionville, Thornhill and Markham Village hand them a direct route to the roof.",
      "With two litters a year, a squirrel in March or late August is probably a mother with a nest in the insulation, so nothing is sealed until every squirrel, young included, is out. The chewed spot is then repaired as part of [squirrel removal](/wildlife/squirrels).",
    ],
    otherWildlife: [
      "Skunks dig in under decks, sheds and front steps, and the ravine lots along the Rouge and the big yards of Cachet and Angus Glen give them cover to do it. When the skunk is out, the base of the structure gets wire mesh dug into the soil ([skunk removal](/wildlife/skunks)).",
      "Starlings and sparrows nest in uncovered dryer and bathroom vents on homes of every age; eggs and young are checked for first, then the vent is screened ([bird removal](/wildlife/birds)). Bats favour the older attics and fascia gaps of Unionville, Thornhill and Markham Village. They're protected in Ontario, and we go through the timing and method with you before any work starts ([bat removal](/wildlife/bats)).",
    ],
    faqs: [
      {
        question: "Do you cover Unionville and Angus Glen?",
        answer:
          "Yes. We cover all of Markham: Unionville, Cachet and Angus Glen; Thornhill; Berczy, Wismer, Cornell and Box Grove; and Markham Village and Milliken. Stouffville and Richmond Hill next door are covered as well.",
      },
    ],
    nearby: ["richmond-hill", "scarborough", "stouffville", "vaughan"],
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    region: "york-region",
    metaDescription:
      "Raccoon or squirrel in a Vaughan attic? Humane removal, same-day, even at night. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
    cardLine: "Kleinburg and Woodbridge to Maple, Vellore and Thornhill.",
    intro:
      "Vaughan runs from the estate lots of Kleinburg on the Humber, through Woodbridge's old village and newer streets, to the big subdivisions of Maple and Vellore Village. Different houses, same answer: we get the animal out humanely, seal the entry point and repair the damage.",
    neighbourhoods: [
      "Kleinburg",
      "Woodbridge",
      "Islington Woods",
      "Thornhill",
      "Patterson",
      "Maple",
      "Vellore Village",
      "Sonoma Heights",
      "Concord",
    ],
    problems: [
      "The Humber River is Vaughan's wildlife highway. It runs past Kleinburg, through Boyd Conservation Area and down through Woodbridge, and the homes along it, from the Kleinburg estates to the treed lots of Islington Woods, back directly onto raccoon and skunk country. Large lots mean more trees over the roof, more outbuildings and more decks, and the older village homes in Kleinburg and Woodbridge add wood trim and uncapped chimneys to the list.",
      "Maple, Vellore Village, Patterson and Sonoma Heights are mostly 1990s to 2010s two-storeys: aluminum or vinyl soffit, several roof vents, and a garage roof that meets the house at a climbable angle. The materials are newer, but a soffit panel that has popped loose or a vent cap that has cracked is an open door.",
      "Thornhill, west of Yonge, is older and greener, with 1950s to 1980s homes under mature trees, and Concord is a mix of everything. Wherever you are, [something in the attic](/wildlife/something-in-the-attic) nearly always got in at the roofline, and the entry is often nowhere near the room where you hear it.",
    ],
    raccoons: [
      "Raccoons in Vaughan follow the Humber and the hydro corridors into every neighbourhood, and the attic is where they want to be from late winter through early summer, when a female is raising kits. They climb the downspout or a tree, tear a roof vent open or push through the soffit, and the first you know of it is heavy footsteps after dark.",
      "Kits are checked for before any removal so the family leaves together. After that, the opening is sealed and the roof, vent or soffit repaired, matched to your home. [Raccoon removal](/wildlife/raccoons) always starts with the whole roofline.",
    ],
    squirrels: [
      "A squirrel in the attic is the daytime version of the same problem. Vaughan's grey and black squirrels are busiest around sunrise and in the late afternoon, and they chew in at soffit corners, fascia edges and roof vents, with the big trees of Kleinburg, Woodbridge and Thornhill giving them the easiest climb.",
      "They raise young twice a year and nest in the insulation, so every squirrel, including the young, is confirmed out before the hole is sealed and the chewed wood or soffit repaired. More on [squirrel removal](/wildlife/squirrels).",
    ],
    otherWildlife: [
      "Skunks are busy along the Humber and in Boyd Conservation Area, and they den under decks, sheds and porch steps across Vaughan, especially on the bigger Kleinburg and Islington Woods lots. Once the skunk is out, the base of the structure is meshed and the mesh dug into the ground ([skunk removal](/wildlife/skunks)).",
      "Birds nest in uncovered dryer and bathroom vents in every subdivision; we check for eggs and young and then screen the vent ([bird removal](/wildlife/birds)). Bats turn up in the older homes of Kleinburg, Woodbridge and Thornhill, roosting behind fascia or in an attic gap. Bats are protected in Ontario, so the method and timing are explained before any work begins ([bat removal](/wildlife/bats)).",
    ],
    faqs: [
      {
        question: "Do you cover Kleinburg, Woodbridge and Thornhill?",
        answer:
          "Yes. We cover all of Vaughan: Kleinburg, Woodbridge and Islington Woods; Thornhill; Maple, Vellore Village, Patterson and Sonoma Heights; and Concord. King City to the north is covered too.",
      },
    ],
    nearby: ["richmond-hill", "markham", "brampton", "etobicoke"],
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    region: "york-region",
    seoTitle: "Richmond Hill Raccoon & Squirrel Removal",
    metaDescription:
      "Humane raccoon & squirrel removal in Richmond Hill, same-day, whatever the hour. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
    cardLine: "Bayview Hill and Mill Pond to Oak Ridges and Lake Wilcox.",
    intro:
      "Richmond Hill sits on the Oak Ridges Moraine, with the big lots of Bayview Hill, the older streets around Mill Pond and the lakeside homes of Oak Ridges and Lake Wilcox all sharing the same woods and wildlife. We remove the animal humanely, seal the way in and repair what it damaged.",
    neighbourhoods: ["Bayview Hill", "Oak Ridges", "Mill Pond", "Jefferson", "Lake Wilcox", "Richvale", "Doncrest", "Westbrook"],
    problems: [
      "The north half of Richmond Hill is moraine: rolling, wooded and dotted with kettle lakes, with Lake Wilcox the largest of them. Oak Ridges and Jefferson were built into that landscape, and the homes around Lake Wilcox range from converted cottages to new builds. Living on the moraine means raccoons, squirrels, skunks and bats are never far away, and a treed lot gives them a straight line to the roof.",
      "Bayview Hill is a different kind of exposure: large homes on large lots, with long rooflines, many vents and plenty of soffit. Around Mill Pond and in Richvale, the housing is older, from the 1950s onward, with wood fascia and soffit that has weathered for decades under mature trees.",
      "Doncrest and Westbrook are newer subdivisions with aluminum soffit and roof vents, and the weak points are the usual ones: a corner panel that has slipped, a cracked vent cap, a dryer vent without a cover. However the house is built, a [raccoon in the attic](/wildlife/something-in-the-attic) found a gap somewhere along the roofline, and that gap is what has to be fixed.",
    ],
    raccoons: [
      "Raccoons use the moraine's woodlots and the creek valleys to move between neighbourhoods, and a Richmond Hill attic suits them from late winter to early summer, when the females are raising kits. Listen for slow, heavy movement after dark; they get in by tearing a roof vent open or lifting the soffit where the roof meets the eaves.",
      "Because kits are so often involved, we check for them before removing anything and keep mother and young together. Then the opening is sealed and the vent, soffit or roof repaired to match. [Raccoon removal](/wildlife/raccoons) starts with the whole roofline.",
    ],
    squirrels: [
      "Squirrels are the daytime scampering, busiest at sunrise and before dusk. In Richmond Hill they chew in at soffit corners, fascia edges and roof vents, and the big trees of Mill Pond, Richvale and the moraine neighbourhoods get them onto the roof without effort.",
      "Two litters a year means a squirrel in early spring or late summer is often a mother with young in the insulation, so all of them are confirmed out before anything is sealed and the chewed spot repaired. See [squirrel removal](/wildlife/squirrels).",
    ],
    otherWildlife: [
      "Skunks are common right across the moraine and den under decks, sheds and porches from Oak Ridges to Doncrest. Once the skunk is out, wire mesh goes along the base of the structure and into the soil so nothing digs back in ([skunk removal](/wildlife/skunks)).",
      "Starlings and sparrows nest in open dryer and bathroom vents; eggs and young are checked for before the vent is screened ([bird removal](/wildlife/birds)). Bats are more common here than in most of the GTA because of the woods and lakes, roosting behind fascia and in attic gaps, particularly in the older homes near Mill Pond and Lake Wilcox. They are protected in Ontario, which affects timing, and we go over the plan with you before any work begins ([bat removal](/wildlife/bats)).",
    ],
    faqs: [
      {
        question: "Do you cover Oak Ridges and Lake Wilcox?",
        answer:
          "Yes. We cover all of Richmond Hill: Bayview Hill, Mill Pond and Richvale; Oak Ridges, Jefferson and Lake Wilcox on the moraine; and Doncrest and Westbrook. Aurora and King City are covered as well.",
      },
    ],
    nearby: ["markham", "vaughan", "aurora", "stouffville"],
  },
  {
    slug: "newmarket",
    name: "Newmarket",
    region: "york-region",
    metaDescription:
      "Humane raccoon & squirrel removal in Newmarket, same day, 24 hours a day. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
    cardLine: "Historic Main Street to Stonehaven, Glenway and Woodland Hill.",
    intro:
      "Newmarket has a historic core along Main Street and Fairy Lake, established neighbourhoods like Glenway and Huron Heights, and newer estates in Stonehaven and Summerhill, with the Holland River running through the middle. Whatever is in the attic, we get it out humanely, seal the entry point and repair the damage.",
    neighbourhoods: ["Stonehaven", "Glenway", "Summerhill", "Armitage", "Woodland Hill", "Huron Heights", "Bristol-London"],
    problems: [
      "Newmarket's oldest homes sit along Main Street and around Fairy Lake, Victorian brick with wood trim, deep eaves and chimneys that were never capped. The Holland River flows past them and north out of town, and its banks and the trails around Fairy Lake are where the town's raccoons and skunks live. An old house with mature trees beside a river valley is about as inviting as it gets.",
      "Huron Heights and Bristol-London were built in the 1970s and 80s, Glenway and Armitage mostly in the 80s and 90s, and by now their trees are big enough to touch the roof and their wood fascia has had decades of weather. Stonehaven, Summerhill and Woodland Hill are newer and larger, with long rooflines, more vents and more soffit, which is more for a raccoon to test.",
      "North of the subdivisions it turns rural quickly, so bats and skunks are a bigger part of the picture than in a city neighbourhood. A [squirrel in the attic](/wildlife/something-in-the-attic) in Glenway probably chewed in at a soffit corner; in a Main Street home it may have come down the chimney.",
    ],
    raccoons: [
      "Raccoons work the Holland River and the ravines, and a warm attic in Newmarket is prime real estate from late winter to early summer, when the females are raising kits. Heavy, slow footsteps after dark are the giveaway. They tear roof vents open, lift soffit at the eaves and, on the older homes, come straight down an uncapped chimney.",
      "Kits are the first thing we look for, so mother and young leave together. The opening is then sealed and the vent, soffit, chimney or roof repaired to match your home. [Raccoon removal](/wildlife/raccoons) covers the whole roofline.",
    ],
    squirrels: [
      "Daytime scampering overhead is a squirrel, busiest at first light and before dusk, and Newmarket's black and grey squirrels chew in at soffit corners, fascia edges and roof vents. The mature trees of Glenway, Huron Heights and the Main Street area give them an easy route up.",
      "Litters come twice a year, so a squirrel in spring or late summer is usually a mother with a nest in the insulation. Every squirrel is confirmed out before the hole is sealed and the chewed spot repaired. More on [squirrel removal](/wildlife/squirrels).",
    ],
    otherWildlife: [
      "Skunks den under decks, sheds and front steps all over Newmarket, and the river valley and the rural edge keep the supply up. Once the skunk is out, wire mesh is fixed along the base of the structure and dug into the ground ([skunk removal](/wildlife/skunks)).",
      "Starlings and sparrows nest in uncovered dryer and bathroom vents; we check for eggs and young, then screen the vent ([bird removal](/wildlife/birds)). Bats roost behind fascia and in attic gaps, most often in the older homes near Fairy Lake and Main Street. They are protected in Ontario, so timing is explained before any work begins ([bat removal](/wildlife/bats)).",
    ],
    faqs: [
      {
        question: "Do you cover Stonehaven and Glenway?",
        answer:
          "Yes. We cover all of Newmarket: Stonehaven, Summerhill and Woodland Hill; Glenway and Armitage; Huron Heights and Bristol-London; and the Main Street and Fairy Lake area. Aurora, just south, is covered too.",
      },
    ],
    nearby: ["aurora", "richmond-hill", "stouffville"],
  },
  {
    slug: "north-york",
    name: "North York",
    region: "toronto",
    metaDescription:
      "Humane raccoon & squirrel removal in North York. Same-day visits, day or night. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
    cardLine: "York Mills and the Bridle Path to Willowdale and Don Mills.",
    intro:
      "North York is ravine country: the Don Valley and its branches run through York Mills, Hoggs Hollow and Bayview Village, and the mid-century homes of Willowdale, Don Mills and Bathurst Manor sit under trees planted seventy years ago. We remove the animal humanely, seal the way in and repair the damage.",
    neighbourhoods: [
      "York Mills",
      "Bridle Path",
      "Hoggs Hollow",
      "Armour Heights",
      "Bayview Village",
      "Don Mills",
      "Willowdale",
      "Bathurst Manor",
      "Newtonbrook",
      "Downsview",
    ],
    problems: [
      "The Don River's east and west branches, and the ravines that feed them, are the reason North York has so much wildlife. York Mills, Hoggs Hollow, Armour Heights and the Bridle Path are built on and around those ravines, with large older homes, big lots and oaks and maples that reach well over the roof. A branch near the eaves is a bridge, and an old wood soffit is a door.",
      "Willowdale, Bathurst Manor, Newtonbrook and Downsview were mostly bungalows and split-levels from the 1950s and 60s. Many have been rebuilt as large new houses, which brings its own problems: complicated rooflines, more vents and soffit, and gaps where new construction meets what was left of the old. The bungalows that remain have sixty-year-old trim under mature trees.",
      "Don Mills and Bayview Village were planned communities of the 1950s and 60s, laid out around ravines and parkland, which is exactly where raccoons and skunks live. [Something in the attic](/wildlife/something-in-the-attic) in any of these neighbourhoods almost always came in at the roofline, and often at the back of the house, away from where the noise seems to be.",
    ],
    raccoons: [
      "Raccoons are everywhere in North York, and the ravine neighbourhoods have the densest numbers. They come up from the valley after dark, climb a tree or a downspout, and pull apart a roof vent or push through the soffit. From late winter to early summer, a female will raise her kits in the attic, and the slow, heavy footsteps overhead are hers.",
      "We check for kits before any removal so the family leaves together, then seal the opening and repair the vent, soffit or roof so it matches the rest of the house. [Raccoon removal](/wildlife/raccoons) looks at the whole roofline, not just one corner.",
    ],
    squirrels: [
      "Scampering by day means a squirrel, and North York's black and grey squirrels have more big trees to work with than almost anywhere in Toronto. They chew in at soffit corners, fascia edges and roof vents, and on an older York Mills or Bathurst Manor home the wood trim gives way fast.",
      "Because they raise young twice a year, a squirrel in early spring or late summer usually means a nest in the insulation. Each one is confirmed out before the hole is sealed and the chewed trim repaired. See [squirrel removal](/wildlife/squirrels).",
    ],
    otherWildlife: [
      "Skunks den under decks, sheds and front steps in every ravine neighbourhood, from Hoggs Hollow to Don Mills. Once the skunk is out, wire mesh goes along the base of the structure and into the ground ([skunk removal](/wildlife/skunks)).",
      "Starlings and sparrows nest in open dryer and bathroom vents, busiest in spring; eggs and young are checked for first, then the vent is screened ([bird removal](/wildlife/birds)). Bats roost in the attics and behind the fascia of older homes near the ravines. They are protected in Ontario, and the method and timing are explained before any work begins ([bat removal](/wildlife/bats)).",
    ],
    faqs: [
      {
        question: "Do you cover York Mills and the Bridle Path?",
        answer:
          "Yes. We cover all of North York: York Mills, the Bridle Path, Hoggs Hollow and Armour Heights; Bayview Village and Don Mills; Willowdale, Newtonbrook, Bathurst Manor and Downsview. Scarborough, East York and the rest of Toronto are covered as well.",
      },
    ],
    nearby: ["scarborough", "etobicoke", "vaughan", "markham"],
  },
  {
    slug: "pickering",
    name: "Pickering",
    region: "durham-region",
    metaDescription:
      "Raccoon & squirrel removal in Pickering, humane and on site the same day. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
    cardLine: "Rosebank and Bay Ridges to Amberlea and Brock Ridge.",
    intro:
      "Pickering is squeezed between Rouge National Urban Park on one side, Duffins Creek on the other and the lake along the bottom, with the wooded lots of Rosebank and the lakefront streets of Bay Ridges right in the middle of it. We get the animal out humanely, seal the entry point and repair the damage.",
    neighbourhoods: ["Rosebank", "Rouge Park", "Whitevale", "Amberlea", "Dunbarton", "Bay Ridges", "Liverpool", "Brock Ridge", "Claremont"],
    problems: [
      "Few GTA cities have this much green around them. The Rouge valley forms Pickering's western edge, Duffins Creek runs down the east side to the lake, and Frenchman's Bay sits in the middle of the waterfront. Rosebank and Rouge Park back onto the national park, with older homes on wooded lots, while Bay Ridges, built in the 1960s, runs right down to the bay. Raccoons, squirrels and skunks treat these neighbourhoods as part of the park.",
      "Amberlea, Liverpool and Dunbarton are mostly 1970s to 90s subdivisions, and Brock Ridge is newer. By now the trees in the older ones are big enough to reach the roof, and the original wood fascia and soffit has weathered for decades. Whitevale, up on Duffins Creek, is a heritage hamlet of 19th-century homes with all the gaps that come with that age.",
      "Wherever the house is, the way in is at the roofline: a soffit corner, a roof vent, the junction of two roofs, an uncapped chimney. A [raccoon in the attic](/wildlife/something-in-the-attic) in Rosebank has usually come up from the Rouge, and the opening it used is often on the side of the house you can't see from the street.",
    ],
    raccoons: [
      "Raccoons move between the Rouge, Duffins Creek and the lakeshore all year, and from late winter to early summer the females look for an attic to raise their kits. Heavy footsteps after dark, a torn roof vent or a soffit pushed up at the eaves are the signs.",
      "Kits are checked for before removal so mother and young stay together. Then the opening is sealed and the vent, soffit or roof repaired to match your home. [Raccoon removal](/wildlife/raccoons) takes in the whole roofline.",
    ],
    squirrels: [
      "Squirrels are the daytime scratching and scampering, loudest around sunrise and before dusk. Pickering's grey and black squirrels chew in at soffit corners, fascia edges and roof vents, and the treed lots of Rosebank, Dunbarton and Whitevale make the climb easy.",
      "They nest in the insulation and raise two litters a year, so every squirrel, young included, is confirmed out before the hole is sealed and the chewed spot repaired. More on [squirrel removal](/wildlife/squirrels).",
    ],
    otherWildlife: [
      "Skunks are common near the Rouge, Duffins Creek and the bay, and they den under decks, sheds and porch steps from Rosebank to Brock Ridge. When the skunk has left, the base of the deck or shed gets wire mesh dug into the soil ([skunk removal](/wildlife/skunks)).",
      "Sparrows and starlings get into uncovered dryer and bathroom vents; the nest is checked for eggs and young before the vent is screened ([bird removal](/wildlife/birds)). Bats roost behind fascia and in attic gaps, most often in the older homes near the Rouge and in Whitevale. They are protected in Ontario, and we explain the method and timing before any work begins ([bat removal](/wildlife/bats)).",
    ],
    faqs: [
      {
        question: "Do you cover Rosebank and Bay Ridges?",
        answer:
          "Yes. We cover all of Pickering: Rosebank, Rouge Park and Whitevale; Amberlea, Dunbarton and Liverpool; Bay Ridges on the waterfront; and Brock Ridge. Ajax and Scarborough on either side are covered as well.",
      },
    ],
    nearby: ["ajax", "scarborough", "whitby", "markham"],
  },
  {
    slug: "ajax",
    name: "Ajax",
    region: "durham-region",
    metaDescription:
      "Humane raccoon & squirrel removal in Ajax, same-day, nights included. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
    cardLine: "The lakefront and Pickering Village to Riverside and Nottingham.",
    intro:
      "Ajax runs from the lakefront in Lakeside up past the old homes of Pickering Village and central Ajax to the newer streets of Riverside and Nottingham, with Duffins Creek along its western edge. Wherever the noise is coming from, we remove the animal humanely, seal the way in and repair the damage.",
    neighbourhoods: ["Riverside", "Nottingham", "Pickering Village", "Lakeside", "Applecroft", "Hermitage", "Salem", "Central Ajax"],
    problems: [
      "Ajax has two very different kinds of older home. Pickering Village, now part of Ajax, is a 19th-century village with brick and frame houses under big trees. Central Ajax was built in the 1940s through the 70s, starting with the wartime homes around the old munitions plant, and those houses have wood fascia and soffit that has had a long time to weather. Both kinds give a squirrel plenty to chew on.",
      "Riverside, Nottingham, Salem and Applecroft came later, mostly 1990s to 2010s two-storeys with aluminum soffit, several roof vents and attached garages, and Hermitage sits in between. Riverside backs onto Duffins Creek, and the creek valley is where much of the town's wildlife lives.",
      "Then there is the lake. Lakeside and the waterfront trail bring skunks and raccoons right up to the back fences. Whichever neighbourhood you're in, [something in the attic](/wildlife/something-in-the-attic) got in at the roofline, and the opening may be well away from where you hear the noise.",
    ],
    raccoons: [
      "Raccoons follow Duffins Creek and the waterfront into every part of Ajax, and an attic is their first choice for raising kits from late winter to early summer. The signs are heavy footsteps after dark and a roof vent or soffit that has been torn or lifted at the eaves.",
      "We look for kits before any removal and keep the family together, then seal the opening and repair the vent, soffit or roof so it matches the house. [Raccoon removal](/wildlife/raccoons) means the whole roofline, not a single corner.",
    ],
    squirrels: [
      "Daytime noise overhead is a squirrel, and in Ajax they are loudest at first light and before dusk. Soffit corners, fascia edges and roof vents are where they chew in, and the old trees of Pickering Village and central Ajax do the climbing for them.",
      "With two litters a year, a squirrel in spring or late summer often means a mother and young in the insulation. All of them are confirmed out before the hole is sealed and the chewed spot repaired. See [squirrel removal](/wildlife/squirrels).",
    ],
    otherWildlife: [
      "Skunks den under decks, sheds and front steps from Lakeside to Nottingham, and the creek and the waterfront keep them well supplied. Once the skunk is out, the base of the structure is meshed and the mesh dug into the soil ([skunk removal](/wildlife/skunks)).",
      "Starlings and sparrows nest in open dryer and bathroom vents, busiest in spring; eggs and young are checked for before the vent is screened ([bird removal](/wildlife/birds)). Bats roost behind fascia and in the attics of older homes, particularly in Pickering Village and central Ajax. They are protected in Ontario, so the method and timing are explained before any work begins ([bat removal](/wildlife/bats)).",
    ],
    faqs: [
      {
        question: "Do you cover Pickering Village and the lakefront?",
        answer:
          "Yes. We cover all of Ajax: Pickering Village and central Ajax; Lakeside on the waterfront; Riverside, Nottingham, Salem, Applecroft and Hermitage. Pickering and Whitby on either side are covered as well.",
      },
    ],
    nearby: ["pickering", "whitby", "oshawa", "scarborough"],
  },
  {
    slug: "oshawa",
    name: "Oshawa",
    region: "durham-region",
    metaDescription:
      "Humane raccoon & squirrel removal in Oshawa, the same day you call. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453), 24/7.",
    cardLine: "Windfields and Kedron to McLaughlin, Centennial and Lakeview.",
    intro:
      "Oshawa has a century of housing in one city: the older streets of McLaughlin and Centennial north and south of downtown, the postwar blocks of Eastdale and Lakeview, and brand-new subdivisions in Windfields and Kedron up near the university. We get the animal out humanely, seal the entry point and repair the damage.",
    neighbourhoods: ["Windfields", "Kedron", "McLaughlin", "Northglen", "Samac", "Taunton", "Pinecrest", "Centennial", "Eastdale", "Lakeview"],
    problems: [
      "Oshawa Creek runs right through the middle of the city, from the north end down past downtown to the lake, and the ravine along it is a corridor for raccoons, squirrels and skunks. The neighbourhoods either side of it, McLaughlin and Centennial, have some of Oshawa's oldest homes: brick and frame houses from the early 1900s onward, with wood soffit and fascia, deep eaves and chimneys that have never had a cap.",
      "Eastdale, Lakeview and Pinecrest are mostly postwar, 1950s to 70s bungalows and two-storeys whose trees are now big enough to touch the roof. Samac and Northglen came in the 1980s and 90s, and Taunton after that, with aluminum soffit and roof vents that are now old enough to loosen and crack.",
      "Windfields and Kedron, around Ontario Tech and Durham College, are the newest part of the city: big two-storeys on tight lots, with long rooflines and a garage roof that meets the house at an easy climbing angle. Open fields and hedgerows are still next door, so the wildlife arrived before the trees did. A [raccoon in the attic](/wildlife/something-in-the-attic) in Windfields came in at a vent or a soffit panel; in McLaughlin it may have walked down the chimney.",
    ],
    raccoons: [
      "Raccoons use Oshawa Creek and the lakeshore to get around, and from late winter to early summer a female will take over an attic to raise her kits. The signs are slow, heavy footsteps after dark, a roof vent that has been torn open, or soffit lifted at the eaves; on the older homes downtown, an uncapped chimney is an open invitation.",
      "We check for kits before anything is removed so the family leaves together, then seal the opening and repair the vent, soffit, chimney or roof to match the house. [Raccoon removal](/wildlife/raccoons) takes in the whole roofline, since the way in is rarely where the noise is loudest.",
    ],
    squirrels: [
      "Scampering by day is a squirrel, and Oshawa's black and grey squirrels are loudest around sunrise and in the late afternoon. They chew in at soffit corners, fascia edges and roof vents, and the mature trees of McLaughlin, Centennial and Eastdale give them an easy climb.",
      "They raise two litters a year, so a squirrel in early spring or late summer usually means a nest in the insulation. Every one of them is confirmed out before the hole is sealed and the chewed wood or soffit repaired. Our [squirrel removal](/wildlife/squirrels) page has the signs to look for.",
    ],
    otherWildlife: [
      "Skunks are common along the creek and near the lake, and they den under decks, sheds and porch steps in every part of Oshawa. Once the skunk is out, wire mesh is fixed along the base of the structure and dug into the ground so nothing tunnels back in ([skunk removal](/wildlife/skunks)).",
      "Starlings and sparrows nest in uncovered dryer and bathroom vents, busiest in spring; eggs and young are checked for, then the vent is screened ([bird removal](/wildlife/birds)). Bats roost in the attics and behind the fascia of the older homes near the creek and downtown. They are protected in Ontario, so we explain the method and the timing before any work begins ([bat removal](/wildlife/bats)).",
    ],
    faqs: [
      {
        question: "Do you cover Windfields and Kedron?",
        answer:
          "Yes. We cover all of Oshawa: Windfields, Kedron, Taunton, Northglen and Samac in the north; McLaughlin, Centennial and Pinecrest in the middle; and Eastdale and Lakeview to the south. Whitby next door and Bowmanville to the east are covered as well.",
      },
    ],
    nearby: ["whitby", "ajax", "pickering"],
  },
  {
    slug: "whitby",
    name: "Whitby",
    region: "durham-region",
    metaDescription:
      "Humane raccoon & squirrel removal in Whitby and Brooklin. Same-day, late nights too. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
    cardLine: "Brooklin and Lynde Creek to Port Whitby and Taunton North.",
    intro:
      "Whitby stretches from the harbour at Port Whitby, past the older streets around Lynde Creek and Pringle Creek, up to Brooklin's village core and the new subdivisions around it. Wherever the noise is, we remove the animal humanely, seal the way in and repair what it damaged.",
    neighbourhoods: ["Brooklin", "Lynde Creek", "Port Whitby", "Pringle Creek", "Rolling Acres", "Blue Grass Meadows", "Williamsburg", "Taunton North"],
    problems: [
      "Whitby is built around water. Lynde Creek and Pringle Creek run south through the town to the lake, Lynde Shores Conservation Area sits on the marsh at the bottom of Lynde Creek, and Port Whitby wraps around the harbour. Homes near any of them see more raccoons and skunks than homes in the middle of a subdivision, and the older houses downtown and in Port Whitby have the wood trim and uncapped chimneys that make entry easy.",
      "Brooklin is two towns in one: a 19th-century village core with mature trees and century homes, surrounded by subdivisions built since the late 1990s. Williamsburg, Taunton North and the newer parts of Brooklin have long rooflines, several roof vents and aluminum soffit, and the farmland they replaced still sends wildlife their way.",
      "Rolling Acres, Blue Grass Meadows and Pringle Creek are 1980s and 90s neighbourhoods whose trees have caught up with the houses, and the first generation of soffit and vent caps is reaching the age where it loosens. [Something in the attic](/wildlife/something-in-the-attic) in any of them most likely came in at a soffit corner or a roof vent, often on the far side of the house from the room where you hear it.",
    ],
    raccoons: [
      "Whitby's raccoons move along the creeks and the lakeshore, and from late winter to early summer the females go looking for an attic to have their kits in. Heavy footsteps after dark are the usual first sign, with a torn roof vent or a lifted soffit outside.",
      "Kits are checked for before any removal so mother and young go out together. The opening is then sealed and the vent, soffit or roof repaired to match. [Raccoon removal](/wildlife/raccoons) starts with the whole roofline rather than one corner.",
    ],
    squirrels: [
      "A squirrel is the daytime noise, busiest at first light and before dusk. In Whitby they chew in at soffit corners, fascia edges and roof vents, and the big trees of old Brooklin, Port Whitby and the streets along Lynde Creek make the climb easy.",
      "Because squirrels raise two litters a year, a spring or late-summer squirrel is often a mother with young in the insulation. Each of them is confirmed out before the hole is sealed and the chewed spot made good. See [squirrel removal](/wildlife/squirrels).",
    ],
    otherWildlife: [
      "Skunks are everywhere near Lynde Shores and the creeks, and they den under decks, sheds and front steps from Port Whitby to Brooklin. When the skunk is out, the base of the deck or shed is meshed and the mesh dug into the soil ([skunk removal](/wildlife/skunks)).",
      "Starlings and sparrows nest in open dryer and bathroom vents; we check for eggs and young, then screen the vent ([bird removal](/wildlife/birds)). Bats roost behind fascia and in attic gaps, most often in the older homes of Brooklin, downtown and Port Whitby. They are protected in Ontario, and the timing and method are explained before any work begins ([bat removal](/wildlife/bats)).",
    ],
    faqs: [
      {
        question: "Do you cover Brooklin?",
        answer:
          "Yes. We cover all of Whitby: Brooklin, Taunton North and Williamsburg in the north; Rolling Acres, Blue Grass Meadows and Pringle Creek in the middle; and Lynde Creek, downtown and Port Whitby to the south. Ajax and Oshawa on either side are covered too.",
      },
    ],
    nearby: ["oshawa", "ajax", "pickering"],
  },
  {
    slug: "etobicoke",
    name: "Etobicoke",
    region: "toronto",
    metaDescription:
      "Humane raccoon & squirrel removal in Etobicoke. Same-day service, any hour. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
    cardLine: "The Kingsway and Humber Valley to Mimico, Long Branch and Rexdale.",
    intro:
      "Etobicoke is old trees and old rooflines: the Kingsway, Humber Valley Village and Sunnylea along the Humber, the lakefront streets of Mimico and Long Branch, and the postwar subdivisions of Markland Wood, Alderwood and Rexdale. We get the animal out humanely, seal the way in and repair the damage.",
    neighbourhoods: [
      "The Kingsway",
      "Humber Valley Village",
      "Princess Gardens",
      "Sunnylea",
      "Islington",
      "Markland Wood",
      "Mimico",
      "Long Branch",
      "Alderwood",
      "Rexdale",
      "Eringate",
    ],
    problems: [
      "The Humber River is the spine of Etobicoke, and the homes along it in the Kingsway, Humber Valley Village and Sunnylea were built from the 1930s to the 50s: stone and brick, slate and cedar, wood soffits and fascia, big chimneys, and oaks and maples that have had ninety years to grow over the roof. They are beautiful houses with a great many ways in, and the river valley keeps them supplied with raccoons.",
      "Mimico Creek runs through the middle, and the lakefront in Mimico, Long Branch and Alderwood mixes 1920s cottages-turned-houses with 1950s bungalows and new builds. Islington and Princess Gardens are 1950s and 60s neighbourhoods under mature trees; Markland Wood and Eringate are a little younger, with the original wood trim now well weathered.",
      "Rexdale, in the north, is mostly postwar bungalows and semis with sixty-year-old soffit and vents, plus the hydro corridors and the Humber's west branch for wildlife to travel along. Whichever part of Etobicoke you're in, [something in the attic](/wildlife/something-in-the-attic) found a gap at the roofline, and on an older home there may be several.",
    ],
    raccoons: [
      "Raccoons are thick along the Humber and Mimico Creek, and the big old homes of the Kingsway and Humber Valley Village are exactly what they look for from late winter to early summer, when the females want a quiet attic for their kits. They climb the trees that overhang the roof, pull a roof vent apart or lift the soffit at the eaves, and the first you hear is heavy footsteps after dark.",
      "Kits are checked for before anything else, so the family leaves together, and then the opening is sealed and the vent, soffit or roof repaired to suit the house, which on these homes matters. [Raccoon removal](/wildlife/raccoons) here means the whole roofline, chimney included.",
    ],
    squirrels: [
      "Daytime scampering is a squirrel, and Etobicoke's black and grey squirrels have more old trees to work with than almost anywhere in the city. They chew in at soffit corners, fascia edges and roof vents, and ninety-year-old wood trim in Sunnylea or the Kingsway gives way quickly.",
      "They nest in the insulation and raise young twice a year, so a squirrel in early spring or late summer is usually a mother with a litter. Every squirrel is confirmed out before the hole is sealed and the chewed trim repaired. Read more about [squirrel removal](/wildlife/squirrels).",
    ],
    otherWildlife: [
      "Skunks den under decks, sheds and porch steps from the lakefront to Rexdale, with the creek valleys and the big Kingsway gardens giving them cover. Once the skunk is out, wire mesh is run along the base of the structure and set into the ground ([skunk removal](/wildlife/skunks)).",
      "Starlings and sparrows nest in uncovered dryer and bathroom vents and in the uncapped chimneys of older homes; eggs and young are checked for before the opening is screened or capped ([bird removal](/wildlife/birds)). Bats roost behind fascia and in the attics of the older houses along the Humber and the lake. They are protected in Ontario, so we explain the method and timing to you before any work starts ([bat removal](/wildlife/bats)).",
    ],
    faqs: [
      {
        question: "Do you cover the Kingsway and Humber Valley?",
        answer:
          "Yes. We cover all of Etobicoke: the Kingsway, Humber Valley Village, Princess Gardens and Sunnylea; Islington, Markland Wood and Eringate; Mimico, Long Branch and Alderwood on the lake; and Rexdale. Mississauga and the rest of Toronto are covered as well.",
      },
    ],
    nearby: ["mississauga", "north-york", "brampton", "vaughan"],
  },
  {
    slug: "aurora",
    name: "Aurora",
    region: "york-region",
    metaDescription:
      "Humane raccoon & squirrel removal in Aurora, the same day, even late at night. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
    cardLine: "Aurora Estates and Hills of St Andrew to Aurora Village and Bayview Wellington.",
    intro:
      "Aurora sits on the Oak Ridges Moraine, with the big properties of Aurora Estates and Hills of St Andrew, the century homes of Aurora Village along Yonge Street, and newer streets in Bayview Northeast and Bayview Wellington. We remove the animal humanely, seal the entry point and repair the damage.",
    neighbourhoods: ["Aurora Estates", "Hills of St Andrew", "Aurora Village", "Bayview Northeast", "Bayview Wellington", "Aurora Highlands"],
    problems: [
      "Aurora is a moraine town. The Oak Ridges Trail runs along its southern edge, the woodlots and kettle lakes of the moraine press in from the south and west, and the larger properties in Aurora Estates and Hills of St Andrew back straight onto that country. Big lots, mature trees over the roof and outbuildings on the property all add up to more raccoons, more squirrels and, in a wooded setting like this, more bats than a city neighbourhood sees.",
      "Aurora Village, the old core along Yonge Street, is Victorian and Edwardian brick with deep eaves, wood trim and chimneys that were never capped, under trees that have had a century to grow. Aurora Highlands, to the southwest, is 1970s to 90s housing with the original wood fascia now well weathered.",
      "Bayview Northeast and Bayview Wellington are the newer side of town, two-storeys from the late 1990s on with aluminum soffit, several roof vents and attached garages. A [raccoon in the attic](/wildlife/something-in-the-attic) in Bayview Northeast most likely came through a vent or a loose soffit panel; in Aurora Village it may have come down the chimney.",
    ],
    raccoons: [
      "The moraine's woodlots keep Aurora well stocked with raccoons, and from late winter to early summer a female will look for an attic to raise her kits in. Slow, heavy footsteps after dark are the sign, and outside you may find a roof vent torn open or soffit pushed up at the eaves.",
      "We look for kits before removing anything and keep mother and young together. Then the opening is sealed and the vent, soffit, chimney or roof repaired to match the house. [Raccoon removal](/wildlife/raccoons) looks at the whole roofline, not one spot.",
    ],
    squirrels: [
      "Squirrels are the daytime noise, loudest around sunrise and before dusk, and Aurora's black and grey squirrels chew their way in at soffit corners, fascia edges and roof vents. The old trees of Aurora Village and the estate lots give them an easy route to the roof.",
      "With two litters a year, a squirrel in spring or late summer is usually a mother with young in the insulation, so every squirrel is confirmed out before the hole is sealed and the chewed spot repaired. See [squirrel removal](/wildlife/squirrels).",
    ],
    otherWildlife: [
      "Skunks are common across the moraine and den under decks, sheds and front steps in every part of Aurora, especially on the larger lots. Once the skunk is out, the base of the structure gets wire mesh dug into the soil ([skunk removal](/wildlife/skunks)).",
      "Starlings and sparrows nest in uncovered dryer and bathroom vents; the nest is checked for eggs and young before the vent is screened ([bird removal](/wildlife/birds)). Bats are a bigger part of the picture here than in most of the GTA, roosting behind fascia and in attic gaps, particularly in Aurora Village and the wooded estates. They are protected in Ontario, which affects timing, and we go over the plan with you before any work starts ([bat removal](/wildlife/bats)).",
    ],
    faqs: [
      {
        question: "Do you cover Aurora Estates and Hills of St Andrew?",
        answer:
          "Yes. We cover all of Aurora: Aurora Estates, Hills of St Andrew and Aurora Highlands; Aurora Village along Yonge Street; and Bayview Northeast and Bayview Wellington. Newmarket, Richmond Hill and King City are covered too.",
      },
    ],
    nearby: ["newmarket", "richmond-hill", "stouffville"],
  },
  {
    slug: "stouffville",
    name: "Stouffville",
    region: "york-region",
    metaDescription:
      "Humane raccoon & squirrel removal in Stouffville. Same-day, even overnight. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
    cardLine: "Ballantrae and Musselman's Lake to the town centre and Vandorf.",
    intro:
      "Stouffville is where the suburbs end and the moraine begins: the golf-course homes of Ballantrae, the cottages and older houses around Musselman's Lake, the town centre's village streets and new subdivisions, and the rural lots of Vandorf and Gormley. We get the animal out humanely, seal the way in and repair the damage.",
    neighbourhoods: ["Ballantrae", "Musselman's Lake", "Stouffville town centre", "Vandorf", "Gormley"],
    problems: [
      "Most of Whitchurch-Stouffville is countryside, and the wildlife is countryside wildlife. The Oak Ridges Moraine runs across the top of the town, with the forest tracts around Vandorf and Gormley and the kettle lake at Musselman's Lake, and raccoons, skunks and bats are simply part of living there. Homes at Musselman's Lake range from old cottages to new builds, and the cottages in particular have the gaps, loose trim and open chimneys that animals use.",
      "Ballantrae is a different kind of exposure: larger homes on a golf course, surrounded by woods, with long rooflines, plenty of soffit and outbuildings on many lots. The town centre has an old village core with century homes under mature trees, and subdivisions built since the 2000s with aluminum soffit, roof vents and attached garages.",
      "Then there are the rural properties, with barns, sheds and garages that give raccoons and skunks a choice of shelters before they ever look at the house. Wherever you are, [something in the attic](/wildlife/something-in-the-attic) got in at the roofline, and on a rural lot the roofline is only one of the places to check.",
    ],
    raccoons: [
      "Raccoons are plentiful on the moraine, and from late winter to early summer a female will choose an attic, a barn loft or a garage ceiling to raise her kits. In a house, heavy footsteps after dark are the sign; outside, look for a torn roof vent, lifted soffit or an open chimney.",
      "Kits are checked for before any removal so the family leaves together, then the opening is sealed and the vent, soffit, chimney or roof repaired to match. [Raccoon removal](/wildlife/raccoons) covers every entry point, not only the one you noticed.",
    ],
    squirrels: [
      "Daytime scampering overhead is a squirrel, busiest at first light and in the late afternoon. Stouffville's squirrels chew in at soffit corners, fascia edges and roof vents, and the trees around Musselman's Lake, the village core and the Ballantrae woods give them an easy climb.",
      "They raise young twice a year and nest in the insulation, so every squirrel is confirmed out before the hole is sealed and the chewed spot repaired. Details on [squirrel removal](/wildlife/squirrels).",
    ],
    otherWildlife: [
      "Skunks are a fact of life on the moraine, denning under decks, sheds, porches and outbuildings across Stouffville. After the skunk is out, the base of the structure is meshed and the mesh set into the ground ([skunk removal](/wildlife/skunks)).",
      "Starlings and sparrows nest in uncovered dryer and bathroom vents and in open chimneys; eggs and young are checked for first ([bird removal](/wildlife/birds)). Bats are more common here than almost anywhere else we serve, roosting behind fascia and in the attics of cottages and older homes, especially near Musselman's Lake and the forest tracts. They are protected in Ontario, and we walk you through the method and timing before any work begins ([bat removal](/wildlife/bats)).",
    ],
    faqs: [
      {
        question: "Do you cover Ballantrae and Musselman's Lake?",
        answer:
          "Yes. We cover all of Whitchurch-Stouffville: Ballantrae, Musselman's Lake, the town centre, Vandorf and Gormley, including the rural properties between them. Markham, Richmond Hill and Aurora next door are covered as well.",
      },
    ],
    nearby: ["markham", "aurora", "richmond-hill", "newmarket"],
  },
  {
    slug: "caledon",
    name: "Caledon",
    region: "peel-region",
    metaDescription:
      "Humane raccoon, squirrel & skunk removal in Caledon. Same day, any hour. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
    cardLine: "Bolton and Caledon East to the Escarpment villages and rural estates.",
    intro:
      "Caledon is the rural top of Peel: Bolton's old village core and its newer subdivisions, Caledon East, the Escarpment villages of Belfountain, Inglewood, Cheltenham and Alton, and estates and farms on big lots in between. Out here the list of animals is longer, and we handle all of them humanely, seal the way in and repair the damage.",
    neighbourhoods: ["Bolton", "Caledon East", "Inglewood", "Cheltenham", "Belfountain", "Alton", "Palgrave", "Mono Mills", "Caledon Village"],
    problems: [
      "Caledon is mostly countryside: the Niagara Escarpment along the west side, the Oak Ridges Moraine across the east, the Caledon Hills and the Humber headwaters in between. That means more skunks, more bats and more raccoons than the suburbs to the south, and animals that have barns, sheds, garages and woodpiles to choose from before they ever try the house.",
      "Bolton is the one real town, with a 19th-century village core on the Humber under mature trees and subdivisions from the 1980s to the 2010s around it: wood trim and open chimneys in the old part, aluminum soffit and roof vents in the new. Caledon East, Caledon Village, Palgrave and Mono Mills are smaller versions of the same mix.",
      "The Escarpment villages of Belfountain, Inglewood, Cheltenham and Alton are stone and brick heritage homes on the Credit River, with deep eaves, old chimneys and forest on every side. On the estate lots, a [raccoon in the attic](/wildlife/something-in-the-attic) is as likely to have come from the barn as from the woods, and the roofline is only one of the places that needs a look.",
    ],
    raccoons: [
      "Raccoons are everywhere in Caledon, and from late winter to early summer the females look for a dry, quiet place for their kits: an attic, a barn loft, a garage ceiling or the space above a porch. Heavy footsteps after dark are the sign in a house; outside, a torn roof vent, lifted soffit or open chimney.",
      "Kits are checked for before any removal so the family goes out together, then the opening is sealed and the roof, vent, soffit or chimney repaired to match. [Raccoon removal](/wildlife/raccoons) means every way in gets found and closed.",
    ],
    squirrels: [
      "Squirrels are the daytime noise, loudest at first light and before dusk, and in Caledon they have no shortage of trees. They chew in at soffit corners, fascia edges and roof vents, and the old wood trim of the villages is their easiest target.",
      "Two litters a year means a spring or late-summer squirrel is usually a mother with young in the insulation. Nothing is sealed until all of them are out, and the chewed spot is repaired afterwards. See [squirrel removal](/wildlife/squirrels).",
    ],
    otherWildlife: [
      "Skunks are the most common call in rural Caledon, denning under decks, porches, sheds, barns and woodpiles. Once the skunk is out, wire mesh is fixed along the base of the structure and dug into the soil so nothing can dig back in ([skunk removal](/wildlife/skunks)).",
      "Birds nest in uncovered dryer and bathroom vents and in the open chimneys of older homes; eggs and young are checked for before the opening is screened or capped ([bird removal](/wildlife/birds)). Bats roost in barns and in the attics and fascia gaps of older houses, and the Escarpment and the forest tracts make them a regular part of Caledon life. They are protected in Ontario, so the timing and method are explained before any work begins ([bat removal](/wildlife/bats)).",
    ],
    faqs: [
      {
        question: "Do you cover Bolton and the Escarpment villages?",
        answer:
          "Yes. We cover all of Caledon: Bolton, Caledon East, Caledon Village, Palgrave and Mono Mills; Belfountain, Inglewood, Cheltenham and Alton on the Escarpment; and the rural properties in between. Brampton and the rest of Peel are covered as well.",
      },
    ],
    nearby: ["brampton", "vaughan", "mississauga"],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

/** The order each hub lists its cities in (owner-approved), independent of build order. */
const HUB_ORDER: Record<RegionSlug, string[]> = {
  toronto: ["scarborough", "north-york", "etobicoke"],
  "peel-region": ["brampton", "mississauga", "caledon"],
  "york-region": ["markham", "vaughan", "richmond-hill", "newmarket", "aurora", "stouffville"],
  "durham-region": ["pickering", "ajax", "whitby", "oshawa"],
};

/** Every planned city for a region in hub order, with whether its page exists yet. */
export function getPlannedCitiesForRegion(region: RegionSlug): (PlannedCity & { live: boolean })[] {
  const order = HUB_ORDER[region];
  return CITY_INDEX.filter((p) => p.region === region)
    .sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug))
    .map((p) => ({ ...p, live: Boolean(getCityBySlug(p.slug)) }));
}

/** The H1: always "Raccoon & Squirrel Removal in {City}" (owner-approved pattern). */
export function cityHeading(city: City): string {
  return `Raccoon & Squirrel Removal in ${city.name}`;
}

/** The <title> before the brand suffix. A city can override it when the standard form runs long. */
export function cityTitle(city: City): string {
  return city.seoTitle ?? cityHeading(city);
}

/** "a", "a and b", "a, b and c". */
export function listJoin(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}
