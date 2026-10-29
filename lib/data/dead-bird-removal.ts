import type { SituationContent } from "@/lib/data/situations";
import type { WildlifeEntry } from "@/lib/types";

/**
 * /wildlife/dead-bird-removal (GNW Website 18, Oct 29 2026).
 *
 * Built for the ads chat's "Dead Bird Removal" ad group (page 3 of
 * claude/keyword-page-map-final-2026-10-28.md in the GNWW Project): main
 * phrase "dead bird removal"; also near me, in a vent (dryer, bathroom,
 * exhaust), in a chimney, in a wall, in the house, on a balcony, dead pigeon
 * removal, dead pigeon on a balcony, dead bird clean up (each 0 to 10 a
 * month, Keyword Planner, Canada).
 * - Written fresh, without reading any other page's copy, the dead-animal
 *   page included (owner, Oct 28 2026, 11:42 and 11:45 PM).
 * - No lifetime guarantee: removal seals nothing (owner, Oct 22 2026), so the word stays off the page.
 * - The do-it-yourself section is the owner's call (Oct 29 2026, 10:29 AM).
 * - On your property, not the street: street and road pickups are the City's.
 * - Law and guidance, checked Oct 29 2026: Migratory Birds Regulations, 2022,
 *   s. 11(1) (a bird found dead may be held to dispose of it, no permit);
 *   s. 5 (nests with a live bird or viable egg stay); ECCC's protected list
 *   (starlings and house sparrows not covered; pigeons per the owner's Oct 28
 *   law check); ECCC chimney swift guidance; City of Toronto (small dead birds
 *   bagged into regular garbage; 311); Toronto Public Health and ontario.ca
 *   avian influenza pages (gloves or a doubled bag, wash hands, report to 311
 *   or the Canadian Wildlife Health Cooperative); Toronto Fire Services and the
 *   US Fire Administration on restricted dryer exhausts.
 * - No odour or smell-removal promises (owner, Oct 21 2026: no odour work).
 */
export const DEAD_BIRD_REMOVAL_ENTRY: WildlifeEntry = {
  slug: "dead-bird-removal",
  category: "situation",
  name: "Dead Bird Removal",
  singular: "Bird",
  seoTitle: "Dead Bird Removal in Toronto",
  heading: "Dead Bird in a Vent, Chimney or Wall? Removal in Toronto",
  metaDescription:
    "Dead bird removal in Toronto and the GTA: vents, chimneys, walls and condo balconies, dead pigeons included. Nest and droppings cleared. Calls answered 24/7.",
  summary:
    "Dead birds taken out of vents, chimneys, walls and balconies, with the nest and droppings cleared and the spot cleaned and disinfected.",
  intro:
    "Dead bird removal across Toronto and the GTA: vents, chimneys, walls, inside the house and on balconies, dead pigeons included, with the nest and droppings cleared.",
  commonSigns: [
    "Chirping or scratching in a vent that suddenly went quiet",
    "A smell near a vent cover, the fireplace or one spot on a wall",
    "Flies gathering at a vent or around the fireplace",
    "A dryer that takes longer than it used to",
    "Feathers or twigs caught in a vent flap",
    "A bird on the balcony that hasn't moved",
  ],
  commonAreas: ["Dryer vents", "Bathroom fan vents", "Kitchen exhaust vents", "Chimneys", "Wall cavities", "Condo balconies"],
  approach:
    "We find the bird, take it out with the nest and droppings, clean and disinfect the spot, and can cover the opening it came through.",
  iconId: "bird",
  unlisted: true,
  serviceType: "Dead bird removal",
};

export const DEAD_BIRD_REMOVAL_CONTENT: SituationContent = {
  slug: "dead-bird-removal",
  subhead:
    "A dead bird in a vent, a chimney or a wall won't sort itself out. We find it, take it out with the nest and droppings, and clean and disinfect the spot, at homes and on condo balconies across Toronto and the GTA.",
  trustRow: "no-guarantee",
  signs: {
    heading: "Signs of a dead bird in a vent, wall or chimney",
    intro: "You rarely see the bird. More often, something changes around one vent, the fireplace or one stretch of wall.",
  },
  sections: [
    {
      heading: "Where dead birds turn up",
      paragraphs: [
        "Starlings and house sparrows nest in holes in buildings, vents included. A dryer vent, a bathroom fan vent or a kitchen exhaust is a dry, sheltered spot right against the house, and now and then a bird slips past the flap, gets stuck in the duct and doesn't get out.",
        "Chimneys catch birds from the top. Others end up in a wall cavity after finding a gap at the roofline, or inside the house after coming down a chimney or through an open vent.",
      ],
    },
    {
      heading: "Dead bird in a vent",
      paragraphs: [
        "A bird in a dryer, bathroom or exhaust vent usually comes with a nest, and both need to come out. A blocked dryer vent matters for more than the smell: fire services warn against a restricted dryer exhaust, and nests are one of the things that restrict it.",
        "We take out the bird and the nest, clean and disinfect the vent opening, and can fit a cover or screen so the next bird stays out.",
      ],
    },
    {
      heading: "Dead bird in a chimney",
      paragraphs: [
        "A bird that drops into a chimney often can't climb back out of the flue. We take it out, clear any nest and droppings, and can cap or screen the chimney so it doesn't happen again.",
        "One exception: chimney swifts, a threatened species, nest and roost in chimneys from spring into early fall. A chimney they're using is left alone until they've gone, and capping a chimney they've used follows the federal rules, which we'll explain before anything is done.",
      ],
    },
    {
      heading: "Dead bird in a wall or in the house",
      paragraphs: [
        "When a bird falls into a wall cavity, the smell or the flies usually lead us to the spot. Reaching it can mean opening the drywall, and repairing the drywall afterwards is part of the job.",
        "A bird found inside the house got in somewhere, usually through a chimney or a vent. We take it out and show you where it came in, so that spot can be covered.",
      ],
    },
    {
      heading: "Dead pigeons on balconies",
      paragraphs: [
        "A dead bird on a balcony is usually a pigeon. Dead pigeon removal is part of what we do on condo and apartment balconies across Toronto, at any height: the pigeon comes out with any nest and droppings, and the balcony floor is cleaned and disinfected.",
        "If pigeons keep coming back, our page on [balcony pigeon removal and netting](/wildlife/balcony-pigeons) explains how we keep them off.",
      ],
    },
    {
      heading: "On your property, not the street",
      paragraphs: [
        "We work on your property: inside the house, in vents and chimneys, on roofs and balconies, in the yard. A dead animal on a road, sidewalk or other public property is a matter for the City; in Toronto, that's 311.",
        "For a dead raccoon, squirrel or other animal, see our page on [dead animal removal](/wildlife/dead-animal-removal).",
      ],
    },
    {
      heading: "Same day, around the clock",
      paragraphs: [
        "We answer the phone around the clock, and a dead bird in a vent or on a balcony is usually something we can take care of the same day. Visits between 9 PM and 7 AM are handled as emergency service; call us for the details and prices.",
        "We treat your home with care and leave the spot clean. The price is explained before we start, and a photo of the vent or the balcony helps: you can attach up to five on our [contact form](/contact).",
      ],
    },
    {
      heading: "Handling a dead bird yourself",
      paragraphs: [
        "If the bird is out in the open, on the lawn, a deck or a walkway, and you'd rather deal with it yourself, health agencies ask that you never touch a dead wild bird with bare hands. Wear gloves, or use a plastic bag doubled over your hand, pick the bird up and seal it in a second bag.",
        "In Toronto, the City asks that small dead birds go out with your regular garbage, safely bagged. Wash your hands afterwards and keep pets away from the spot. Elsewhere in the GTA, check your own city's rules.",
        "Because of bird flu, Toronto Public Health also asks people to report a sick or dead wild bird to 311, and the Canadian Wildlife Health Cooperative takes reports from across Ontario. If the bird is in a vent, a chimney, a wall or anywhere hard to reach, that's when to call us.",
      ],
    },
  ],
  process: {
    heading: "How we remove a dead bird",
    intro:
      "Most of the work is finding exactly where the bird is. The removal and the clean-up after it are careful, tidy work.",
    steps: [
      "The bird comes out, bagged, with its nest and droppings, unless the nest belongs to a protected bird and still holds eggs or young.",
      "The spot is cleaned and disinfected.",
      "If the bird came in through a vent or the chimney, a cover, screen or cap can go on so the next one stays out.",
    ],
    outro: "We work in houses and on condo and apartment balconies, with the same care in both.",
  },
  visitSteps: [
    { term: "Finding it", detail: "We trace the smell, the flies or the last sounds back to one vent, chimney or stretch of wall." },
    { term: "The price", detail: "You hear what it will take and what it costs before we start." },
    { term: "The way in", detail: "We show you how the bird got in and whether a cover, screen or cap would stop the next one." },
  ],
  faqHeading: "Dead bird removal: common questions",
  faqs: [
    {
      question: "Is it legal to remove a dead bird?",
      answer:
        "Yes. The federal Migratory Birds Regulations let a person pick up a bird that was found dead in order to dispose of it, with no permit. Starlings, house sparrows and pigeons aren't covered by those rules at all. What the rules do protect is a protected bird's nest while it still holds eggs or young, and that stays where it is until they've gone.",
    },
    {
      question: "Will the City of Toronto pick up a dead bird?",
      answer:
        "Not a small one. The City asks that small dead birds be bagged and put out with regular garbage, and it handles larger dead animals on public property through 311. A bird inside your home, in a vent or chimney, or on your balcony is where we come in.",
    },
    {
      question: "Should I use the dryer if there's a bird in the vent?",
      answer:
        "We'd hold off until the vent is clear. With the vent blocked, the dryer can't push its hot, damp air outside, and fire services treat a restricted dryer exhaust as a fire risk.",
    },
    {
      question: "How much does dead bird removal cost?",
      answer:
        "It depends on where the bird is. One on an open balcony is a short job; one deep in a vent or behind drywall takes more. We explain the price before we start.",
    },
    {
      question: "Do you cover my area?",
      answer:
        "If you're in Toronto, York, Durham or Peel, yes. Our dead bird removal covers the whole GTA, so there's a team near you.",
    },
  ],
};
