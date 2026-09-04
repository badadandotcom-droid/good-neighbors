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

  // A title that already carries the brand (e.g. a market's "Good Neighbors
  // Toronto") is rendered exactly as-is via `absolute`, bypassing the root
  // layout's `%s | Good Neighbors` template so the brand name never doubles
  // up. Every other nested page passes a bare title and lets that template
  // append the suffix exactly once. The homepage is the one exception: it
  // shares its route segment with the root layout, and Next's title
  // template only applies to *descendant* segments — so at "/" the template
  // never fires, and the brand suffix has to be added here explicitly too.
  const alreadyBranded = opts.title === BRAND.name || opts.title.startsWith(`${BRAND.name} `);
  const fullTitle = alreadyBranded ? opts.title : `${opts.title} | ${BRAND.name}`;
  const isRoot = opts.path === "/";

  return {
    title: alreadyBranded || isRoot ? { absolute: fullTitle } : opts.title,
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description: opts.description,
      url,
      siteName: BRAND.name,
      type: "website",
      locale: "en_CA",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
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
    telephone: phone.isPlaceholder ? undefined : phone.href.replace(/^tel:/, ""),
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
