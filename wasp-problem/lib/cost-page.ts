import { HOMEPAGE_FAQS } from "@/lib/content";
import { NEST_TYPE_EXPLANATION, PRICING } from "@/lib/pricing";
import { PHONE_TOLLFREE } from "@/lib/site";

/**
 * Copy for /wasp-nest-removal-cost, the landing page for the Google Ads ad group
 * "Wasp Nest Removal Cost" (headline 1: "Wasp Nest Removal Cost"). Every dollar figure
 * is read from PRICING in lib/pricing.ts, so a price change there reaches this page,
 * its title and its FAQ schema without a second edit. Prices are flat everywhere on
 * the page: never "from" or "starting at".
 */

function amount(id: string): number {
  const item = PRICING.find((p) => p.id === id);
  if (!item) throw new Error(`lib/pricing.ts has no "${id}" line`);
  return item.amount;
}

const VISIBLE = amount("visible-nest");
const HIDDEN = amount("hidden-nest");
const EXTRA = amount("additional-nest");
const LADDER = amount("ladder-fee");

export const COST_PAGE = {
  href: "/wasp-nest-removal-cost",
  // The H1 is this phrase word for word, as is the start of the title.
  h1: "Wasp Nest Removal Cost",
  metaTitle: `Wasp Nest Removal Cost: $${VISIBLE} Visible, $${HIDDEN} Hidden`,
  metaDescription: `Wasp nest removal cost in Toronto & the GTA: $${VISIBLE} visible nest, $${HIDDEN} hidden nest, $${EXTRA} per extra nest. 90-day service guarantee. Call ${PHONE_TOLLFREE.display}.`,
} as const;

/** The price list's plain-language lines. Visible/hidden reuse the wording shown in the homepage pricing table. */
export const PRICE_DETAIL: Readonly<Record<string, string>> = {
  "visible-nest": NEST_TYPE_EXPLANATION.visible,
  "hidden-nest": NEST_TYPE_EXPLANATION.hidden,
  "additional-nest": "Added for each extra nest that needs treatment.",
};

export type CostExample = { situation: string; sum?: string; total: number };

/** Totals for the common jobs, added up from PRICING. Single-nest jobs plus one extra-nest case; no ladder-on-several-nests combinations. */
export const COST_EXAMPLES: readonly CostExample[] = [
  { situation: "A visible nest, under 10 ft up", sum: "Ladder work included", total: VISIBLE },
  { situation: "A hidden nest, under 10 ft up", sum: "Ladder work included", total: HIDDEN },
  { situation: "A visible nest, 10–25 ft up", sum: `$${VISIBLE} + $${LADDER} ladder fee`, total: VISIBLE + LADDER },
  { situation: "A hidden nest, 10–25 ft up", sum: `$${HIDDEN} + $${LADDER} ladder fee`, total: HIDDEN + LADDER },
  {
    situation: "A visible nest plus one more nest, both under 10 ft up",
    sum: `$${VISIBLE} + $${EXTRA} additional nest`,
    total: VISIBLE + EXTRA,
  },
];

/** Every line is something the site already says elsewhere (pricing table, FAQ, job photos). */
export const COST_INCLUDES = [
  "Treatment of the active nest, at the source.",
  "A visible nest taken down and taken away when we're done.",
  "Ladder work for nests and entry points under 10 ft.",
  "Your total price confirmed before we start work.",
  "The 90-day service guarantee.",
] as const;

export const COST_QUOTED_SEPARATELY = [
  "Nests or entry points over 25 ft.",
  "Opening up a wall to take out a hidden nest.",
  "Commercial and institutional properties.",
] as const;

/** An FAQ answer the homepage already carries, reused word for word. Throws at build time if the homepage question is renamed. */
function homepageFaq(q: string) {
  const item = HOMEPAGE_FAQS.find((f) => f.q === q);
  if (!item) throw new Error(`HOMEPAGE_FAQS has no question "${q}"`);
  return { q: item.q, a: item.a };
}

export const COST_FAQS = [
  {
    q: "How much does wasp nest removal cost?",
    a: `A visible nest is $${VISIBLE} and a hidden nest is $${HIDDEN}. Each additional nest is $${EXTRA}. If the nest or entry point is 10–25 ft up, there is a $${LADDER} ladder fee; under 10 ft is included in your service price, and over 25 ft is quoted separately. We confirm your total price before starting work.`,
  },
  {
    q: "How do I get an exact price for my home?",
    a: `Call ${PHONE_TOLLFREE.display} and tell us where you're seeing the wasps and roughly how high up. We go over the problem, what it will cost, and when we can get there. A photo of the area where the wasps are entering helps, if you can take one safely, and we confirm your total price before starting work.`,
  },
  {
    q: "What is the difference between a visible and a hidden nest?",
    a: `${NEST_TYPE_EXPLANATION.visible} ${NEST_TYPE_EXPLANATION.hidden}`,
  },
  {
    q: "Do you charge extra for a ladder?",
    a: `If the nest or entry point is 10–25 ft up, there is a $${LADDER} ladder fee. Under 10 ft it is included in your service price, and over 25 ft is quoted separately.`,
  },
  {
    q: "What if there is more than one nest?",
    a: `Each additional nest is $${EXTRA}. We confirm your total price, including any required ladder fees, before starting work.`,
  },
  {
    q: "Are commercial properties priced the same way?",
    a: "No. Commercial and institutional properties are quoted per building.",
  },
  homepageFaq("Do you take the nest away?"),
  homepageFaq("What does the service guarantee cover?"),
  homepageFaq("Is same-day service available?"),
  homepageFaq("Can I book entirely by text?"),
  homepageFaq("When can I reach you?"),
] as const;
