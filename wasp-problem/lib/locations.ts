import type { Metadata } from "next";
import { BRAND } from "@/lib/site";

export type CityLocation = {
  slug: string;
  href: string;
  city: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubheadline: string;
  /** Unique intro copy per city — hand-written, not a name-swapped template. */
  intro: readonly string[];
  extraFaq: { q: string; a: string };
};

export const CITY_LOCATIONS: readonly CityLocation[] = [
  {
    slug: "mississauga-wasp-removal",
    href: "/mississauga-wasp-removal",
    city: "Mississauga",
    h1: "Wasp Nest Removal in Mississauga",
    metaTitle: "Wasp Nest Removal in Mississauga",
    metaDescription:
      "Wasp removal in Mississauga. Fast, professional wasp nest removal for homes across Mississauga and the GTA. Call Wasp Problem at 416-700-4259.",
    heroSubheadline: "Fast Wasp Nest Removal for Mississauga Homeowners",
    intro: [
      "Mississauga is one of our primary service areas. If you're seeing wasps repeatedly entering and leaving one spot around your roof, soffit, siding, brickwork, deck or shed, there's likely an active nest nearby.",
      "Call Wasp Problem and tell us what you're seeing — a quick description helps, and a photo helps even more, if you can safely take one before we arrive.",
    ],
    extraFaq: {
      q: "Do you service Mississauga?",
      a: "Yes — Mississauga is one of our primary service areas, along with Oakville, Burlington and the wider GTA.",
    },
  },
  {
    slug: "oakville-wasp-removal",
    href: "/oakville-wasp-removal",
    city: "Oakville",
    h1: "Wasp Nest Removal in Oakville",
    metaTitle: "Wasp Nest Removal in Oakville",
    metaDescription:
      "Wasp removal in Oakville. Wasp Problem provides fast, professional wasp nest removal throughout Oakville and the GTA. Call 416-700-4259.",
    heroSubheadline: "Fast Wasp Nest Removal for Oakville Homeowners",
    intro: [
      "Oakville homeowners usually call us for the same reason: wasps keep flying in and out of one specific spot on the house, and nobody wants to get close enough to check. That's typically a sign of an active nest.",
      "Give us a call and describe where you're seeing the activity — the roofline, soffit, siding, brickwork, a deck or a shed are the most common spots. A photo helps too, if it's safe to take one.",
    ],
    extraFaq: {
      q: "Do you service Oakville?",
      a: "Yes — Oakville is one of our primary service areas, along with Mississauga, Burlington and the wider GTA.",
    },
  },
  {
    slug: "burlington-wasp-removal",
    href: "/burlington-wasp-removal",
    city: "Burlington",
    h1: "Wasp Nest Removal in Burlington",
    metaTitle: "Wasp Nest Removal in Burlington",
    metaDescription:
      "Wasp removal in Burlington. Wasp Problem handles active wasp nests for homes throughout Burlington and the GTA. Call 416-700-4259.",
    heroSubheadline: "Fast Wasp Nest Removal for Burlington Homeowners",
    intro: [
      "If you live in Burlington and you've noticed wasps consistently going in and out of the same opening — the roof, under the soffit, along the siding or brickwork, or around a deck or shed — that's usually an active nest, not just wasps passing through.",
      "Call Wasp Problem and let us know what you're seeing. Photos of the area help us prepare before we arrive, if you're able to take them safely.",
    ],
    extraFaq: {
      q: "Do you service Burlington?",
      a: "Yes — Burlington is one of our primary service areas, along with Mississauga, Oakville and the wider GTA.",
    },
  },
];

export function locationMetadata(location: CityLocation): Metadata {
  const url = new URL(location.href, BRAND.url).toString();
  const ogTitle = `${location.metaTitle} | ${BRAND.name}`;

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: location.metaDescription,
      url,
      siteName: BRAND.name,
      type: "website",
      locale: "en_CA",
    },
    twitter: {
      card: "summary",
      title: ogTitle,
      description: location.metaDescription,
    },
  };
}
