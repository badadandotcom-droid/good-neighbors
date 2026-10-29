import type { SituationContent } from "@/lib/data/situations";
import type { WildlifeEntry } from "@/lib/types";

/**
 * /wildlife/raccoon-under-deck (GNW Website 18, Oct 29 2026).
 *
 * Built for the ads chat's "Raccoon Under Deck" ad group (page 1 of
 * claude/keyword-page-map-final-2026-10-28.md in the GNWW Project): main
 * phrase "raccoon under deck" (about 70 searches a month, Keyword Planner,
 * Canada), plus living, shed, porch, den and "under my deck".
 * - Written fresh, without reading any other page's copy (owner, Oct 28 2026, 11:45 PM).
 * - No lifetime guarantee (owner, Oct 29 2026, 10:29 AM: the mesh seals the
 *   ground, not an opening into the house), so the word stays off the page.
 * - Mesh method is the owner's (Oct 29 2026, 10:29 AM): dug into the ground and bent outward.
 * - No time of day for when the animal leaves (owner, ADS 37, Oct 28 2026).
 * - No attic, cleanup or insulation content (owner, Oct 28 2026, 11:31 PM).
 * - Babies: most kits born April-May, some into summer; young can stay with
 *   the mother into fall and winter (ICWDM, City of Toronto, Ontario SPCA).
 * - Release within about 1 km and 24 hours: ontario.ca, "Harass, capture or
 *   kill a wild animal damaging private property".
 */
export const RACCOON_UNDER_DECK_ENTRY: WildlifeEntry = {
  slug: "raccoon-under-deck",
  category: "situation",
  name: "Raccoon Under a Deck",
  singular: "Raccoon",
  seoTitle: "Raccoon Under Deck Removal in Toronto",
  heading: "Raccoon Under Your Deck? Humane Removal in Toronto",
  metaDescription:
    "Raccoon living under your deck, porch or shed? We find the den, check for babies first, use a one-way door and seal the gap. Toronto and the GTA, open 24/7.",
  summary:
    "A raccoon denning under a deck, porch or shed, let out through a one-way door, with wire mesh dug in along the base so it can't dig back under.",
  intro:
    "Raccoons under decks, porches and sheds across Toronto and the GTA: the den found, babies checked for first, a one-way door to let the raccoon out, then wire mesh dug into the ground so nothing digs back in.",
  commonSigns: [
    "A hole dug at the edge of the deck, with fresh soil pushed out",
    "Lattice or skirting pulled loose or torn at a corner",
    "Small tracks shaped like handprints on the steps or in soft ground",
    "Droppings left in one spot on the deck or close by",
    "Scratching, thumping or chattering under the boards",
    "A raccoon seen squeezing out from under the deck",
  ],
  commonAreas: ["Under decks", "Under porches", "Under front steps", "Under sheds", "Behind lattice skirting"],
  approach:
    "We check for young before anything goes on the deck, let the raccoon leave through a one-way door, then close the base with wire mesh dug into the ground.",
  iconId: "raccoon",
  unlisted: true,
  serviceType: "Raccoon removal from under decks, porches and sheds",
};

export const RACCOON_UNDER_DECK_CONTENT: SituationContent = {
  slug: "raccoon-under-deck",
  subhead:
    "A raccoon under your deck, porch or shed has found a dry, hidden den. Across Toronto and the GTA, we find it, check for babies first, let the raccoon out through a one-way door and seal the gap so nothing digs back in.",
  trustRow: "no-guarantee",
  signs: {
    heading: "Signs of a raccoon living under your deck",
    intro:
      "Raccoons keep quiet about where they sleep, but a den leaves marks you can usually spot from the yard, whether the raccoon is under the deck, under a porch or under a shed.",
  },
  sections: [
    {
      heading: "Why the space under a deck suits a raccoon",
      paragraphs: [
        "Under a deck, porch or shed it stays dry, out of the wind and hard for anything else to reach. In a Toronto backyard, that's a den with food close by: green bins, bird feeders, a vegetable garden, a fish pond.",
        "It's also exactly the kind of spot a mother raccoon looks for to raise her young, so a raccoon den under a deck is often a family rather than a single animal. Once settled in, a raccoon digs the opening wider and pulls at the skirting to come and go.",
      ],
    },
    {
      heading: "Babies first, every time",
      paragraphs: [
        "Most raccoon kits in southern Ontario are born in April and May, and some litters arrive as late as summer. The kits spend their first weeks in the den, and many stay with their mother into the fall, some right through the winter.",
        "So the first job under any deck is finding out who's there. A one-way door only goes on once every raccoon under the deck can walk out through it. If the young are still too small to follow their mother, we tell you what that means for timing before anything is installed.",
      ],
    },
    {
      heading: "How the one-way door works",
      paragraphs: [
        "The door fits over the den's opening. If there's another way under the deck, it's closed first, so the door is the only way out. The raccoon pushes through when it leaves, and the door won't open from the outside.",
        "There's no trap involved and nothing for you to handle. When we're sure the space is empty, the door comes off and the sealing begins.",
      ],
    },
    {
      heading: "Sealing the gap so nothing digs back in",
      paragraphs: [
        "Raccoons dig, and so do other animals looking for a den. That's why the seal goes into the ground rather than just across the hole: wire mesh runs along the base of the deck, porch or shed, down into the soil, then bends outward.",
        "An animal digging at the base runs into wire where it expects soil, and the bent section stops it from tunnelling underneath. It's the same way we close off a deck after [a skunk has lived under it](/wildlife/skunks).",
      ],
    },
    {
      heading: "Same-day visits across the GTA",
      paragraphs: [
        "Our team works across Toronto, York, Durham and Peel, and calls are answered 24/7. Most of the time we can be at your deck the same day. A visit between 9 PM and 7 AM is an emergency call, so ask us about the details and prices when you phone.",
        "You'll know the price before any work starts. A photo of the opening or the tracks helps us come prepared; you can attach up to five on our [contact form](/contact).",
      ],
    },
  ],
  process: {
    heading: "What happens when we come out",
    intro:
      "Every deck is built a little differently, so the visit starts with a careful walk around the base before anything is fitted.",
    steps: [
      "Any other way under the deck is closed, and the one-way door goes over the den's opening.",
      "The raccoon leaves through the door and can't push its way back in.",
      "Once the space is empty, the door comes off and wire mesh goes in along the base, dug into the ground and bent outward.",
      "Before we leave, we show you what was done.",
    ],
    outro: "Not sure it's a raccoon at all? A photo of the hole or the tracks usually settles it.",
  },
  visitSteps: [
    { term: "The den", detail: "We find the opening the raccoon is using and check for any second way under." },
    { term: "The young", detail: "We look for kits and judge whether they can follow their mother out." },
    { term: "The price", detail: "You hear what we found and what it will cost before any work starts." },
  ],
  faqHeading: "Raccoon under the deck: common questions",
  faqs: [
    {
      question: "There's a raccoon under my deck. What should I do first?",
      answer:
        "Keep children and pets back from the opening, and don't block the hole: if a mother has young under there, closing it can shut them in or leave them stranded. Then call us or send a photo of the opening, and we'll take it from there.",
    },
    {
      question: "Can't you just trap it and take it away?",
      answer:
        "Ontario's rules say a wild animal caught on your property has to be released within about a kilometre of where it was caught, within 24 hours. That's why we let the raccoon leave through a one-way door instead, then close the base so the deck stops being an option.",
    },
    {
      question: "How can I tell if it's still living under there?",
      answer:
        "Sprinkle a thin layer of flour on the ground at the opening and look again the next day. Fresh tracks mean something is still coming and going.",
    },
    {
      question: "What if it's a skunk, not a raccoon?",
      answer:
        "Raccoon tracks look like small handprints, and with a skunk you may notice the smell. A skunk under the deck is handled much the same way, and our skunk page explains it.",
      link: { href: "/wildlife/skunks", label: "Skunk removal under decks and porches" },
    },
    {
      question: "Will the raccoon come back once it's out?",
      answer:
        "That's what the mesh is for. Because it's dug into the ground and bent outward, a raccoon trying to dig its way back under the deck meets wire instead of soil.",
    },
    {
      question: "How much does it cost to get a raccoon out from under a deck?",
      answer:
        "It depends on the deck: how long the base is, how many openings it has and what's in the way. We look first and tell you the price before any work starts.",
    },
  ],
};
