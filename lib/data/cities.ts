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
 * - Only real neighbourhoods, from the owner's lists. Never invent one.
 * - Housing and landscape stay factual and general ("postwar bungalows near
 *   the Rouge ravines"), never claims about our work there, and nothing about
 *   the business that isn't already true on the live site: no prices,
 *   reviews, counts, years, certifications, insurance, awards or "block and
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
      "Raccoon or squirrel in a Brampton attic? Humane removal, same-day before 4 PM. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
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
      {
        question: "How quickly can you get to Brampton?",
        answer:
          "Same-day service is available for requests received before 4 PM, subject to technician availability. Calls are answered 24 hours a day, 7 days a week, and we confirm timing with you when you get in touch.",
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
      "Mississauga raccoon & squirrel removal, humane and same-day before 4 PM. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
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
      {
        question: "How quickly can you get to Mississauga?",
        answer:
          "Requests received before 4 PM are eligible for same-day service, subject to technician availability. The phone is answered around the clock, and we confirm the timing with you when you call or send a request.",
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
      "Humane raccoon & squirrel removal across Scarborough. Same-day before 4 PM. Lifetime guarantee on every entry point we seal. Call 416-900-WILD (9453).",
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
      {
        question: "How quickly can you get to Scarborough?",
        answer:
          "If your request comes in before 4 PM, same-day service is available, subject to technician availability. We answer the phone 24 hours a day, 7 days a week, and we confirm the time with you before anyone is sent out.",
      },
    ],
    nearby: ["north-york", "pickering", "markham"],
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
