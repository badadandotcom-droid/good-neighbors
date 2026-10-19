import type { ProblemPageContent } from "@/components/ProblemPage";
import { BASE_FAQS, homepageFaq } from "@/lib/content";
import { NEST_TYPE_EXPLANATION, priceOf } from "@/lib/pricing";
import { GUARANTEE, PHONE_TOLLFREE } from "@/lib/site";
import { YELLOW_JACKET_PAGE } from "@/lib/yellow-jacket-page";

/**
 * Copy for /bee-removal, the landing page for the "Bee Removal" ad group (ads chat brief, Oct 19:
 * headline 1 "Bee Removal"; phrases: bee removal, bee removal near me, bee nest removal near me,
 * bee removal company near me, bees in wall). The H1 and the start of the title are "Bee Removal"
 * word for word; "bee nest removal", "bees in a wall" and "near you" sit in the H2s and the FAQ.
 *
 * Bees stay generic (owner's call): no honey, bumble or carpenter bee copy, no species at all. The
 * page names the places people find bees, as the homepage's bee section does. "Exterminator" stays
 * off the site until after the Dec 7 exam. The homepage keeps its "bees" anchor: the bee ad links to
 * /#bees until this page is live and the owner OKs the switch.
 *
 * Prices are the site's one residential price list, shown the same way on every landing page; the
 * total is confirmed on the phone before work starts.
 *
 * On this page the guarantee and the hidden-nest explainer say "bees" where the shared wording says
 * "wasps" (owner, via the ads chat, Oct 19): step 4, the guarantee section, the guarantee FAQ, the
 * pricing block and the cost FAQ. The shared wording itself is unchanged. The "still see bees" FAQ
 * says "call us", not "call or text us".
 */

const VISIBLE = priceOf("visible-nest");
const HIDDEN = priceOf("hidden-nest");
const EXTRA = priceOf("additional-nest");
const LADDER = priceOf("ladder-fee");

/**
 * Shared wording with "wasps" read as "bees". Throws at build time if the shared text no longer says
 * "wasps", so an edit to the owner's wording gets looked at here too.
 */
function forBees(text: string): string {
  if (!/\bwasps\b/.test(text)) throw new Error(`Expected "wasps" in: ${text}`);
  return text.replace(/\bwasps\b/g, "bees");
}

/** A shared sentence with one phrase swapped. Throws at build time if the phrase is gone. */
function reworded(text: string, from: string, to: string): string {
  if (!text.includes(from)) throw new Error(`Expected "${from}" in: ${text}`);
  return text.replace(from, to);
}

/** BASE_FAQS answer reused word for word under a bee question. */
function baseAnswer(q: (typeof BASE_FAQS)[number]["q"]): string {
  const item = BASE_FAQS.find((f) => f.q === q);
  if (!item) throw new Error(`BASE_FAQS has no question "${q}"`);
  return item.a;
}

const GUARANTEE_FAQ = homepageFaq("What does the service guarantee cover?");

export const BEE_PAGE: ProblemPageContent = {
  href: "/bee-removal",
  ctaId: "bee",
  h1: "Bee Removal",
  metaTitle: "Bee Removal in Toronto & the GTA",
  metaDescription: `Bee removal in Toronto & the GTA: bees in a wall, soffit, the ground or boring into wood. $${VISIBLE} visible nest, $${HIDDEN} hidden nest. Call ${PHONE_TOLLFREE.display}.`,

  intro: {
    title: "Bees in a Wall, Soffit or the Ground? We Remove Them",
    paragraphs: [
      "Most bee calls we get are not about a nest anyone can see. It’s bees going in and out of one spot: a gap in the brick, a hole under the soffit, a crack at the base of a wall, or a small opening in the ground. The colony is inside, out of sight, and it gets busier every week.",
      "We also get calls about bees boring neat round holes into wood: fascia boards, deck railings, siding and fence posts. Wherever they are, we find the entrance, treat the colony where it lives, and tell you what to expect afterwards.",
    ],
    link: {
      lead: "Not sure if they’re bees or wasps? Either way, call us. If they’re coming out of a hole in the lawn, see our",
      text: "yellow jacket removal page",
      href: YELLOW_JACKET_PAGE.href,
    },
  },

  signs: {
    title: "Signs You Need Bee Removal",
    lede: "What you’re seeing, and what it probably is.",
    items: [
      {
        title: "Bees going into a wall or the brick",
        seen: "A steady stream of bees into a gap in the brick, a weep hole, a crack in the mortar or a space behind the siding, all day long.",
        means: "A colony inside the wall. That’s a hidden nest: we treat it through the opening the bees are using, so the product goes where they are, not across the wall.",
      },
      {
        title: "Bees under the soffit or roof edge",
        seen: "Bees coming and going from under the eaves, a soffit vent or where the roof meets the wall.",
        means: "A colony in the soffit or roof void. The same hidden-nest treatment applies. Please leave the opening alone; blocking it can send the bees looking for another way out, sometimes into the house.",
      },
      {
        title: "Bees going into the ground",
        seen: "Bees flying in and out of a small hole in the lawn, a garden bed or a gap between patio stones.",
        means: "A colony in the ground. Keep people, pets and the lawnmower away from the spot until we’ve been. If they look slim and bright yellow with sharp black bands, they may be wasps instead, and we handle those too.",
      },
      {
        title: "Round holes in wood",
        seen: "Neat holes about the width of a finger in fascia, deck railings, a pergola or siding, often with a little sawdust underneath, and bees hovering nearby.",
        means: "Bees boring into the wood to nest. We treat the holes, and the earlier it’s dealt with the less wood there is to repair later.",
      },
    ],
  },

  wait: {
    title: "What Happens If You Leave Bees in a Wall",
    paragraphs: [
      "A colony inside a wall or soffit keeps growing through the summer. The longer it’s there, the more bees there are and the further they can spread through the void. Bees in wood keep boring, and each season’s new holes add to the damage.",
      "Bees mostly keep to themselves, but a colony next to a door, a window that opens, a deck or a play area gets disturbed, and disturbed bees sting. If anyone in your home is allergic to stings, keep them clear of the area and tell us when you call.",
      "Please don’t seal the entrance, spray into it or try to open the wall. Sealing bees inside can push them out another way, and in a wall that is often indoors.",
    ],
  },

  steps: {
    title: "How Bee Nest Removal Works",
    items: [
      "Tell us your service address and where the bees are going in and out. Send a photo if you can take one safely.",
      "We go over the problem, what it will cost, and when we can get there.",
      "We treat the colony at the source: a small amount of product goes directly into the entrance the bees are using, whether that’s a wall, a soffit, the ground or holes in wood, not sprayed across your home or yard. Then we explain what to expect for your particular job.",
      forBees(GUARANTEE.summary),
    ],
  },

  pricingTitle: "Bee Removal Prices",
  hiddenNestExplanation: forBees(NEST_TYPE_EXPLANATION.hidden),
  guaranteeSummary: forBees(GUARANTEE.summary),
  faqTitle: "Bee Removal Questions",
  faqs: [
    {
      q: "How much does bee removal cost?",
      a: `Our residential prices work the same way for bees as for any nest: a visible nest is $${VISIBLE} and a hidden nest is $${HIDDEN}. ${forBees(NEST_TYPE_EXPLANATION.hidden)} Each additional nest is $${EXTRA}, and a nest or entry point 10–25 ft up adds a $${LADDER} ladder fee. We confirm your total price before starting work.`,
    },
    {
      q: "Can you get bees out of a wall?",
      a: "Yes. Bees in a wall are the most common bee call we get. We treat the colony through the opening the bees are using, so the product goes into the wall void where they are. We don’t need to open the wall to do that. If you want the nest material taken out afterwards, that does mean opening the wall, which we quote separately.",
    },
    {
      q: "How do I know if they’re bees or wasps?",
      a: "As a rule, bees are rounder and look fuzzy; wasps are slimmer and smoother, with brighter yellow and black bands. From a distance it’s hard to tell, and it doesn’t change what you should do: keep clear of the entrance and call us. We remove both, and we’ll know what we’re dealing with when we arrive.",
    },
    {
      q: "Is there a bee removal company near me?",
      a: "Wasp Problem is based in Toronto and covers the whole GTA, from Mississauga and Vaughan across to Markham, Pickering, Ajax and Whitby, and up to Richmond Hill and Newmarket. Call and we’ll tell you the earliest available appointment for your address.",
    },
    {
      q: "Should I seal the hole the bees are using?",
      a: "No. Sealing the entrance traps the colony inside and can push the bees out through another gap, sometimes into the house. Leave it open, keep people and pets away from it, and we’ll treat it through that opening.",
    },
    {
      q: "Will the bees go away on their own?",
      a: "Not usually. A colony in a wall, soffit or the ground tends to stay and grow as long as the spot suits it, and bees in wood come back to the same boards year after year. Dealing with it sooner means a smaller colony and less damage.",
    },
    homepageFaq("Is same-day service available?"),
    homepageFaq("Do I need to be home?"),
    homepageFaq("What about my kids and pets?"),
    {
      q: "What if I still see bees after the treatment?",
      a: reworded(baseAnswer("What if I still see activity?"), "call or text us", "call us"),
    },
    { q: GUARANTEE_FAQ.q, a: forBees(GUARANTEE_FAQ.a) },
  ],

  areas: {
    title: "Bee Removal Near You, Across the GTA",
    lede: "Wasp Problem removes bees, wasps and hornets across Toronto and the GTA. Pick your city, or call and tell us where you’re seeing them.",
  },
};
