import type { ProblemPageContent } from "@/components/ProblemPage";
import { BASE_FAQS, homepageFaq } from "@/lib/content";
import { NEST_TYPE_EXPLANATION, priceOf } from "@/lib/pricing";
import { GUARANTEE, PHONE_TOLLFREE } from "@/lib/site";

/**
 * Copy for /yellow-jacket-removal, the landing page for yellow jacket and ground-wasp searches
 * (Keyword Planner, Toronto: yellow jacket exterminator 110/mo, ground wasps 70, wasp nest in
 * ground 50, all Low competition). The H1 and the start of the title are the ad group's phrase,
 * "Yellow Jacket Removal"; "wasp nest in the ground" and "ground wasps" sit in an H2 and the FAQ.
 * "Exterminator" stays off the site until after the Dec 7 exam.
 *
 * Nothing here names a price for a particular kind of nest: the page shows the price list and the
 * owner's own visible/hidden wording, and the price is confirmed on the phone before work starts.
 */

const VISIBLE = priceOf("visible-nest");
const HIDDEN = priceOf("hidden-nest");
const EXTRA = priceOf("additional-nest");
const LADDER = priceOf("ladder-fee");

/** BASE_FAQS answer reused word for word under a yellow-jacket question. */
function baseAnswer(q: (typeof BASE_FAQS)[number]["q"]): string {
  const item = BASE_FAQS.find((f) => f.q === q);
  if (!item) throw new Error(`BASE_FAQS has no question "${q}"`);
  return item.a;
}

export const YELLOW_JACKET_PAGE: ProblemPageContent = {
  href: "/yellow-jacket-removal",
  ctaId: "yellow-jacket",
  h1: "Yellow Jacket Removal",
  metaTitle: "Yellow Jacket Removal in Toronto & the GTA",
  metaDescription: `Yellow jacket removal in Toronto & the GTA: nests in the ground, under steps and inside walls. $${VISIBLE} visible nest, $${HIDDEN} hidden nest. Call ${PHONE_TOLLFREE.display}.`,

  intro: {
    title: "Wasp Nest in the Ground? It’s Probably Yellow Jackets",
    paragraphs: [
      "Yellow jackets are the wasps most likely to nest in the ground. A small hole in the lawn or a garden bed, a gap under a step or between patio stones, or a crack at the base of a wall can be the entrance to a nest with hundreds of wasps inside.",
      "They also nest inside walls, soffits and roof edges, where all you see is a steady line of wasps going in and out of one spot. Either way, the nest has to be treated where it is. Spraying the wasps you can see rarely reaches the colony.",
    ],
    link: { lead: "Not sure if they’re wasps or bees? See our", text: "bee removal page", href: "/bee-removal" },
  },

  signs: {
    title: "Signs of a Yellow Jacket Nest",
    lede: "What you’re seeing, and what it probably is.",
    items: [
      {
        title: "Wasps flying in and out of a hole in the ground",
        seen: "A small hole in the lawn or a garden bed, with wasps flying in and out of it all day.",
        means: "Most likely a yellow jacket nest in the ground. The hole is the entrance; the nest itself is underground.",
      },
      {
        title: "Wasps under a step, deck or patio stone",
        seen: "Wasps coming and going from under the front steps, a deck or a patio stone, or from a gap at the bottom of a wall.",
        means: "A nest in the space underneath or behind it. Leave the gap open: blocking it can send the wasps looking for another way out.",
      },
      {
        title: "Wasps going into a wall, soffit or siding",
        seen: "A steady line of wasps into a crack in the brick, a vent, the soffit or a gap under the siding.",
        means: "A nest inside the wall or roofline. That’s a hidden nest, and we treat it at the source.",
      },
      {
        title: "Wasps all over the garbage, patio table or barbecue",
        seen: "Wasps landing on food, drinks and garbage bins, but no nest you can find.",
        means: "They’re out foraging, and yellow jackets travel a fair way for food, so the nest may be in your yard or a neighbour’s. If you can, watch which way they fly off and tell us when you call.",
      },
    ],
  },

  wait: {
    title: "What Happens If You Leave a Yellow Jacket Nest",
    paragraphs: [
      "A yellow jacket nest keeps growing until the first hard frosts. Late summer into fall is when it’s biggest and the wasps are busiest, which is when most people notice them.",
      "Mowing, trimming or kids playing near a ground nest can set the wasps off, and a yellow jacket can sting more than once. If someone in your home is allergic to stings, keep them away from the area and tell us when you call.",
      "Please don’t block the hole or pour anything into it. Blocking the entrance can send the wasps looking for another way out, and when the nest is in a wall, that can be into the house.",
    ],
  },

  steps: {
    title: "How Yellow Jacket Removal Works",
    items: [
      "Tell us your service address and where the wasps are going in and out. Send a photo if you can take one safely.",
      "We go over the problem, what it will cost, and when we can get there.",
      "We treat the nest at the source: a small amount of product goes directly into the entrance, where the colony is, not across your lawn or garden. Then we explain what to expect for your particular job.",
      GUARANTEE.summary,
    ],
  },

  pricingTitle: "Yellow Jacket Removal Prices",
  faqTitle: "Yellow Jacket Removal Questions",
  faqs: [
    {
      q: "How much does yellow jacket removal cost?",
      a: `Yellow jacket nests are priced like any other wasp nest: a visible nest is $${VISIBLE} and a hidden nest is $${HIDDEN}. ${NEST_TYPE_EXPLANATION.hidden} Each additional nest is $${EXTRA}, and a nest or entry point 10–25 ft up adds a $${LADDER} ladder fee. We confirm your total price before starting work.`,
    },
    {
      q: "Are ground wasps the same as yellow jackets?",
      a: "Usually, yes. Around Toronto, wasps flying in and out of a hole in the lawn or garden are most often yellow jackets. We treat a ground nest at the source, like any other nest.",
    },
    {
      q: "Can you get rid of a wasp nest in the ground?",
      a: "Yes. We treat a ground nest through its entrance, so the product goes where the colony is. Call and tell us where the hole is, and we’ll tell you the earliest available appointment.",
    },
    {
      q: "Should I pour something down the hole or block it?",
      a: "We’d leave it alone. Pouring things into the hole rarely reaches the whole nest, and blocking it can push the wasps out another way, sometimes into the house when the nest is in a wall. Keep people and pets away from it and call us.",
    },
    {
      q: "Do yellow jackets go away on their own?",
      a: "Not until the cold. A yellow jacket colony dies off after the first hard frosts, usually in late fall, and the nest isn’t used again the next year. Until then the colony keeps growing, and late summer into fall is when it’s biggest. If the nest is near a door, a path or where kids play, it’s worth dealing with now.",
    },
    homepageFaq("Is same-day service available?"),
    homepageFaq("Do I need to be home?"),
    homepageFaq("What about my kids and pets?"),
    { q: "What if I still see yellow jackets after the treatment?", a: baseAnswer("What if I still see activity?") },
    homepageFaq("What does the service guarantee cover?"),
  ],

  areas: {
    title: "Yellow Jacket Removal Across the GTA",
    lede: "Wasp Problem removes yellow jacket nests and other wasp nests across Toronto and the GTA.",
  },
};
