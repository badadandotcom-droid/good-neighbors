import type { Metadata } from "next";
import { BRAND, PHONE_TOLLFREE, SHARE_PREVIEW } from "@/lib/site";

/**
 * Pages that carry one specific search ("yellow jacket removal", later "wasps in wall",
 * "hornet nest removal"). Each is hand-written for its search, not a city-page clone. New URLs
 * only: never rename the homepage or a city page, because Google Ads points at them.
 * Add a page here, add its route under app/, and add it to app/sitemap.ts.
 */
export type ThemedPage = {
  slug: string;
  href: string;
  /** Bare title: the layout template adds " | Wasp Problem". */
  metaTitle: string;
  metaDescription: string;
  /** Hero badge text is shared; this is the H1 and what sits under it. */
  h1: string;
  heroSubheadline: string;
  /** Short lines under the H1 that name where the nests turn up. */
  intro: readonly string[];
  /** "What you're seeing → what it probably is". */
  seeing: { title: string; seen: string; means: string }[];
  seeingHeading: string;
  waitHeading: string;
  wait: readonly string[];
  doHeading: string;
  doSteps: readonly string[];
  /** Plain note on how the price applies to this problem. */
  priceNote: string;
  faqs: readonly { q: string; a: string }[];
};

export const THEMED_PAGES: readonly ThemedPage[] = [
  {
    slug: "yellow-jacket-removal",
    href: "/yellow-jacket-removal",
    metaTitle: "Yellow Jacket Removal in Toronto & the GTA",
    metaDescription:
      "Yellow jacket removal in Toronto and the GTA: nests in the lawn, under steps and in walls. Upfront pricing, 90-day service guarantee. Call 1-800-800-WASP.",
    h1: "Yellow Jacket Removal in Toronto & the GTA",
    heroSubheadline: "Nests in the lawn, under steps and inside walls, treated at the source",
    intro: [
      "Yellow jackets are the wasps that nest in the ground. A small hole in the lawn, a gap under a step or a patio stone, or a crack at the base of a wall can be the front door to a nest with hundreds of wasps behind it.",
      "They also nest inside walls, soffits and other hidden spaces, where all you see is a steady stream of wasps going in and out of one spot. Either way, the nest has to be treated where it is. Spraying the wasps you can see does not reach the colony.",
    ],
    seeingHeading: "What you're seeing, and what it probably is",
    seeing: [
      {
        title: "Wasps flying in and out of a hole in the lawn",
        seen: "A small round hole in the grass, a flower bed or the ground beside the house, with wasps coming and going all day.",
        means: "Usually a ground nest. The nest is underground; the hole is only the entrance.",
      },
      {
        title: "Wasps at the base of a step, patio or retaining wall",
        seen: "Wasps coming out from under a step, between patio stones or from a gap at the bottom of a wall.",
        means: "Often a nest under or behind the structure. Please do not block the gap — see below.",
      },
      {
        title: "Wasps going into a wall, soffit or siding",
        seen: "A steady line of wasps into a crack, a vent, a gap in the brick or under the siding.",
        means: "A nest hidden inside the wall or roofline. Treated as a hidden nest, at the source.",
      },
      {
        title: "Wasps swarming around the garbage, patio or barbecue",
        seen: "Wasps landing on food, drinks, garbage bins or pet dishes, but no hole you can find.",
        means: "They are foraging, and a nest is usually close by. Watch which direction they fly away in, and tell us when you call.",
      },
    ],
    waitHeading: "What happens if you wait",
    wait: [
      "A nest keeps growing through the summer, and more wasps means more traffic around your yard. Late summer is when people tend to notice them most, because the colony is at its largest.",
      "Mowing, trimming and kids playing near a ground nest can set the wasps off, and yellow jackets will sting more than once. If anyone in your household is allergic to stings, keep them clear of the area and call us.",
      "Blocking the entrance or pouring something into the hole can send the wasps looking for another way out, often into the house. Leave the hole alone and call us.",
    ],
    doHeading: "What we do",
    doSteps: [
      "You tell us where the wasps are going in and out. A photo from a safe distance helps.",
      "We tell you what it will cost and the earliest we can get there, before we start.",
      "We treat the nest at the entrance or in the wall, soffit or ground where the colony is, and explain what to expect afterwards.",
      "If wasps return to the nest we treated within 90 days, we come back at no additional charge.",
    ],
    priceNote:
      "Whether the nest counts as visible ($180) or hidden ($250) depends on whether the nest itself can be seen. Tell us what you are seeing when you call and we confirm your price before starting work.",
    faqs: [
      {
        q: "What is the difference between a yellow jacket and a wasp?",
        a: "Yellow jackets are a kind of wasp. They are the ones most likely to nest in the ground or inside a wall rather than hang a paper nest from an eave, and they are the ones most often found around garbage and food.",
      },
      {
        q: "Can you remove a yellow jacket nest in the ground?",
        a: "Yes. A ground nest is treated at the entrance and the nest below it, so the colony is dealt with in place. Call us with where the hole is and we will tell you the earliest we can come.",
      },
      {
        q: "Should I pour something down the hole myself?",
        a: "We would leave it alone. Blocking the hole or pouring things into it can push the wasps out through another route, sometimes into the house. Keep people and pets away from it and call us.",
      },
      {
        q: "When do yellow jackets go away on their own?",
        a: "The colony dies off with the cold, usually in the fall, but the wasps are most active until then, and the nest is not reused. If it is near a door, a play area or a path, it is worth dealing with now.",
      },
      {
        q: "How quickly can you come?",
        a: `Same-day service is available in many cases, based on availability. Call ${PHONE_TOLLFREE.display} and we will tell you the earliest appointment for your area.`,
      },
      {
        q: "Do I need to be home?",
        a: "No. As long as we can safely reach the nest, you do not need to be there.",
      },
      {
        q: "What about my kids and pets?",
        a: "We use professional, Health Canada-registered products and apply them according to the label, directly at the nest entrance or the void where the colony is. Keep children and pets away from the treatment area while we work and until any dust has settled. Your technician will tell you if your job needs anything more.",
      },
      {
        q: "What if I still see yellow jackets after the treatment?",
        a: "Some activity in the first few days is normal, and it should tail off from there. If it has not settled down, call us and we will come back. The 90-day service guarantee covers the nest we treated.",
      },
    ],
  },
] as const;

/** Same share-card wiring as locationMetadata(): the opengraph-image file only covers its own route segment. */
export function themedPageMetadata(page: ThemedPage): Metadata {
  const url = new URL(page.href, BRAND.url).toString();
  const ogTitle = `${page.metaTitle} | ${BRAND.name}`;
  const shareImage = { url: "/opengraph-image", width: 1200, height: 630, alt: SHARE_PREVIEW.imageAlt };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: page.metaDescription,
      url,
      siteName: BRAND.name,
      type: "website",
      locale: "en_CA",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: page.metaDescription,
      images: [shareImage.url],
    },
  };
}
