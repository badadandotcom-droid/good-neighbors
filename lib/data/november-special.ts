import { GUARANTEE, INSURANCE } from "@/lib/config/site";
import type { FaqItem } from "@/lib/types";

/**
 * ============================================================================
 * NOVEMBER SPECIAL — the one page on the site that carries a price
 * ============================================================================
 * Owner's call, Oct 28 2026 (via the ads chat, ADS 35): the site stays
 * price-free except this one test landing page for the November test ad.
 * The ad's pinned headline is "November Special: $699 + HST", so the H1 and
 * the price line match it word for word. The price is per entry point:
 * humane removal of every animal that came in through one opening, and that
 * opening sealed, for any animal inside the house. Additional entry points
 * are quoted before they are sealed; their figure is never on the site.
 *
 * Off the site menus, off the /wildlife index, out of the sitemap and
 * `noindex`: the page is reached from the ad only (the offer is dated, and a
 * stale November page in Google in December would read badly). Live Nov 1,
 * taken down Dec 1 (a redirect, see next.config.ts when the time comes).
 *
 * The only dollar figures allowed on the page: $699, $850 and the $5 million
 * insurance line (scripts/checks/crawl.mjs enforces it). No "fastest",
 * "cheapest", "discreet", "licensed", "fully insured". The guarantee only in
 * the exact GUARANTEE wording. Same-day wording in the Oct 27 form.
 */

export const NOVEMBER_SPECIAL_PATH = "/november-special";

const INSURANCE_FAQ = { question: INSURANCE.faqQuestion, answer: INSURANCE.faqAnswer };

export const NOVEMBER_SPECIAL = {
  /** The bare title; the layout appends " | Good Neighbors Wildlife". */
  title: "November Special: $699 + HST per Entry Point",
  h1: "November Special: $699 + HST per Entry Point",
  metaDescription:
    "November special: $699 plus HST per entry point, normally $850. Humane removal of any animal in your attic, walls or roof, the hole sealed. Same-day, open 24/7.",
  kicker: "November 2026",
  /** Directly under the H1, exactly as the ads chat asked. */
  priceLine: "November special: $699 plus HST per entry point. Normally $850.",
  additionalLine: "Additional entry points found during the job are quoted before they're sealed.",
  subhead:
    "A raccoon, squirrel or bird in the attic, the walls, the roof or a vent: in November, every animal that came in through one opening is removed humanely and that opening is sealed, for one price.",
  intro:
    "Technicians go out the same day at any hour, a real person answers the phone around the clock, and the price is explained before any work begins.",

  sections: [
    {
      heading: "What the November special covers",
      paragraphs: [
        "The special is for an animal inside the house: the attic, a wall or ceiling, the roof, a soffit, a chimney or a vent. For $699 plus HST per entry point, we remove every animal that came in through that opening, mother and young together, and we seal the opening it was using. The regular price for the same work is $850 plus HST.",
        "It is the same service we do all year, done to the same standard. We inspect the whole roofline first, check for babies before any removal, get the animals out humanely and from outside wherever we can, and close the way in so nothing gets back through it. The only thing November changes is the price.",
      ],
    },
    {
      heading: "What “per entry point” means",
      paragraphs: [
        "An entry point is one opening an animal is using to get in and out: a torn roof vent, a soffit corner pushed up, a gap chewed at the fascia, a chimney with no cap. Most homes have one. Some have two, because a squirrel that found one weak spot along the roofline often found another, or a raccoon pulled open a second vent when the first was blocked.",
        "The special price covers one. If our inspection finds a second opening in use, we tell you before anything is sealed and give you the price for it in plain figures, so you can decide. Nothing is closed up without your yes, and nothing goes on the invoice that you didn't agree to first.",
        "The special is the removal and the seal: the animals out, the opening closed. Anything else the job needs is quoted on site, before it's done.",
      ],
    },
    {
      heading: "The animals it covers",
      paragraphs: [
        "Raccoons are the animal Toronto hears most in November. A raccoon that spent the summer coming and going now wants a warm, dry place for the winter, and a [raccoon in the attic](/wildlife/raccoons) is the job this special was written for. Grey and black [squirrels](/wildlife/squirrels) are the other one: they chew into soffits and roof edges in the fall to build a winter nest, and once in, they stay.",
        "Birds count too. Starlings and sparrows that nested in a dryer, kitchen or bathroom vent during the year leave it packed with nesting material; clearing the vent, removing the birds and screening the opening is one entry point under the special. Our [birds page](/wildlife/birds) explains the difference between a vent and an open ledge or balcony, which is a separate job.",
        "Not sure which animal you have? You don't need to be. The [something in the attic](/wildlife/something-in-the-attic) and [something in the walls](/wildlife/something-in-the-walls) pages match the sounds to the animal, and the technician confirms it on the roof.",
        "A skunk under the deck, a dead animal in a wall and raccoon droppings on a patio are all jobs we do, but they aren't in-house removals, so the special doesn't apply to them; [skunks](/wildlife/skunks), [dead animal removal](/wildlife/dead-animal-removal) and [raccoon feces removal](/wildlife/raccoon-feces-removal) each have a page of their own.",
      ],
    },
    {
      heading: "Why not to wait until December",
      paragraphs: [
        "An animal that moves in during the fall is settling in for the winter, and the cost of waiting climbs with every week: more soiled insulation, a second opening chewed to make a draught-free den, a roof edge that lets water in at the first thaw. Raccoon droppings in an attic can carry raccoon roundworm, so the attic is not a place to go and look.",
        "November is also the calm month. The spring young are grown and no new litters are due until late winter, which makes a removal simpler for the animals and for you. The special runs from November 1 to November 30, 2026.",
      ],
    },
  ],

  process: {
    heading: "How a November visit works",
    intro: "Most in-house removals are done entirely from outside. Here is the sequence, and where the price gets confirmed.",
    steps: [
      "You call, at any hour. We ask what you've heard and where, and we confirm the special: $699 plus HST for one entry point, the animals out and the opening sealed.",
      "A full inspection of the roofline and the openings on the house, to find every entry point and not just the one nearest the noise.",
      "We identify the animal and check for babies first. In November newborn young are rare, but young of the year may still be inside with their mother.",
      "Humane removal from outside, usually with a one-way door over the opening, so the animals leave on their own and can't get back in. We check in with you the next day to hear whether the house has gone quiet.",
      `Once it has, the door comes off and the opening is sealed. ${GUARANTEE.short}`,
      "Before we leave we show you what we found, what we did and how the animal got in, and the invoice shows exactly the price you agreed to, plus HST.",
    ],
    outro:
      "In November the calls come at every hour, and so do we: the same day, day or night. A visit between 9 PM and 7 AM is emergency service, so call for the details and the price; someone picks up the phone around the clock.",
  },

  faqHeading: "Questions about the November special",
  faqs: [
    {
      question: "What does “per entry point” mean?",
      answer:
        "One opening the animal is using to get in and out. The $699 plus HST covers removing every animal that came in through that one opening and sealing it. If the inspection finds a second opening in use, we quote it before it's sealed, and you decide.",
    },
    {
      question: "Is HST included in the $699?",
      answer:
        "No. Every price we quote is plus HST, and the invoice shows the HST as its own line, so the total is never a surprise.",
    },
    {
      question: "Is this the same service as the regular price?",
      answer:
        "Yes, exactly the same. The same inspection, the same humane removal, the same seal and the same follow-up. The regular price is $850 plus HST; in November it's $699 plus HST per entry point.",
    },
    {
      question: "What if there are babies?",
      answer:
        "We check before anything is removed. If young are inside, the removal is done so the mother and her young leave together, and that is part of the special, not an extra. In November newborn young are rare; it's usually young of the year still living with their mother.",
    },
    {
      question: "Does the special price apply at night?",
      answer:
        "The special price is for visits between 7 AM and 9 PM. A visit between 9 PM and 7 AM is emergency service; call us for the details and the price, and we'll tell you the difference before you decide.",
    },
    {
      question: "When does the special end?",
      answer:
        "November 30, 2026. After that, in-house removals go back to the regular price of $850 plus HST per entry point.",
    },
    {
      question: "Will the animal come back?",
      answer: `Not through the opening we sealed. ${GUARANTEE.full}`,
    },
    INSURANCE_FAQ,
  ] satisfies FaqItem[],
};
