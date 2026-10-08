import type { WildlifeEntry } from "@/lib/types";

/**
 * Wildlife service architecture: species pages and "situation" pages
 * (wherever the animal is, before it's identified) share one template at
 * app/wildlife/[slug]/page.tsx. This keeps SEO coverage broad — matching
 * both "raccoon in attic" and "noise in my attic" searches — without
 * maintaining two separate page systems.
 *
 * Sealing the entry point and repairing the damage the animal caused is
 * part of the service (owner-confirmed, Oct 2026): pages with a `repair`
 * section say so in their own words, and /wildlife/damage-repair (its own
 * static route, not an entry here) covers it in full. Keep that talk to the
 * spot the animal used and the damage it caused — whole-home prevention
 * ("block and lock") stays off public pages.
 *
 * Every `seoTitle` and `heading` names the animal or problem and Toronto.
 */
export const WILDLIFE: WildlifeEntry[] = [
  {
    slug: "raccoons",
    category: "species",
    name: "Raccoons",
    singular: "Raccoon",
    seoTitle: "Raccoon Removal & Roof Damage Repair in Toronto",
    heading: "Raccoon Removal in Toronto",
    metaDescription:
      "Humane raccoon removal in Toronto & the GTA. We seal the entry point and repair roof, soffit and vent damage. Lifetime guarantee on every entry point we seal.",
    summary: "Strong, dexterous, and drawn to attics, chimneys, and sheds — especially with young in spring.",
    intro:
      "In spring, a female raccoon often looks for a warm, hidden place to raise her young. Raccoons are strong enough to tear rooflines and soffits and clever enough to find the weakest point in a house.",
    commonSigns: [
      "Heavy footsteps or thumping overhead, especially at dusk and dawn",
      "Torn or lifted roofline, fascia, or soffit",
      "Flattened insulation or a matted nest area in the attic",
      "A strong, persistent odor from one area of the attic",
    ],
    commonAreas: ["Attics", "Chimneys", "Soffits", "Sheds and decks"],
    approach:
      "We check for young before removal and take care to avoid separating them from their mother.",
    iconId: "raccoon",
    photoOverride: "/images/raccoon-detail.png",
    photoAlt: "A raccoon looking out of a torn soffit at a home's roofline",
    repair: {
      heading: "Raccoon removal and roof damage repair",
      paragraphs: [
        "Raccoons rarely find a way in. They make one. A lifted section of shingles, a torn roof vent or a soffit pried loose is often the first sign one has moved in.",
        "Once the raccoon and any young are out, we seal the opening and repair what it damaged: roof boards and shingles, soffits, fascia and roof vents, matched to your home's existing materials and colours. If the attic insulation has been flattened or soiled, we clean out the droppings and nesting material and replace the insulation too.",
      ],
      linkLabel: "Raccoon and squirrel damage repair",
    },
  },
  {
    slug: "squirrels",
    category: "species",
    name: "Squirrels",
    singular: "Squirrel",
    seoTitle: "Squirrel Removal & Roof Repair in Toronto",
    heading: "Squirrel Removal in Toronto",
    metaDescription:
      "Humane squirrel removal in Toronto. We seal the way in and repair chewed soffits, fascia and roof edges. Lifetime guarantee on every entry point we seal.",
    summary: "Persistent chewers that exploit small gaps in soffits, fascia, and roof edges.",
    intro:
      "Squirrels can enter through small gaps around soffits, fascia and roof edges. Once inside a soffit or attic, they'll often widen the entry point over time and may return to the same spot even after a first attempt to seal it. Activity is usually most noticeable in early morning and late afternoon.",
    commonSigns: [
      "Scratching or scampering along walls or ceilings, mainly during the day",
      "Gnaw marks on fascia boards, soffits, or wiring",
      "A visible entry hole at a roofline or soffit corner",
      "Acorns, twigs, or nesting material collecting in the attic",
    ],
    commonAreas: ["Attics", "Soffits and fascia", "Roof edges", "Wall cavities"],
    approach:
      "We find where the squirrels are getting in and make sure they're all out, including any young, before anything is sealed.",
    iconId: "squirrel",
    photoOverride: "/images/squirrel-detail.png",
    photoAlt: "A squirrel at a chewed hole in a soffit at a home's roofline",
    repair: {
      heading: "Squirrel removal and roof repair",
      paragraphs: [
        "Squirrels chew. A small gap at a soffit corner or roof edge becomes a hole, and the hole becomes their regular way in and out.",
        "Once we've confirmed the squirrels are out, we seal that spot and repair what they chewed through: soffits, fascia boards, roof edges, roof vents, eavestroughs and siding, finished to match the rest of your home.",
      ],
      linkLabel: "Squirrel damage repair",
    },
  },
  {
    slug: "skunks",
    category: "species",
    name: "Skunks",
    singular: "Skunk",
    seoTitle: "Skunk Removal in Toronto: Decks, Porches & Sheds",
    heading: "Skunk Removal in Toronto",
    metaDescription:
      "Humane skunk removal in Toronto. Once the skunk is out, we seal the ground under your deck, porch or shed. Lifetime guarantee on every entry point we seal.",
    summary: "Ground-level diggers that den under decks, porches and sheds rather than in attics.",
    intro:
      "Skunks are a ground-level problem. They dig in under decks, porches, sheds and front steps, and in spring a female may raise her young there. They're not aggressive by nature, so a calm, careful approach matters more with skunks than with almost any other animal.",
    commonSigns: [
      "A skunk odour near a deck, shed or foundation, even without a sighting",
      "Small, cone-shaped holes in the lawn, often dug overnight",
      "A fresh burrow or gap under a deck, porch, shed or step",
      "Sightings at dusk or dawn near the same part of the yard",
    ],
    commonAreas: ["Under decks and porches", "Sheds", "Front steps", "Foundation gaps"],
    approach:
      "We find the den, make sure any young are accounted for, and encourage the skunk out calmly so it never feels cornered. Nothing is sealed until we've confirmed the space is empty.",
    visitNote: "Removal is handled humanely, with care taken around your deck, landscaping and garden.",
    iconId: "skunk",
    repair: {
      heading: "Skunk removal and ground sealing under decks, porches and sheds",
      paragraphs: [
        "Once the skunk is out, we close off the space it was using. Wire mesh is fixed along the base of the deck, porch or shed and dug into the ground, so the next animal that tries to dig in meets a barrier instead of an opening.",
        "The work is kept low and tidy, with care for your deck, landscaping and garden.",
      ],
      linkLabel: "How we seal and repair after wildlife",
    },
  },
  {
    slug: "birds",
    category: "species",
    name: "Birds",
    singular: "Bird",
    seoTitle: "Bird Removal in Toronto: Vents, Chimneys & Eaves",
    heading: "Bird Removal in Toronto",
    metaDescription:
      "Birds in a vent, chimney or eaves in Toronto? We check for eggs and young first, then seal the opening. Lifetime guarantee on every entry point we seal.",
    summary: "Nesting in vents, chimneys, and eaves — most often a seasonal, fast-moving situation.",
    intro:
      "Birds most often turn up nesting in bathroom or dryer vents, chimneys, or under eaves. It's usually a seasonal situation tied to nesting season, and it can move quickly from 'a bit of noise' to a blocked vent or chimney that needs prompt attention.",
    commonSigns: [
      "Chirping or rustling from a vent, chimney, or eave",
      "Nesting material visible at a vent opening",
      "A vent that's stopped venting properly",
      "Birds repeatedly entering and exiting the same small gap",
    ],
    commonAreas: ["Dryer and bathroom vents", "Chimneys", "Eaves and soffits", "Gutters"],
    approach:
      "We identify the birds and check for eggs or young before work begins. If the nest is protected, we'll explain what can be done and when.",
    iconId: "bird",
    photoOverride: "/images/bird-detail.png",
    photoAlt: "A starling carrying nesting material into a wall vent on a stone house",
    showGuaranteeLine: true,
  },
  {
    slug: "bats",
    category: "species",
    name: "Bats",
    singular: "Bat",
    seoTitle: "Humane Bat Removal in Toronto",
    heading: "Bat Removal in Toronto",
    metaDescription:
      "Humane bat removal in Toronto, timed to Ontario's wildlife rules. We seal the gaps bats use to get in. Lifetime guarantee on every entry point we seal.",
    summary: "Roosting in attics and soffit gaps, requiring a careful, timing-sensitive approach.",
    intro:
      "Bats typically roost in attics, soffit gaps, or behind loose fascia, entering through openings as small as a fingertip. Bats are protected wildlife in Ontario. We'll assess the situation and explain the appropriate method and timing for humane removal.",
    commonSigns: [
      "Faint scratching or squeaking in the attic, especially at dusk",
      "Small dark staining around a gap in the roofline (from repeated entry)",
      "Guano (droppings) accumulating in an attic corner or below an entry point",
      "Bats seen leaving the roofline around sunset",
    ],
    commonAreas: ["Attics", "Soffit gaps", "Behind fascia and siding", "Chimneys"],
    approach:
      "Bat situations are assessed carefully, including timing considerations tied to local wildlife regulations. Our technicians will walk you through what's involved before any work begins.",
    iconId: "bat",
    photoOverride: "/images/bat-detail.png",
    photoAlt: "A bat tucked into a gap in a damaged soffit",
    showGuaranteeLine: true,
  },
  {
    slug: "something-in-the-attic",
    category: "situation",
    name: "Something in the Attic",
    singular: "attic",
    seoTitle: "Animals in the Attic? Wildlife Removal in Toronto",
    heading: "Something in Your Attic? Wildlife Removal in Toronto",
    metaDescription:
      "Noises in your attic in Toronto? We remove the animal humanely, seal the way in and repair the damage. Lifetime guarantee on every entry point we seal.",
    summary: "Hearing movement overhead? You don't need to know what it is before you call.",
    intro:
      "Scratching, thumping, or scurrying overhead is one of the most common reasons people contact us — often before they've seen the animal at all. Attics are dark, insulated, and hard to reach, which makes them attractive to several different species. You don't need to identify the animal yourself.",
    commonSigns: [
      "Footsteps, thumping, or scratching overhead, especially at dawn or dusk",
      "Scurrying that moves across the ceiling in a fairly straight line",
      "A new smell in a bedroom or hallway below the attic",
      "Visible staining, a sagging spot, or damaged insulation",
    ],
    commonAreas: ["Attic floor and insulation", "Roofline and soffits", "Chimney chases", "Ductwork"],
    approach:
      "Our technicians identify the species from the signs present, confirm how it's getting in, and handle the removal — then let you know what they found and what, if anything, should happen next.",
    iconId: "attic",
    repair: {
      heading: "Attic cleanup, insulation and roof repair",
      paragraphs: [
        "Whatever was living in the attic usually leaves something behind: flattened or soiled insulation, droppings, nesting material, and an opening at the roofline where it came and went.",
        "Once the animal is out, we seal that opening and repair the damage around it, from the roof and soffits to the vents. Inside the attic, we clean out the droppings and nesting material and remove and replace insulation where it's needed.",
      ],
      linkLabel: "Attic and roof damage repair",
    },
  },
  {
    slug: "something-in-the-walls",
    category: "situation",
    name: "Something in the Walls",
    singular: "wall",
    seoTitle: "Animal in Your Walls? Wildlife Removal in Toronto",
    heading: "Something in Your Walls? Wildlife Removal in Toronto",
    metaDescription:
      "Scratching inside a wall in Toronto? We find how it got in, remove it humanely and repair the damage. Lifetime guarantee on every entry point we seal.",
    summary: "Movement or scratching inside a wall cavity, most active early morning or after dark.",
    intro:
      "Hearing scratching or movement inside a wall? Your technician will check for wildlife activity and explain what needs to be done.",
    commonSigns: [
      "Scratching or movement inside a wall, often low or mid-height",
      "Noise concentrated to one wall or corner of a room",
      "Activity most noticeable early morning or after dark",
      "A faint odor developing near a specific wall over time",
    ],
    commonAreas: ["Interior wall cavities", "Areas near utility penetrations", "Foundation-level gaps", "Behind cabinetry"],
    approach:
      "Wall situations start with a careful exterior inspection to find the likely entry point, since accessing a wall cavity directly is a last resort, not a first step.",
    iconId: "wall",
    repair: {
      heading: "Sealing the way in and repairing the wall",
      paragraphs: [
        "An animal inside a wall almost always got there from outside, through a gap at the roofline, a soffit, a vent or the siding. Once it's out, we seal that spot and repair the damage on the outside.",
        "If a wall or ceiling inside was damaged, or had to be opened to reach the animal, we repair the drywall too, so there's no separate contractor to call.",
      ],
      linkLabel: "Wildlife damage repair",
    },
  },
];

export function getWildlifeBySlug(slug: string): WildlifeEntry | undefined {
  return WILDLIFE.find((w) => w.slug === slug);
}

export function getSpeciesEntries(): WildlifeEntry[] {
  return WILDLIFE.filter((w) => w.category === "species");
}

export function getSituationEntries(): WildlifeEntry[] {
  return WILDLIFE.filter((w) => w.category === "situation");
}
