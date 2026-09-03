import type { WildlifeEntry } from "@/lib/types";

/**
 * Wildlife service architecture: species pages and "situation" pages
 * (wherever the animal is, before it's identified) share one template at
 * app/wildlife/[slug]/page.tsx. This keeps SEO coverage broad — matching
 * both "raccoon in attic" and "noise in my attic" searches — without
 * maintaining two separate page systems.
 *
 * Entry-point inspection, exclusion, and preventative sealing live on
 * /property-care as supporting information, not as their own funnel here —
 * see section 27/28 of the brief. Do not promote them into this list.
 */
export const WILDLIFE: WildlifeEntry[] = [
  {
    slug: "raccoons",
    category: "species",
    name: "Raccoons",
    singular: "Raccoon",
    summary: "Strong, dexterous, and drawn to attics, chimneys, and sheds — especially with young in spring.",
    intro:
      "Raccoons are among the most common calls we get, particularly in spring when a female looks for a warm, hidden place to raise her young. They're strong enough to tear rooflines and soffits and clever enough to find the weakest point in a house. Once one settles into an attic, it rarely leaves on its own.",
    commonSigns: [
      "Heavy footsteps or thumping overhead, especially at dusk and dawn",
      "Torn or lifted roofline, fascia, or soffit",
      "Flattened insulation or a matted nest area in the attic",
      "A strong, persistent odor from one area of the attic",
    ],
    commonAreas: ["Attics", "Chimneys", "Soffits", "Sheds and decks"],
    approach:
      "Raccoon removal is handled with particular care in spring and early summer, when young are often present. Our technicians confirm whether a litter is involved before deciding on next steps, since separating a mother from her young unnecessarily is neither humane nor effective — she'll simply try to get back in.",
    iconId: "raccoon",
    photoOverride: "/images/raccoon-detail.png",
  },
  {
    slug: "squirrels",
    category: "species",
    name: "Squirrels",
    singular: "Squirrel",
    summary: "Persistent chewers that exploit small gaps in soffits, fascia, and roof edges.",
    intro:
      "Squirrels don't need much of an opening — a gap the size of a golf ball is enough. Once inside a soffit or attic, they'll often widen the entry point over time and may return to the same spot even after a first attempt to seal it. Activity is usually most noticeable in early morning and late afternoon.",
    commonSigns: [
      "Scratching or scampering along walls or ceilings, mainly during the day",
      "Gnaw marks on fascia boards, soffits, or wiring",
      "A visible entry hole at a roofline or soffit corner",
      "Acorns, twigs, or nesting material collecting in the attic",
    ],
    commonAreas: ["Attics", "Soffits and fascia", "Roof edges", "Wall cavities"],
    approach:
      "Because squirrels are agile and will often re-enter through a partially repaired opening, our technicians confirm the animal is out — and identify every active entry point — before any exclusion work is discussed.",
    iconId: "squirrel",
    photoOverride: "/images/squirrel-detail.png",
  },
  {
    slug: "birds",
    category: "species",
    name: "Birds",
    singular: "Bird",
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
      "Nesting birds are handled with attention to timing and any applicable protections for active nests. Our technicians will explain what they find and the appropriate next step for the specific situation.",
    iconId: "bird",
  },
  {
    slug: "bats",
    category: "species",
    name: "Bats",
    singular: "Bat",
    summary: "Roosting in attics and soffit gaps, requiring a careful, timing-sensitive approach.",
    intro:
      "Bats typically roost in attics, soffit gaps, or behind loose fascia, entering through openings as small as a fingertip. Because bats are slow to reproduce and protected in many jurisdictions during parts of the year, this is one of the more specialized situations we handle, and timing matters.",
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
  },
  {
    slug: "something-in-the-attic",
    category: "situation",
    name: "Something in the Attic",
    singular: "attic",
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
  },
  {
    slug: "something-in-the-walls",
    category: "situation",
    name: "Something in the Walls",
    singular: "wall",
    summary: "Movement or scratching inside a wall cavity, most active early morning or after dark.",
    intro:
      "Noise inside a wall is unsettling, and it's genuinely harder to diagnose than an attic — wall cavities are narrow and connect in ways that aren't obvious from inside the house. It's usually a smaller animal that's found its way in through an exterior gap near a utility line, vent, or foundation.",
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
