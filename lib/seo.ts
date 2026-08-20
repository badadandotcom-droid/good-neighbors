import type { Metadata } from "next";
import { BRAND, CONTACT } from "@/lib/config/site";
import { getPhone } from "@/lib/config/resolvers";
import type { FaqItem, Market } from "@/lib/types";

/**
 * Metadata + JSON-LD builders. Centralizing these keeps every page's
 * <title>/description/OG/canonical pattern consistent and makes it trivial
 * to swap the production domain (BRAND.url) once it's assigned.
 */

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const url = new URL(opts.path, BRAND.url).toString();
  const title = opts.title === BRAND.name ? opts.title : `${opts.title} | ${BRAND.name}`;

  return {
    title,
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description: opts.description,
      url,
      siteName: BRAND.name,
      type: "website",
      locale: "en_CA",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: opts.description,
    },
  };
}

/**
 * LocalBusiness structured data. Uses only confirmed-safe fields — no
 * fabricated reviews, ratings, price range, or founding date. Address is
 * omitted entirely (schema.org treats missing optional fields as absent,
 * never as false information) until a real one exists.
 */
export function localBusinessJsonLd(market?: Market) {
  const phone = getPhone(market);
  const areaServed = market ? market.serviceArea : ["Southern Ontario"];

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: market ? market.brandName : BRAND.name,
    parentOrganization: {
      "@type": "Organization",
      name: BRAND.name,
      url: BRAND.url,
    },
    description: market ? market.seoDescription : BRAND.description,
    url: market ? `${BRAND.url}/service-areas/${market.slug}` : BRAND.url,
    telephone: phone.isPlaceholder ? undefined : phone.display,
    areaServed: areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
    email: CONTACT.email,
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    provider: {
      "@type": "Organization",
      name: BRAND.name,
      url: BRAND.url,
    },
    areaServed: { "@type": "AdministrativeArea", name: BRAND.foundingRegion },
    url: new URL(opts.path, BRAND.url).toString(),
    description: opts.description,
  };
}
