import type { FaqItem } from "@/lib/types";
import { DEFAULT_SAME_DAY_SERVICE, GUARANTEE } from "@/lib/config/site";

/**
 * ============================================================================
 * SITUATION PAGES — "something in the attic" and "something in the walls"
 * ============================================================================
 * These two pages are the landing pages for the most valuable searches
 * ("squirrel in attic", "raccoon in attic", "squirrel in wall", "noises in
 * attic at night"). They are written to be the most useful page a Toronto
 * homeowner hearing noises can find, with the words people search for in the
 * headings and copy, and they're read on phones at 2 AM: short paragraphs,
 * plain and calm.
 *
 * Rules (owner, Oct 2026): general facts about the animals and about Toronto
 * homes are wanted; everything about the business must already be true on
 * the live site. How we remove animals uses only what the site already says
 * (humane removal, usually from outside, young checked for first, seal,
 * repair). No tools or techniques the site doesn't describe, no prices, no
 * trust claims. Copy may carry inline links as [label](/path).
 */

export interface SoundRow {
  sound: string;
  when: string;
  likely: string;
  /** Page for that animal; omitted for the things we don't handle. */
  href?: string;
  note?: string;
}

export interface SituationSection {
  heading: string;
  paragraphs: string[];
}

/**
 * The long-form page content. The attic and walls pages (below) and the
 * raccoon and squirrel pages (lib/data/species-pages.ts) share this shape
 * and the SituationPage template.
 */
export interface SituationContent {
  slug: string;
  /** One or two sentences under the H1. */
  subhead: string;
  /** A line from the live page kept word for word, shown after the subhead. */
  keepLine?: string;
  /** The sound guide table (attic and walls pages). */
  soundGuide?: { heading: string; intro: string; rows: SoundRow[] };
  /**
   * Species pages: a band after the hero showing the entry's own
   * `commonSigns` and `commonAreas` (the live page's lists, kept word for
   * word) under this heading, with the entry's `relatedNote` beneath.
   */
  signs?: { heading: string; intro: string };
  /** Show the guarantee, insurance and 24/7 lines under the hero buttons, as the homepage and city pages do. */
  trustRow?: boolean;
  sections: SituationSection[];
  /** "How we get animals out…": the live site's three-step wording plus the plain-words list. */
  process?: { heading: string; intro: string; steps: string[]; outro: string };
  faqHeading: string;
  faqs: FaqItem[];
}

const SAME_DAY = DEFAULT_SAME_DAY_SERVICE.qualificationMessage;

export const SITUATIONS: SituationContent[] = [
  {
    slug: "something-in-the-attic",
    subhead:
      "Scratching, thumping or running overhead, by day or at night? It's usually a squirrel or a raccoon, and it's usually solved from outside your home.",
    keepLine: "You don't need to identify the animal yourself.",
    soundGuide: {
      heading: "What the noise in your attic is telling you",
      intro: "The time of day is the biggest clue. Match what you're hearing to the list below; our technician confirms it on site.",
      rows: [
        {
          sound: "Light, fast scampering, rolling sounds, gnawing",
          when: "Daytime, loudest around sunrise and before dusk",
          likely: "Squirrel",
          href: "/wildlife/squirrels",
          note: "Grey squirrels, including the black ones common in Toronto, are active by day and asleep at night.",
        },
        {
          sound: "Heavy, slow footsteps, thumping, “someone walking around up there”, growling or chittering",
          when: "At night",
          likely: "Raccoon",
          href: "/wildlife/raccoons",
          note: "Bird-like chirping from the attic in spring is raccoon babies.",
        },
        {
          sound: "Fluttering and high squeaking near the roofline or chimney",
          when: "Dusk",
          likely: "Bats",
          href: "/wildlife/bats",
        },
        {
          sound: "Cooing, flapping or chirping at a roof vent or soffit",
          when: "Daytime",
          likely: "Birds nesting in a vent",
          href: "/wildlife/birds",
        },
        {
          sound: "Light, constant skittering or gnawing inside the walls, tiny droppings",
          when: "At night",
          likely: "Mice or rats",
          note: "That is a pest-control job, and not something we do.",
        },
      ],
    },
    sections: [
      {
        heading: "Squirrel in the attic or roof",
        paragraphs: [
          "A squirrel in the attic is the most common daytime noise in a Toronto home. Eastern grey squirrels, the black ones included, have two litters a year, one in late winter to early spring and one in late summer, and a warm attic is a favourite nursery. A mother will move her babies between dens, so the noise can stop for a few days and start again.",
          "They get in by chewing. Wood fascia, aluminum soffit and plastic roof vents all give way to squirrel teeth, and the usual entry points are the roof edge, gable vents, roof vents and the junction where a roof meets a wall. Once inside, they nest in the insulation, and they sometimes chew wiring, which is the main reason not to wait. Our [squirrel removal](/wildlife/squirrels) page covers the signs outside the house.",
        ],
      },
      {
        heading: "Raccoon in the attic or roof",
        paragraphs: [
          "Toronto is known for one of the densest urban raccoon populations anywhere, so a raccoon in the attic is a normal thing to happen to a normal house. The sound is heavy and slow: footsteps, thumps, sometimes growling or chittering, almost always after dark. Raccoons climb downspouts and trees, pull roof vents right off, and push through soffit where the roof meets the eaves.",
          "They den in attics mostly from late winter to early summer to have their kits. The babies are born in spring, mostly April and May, and stay with their mother into late summer. While the family is there, it uses one corner of the attic as a latrine, its weight flattens the insulation, and the droppings can carry raccoon roundworm, so don't handle them and don't go up to look. See [raccoon removal](/wildlife/raccoons) for the signs outside the house.",
        ],
      },
      {
        heading: "Why you shouldn't seal the hole yourself",
        paragraphs: [
          "It's tempting to find the hole and close it. Please don't, not yet. If the animal is inside when the opening is closed, it chews a new way out, sometimes into the house, or it dies in the attic, and a dead animal in the insulation means a smell and flies for weeks.",
          "In spring it's worse. If babies are inside and the mother is sealed out, she tears at the roof to get back to them, and the babies die. Hearing one animal doesn't mean there is one animal.",
          "The fix is an inspection of the whole roofline, because animals often get in far from where you hear them, and a removal done from outside with the babies accounted for first. We check for babies before removal.",
        ],
      },
    ],
    process: {
      heading: "How we get animals out of an attic",
      intro:
        "Usually, we can solve the wildlife problem entirely from outside without needing to enter your home. Here is what a visit looks like.",
      steps: [
        "A full roofline inspection, to find every entry point and not just the one nearest the noise.",
        "We identify the species and check for babies.",
        "Humane removal from outside, with mother and young kept together.",
        `We seal the entry points. ${GUARANTEE.short}`,
        "Cleanup, insulation and roof repair, matched to your home's existing materials and colours.",
      ],
      outro: `${SAME_DAY} Calls are answered 24 hours a day, 7 days a week.`,
    },
    faqHeading: "Questions about noises in the attic",
    faqs: [
      {
        question: "Is it a squirrel or a raccoon?",
        answer:
          "Go by the clock. Squirrels are active in daylight, busiest around sunrise and in the late afternoon, and quiet at night. Raccoons are active at night and sound heavier and slower. Chirping from the attic in spring is usually raccoon babies. Either way, you don't need to be sure before you call.",
      },
      {
        question: "Will the animal die in my attic?",
        answer:
          "Not when the removal is done properly. Our removal is done so the animal leaves alive. Animals mostly die in attics when someone seals the hole with the animal, or its babies, still inside.",
      },
      {
        question: "Can I wait a few weeks?",
        answer:
          "We wouldn't. Squirrels keep chewing, raccoons keep using the same corner as a toilet, and the insulation gets flattened and soiled. In spring, waiting usually means babies, which makes the removal more involved. The longer the animal stays, the more there is to repair.",
      },
      {
        question: "How much does it cost to get a squirrel or raccoon out of the attic?",
        answer: "Every attic is different, and we explain the price before any work begins.",
      },
      {
        question: "Do you clean up and replace the insulation?",
        answer:
          "Yes. Once the animal is out, we clean out the droppings and nesting material and remove and replace insulation where it's needed, and we repair the roof, soffit or vent the animal used.",
      },
      {
        question: "Will it come back?",
        answer: `Not through the opening we sealed. ${GUARANTEE.full}`,
      },
      {
        question: "Do you handle mice or rats?",
        answer:
          "No. Mice and rats are a pest-control job. If the noise is a light, constant skittering with tiny droppings, a pest-control company is the right call.",
      },
    ],
  },
  {
    slug: "something-in-the-walls",
    subhead:
      "Scratching inside a wall, a ceiling or a vent? Here's what's usually behind it, and why opening the wall is the last resort, not the first step.",
    soundGuide: {
      heading: "What's making the noise in your wall",
      intro: "Where the sound is, and whether it moves, says more than how loud it is.",
      rows: [
        {
          sound: "Frantic scratching in one spot, at one height, going on for hours",
          when: "Any time, often non-stop",
          likely: "An animal that fell down the wall cavity from the attic and can't climb back up, usually a young squirrel",
          href: "/wildlife/squirrels",
          note: "Urgent: it has days, not weeks.",
        },
        {
          sound: "Scratching or footsteps that move along a wall or across a ceiling",
          when: "Mostly at night",
          likely: "A raccoon or squirrel moving between the attic and the rest of the house, between floors or above a ceiling",
          href: "/wildlife/raccoons",
        },
        {
          sound: "Chirping, flapping or rustling at a bathroom, kitchen or dryer vent; cheeping in spring",
          when: "Daytime",
          likely: "Birds nesting in the vent duct",
          href: "/wildlife/birds",
        },
        {
          sound: "Buzzing inside a wall",
          when: "Summer",
          likely: "Insects, not something we handle",
        },
        {
          sound: "Light, constant skittering and gnawing",
          when: "At night",
          likely: "Mice or rats: a pest-control job, not us",
        },
      ],
    },
    sections: [
      {
        heading: "Squirrel in the wall",
        paragraphs: [
          "A squirrel in the wall usually got there from the attic: along the top of the wall framing and down into a cavity, straight down from a gap at the soffit, or in from the top of a chimney. Inside a finished wall there is nothing to grip, so a squirrel that goes down often can't climb back out.",
          "That is why one spot, one height and hours of scratching is urgent: a stuck squirrel has days, not weeks. While you wait for us, keep pets away from the wall, don't bang on it (that panics the animal), and note which wall and roughly how high up. That helps our technician find it quickly. More on [squirrel removal](/wildlife/squirrels).",
        ],
      },
      {
        heading: "Raccoon in the wall or ceiling",
        paragraphs: [
          "Raccoons are too big for most wall cavities, but they fit between floors, inside chimney chases and above dropped ceilings, and the sound is hard to mistake: heavy, slow, mostly at night. In spring a mother picks exactly these quiet, enclosed spots for her kits.",
          "The damage adds up: torn drywall, soiled insulation, one spot used as a latrine. See [raccoon removal](/wildlife/raccoons) for the signs outside.",
        ],
      },
      {
        heading: "Birds in vents",
        paragraphs: [
          "Starlings and sparrows nest in uncovered dryer, bathroom and kitchen vents; the first sign is chirping or flapping behind the wall, loudest in spring. Nesting material in a dryer duct is a fire hazard, so don't ignore it.",
          "We check for eggs and young first. Once the birds are out, the vent gets a proper cover so it can't happen again. See [bird removal](/wildlife/birds).",
        ],
      },
      {
        heading: "Why we don't cut the wall open first",
        paragraphs: [
          "An animal inside a wall almost always got there from outside, through a gap at the roofline, a soffit, a vent or the siding. So wall situations start with a careful exterior inspection to find the likely entry point, since accessing a wall cavity directly is a last resort, not a first step.",
          "Most wall jobs are solved from outside: find the entry, get the animal out, seal the way in. Opening a wall is only for an animal that is stuck and can't get out. If that's needed, we explain it before any work begins and repair the drywall afterwards.",
        ],
      },
      {
        heading: "What happens if you wait",
        paragraphs: [
          "A stuck animal dies in the wall. Then comes a smell for weeks, flies, and a wall that has to be opened anyway, in a spot you didn't choose.",
          "An animal that isn't stuck keeps chewing: squirrels chew wiring, raccoons tear through drywall and insulation, birds pack more material into the vent. The sooner the entry point is sealed, the less there is to repair.",
        ],
      },
    ],
    faqHeading: "Questions about noises in the walls",
    faqs: [
      {
        question: "What animal is in my wall?",
        answer:
          "Usually a squirrel, a raccoon or birds. Frantic scratching in one spot is most often a young squirrel that fell in. Heavy, slow movement at night is a raccoon between floors or in a chimney chase. Chirping at a vent is birds. You don't need to know before you call.",
      },
      {
        question: "Can it get into the house?",
        answer:
          "Occasionally, through a vent, a gap around a pipe or an open ceiling. Keep interior doors closed, keep pets away, and call us.",
      },
      {
        question: "Will the scratching stop on its own?",
        answer:
          "If it's a stuck animal, the scratching stops when the animal dies, which is worse: the smell lasts weeks and the wall has to be opened anyway. If it's coming and going from the attic, it stops once the entry point is sealed.",
      },
      {
        question: "Do you repair the wall?",
        answer:
          "Yes. If a wall or ceiling was damaged, or had to be opened to reach the animal, we repair the drywall, along with the damage outside where the animal got in.",
      },
      {
        question: "How much does it cost?",
        answer: "It depends where the animal is and how it got in. We explain the price before any work begins.",
      },
      {
        question: "Will it come back?",
        answer: `Not through the opening we sealed. ${GUARANTEE.full}`,
      },
      {
        question: "Do you handle mice or rats?",
        answer:
          "No. Light, constant skittering and gnawing at night, with tiny droppings, is a pest-control job.",
      },
    ],
  },
];

export function getSituationContent(slug: string): SituationContent | undefined {
  return SITUATIONS.find((s) => s.slug === slug);
}
