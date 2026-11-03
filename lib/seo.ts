import type { Metadata } from "next";
import { BRAND, CONTACT } from "@/lib/config/site";
import { getPhone } from "@/lib/config/resolvers";
import { getActiveMarkets } from "@/lib/data/markets";
import { WILDLIFE } from "@/lib/data/wildlife";
import { DAMAGE_REPAIR_PATH, REPAIR_SERVICES } from "@/lib/data/repairs";
import type { FaqItem, Market } from "@/lib/types";

/**
 * Metadata + JSON-LD builders. Centralizing these keeps every page's
 * <title>/description/OG/canonical pattern consistent and makes it trivial
 * to swap the production domain (BRAND.url) once it's assigned.
 *
 * SEO standing rule (see CLAUDE.md): every page title and H1 names the
 * animal or problem and Toronto (or the market's own area), and every title
 * ends in " | Good Neighbors Wildlife".
 */

/** Stable id tying every page's structured data back to the one business. */
export const BUSINESS_ID = `${BRAND.url}/#business`;

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const url = new URL(opts.path, BRAND.url).toString();

  // Nested pages pass a bare title and let the root layout's
  // `%s | Good Neighbors Wildlife` template append the brand exactly once.
  // The homepage is the exception: it shares its route segment with the root
  // layout, and Next's title template only applies to *descendant* segments,
  // so at "/" the suffix is added here and the title set as `absolute`. A
  // title that already carries the full brand is also used as-is.
  const alreadyBranded = opts.title.includes(BRAND.seoName);
  const fullTitle = alreadyBranded ? opts.title : `${opts.title} | ${BRAND.seoName}`;
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
      siteName: BRAND.seoName,
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

/** The active service territory, in the order it's listed everywhere on the site. */
function serviceAreaJsonLd() {
  return getActiveMarkets().map((m) => ({ "@type": "AdministrativeArea", name: m.displayName }));
}

/** What the business offers, as a catalog of its service pages. No prices, by design. */
function offerCatalogJsonLd() {
  return {
    "@type": "OfferCatalog",
    name: "Wildlife removal and damage repair",
    itemListElement: [
      ...WILDLIFE.filter((w) => w.category === "species").map((w) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${w.singular} removal`,
          url: new URL(`/wildlife/${w.slug}`, BRAND.url).toString(),
        },
      })),
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wildlife damage repair",
          url: new URL(DAMAGE_REPAIR_PATH, BRAND.url).toString(),
        },
      },
    ],
  };
}

/**
 * LocalBusiness structured data, rendered once site-wide by the root layout.
 * Uses only confirmed-safe fields — no fabricated reviews, ratings, price
 * range, or founding date. Address is omitted entirely (schema.org treats
 * missing optional fields as absent, never as false information) until a
 * real one exists. Pages describe their own service with serviceJsonLd(),
 * which points back to this business by its @id.
 */
export function localBusinessJsonLd() {
  const phone = getPhone();

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": BUSINESS_ID,
    name: BRAND.seoName,
    legalName: BRAND.legalName,
    description: BRAND.description,
    url: BRAND.url,
    telephone: phone.isPlaceholder ? undefined : phone.href.replace(/^tel:/, ""),
    areaServed: serviceAreaJsonLd(),
    email: CONTACT.email,
    hasOfferCatalog: offerCatalogJsonLd(),
  };
}

/** A market's own area: its name first, then the places it covers. */
export function marketAreaNames(market: Market): string[] {
  return [market.displayName, ...market.serviceArea.filter((a) => a !== market.displayName)];
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

export function serviceJsonLd(opts: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
  /** Narrows the area served (market and city pages); defaults to the whole active territory. */
  areaServed?: string[];
  /** schema.org type for each `areaServed` entry: a city page passes "City". */
  areaServedType?: "AdministrativeArea" | "City";
  /** Lists the confirmed repairs as an offer catalog (damage repair page only). */
  includeRepairs?: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": BUSINESS_ID,
      name: BRAND.seoName,
      url: BRAND.url,
    },
    areaServed: opts.areaServed
      ? opts.areaServed.map((name) => ({ "@type": opts.areaServedType ?? "AdministrativeArea", name }))
      : serviceAreaJsonLd(),
    url: new URL(opts.path, BRAND.url).toString(),
    description: opts.description,
    ...(opts.includeRepairs && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Repairs after wildlife removal",
        itemListElement: REPAIR_SERVICES.map((r) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: r.name, description: r.detail },
        })),
      },
    }),
  };
}

/**
 * A blog post as a BlogPosting (Nov 2026): the headline, description and
 * dates from the post's front matter, the business as author and publisher
 * (by its @id), nothing else. No image until a post has one of the owner's
 * own photos, and no rating or review fields, ever.
 */
export function blogPostingJsonLd(post: {
  title: string;
  description: string;
  path: string;
  date: string;
  updated?: string;
  primaryKeyword: string;
  wordCount: number;
}) {
  const url = new URL(post.path, BRAND.url).toString();
  const business = { "@type": "HomeAndConstructionBusiness", "@id": BUSINESS_ID, name: BRAND.seoName, url: BRAND.url };
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: "en-CA",
    keywords: post.primaryKeyword,
    wordCount: post.wordCount,
    author: business,
    publisher: business,
    isPartOf: { "@type": "Blog", "@id": `${new URL("/blog", BRAND.url).toString()}#blog` },
  };
}

/** The blog index as a Blog with its posts listed, newest first. */
export function blogJsonLd(opts: { name: string; description: string; posts: { title: string; path: string; date: string }[] }) {
  const url = new URL("/blog", BRAND.url).toString();
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${url}#blog`,
    name: opts.name,
    description: opts.description,
    url,
    inLanguage: "en-CA",
    publisher: { "@type": "HomeAndConstructionBusiness", "@id": BUSINESS_ID, name: BRAND.seoName, url: BRAND.url },
    blogPost: opts.posts.map((p) => ({
      "@type": "BlogPosting",
      "@id": `${new URL(p.path, BRAND.url).toString()}#post`,
      headline: p.title,
      url: new URL(p.path, BRAND.url).toString(),
      datePublished: p.date,
    })),
  };
}

/** Breadcrumb trail for a page, starting at the homepage. */
export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, BRAND.url).toString(),
    })),
  };
}
