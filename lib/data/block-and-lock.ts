/**
 * ============================================================================
 * BLOCK AND LOCK — whole-house sealing, the one page that offers it
 * ============================================================================
 * Owner's call, Nov 23 2026 ("make a block and lock page on the Good
 * Neighbors website, like slash block and lock"), wording approved Nov 24
 * 2026, 3:10 PM, in GNW Website 36. It replaces the Oct 2026 rule that kept
 * whole-home prevention off public pages: the offer now lives on this page
 * and nowhere else (every other page keeps repair talk to the spot the
 * animal used; scripts/checks/crawl.mjs still fails "block and lock" on any
 * other page).
 *
 * The owner's rules for this page (GNWW Project doc
 * claude/block-and-lock-draft-2026-11-24.md):
 * - No price of any kind, the inspection's included. "Whole-house
 *   inspection", never "free".
 * - No mice and no wasps (owner, Nov 23: mice off "for now"): the page seals
 *   the house against animals.
 * - The guarantee is on the entry points we seal, in the site's exact wording
 *   only (GUARANTEE in lib/config/site.ts). Never "the whole house is
 *   guaranteed", never a promise that no animal will ever get in. Sentences
 *   around it avoid the word so the crawl check's exact-wording rule holds.
 * - Not on the page until the owner says so: "pay when finished and happy",
 *   the mailed certificate, customer names, towns or quotes.
 * - The job example is a real job with no town, name, quote or price.
 * - The materials and methods are the owner's own job records.
 */

export const BLOCK_AND_LOCK_PATH = "/block-and-lock";

export const BLOCK_AND_LOCK = {
  /** The bare title; the layout appends " | Good Neighbors Wildlife". */
  title: "Block and Lock: Seal Your House Against Animals in Toronto",
  h1: "Block and Lock: Whole-House Animal Sealing in Toronto",
  metaDescription:
    "We check your whole house for the spots animals use to get in and seal them. Lifetime guarantee on every entry point we seal. Calls answered 24/7.",
  intro: [
    "If you've had a raccoon in the attic or a squirrel in the wall, you know how it goes. We get the animal out and seal the hole it used. Then you start looking at the rest of the house and wondering where the next one gets in.",
    "Block and Lock is for that. We check the whole outside of your house, show you each spot an animal could use, and seal them.",
  ],
  scope: {
    heading: "The whole house, or only the spots that worry you",
    paragraphs: [
      "Some people want everything closed, roofline to foundation. Some want only the weak spots we point out, or one side of the house. Both are Block and Lock. You pick after the inspection, once you've seen what's there.",
    ],
  },
  checks: {
    heading: "What we check",
    items: [
      "The chimney and the fireplace",
      "The soffits, and the flashing where the roof meets a wall",
      "Plumbing vent stacks and the dryer vent",
      "Every window frame and door frame",
      "Where pipes and utility lines go into the house",
      "The trim around the garage door",
      "Cracks in the brick",
      "Holes in the brick, weep holes included",
    ],
  },
  steps: {
    heading: "How it works",
    items: [
      { title: "The inspection.", text: "We go around the whole house and show you what we see." },
      {
        title: "A price for your house.",
        text: "Houses differ, so the price is for yours, and we explain it before any work begins.",
      },
      {
        title: "You say yes first.",
        text: "Nothing starts until you agree. If something extra turns up while we're working, we show you and you decide before we touch it.",
      },
      { title: "We seal it.", text: "" },
      { title: "Every spot we sealed is covered from that day.", text: "" },
    ],
  },
  method: {
    heading: "How a hole gets sealed",
    paragraphs: [
      "Heavy galvanized steel, screwed into the solid wood around the opening, then sealed watertight. Small cracks in brick get a flexible masonry sealant. Wide gaps get masonry repair mortar. Weep holes are fitted with stainless steel mesh, so the wall still drains.",
      "We do the carpentry ourselves, and we match the repair to your house so it looks the way it did before.",
    ],
  },
  /** Under the guarantee box (GUARANTEE.full, drawn by GuaranteeBlock). */
  afterGuarantee: [
    "When the job is done we measure what we sealed, mark it on a photo of your house and send it to you, so you can see what is covered.",
    "It covers the spots we seal. An animal can still chew or dig a new hole somewhere else, and nobody can honestly promise it won't. If that happens, call us.",
  ],
  job: {
    heading: "One house this fall",
    paragraphs: [
      "The owners heard something moving above the front door. We sealed five entry points: two plumbing vent stacks, the dryer vent, the trim at the front of the garage, and about 20 feet of flashing where the roof meets the wall, which we reinforced and fastened back down.",
    ],
  },
  renters: {
    heading: "If you rent",
    paragraphs: ["Sealing the house is the landlord's call. Send them this page or give them our number."],
  },
  inside: {
    heading: "If an animal is inside right now",
    paragraphs: [
      "Call now. We get it out first, babies too, and only then does the hole get closed. Sealing a hole with an animal still inside makes things worse.",
      "Start with [raccoon removal](/wildlife/raccoons), [squirrel removal](/wildlife/squirrels) or [bat removal](/wildlife/bats). If a hole has already been closed with something behind it, read [Sealed an Animal in Your Attic?](/blog/sealed-animal-in-attic)",
    ],
  },
  book: {
    heading: "Book a whole-house inspection",
    text: "Calls are answered 24/7. We're fully insured, with $5 million liability insurance, and we work across Toronto and York, Durham and Peel Region.",
  },
};
