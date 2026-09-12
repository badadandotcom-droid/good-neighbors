import type { WildlifeEntry } from "@/lib/types";

/**
 * Wildlife service architecture: species pages and "situation" pages
 * (wherever the animal is, before it's identified) share one template at
 * app/wildlife/[slug]/page.tsx. This keeps SEO coverage broad — matching
 * both "raccoon in attic" and "noise in my attic" searches — without
 * maintaining two separate page systems.
 *
 * Entry-point work is mentioned only as part of solving the current animal
 * problem (see each entry's `approach`), never as a separate prevention
 * product or its own page. Do not promote it into this list.
 */
export const WILDLIFE: WildlifeEntry[] = [
  {
    slug: "raccoons",
    category: "species",
    name: "Raccoons",
    singular: "Raccoon",
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
  },
  {
    slug: "squirrels",
    category: "species",
    name: "Squirrels",
    singular: "Squirrel",
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
      "We identify where the squirrels are getting in. Once we've confirmed they're out, we secure the entry points to help prevent their return.",
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
      "We identify the birds and check for eggs or young before work begins. If the nest is protected, we'll explain what can be done and when.",
    iconId: "bird",
    photoOverride: "/images/bird-detail.png",
  },
  {
    slug: "bats",
    category: "species",
    name: "Bats",
    singular: "Bat",
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
