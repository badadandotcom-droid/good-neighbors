import { DEFAULT_SAME_DAY_SERVICE, GUARANTEE, INSURANCE } from "@/lib/config/site";
import type { SituationContent } from "@/lib/data/situations";

/**
 * ============================================================================
 * LONG-FORM SPECIES PAGES — raccoons and squirrels
 * ============================================================================
 * The two Google Ads landing pages for "raccoon removal toronto" and
 * "squirrel removal toronto", thickened the same way as the attic and walls
 * pages (Oct 2026): real sections, a FAQ with FAQPage schema, neighbourhood
 * mentions and the insurance line. They render through the same template
 * (components/wildlife/SituationPage.tsx); the hero keeps the live page's
 * photo, intro paragraph, signs and areas word for word.
 *
 * Same rules as lib/data/situations.ts: general facts about the animals and
 * about Toronto homes are wanted; everything about the business must already
 * be true on the live site. Neighbourhoods come only from the owner's lists
 * in lib/data/cities.ts. No prices, no trust claims beyond the guarantee
 * and the insurance line, nothing meant to scare. Links are [label](/path);
 * FAQ answers carry no links (they go into the structured data as written).
 */

const SAME_DAY = DEFAULT_SAME_DAY_SERVICE.qualificationMessage;
const INSURANCE_FAQ = { question: INSURANCE.faqQuestion, answer: INSURANCE.faqAnswer };

export const SPECIES_PAGES: SituationContent[] = [
  {
    slug: "raccoons",
    subhead:
      "Heavy footsteps overhead after dark, a torn roof vent, chirping from the attic in spring: the wildlife problem Toronto is famous for, and usually solved from outside your home.",
    trustRow: true,
    signs: {
      heading: "Signs of a raccoon in your home",
      intro: "Most people never see the raccoon. They hear it after dark, or find the damage outside. You don't need to identify the animal yourself.",
    },
    sections: [
      {
        heading: "Raccoons in Toronto",
        paragraphs: [
          "Toronto has one of the densest urban raccoon populations anywhere, and the reasons are built into the city. The Don, the Humber and the Rouge, and the smaller ravines that feed them, run past the back fences of York Mills and Hoggs Hollow, the Kingsway and Humber Valley Village, Guildwood and the Scarborough Bluffs. Mature oaks and maples reach over the roofs of Don Mills, Sunnylea and Cliffside. And the housing, from the century homes of East York and downtown to the postwar bungalows of Willowdale and Rexdale, has wood soffits, old chimneys and roof vents that have been through sixty or more winters.",
          "A raccoon doesn't need a ravine, though. It needs somewhere dark, dry and quiet, and an attic is exactly that. The raccoon that visits your green bin at night may well be denning a few doors down, and from late winter to early summer a female will be looking for a place to have her kits. Our [Toronto](/service-areas/toronto) page covers the city part by part; [Scarborough](/service-areas/scarborough), [North York](/service-areas/north-york) and [Etobicoke](/service-areas/etobicoke) each have a page of their own.",
        ],
      },
      {
        heading: "Raccoon babies in spring",
        paragraphs: [
          "Raccoon kits are born in spring, mostly in April and May, and they stay with their mother into late summer. A mother raccoon picks a den that is dark, dry and hard to reach: an attic, a chimney, the space between two floors, the ground under a deck or shed. Bird-like chirping or crying from the attic in spring is usually the kits.",
          "This is the most important thing to know before anyone touches the roof. If the opening is closed while the kits are inside, the mother tears at the roof, the soffit or the vent to get back to them, and the kits die inside. Hearing one animal doesn't mean there is one animal. We check for young before removal and take care to avoid separating them from their mother, so the family leaves together.",
        ],
      },
      {
        heading: "How raccoons get into a house",
        paragraphs: [
          "Raccoons rarely find a way in. They make one. They climb a downspout, a tree or the corner of the brickwork, then go to work on the weakest point of the roofline: a plastic roof vent pulled right off, a soffit pushed up where the roof meets the eaves, shingles lifted at the edge, a chimney with no cap. On an older Toronto home the trim is wood and gives way quickly; on a newer one, the aluminum soffit lifts at the corners.",
          "Once in, a raccoon settles in. It flattens the insulation into a bed, uses one corner of the attic as a latrine, and comes and goes through the same hole every night. The damage is at the opening, in the insulation, and sometimes in the ceiling below. Our [damage repair](/wildlife/damage-repair) page lists exactly what we fix.",
        ],
      },
      {
        heading: "Why not to wait, and why not to do it yourself",
        paragraphs: [
          "A raccoon in the attic doesn't leave on its own, and the longer it stays the more there is to repair: more soiled insulation, more droppings, a bigger hole. Raccoon droppings can carry raccoon roundworm, so don't handle them, and don't go up to look. Keep pets and children away from the attic hatch and from the spot outside where the raccoon comes and goes.",
          "Sealing the hole yourself is the one thing we'd ask you not to do. A raccoon closed in chews and tears a new way out, sometimes into the house, or it dies in the attic, and a dead raccoon in the insulation means a smell and flies for weeks. A raccoon closed out, with kits still inside, does more damage to the roof than it did getting in. The fix is a full inspection of the roofline, because raccoons often get in far from where you hear them, and a removal done from outside with the young accounted for first.",
        ],
      },
      {
        heading: "Raccoons in chimneys, under decks and in sheds",
        paragraphs: [
          "To a raccoon, an uncapped chimney looks like a hollow tree, and the ledge above the fireplace damper is a favourite spot for a mother and her kits. If you hear scratching or chirping from the fireplace, don't light a fire and don't open the damper; keep the room closed and call. Once the raccoons are out, we fit a chimney cap so it doesn't happen again.",
          "Under a deck, a porch or a shed, a raccoon has a dry den with a roof over it. These are solved the same way as an attic: find the animal, make sure any young are accounted for, get the family out, then close off the space it was using. Decks, porches and sheds get wire mesh along the base, dug into the ground, so the next animal that tries meets a barrier instead of an opening.",
        ],
      },
    ],
    process: {
      heading: "How we remove raccoons",
      intro:
        "Usually, we can solve the wildlife problem entirely from outside without needing to enter your home. Here is what a raccoon visit looks like.",
      steps: [
        "A full inspection of the roofline, the chimney and the base of any deck or shed, to find every entry point and not just the one nearest the noise.",
        "We confirm it's a raccoon and check for kits.",
        "Humane removal from outside, with mother and young kept together.",
        `We seal the entry point. ${GUARANTEE.short}`,
        "We repair the damage: roof boards and shingles, soffits, fascia, roof vents and chimney caps, plus flattened or soiled attic insulation, matched to your home's existing materials and colours.",
      ],
      outro: `${SAME_DAY} Calls are answered 24 hours a day, 7 days a week.`,
    },
    faqHeading: "Questions about raccoons",
    faqs: [
      {
        question: "How do I know it's a raccoon and not a squirrel?",
        answer:
          "Go by the clock and the weight of the sound. Raccoons are active at night and sound heavy and slow: footsteps, thumps, sometimes a growl. Squirrels are active in daylight and sound light and fast. Chirping from the attic in spring is usually raccoon kits. You don't need to be sure before you call; our technician confirms it on site.",
      },
      {
        question: "What should I do right now?",
        answer:
          "Leave the raccoon alone and don't block the hole. Note where and when you hear it, keep pets away from the attic hatch, and if you can see the opening from the ground, take a photo; you can add up to five to your request. Then call or send a request, and we'll take it from there.",
        link: { href: "/contact", label: "Send a request with photos" },
      },
      {
        question: "Are raccoons dangerous?",
        answer:
          "Raccoons avoid people and will almost always keep their distance. A cornered raccoon, or a mother with kits, will defend herself, so don't try to handle one, and keep pets away from where it comes and goes. Raccoon droppings can carry roundworm, which is why the attic cleanup is part of the job rather than something left to you.",
      },
      {
        question: "What happens to the raccoon babies?",
        answer:
          "They leave with their mother. We check for young before removal and take care to avoid separating them from their mother.",
      },
      {
        question: "Do you remove raccoons from chimneys?",
        answer:
          "Yes. An uncapped chimney is a common den for a mother raccoon and her kits in spring. Once they're out, we fit a cap or screen so nothing can get back in.",
      },
      {
        question: "How much does raccoon removal cost in Toronto?",
        answer:
          "It depends on where the raccoon is, how it got in and what it damaged. We confirm the price with you once we understand the problem, before any work begins.",
      },
      {
        question: "Will the raccoon come back?",
        answer: `Not through the opening we sealed. ${GUARANTEE.full}`,
      },
      INSURANCE_FAQ,
      {
        question: "How quickly can you get here?",
        answer: `${SAME_DAY} Calls are answered 24 hours a day, 7 days a week, and we confirm the timing with you before anyone is sent out.`,
      },
    ],
  },
  {
    slug: "squirrels",
    subhead:
      "Scampering overhead at first light, a chewed hole at a soffit corner, scratching inside a wall: the most common daytime wildlife noise in a Toronto home, and usually solved from outside it.",
    trustRow: true,
    signs: {
      heading: "Signs of squirrels in your home",
      intro: "Squirrels keep daylight hours, so the noise comes around sunrise and again in the late afternoon, and the hole is often visible from the ground.",
    },
    sections: [
      {
        heading: "Squirrels in Toronto",
        paragraphs: [
          "Toronto's squirrels are eastern grey squirrels, and the black ones you see everywhere are the same species in a darker coat. They live in every mature tree in the city, which means every established neighbourhood: the oaks and maples of the Kingsway and Sunnylea along the Humber, York Mills, Hoggs Hollow and Don Mills around the Don, the sixty-year-old trees over the bungalows of Cliffside, Bendale and Wexford in Scarborough, and the street trees of East York and downtown that are as old as the houses.",
          "A branch near the eaves is a bridge, and once a squirrel is on the roof it finds the soft spots: wood fascia that has had decades of weather, a soffit corner that was never quite closed, a plastic roof vent. The pages for [Scarborough](/service-areas/scarborough), [North York](/service-areas/north-york) and [Etobicoke](/service-areas/etobicoke) go neighbourhood by neighbourhood; the [Toronto](/service-areas/toronto) page covers the whole city.",
        ],
      },
      {
        heading: "Two litters a year",
        paragraphs: [
          "Grey squirrels raise young twice a year, once in late winter to early spring and again in late summer, and a warm, dry attic is a favourite nursery. A squirrel you hear in March or in late August is very likely a mother with a nest in the insulation. She moves her babies between dens if she's disturbed, so the noise can stop for a few days and start again, which is not the same as the squirrels being gone.",
          "That is why nothing is sealed until every squirrel, young included, is confirmed out. Close the hole with the babies inside and the mother chews a new one to get back to them; close it with the babies out and the mother in, and she chews her way out, sometimes into the house.",
        ],
      },
      {
        heading: "How squirrels get into a house",
        paragraphs: [
          "Squirrels get in by chewing. Wood fascia, aluminum soffit and plastic roof vents all give way to squirrel teeth, and the usual entry points are the roof edge, the soffit corners, gable vents, roof vents and the junction where a roof meets a wall. A small gap is enough to start. They chew it wider over time, and the hole becomes their regular door, used several times a day.",
          "Inside, they nest in the insulation and bring in leaves, twigs and acorns. What makes a squirrel different from a raccoon is that the chewing doesn't stop at the entry point. A squirrel's teeth never stop growing, so it never stops gnawing, and in an attic that sometimes includes wiring, which is the main reason not to leave a squirrel problem until spring.",
        ],
      },
      {
        heading: "Why the first patch doesn't hold",
        paragraphs: [
          "A lot of people try one fix themselves first: a board over the hole, some steel wool, a little foam. A squirrel that has been using that hole for weeks comes back to the same spot and chews beside the patch, through it or into a new corner, and if it was inside when the hole was closed, it chews out from the inside.",
          "The fix that holds starts with the whole roofline, because a squirrel that has found one soft spot has usually tested others. Every squirrel is confirmed out, the entry point is sealed, and the chewed wood, soffit or vent is repaired rather than covered over.",
        ],
      },
      {
        heading: "A squirrel in the wall or the chimney",
        paragraphs: [
          "Frantic scratching in one spot, at one height, going on for hours, is usually a young squirrel that fell down a wall cavity from the attic and can't climb back out; inside a finished wall there is nothing to grip. This one is urgent, because a stuck squirrel has days, not weeks. Keep pets away from the wall, don't bang on it, and note which wall and roughly how high up. See [something in the walls](/wildlife/something-in-the-walls).",
          "A squirrel in the fireplace came down an uncapped chimney and usually can't climb the flue back out. Keep the damper and the fireplace doors closed, keep the room shut, and call. Once it's out, a chimney cap stops the next one.",
        ],
      },
    ],
    process: {
      heading: "How we remove squirrels",
      intro:
        "Usually, we can solve the wildlife problem entirely from outside without needing to enter your home. Here is what a squirrel visit looks like.",
      steps: [
        "A full roofline inspection, to find every chewed spot and not just the one nearest the noise.",
        "We confirm it's squirrels and check for young.",
        "Humane removal from outside. We make sure they're all out, including any young, before anything is sealed.",
        `We seal the entry point. ${GUARANTEE.short}`,
        "We repair what they chewed: soffits, fascia boards, roof edges, roof vents, eavestroughs and siding, finished to match the rest of your home.",
      ],
      outro: `${SAME_DAY} Calls are answered 24 hours a day, 7 days a week.`,
    },
    faqHeading: "Questions about squirrels",
    faqs: [
      {
        question: "Is it a squirrel or a raccoon?",
        answer:
          "Squirrels keep daylight hours: the noise is light and fast, busiest around sunrise and again in the late afternoon, and quiet at night. Raccoons are the opposite, heavy and slow and after dark. If you're hearing it at 2 AM, it's probably not a squirrel. Either way, you don't need to be sure before you call.",
      },
      {
        question: "The noise stopped. Are they gone?",
        answer:
          "Not necessarily. A mother squirrel moves her babies between dens, and squirrels spend the middle of the day out foraging, so a quiet attic for a few days doesn't mean an empty one. The hole is the test: if it's still open, they're still using it.",
      },
      {
        question: "Do squirrels chew wiring?",
        answer:
          "Sometimes. A squirrel's teeth never stop growing, so it never stops chewing, and in an attic that can include wiring. That is the main reason not to put a squirrel problem off.",
      },
      {
        question: "I blocked the hole and they're back. Why?",
        answer:
          "Because it's their door. A squirrel that has been using an opening for weeks comes back to the same spot and chews beside, through or around the patch, and if a squirrel was inside when the hole was closed, it chews its way out. The fix is to confirm every squirrel is out first, then seal the spot and repair it properly.",
      },
      {
        question: "What about the babies?",
        answer:
          "We find where the squirrels are getting in and make sure they're all out, including any young, before anything is sealed. Nothing is closed with a litter still inside.",
      },
      {
        question: "Will you hurt the squirrels?",
        answer:
          "No. We use humane removal methods suited to the animal and the situation, and the squirrels leave alive, usually without anyone needing to go inside your home.",
      },
      {
        question: "How much does squirrel removal cost in Toronto?",
        answer:
          "It depends on how many ways in there are and what the squirrels chewed. We confirm the price with you once we understand the problem, before any work begins.",
      },
      {
        question: "Will the squirrels come back?",
        answer: `Not through the opening we sealed. ${GUARANTEE.full}`,
      },
      INSURANCE_FAQ,
      {
        question: "How quickly can you get here?",
        answer: `${SAME_DAY} The phone is answered 24 hours a day, 7 days a week, and we confirm the timing with you when you call or send a request.`,
      },
    ],
  },
];

export function getSpeciesPageContent(slug: string): SituationContent | undefined {
  return SPECIES_PAGES.find((s) => s.slug === slug);
}
