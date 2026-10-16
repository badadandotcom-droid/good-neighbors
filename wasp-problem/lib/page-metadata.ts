import type { Metadata } from "next";
import { BRAND, SHARE_PREVIEW } from "@/lib/site";

/**
 * Search and share metadata for one page. `title` is bare: the layout template
 * adds " | Wasp Problem". The link-preview card (opengraph-image) only covers its
 * own route segment, so every page below the homepage wires it in explicitly here
 * or a shared link gets no preview at all. City pages reach this through
 * locationMetadata() in lib/locations.ts.
 */
export function pageMetadata({
  href,
  title,
  description,
}: {
  /** Path of the page, e.g. "/wasp-nest-removal-cost". */
  href: string;
  title: string;
  description: string;
}): Metadata {
  const url = new URL(href, BRAND.url).toString();
  const ogTitle = `${title} | ${BRAND.name}`;

  const shareImage = { url: "/opengraph-image", width: 1200, height: 630, alt: SHARE_PREVIEW.imageAlt };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: BRAND.name,
      type: "website",
      locale: "en_CA",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [shareImage.url],
    },
  };
}
