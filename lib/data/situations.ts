import type { FaqItem } from "@/lib/types";
import { DEFAULT_SAME_DAY_SERVICE, GUARANTEE, INSURANCE } from "@/lib/config/site";

/**
 * ============================================================================
 * SITUATION PAGES — "something in the attic" and "something in the walls",
 * and (Oct 2026) raccoon feces removal
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
   * word; birds adds one pigeon line to each) under this heading, with the
   * entry's `relatedNote` beneath.
   */
  signs?: { heading: string; intro: string };
  /**
   * Show the guarantee, insurance and 24/7 lines under the hero buttons, as
   * the homepage and city pages do. "no-guarantee" shows the insurance and
   * 24/7 lines only (dead animal removal, Oct 2026: the job seals nothing).
   */
  trustRow?: boolean | "no-guarantee";
  sections: SituationSection[];
  /** "How we get animals out…": the live site's three-step wording plus the plain-words list. */
  process?: { heading: string; intro: string; steps: string[]; outro: string };
  /**
   * Replaces the template's three "On arrival / During the visit / Before we
   * leave" lines, which are written for a live animal and how it is getting
   * in (dead animal removal, Oct 2026).
   */
  visitSteps?: { term: string; detail: string }[];
  faqHeading: string;
  faqs: FaqItem[];
}

const SAME_DAY = DEFAULT_SAME_DAY_SERVICE.qualificationMessage;
const INSURANCE_FAQ = { question: INSURANCE.faqQuestion, answer: INSURANCE.faqAnswer };

export const SITUATIONS: SituationContent[] = [
  {
    slug: "something-in-the-attic",
    subhead:
      "Scratching, thumping or running overhead, by day or at night? It's usually a squirrel or a raccoon, and it's usually solved from outside your home.",
    trustRow: true,
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
    trustRow: true,
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
  {
    // Raccoon feces (droppings) cleanup. Facts checked online Oct 20
    // 2026 (sources in docs/reviews/2026-10-20-raccoon-feces-review.md): CDC,
    // California and King County public health, BCCDC, Cornell, University of
    // Illinois Extension. Household disinfectants do not kill roundworm eggs,
    // so the page says the area is disinfected (owner-confirmed) but never that
    // disinfecting kills the eggs. Decks and patios lead, attics are the other main
    // case (owner, Oct 20 2026, 8:10 PM note via the side chat). The word "latrine" is not used (owner's call, Oct 20).
    slug: "raccoon-feces-removal",
    subhead:
      "Raccoons keep pooping in the same spot, whether that's a corner of the deck or a corner of the attic. We clean it up, disinfect the area, get the raccoon out and seal the way back in.",
    // Owner, Oct 22 2026: no lifetime guarantee on this page (insurance and
    // 24/7 lines only; no guarantee sentence in the copy or the questions).
    trustRow: "no-guarantee",
    sections: [
      {
        heading: "What raccoon feces look like",
        paragraphs: [
          "Raccoon feces are dark and tube-shaped, a few inches long and about as wide as a nickel, and they often have seeds or bits of undigested food in them. They smell stronger than dog or cat droppings, and in an attic the smell often reaches the rooms below before anyone has seen the droppings themselves.",
          "What gives raccoon poop away is where it is and how much of it there is. A raccoon goes back to the same spot every time, so instead of a dropping here and there you find a heap in one place, getting bigger week by week. If you're not sure what you're looking at, take a photo from a safe distance; you can attach up to five when you [send us a request](/contact).",
        ],
      },
      {
        heading: "Raccoon poop on your deck or patio",
        paragraphs: [
          "If raccoons keep pooping on your deck, it is rarely by chance. A raccoon picks one spot, a corner of the deck, the top of the steps, the edge of the patio or even a cushion on the patio furniture, and comes back to it night after night, so the droppings build up there.",
          "The usual reason is that the raccoon is living close by, very often under the deck itself. A hole or loose soil at the edge of the deck, or a gap under the steps, is the sign to look for. While it lives there, a clean deck lasts until the next night, which is why cleaning alone rarely stops raccoons from pooping on a deck.",
          "How to get rid of raccoons under a deck comes down to two things: getting the raccoon out without leaving any young behind, and closing the space so it can't dig back in. So we clean up the droppings on the deck, the patio and the patio furniture and disinfect the area; if a raccoon is living under the deck, we check for young and get it out humanely; then the space under the deck is screened off with wire mesh fixed around the base and buried in the soil.",
          "If it turns out to be a skunk under the deck instead, [skunk removal](/wildlife/skunks) explains how that one is handled.",
        ],
      },
      {
        heading: "Why raccoons keep using the same spot",
        paragraphs: [
          "Raccoons don't leave droppings at random. They choose a toilet area and use it night after night, and other raccoons use the same spot, so the droppings pile up in one place. Outdoors that spot is often somewhere raised and flat, such as a fallen log, a woodpile or a deck; in a house, it is usually one corner of the attic.",
          "The pile keeps growing for as long as a raccoon is living there. Cleaning it up while the raccoon is still coming and going lasts one night, which is why the cleanup comes after the raccoon is out and is finished by sealing the way in.",
        ],
      },
      {
        heading: "Where raccoon droppings turn up in a house",
        paragraphs: [
          "Inside the house, raccoon droppings in Toronto and the GTA are usually in the attic, on top of the insulation or along the attic floor. Raccoons also leave droppings above a garage and inside a chimney. Wherever the droppings have built up, the insulation or material underneath is soiled as well, so the cleanup takes that out along with the droppings on top.",
          "Up on the roof, raccoons use porch roofs, flat roofs and garage roofs the same way, and we clean those up too. The attic matters most indoors, because the droppings there are out of sight and can go unnoticed for a long time.",
        ],
      },
      {
        heading: "Why raccoon poop needs a careful cleanup",
        paragraphs: [
          "Raccoon droppings can contain the eggs of raccoon roundworm, a parasite common in raccoons. The eggs are far too small to see. They are not infectious when fresh, but after a few weeks in the droppings or the soil they are, and they can last for years, so old droppings need the same care as fresh ones.",
          "Infection in people is rare, but public health agencies take it seriously. The eggs are picked up by accident, by swallowing them from hands, toys or anything else that touched the droppings, so young children and pets are the ones to keep away. It is a careful job, not a quick sweep with a broom.",
        ],
      },
      {
        heading: "If you find raccoon droppings",
        paragraphs: [
          "Leave them where they are and keep children and pets away from the spot. Don't touch them with bare hands, don't vacuum them, and try not to stir up the dust around them. If they're in the attic, keep the hatch closed; there's no need to go up and look.",
          "If a raccoon is still living there, it comes out first, humanely and with any young checked for: [raccoon removal](/wildlife/raccoons) covers the signs, and [noises in the attic](/wildlife/something-in-the-attic) will help you tell a raccoon from a squirrel. Then the cleanup can be done once, properly.",
        ],
      },
    ],
    process: {
      heading: "How raccoon feces removal works",
      intro:
        "Cleaning raccoon droppings out of an attic means working inside it, so we take care with the hatch and the rooms below. A visit goes like this.",
      steps: [
        "We find the droppings, and work out where the raccoon has been getting in.",
        "If a raccoon is still living there, we check for young first and remove the family humanely before any cleanup starts.",
        "The droppings come out, together with any insulation and nesting material they have soiled.",
        "The area is disinfected, and new insulation goes in where the old was taken out.",
        "The opening the raccoon used is sealed.",
        "Any damage at the opening is repaired, matched to your home's existing materials and colours.",
      ],
      outro: `${SAME_DAY} Calls are answered 24 hours a day, 7 days a week.`,
    },
    faqHeading: "Questions about raccoon feces and cleanup",
    faqs: [
      {
        question: "What does raccoon poop look like?",
        answer:
          "Dark, tube-shaped and usually in a pile, often with seeds or bits of food in it, and with a stronger smell than a dog's or a cat's. One dropping on its own is hard to tell apart; a heap in the same spot usually points to a raccoon.",
      },
      {
        question: "Is raccoon poop dangerous?",
        answer:
          "It can contain the eggs of raccoon roundworm, so it should be handled with care. Infection in people is rare, and it happens when the eggs are swallowed, which is why the advice is to keep children and pets away and leave the droppings alone until they're cleaned up.",
      },
      {
        question: "Can I clean up raccoon droppings myself?",
        answer:
          "Public health agencies publish steps for doing it yourself, with gloves, a mask and care not to raise dust. An attic is harder: the droppings are on and in the insulation, the space is tight and dusty, and the raccoon may still be using it. That kind of cleanup is better left to us.",
      },
      {
        question: "Do you disinfect the area?",
        answer:
          "Yes. Once the droppings and the soiled insulation are out, the area is disinfected, and new insulation goes in where it's needed.",
      },
      {
        question: "Do you replace attic insulation soiled by raccoon feces?",
        answer:
          "Yes. Insulation under the droppings, or flattened where the raccoon was living, is removed and replaced, so the attic is back to how it should be.",
      },
      {
        question: "How do I stop raccoons from pooping on my deck?",
        answer:
          "Find out where the raccoon is living. If it's under the deck, the droppings will keep coming until it is out and the space under the deck is closed. We do both, and clean up and disinfect the deck, the patio and the patio furniture; droppings on a porch roof, a flat roof or a garage roof are cleaned up too.",
      },
      {
        question: "Will the raccoon come back to the same spot?",
        answer: "Raccoons return to a spot they know, which is why sealing the opening is part of the job. How the opening is sealed and the damage around it repaired is explained on the damage repair page.",
      },
      {
        question: "How much does raccoon feces removal cost?",
        answer:
          "It depends on how much has built up, how much insulation has to come out and what the raccoon damaged getting in. We explain the price first, before any work begins.",
      },
      INSURANCE_FAQ,
      {
        question: "How soon can you come?",
        answer: `${SAME_DAY} Calls are answered 24 hours a day, 7 days a week, and if a raccoon is still in the attic, getting it out safely comes first.`,
      },
    ],
  },
  {
    // Dead animal removal. Facts checked online Oct 22 2026 (sources in
    // docs/reviews/2026-10-22-dead-animal-review.md): the City of Toronto's
    // dead-animal page (what the City collects and where), Toronto's bat page
    // (a dead bat is a public-health matter), and two pest-industry pages on
    // how long the smell lasts. Owner's facts (Oct 19-21 2026): pickup is its
    // own job, inside or outside the house; nothing is sealed as part of it,
    // so the copy has no guarantee line and offers sealing as separate work;
    // a stuck or injured animal that cannot move is also our job; street and
    // road removals are the city's; no smell-removal promises.
    slug: "dead-animal-removal",
    subhead:
      "A dead raccoon or squirrel in the attic, inside a wall, in a vent or under the deck. We find where it died, remove it and clean the spot, on your property in Toronto and across the GTA.",
    // Owner, Oct 22 2026: no lifetime guarantee on this page (nothing is
    // sealed as part of the job), so the trust row shows insurance and 24/7
    // only and the page has no sealing-and-repair block.
    trustRow: "no-guarantee",
    sections: [
      {
        heading: "The smell of a dead animal in the house",
        paragraphs: [
          "It usually starts as a faint, sweetish, rotten smell in one room that you can't trace to the garbage or the drains. Over a day or two it gets stronger, it's worse in the afternoon when the house warms up, and it seems to come from a wall, a ceiling or a vent rather than from anything in the room.",
          "Two other signs often go with it. Flies gather at one window or around one spot, because they have found the animal before you have. And the scratching or scurrying you were hearing a few days ago has gone quiet. A squirrel that was running through the attic at dawn and then stopped, followed by a smell a few days later, is a typical sequence.",
          "A pet is often the first to notice. A dog or cat that keeps sniffing at one spot on a wall or at the bottom of a vent is usually pointing at the place.",
        ],
      },
      {
        heading: "Where dead animals turn up",
        paragraphs: [
          "Inside a house, the animal is most often a squirrel or a raccoon, and most often in the attic or in a wall. Squirrels fall into wall cavities from the attic and can't climb back out. Raccoons that were living in the attic sometimes die there, especially an old animal or one that was sick, and a young one can be left behind when its mother is gone.",
          "The other places are the chimney, a dryer or bathroom vent and the duct behind it, the space above a garage ceiling, and a crawl space. Outside, a dead animal is found under the deck or shed, in a window well, in the garage or lying in the yard, where it's easy to see but no one wants to pick up.",
          "If a dead animal is inside a wall or a vent, it almost always got into the house through a gap in the roof, the soffit or a vent cover. Finding that gap is part of the job, because the next animal will use it too.",
        ],
      },
      {
        heading: "Why the smell lasts so long",
        paragraphs: [
          "The smell comes from the body breaking down, and it lasts as long as the body stays moist. A small animal in a warm wall may stop smelling in a week or so; a raccoon can take several weeks, and it fades slowly as the body dries out. Warmth makes it stronger and faster, which is why the smell is worst on a warm afternoon or when the heating comes on.",
          "Waiting for it to pass is an option people try. The trouble is that a raccoon takes weeks, the flies keep coming, and the stain and the smell soak into insulation, drywall and framing the longer it stays. Taking the animal out is the only thing that ends it quickly; once it's out and the spot is cleaned, the smell left in the room fades on its own over the following days.",
          "Inside a wall, the animal usually has to be reached through a small opening cut into the drywall at the right spot. We work out where it is first, from the smell, the flies and where it was last heard, so the opening is cut once, in the right place, and not three times along the wall.",
        ],
      },
      {
        heading: "Your property, not the road",
        paragraphs: [
          "A dead animal on a road, a sidewalk or in a park is the city's to pick up. In Toronto, the City collects large dead animals such as raccoons and skunks from public property through 311, and can sometimes help with one lying in the open on private property, though pick-up times vary and small animals such as squirrels are not collected at all. Each city and town in the GTA has its own version of this rule.",
          "What no city service does is come into your house for it. Nobody from 311 will go up into the attic, cut into a wall, reach into a chimney or a dryer vent, crawl under the deck, or clean and disinfect the spot afterwards. That is the part we do: a dead animal on your property, inside the house or out, found, removed and the place it died cleaned up.",
        ],
      },
      {
        heading: "Keep your distance until it's out",
        paragraphs: [
          "Don't handle a dead wild animal with bare hands, and keep children and pets away from it. A raccoon's droppings around the spot can carry roundworm eggs, and any carcass draws flies and then maggots within a day or two in warm weather. Close the room off if the smell is bad, open a window, and leave the wall and the attic alone; there's no need to go up and look.",
          "A dead bat is a special case. Never touch a bat, alive or dead. If a bat is found in a room where someone was sleeping, or there is any chance a person or a pet had contact with it, call 311 or Toronto Public Health before anything else, because the bat may need to be sent for rabies testing.",
          "If the animal is not dead but sick, injured or stuck and unable to move, we can still come and remove it from your property. We are not a wildlife rescue, so we don't take in or treat animals, but we will get it out of your house or your yard.",
        ],
      },
      {
        heading: "After the animal is out",
        paragraphs: [
          "The spot where the animal died is cleaned and disinfected. If it was lying on attic insulation, the soiled insulation comes out with it. Inside a wall, the cavity is cleaned through the opening we made, and the opening is closed up afterwards.",
          "The way in is a separate question. An animal that died in your attic or a wall got in through a gap somewhere, and that gap is still open. Removing the animal doesn't close it; we tell you where it is, and if you'd like, we seal it and repair the damage around it on the same visit. Sealing is covered under [damage repair](/wildlife/damage-repair), and if there are still live animals in the house, [raccoon removal](/wildlife/raccoons) and [squirrel removal](/wildlife/squirrels) explain how they come out first.",
        ],
      },
    ],
    visitSteps: [
      { term: "On arrival", detail: "We find where the animal is from the smell, the flies and where it was last heard, and check how it got in." },
      { term: "During the visit", detail: "The animal is removed and bagged, and the spot it died in is cleaned and disinfected." },
      { term: "Before we leave", detail: "We'll explain what we found, what we did, and where the animal got in." },
    ],
    process: {
      heading: "How dead animal removal works",
      intro:
        "Most of the job is finding the animal. Once we know where it is, getting it out and cleaning the spot is usually done in one visit.",
      steps: [
        "We find where the animal is: in the attic, in a wall cavity, in a chimney or vent, or under a deck or shed.",
        "If it's inside a wall or a duct, we open the smallest space needed to reach it, in the right place.",
        "The animal is removed from your property in a sealed bag.",
        "The spot is cleaned and disinfected, and any insulation it was lying on is taken out.",
        "The opening we made is closed up again.",
        "We show you where the animal got in. Sealing that entry point, with the repair around it, is separate work that we can do on the same visit.",
      ],
      outro: `${SAME_DAY} Calls are answered 24 hours a day, 7 days a week.`,
    },
    faqHeading: "Questions about dead animal removal",
    faqs: [
      {
        question: "Isn't dead animal removal the city's job?",
        answer:
          "On a road, a sidewalk or in a park, yes: in Toronto you call 311, and other GTA cities have their own service. On your property it depends, and no city crew will go into your attic, open a wall or reach into a vent. That's what we're for.",
      },
      {
        question: "How do you find a dead animal inside a wall?",
        answer:
          "From the smell, which is strongest closest to the animal, from where flies are gathering, and from where you last heard it moving. Those three usually narrow it down to one section of wall or ceiling, and we open only that spot.",
      },
      {
        question: "Do you have to cut into the wall?",
        answer:
          "If the animal is inside a wall or a duct, usually yes: a small opening at the right spot is the only way to reach it. We make it as small as possible, clean the cavity through it and close it up afterwards.",
      },
      {
        question: "Will the smell go away once the animal is removed?",
        answer:
          "Yes. The smell comes from the body, so once it's out and the spot is cleaned and disinfected, what's left in the room fades over the following days. Open the windows when you can; it goes faster with fresh air.",
      },
      {
        question: "Is a dead raccoon dangerous to handle?",
        answer:
          "It should be handled with gloves and bagged, never picked up bare-handed, and the droppings around it can carry roundworm eggs. Keep children and pets away from it until it's gone.",
      },
      {
        question: "What if the dead animal is a bat?",
        answer:
          "Don't touch it. If anyone, or a pet, may have had contact with it, or it was found in a room where someone was sleeping, call 311 or Toronto Public Health first, because it may need rabies testing. Once that's done, we remove it.",
      },
      {
        question: "What if the animal is still alive but not moving?",
        answer:
          "A sick, injured or stuck animal that can't move is still our job. We remove it from your property. We're not a wildlife rescue, so we don't take in or treat animals.",
      },
      {
        question: "Do you seal the way the animal got in?",
        answer:
          "Removing the animal and sealing the entry point are two separate jobs, and we can do both on the same visit. Sealing, and the repair around it, is explained on the damage repair page.",
      },
      {
        question: "How much does dead animal removal cost?",
        answer:
          "It depends on whether the animal is inside the house or outside, and on whether a wall or a duct has to be opened to reach it. We explain the price first, before any work begins.",
      },
      INSURANCE_FAQ,
      {
        question: "How soon can you come?",
        answer: `${SAME_DAY} Calls are answered 24 hours a day, 7 days a week.`,
      },
    ],
  },
];

export function getSituationContent(slug: string): SituationContent | undefined {
  return SITUATIONS.find((s) => s.slug === slug);
}
