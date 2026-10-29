import type { SituationContent } from "@/lib/data/situations";
import type { WildlifeEntry } from "@/lib/types";

/**
 * /wildlife/attic-cleanup (GNW Website 18, Oct 29 2026).
 *
 * Built for the ads chat's "Attic Cleanup & Disinfection" ad group (page 2 of
 * claude/keyword-page-map-final-2026-10-28.md in the GNWW Project): main
 * phrase "attic cleanup services" (Google's pool with "attic cleaning
 * services": about 110 searches a month, Keyword Planner, Canada), plus
 * attic restoration, attic cleaning cost, attic decontamination, wildlife
 * cleanup service and animal feces cleanup.
 * - The only page that carries cleanup and insulation content (owner, Oct 28 2026, 11:31 PM).
 * - Soiled insulation removed and replaced, for organic search (owner, Oct 28
 *   2026, 11:28 PM; "Yes, we do", 11:17 PM). Insulation search volumes are not
 *   checked yet (Semrush out of API units, Oct 29), so no heading is built on an insulation phrase.
 * - Written fresh, without reading any other page's copy (owner, Oct 28 2026, 11:45 PM).
 * - No lifetime guarantee: a cleanup seals nothing (owner, Oct 22 2026).
 * - "Clean" and "disinfected", never "safe" (owner, Oct 29 2026, 10:25 AM).
 *   Never say disinfecting kills roundworm eggs: CDC, "Most chemicals do not
 *   kill roundworm eggs". No "latrine", no odour or smell-removal promises.
 * - Vermiculite: the crew stops and tells the homeowner (owner, Oct 29 2026,
 *   10:29 AM); Health Canada, "Health risks of asbestos".
 */
export const ATTIC_CLEANUP_ENTRY: WildlifeEntry = {
  slug: "attic-cleanup",
  category: "situation",
  name: "Attic Cleanup",
  singular: "Attic cleanup",
  seoTitle: "Attic Cleanup Services in Toronto",
  heading: "Droppings in Your Attic? Attic Cleanup Services in Toronto",
  metaDescription:
    "Attic cleanup services in Toronto and the GTA after raccoons, squirrels, bats or birds: droppings out, soiled insulation replaced, the attic disinfected.",
  summary:
    "Droppings, nesting and soiled insulation taken out of the attic, new insulation put in and the attic disinfected.",
  intro:
    "Attic cleanup across Toronto and the GTA after raccoons, squirrels, bats or birds: droppings and nesting out, soiled insulation replaced, the surfaces disinfected.",
  commonSigns: [
    "Droppings on the insulation, along the rafters or near the hatch",
    "Insulation that's flattened into paths or pulled into nests",
    "Leaves, twigs and shredded material bunched up near the eaves",
    "Nesting material packed around a roof vent or the chimney",
    "Stains spreading across a ceiling below the attic",
  ],
  commonAreas: ["Along the eaves", "Around roof vents", "Beside the chimney", "Under the roof peak", "Near the attic hatch"],
  approach:
    "We take out what the animals left, replace the insulation they spoiled and disinfect the surfaces underneath.",
  iconId: "attic",
  unlisted: true,
  serviceType: "Attic cleanup and insulation replacement",
};

export const ATTIC_CLEANUP_CONTENT: SituationContent = {
  slug: "attic-cleanup",
  subhead:
    "Raccoons, squirrels, bats and birds leave droppings, nesting and soiled insulation behind. Our attic cleanup takes it all out, puts new insulation in and leaves the attic clean and disinfected, across Toronto and the GTA.",
  trustRow: "no-guarantee",
  signs: {
    heading: "When an attic needs cleaning",
    intro:
      "Sometimes the animals are long gone and the attic still tells the story. These are the signs we look for when we climb up.",
  },
  sections: [
    {
      heading: "What our attic cleanup includes",
      paragraphs: [
        "Our wildlife cleanup service puts an attic back in order once raccoons, squirrels, bats or birds have moved out. It follows a clear order: what the animals left comes out, the insulation they spoiled is replaced, and the surfaces underneath are disinfected.",
        "In practice, that means droppings and nesting material bagged and carried out of the house, insulation that's soiled or flattened taken out the same way, the bare surfaces disinfected, and new insulation put in where the old came out.",
      ],
    },
    {
      heading: "Removing the droppings, not just spraying them",
      paragraphs: [
        "Animal feces cleanup is mostly a matter of removal. Raccoon droppings can carry roundworm eggs, and public-health sources say most household disinfectants don't kill them. A spray over the top doesn't deal with them; taking the droppings out does.",
        "So the droppings, and the insulation they've soaked into, leave the attic first. The disinfecting comes after, on the wood and other surfaces left behind.",
        "Bats and birds leave droppings of their own. Where a lot has built up, health agencies advise leaving the cleanup to professionals, and it's part of the same job.",
      ],
    },
    {
      heading: "Soiled insulation, removed and replaced",
      paragraphs: [
        "Insulation is where most of the mess ends up. Animals tramp it into paths, pull it into nests and soil it, and once that happens it no longer does much to hold the heat in.",
        "We take out the insulation that's spoiled and put new insulation in its place, so the attic goes back to keeping your home comfortable through the winter and the summer.",
      ],
    },
    {
      heading: "If your attic has vermiculite",
      paragraphs: [
        "Some older homes have vermiculite insulation: loose, pebbly granules, usually grey-brown or gold. Health Canada advises that it may contain asbestos and is best left undisturbed.",
        "If we find it, we stop there and tell you. Removing vermiculite is a job for a qualified asbestos removal specialist.",
      ],
    },
    {
      heading: "The animals go first, then the cleanup",
      paragraphs: [
        "A cleanup only lasts if nothing is still getting in. If something is still living up there, the first step is getting it out and closing the way in; our page on [something in the attic](/wildlife/something-in-the-attic) explains how that works. Once the attic is empty and sealed, the cleanup can start.",
      ],
    },
    {
      heading: "Booking an attic cleanup",
      paragraphs: [
        "We answer calls 24/7 and can usually come out the same day to look at the attic. Visits between 9 PM and 7 AM count as emergency service; we'll give you the details and prices on the phone.",
        "We explain the price before any work starts. Photos of the attic help us prepare, and our [contact form](/contact) takes up to five.",
      ],
    },
  ],
  process: {
    heading: "How an attic cleanup goes",
    intro: "Every attic is different, so the work starts with a look at what's up there and how far it has spread.",
    steps: [
      "Droppings and nesting material come out, bagged and carried out of the house.",
      "Insulation that's soiled or flattened comes out the same way.",
      "The surfaces underneath are disinfected.",
      "New insulation goes in where the old came out.",
    ],
    outro: "If the insulation turns out to be vermiculite, the work stops at the first step and we explain why.",
  },
  visitSteps: [
    { term: "Up in the attic", detail: "We look at the droppings, the nesting and the insulation, and check what kind of insulation you have." },
    { term: "Before we start", detail: "You hear the price and what it covers before any work begins." },
    { term: "The cleanup", detail: "The attic is cleared, disinfected and insulated again." },
  ],
  faqHeading: "Attic cleanup: common questions",
  faqs: [
    {
      question: "How much does attic cleaning cost?",
      answer:
        "It depends on the attic: its size, how long the animals were there, how much of the insulation is soiled, what type of insulation it is and how easy the attic is to get into. We look first and explain the price before any work starts.",
    },
    {
      question: "Do you replace the insulation?",
      answer: "Yes. Insulation that's soiled or flattened is taken out and new insulation goes in, as part of the cleanup.",
    },
    {
      question: "Does disinfecting kill raccoon roundworm eggs?",
      answer:
        "No, and we won't claim it does. The US Centers for Disease Control and Prevention says most chemicals don't kill roundworm eggs, which is why the droppings and the insulation they've soiled come out of the attic. Disinfecting is for the surfaces left behind.",
    },
    {
      question: "Is attic cleanup the same as attic restoration?",
      answer:
        "For our purposes, yes. Attic restoration, attic decontamination, attic cleaning and attic cleanup are different names for the same work: taking out what the animals left, replacing the insulation and disinfecting what's underneath.",
    },
    {
      question: "Do you do attic cleanups outside Toronto?",
      answer: "Yes. Our attic cleanups cover the whole GTA, from Toronto out through York, Durham and Peel.",
    },
  ],
};
