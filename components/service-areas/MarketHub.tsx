import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { HelpLink } from "@/components/shared/HelpLink";
import { SameDayBadge } from "@/components/shared/SameDayBadge";
import { Illustration } from "@/components/illustrations/Illustration";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { DamageRepairBanner } from "@/components/shared/DamageRepairBanner";
import { GuaranteeBlock } from "@/components/shared/GuaranteeBlock";
import { CallNote, TrustRow } from "@/components/shared/TrustRow";
import { JsonLd } from "@/components/shared/JsonLd";
import { RichText } from "@/components/shared/RichText";
import { cityHref, getCityBySlug, getPlannedCitiesForRegion, listJoin } from "@/lib/data/cities";
import { marketHref } from "@/lib/data/markets";
import { getSpeciesEntries } from "@/lib/data/wildlife";
import { getFeaturedFaqs } from "@/lib/data/faq";
import { getPhone, getPositioningLine, getSameDayConfig } from "@/lib/config/resolvers";
import { breadcrumbJsonLd, faqJsonLd, marketAreaNames, serviceJsonLd } from "@/lib/seo";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";
import type { Market, RegionSlug } from "@/lib/types";

/** The places a hub names under its heading: its cities (page or not) and the extra places it covers. */
export function hubPlaces(market: Market): string[] {
  const planned = isRegionSlug(market.slug) ? getPlannedCitiesForRegion(market.slug).map((p) => p.name) : [];
  return [...planned, ...(market.alsoCovered ?? [])];
}

function isRegionSlug(slug: string): slug is RegionSlug {
  return ["toronto", "peel-region", "york-region", "durham-region"].includes(slug);
}

/**
 * A region hub, e.g. /service-areas/peel-region: a short intro naming its
 * cities, cards to each city page, the animals, the guarantee, the FAQ and
 * the CTA. A city without a page yet is named in plain text, never linked,
 * so nothing 404s while the city pages are built out in stages.
 *
 * A hub with `hubSections` (Toronto, Oct 2026) is the long-form version: the
 * trust row under the hero buttons, body sections between the city cards
 * and the animal grid, and its own questions after the featured FAQs. A hub
 * without them renders exactly as before.
 */
export function MarketHub({ market }: { market: Market }) {
  const phone = getPhone(market);
  const species = getSpeciesEntries();
  const active = market.status === "active";
  const longForm = Boolean(market.hubSections?.length);
  const faqs = [...getFeaturedFaqs({ sameDayEligible: active }), ...(market.hubFaqs ?? [])];
  const sameDay = getSameDayConfig(market);
  const showAvailabilityNote = active ? !sameDay.enabled : true;
  const availabilityNote = active
    ? sameDay.disabledMessage
    : `We're not yet dispatching technicians to ${market.displayName} — reach out and we'll let you know as we expand into the area.`;

  const heading = market.heroHeading ?? market.brandName;
  const planned = isRegionSlug(market.slug) ? getPlannedCitiesForRegion(market.slug) : [];
  const liveCities = planned.filter((p) => p.live).map((p) => getCityBySlug(p.slug)!);
  const namedOnly = [...planned.filter((p) => !p.live).map((p) => p.name), ...(market.alsoCovered ?? [])];
  const places = hubPlaces(market);

  const jsonLd = serviceJsonLd({
    name: heading,
    serviceType: "Wildlife removal",
    description: market.seoDescription,
    path: marketHref(market),
    areaServed: marketAreaNames(market),
  });

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Service Areas", path: "/service-areas" },
          { name: heading, path: marketHref(market) },
        ])}
      />

      <section className="relative overflow-hidden border-b border-stone-300 py-16 sm:py-24">
        <Illustration
          id="compass"
          className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 text-pine-600 opacity-[0.05]"
        />
        <Container className="relative flex max-w-3xl flex-col sm:block">
          <Link href="/service-areas" className="order-1 inline-block self-start text-sm font-medium text-stone-500 hover:text-charcoal">
            &larr; Service Areas
          </Link>

          {active ? (
            <div className="order-2 mt-4">
              <SameDayBadge market={market} />
            </div>
          ) : (
            <span className="order-2 mt-4 inline-flex items-center gap-1.5 self-start rounded-full border border-brass-400 bg-brass-300/15 px-3 py-1 text-xs font-medium tracking-wide text-brass-600 uppercase">
              Coming soon to this area
            </span>
          )}

          <h1 className="order-3 mt-4 text-balance font-display text-4xl leading-[1.05] text-charcoal sm:text-5xl">{heading}</h1>
          {places.length > 0 && (
            <p className="order-8 mt-8 font-display text-xl leading-snug text-pine-600 text-pretty sm:mt-3 sm:text-2xl">{listJoin(places)}.</p>
          )}
          <p className="order-9 mt-6 text-lg leading-relaxed text-ink-700 text-pretty">{market.heroBlurb}</p>
          <p className="order-10 mt-4 font-display text-lg text-pine-600">{getPositioningLine(market)}</p>

          <div className="order-5 mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            <CTAButton
              href={phone.href}
              size="lg"
              event="cta_call"
              eventMeta={{ location: `market-${market.slug}` }}
              className="w-full sm:w-auto"
            >
              Call {phone.display}
            </CTAButton>
            <CallNote />
            <HelpLink location={`market-${market.slug}`} />
          </div>

          {longForm && <TrustRow mobileOrder />}
        </Container>
      </section>

      {(liveCities.length > 0 || namedOnly.length > 0) && (
        <section className="border-b border-stone-300 bg-bone-50 py-14 sm:py-20">
          <Container>
            <h2 className="flex items-center gap-3 font-display text-2xl text-charcoal sm:text-3xl">
              <Illustration id="compass" className="h-7 w-7 shrink-0 text-pine-600" />
              Cities we cover in {market.displayName}
            </h2>
            {liveCities.length > 0 && (
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {liveCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={cityHref(city)}
                    className="group flex flex-col gap-3 rounded-sm border border-stone-300 bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-pine-500 hover:shadow-card"
                  >
                    <h3 className="font-display text-2xl text-charcoal">{city.name}</h3>
                    <p className="text-sm leading-relaxed text-ink-700">{city.cardLine}</p>
                    <span className="mt-auto text-sm font-medium text-pine-600 group-hover:text-pine-700">
                      Raccoon &amp; squirrel removal in {city.name} &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            )}
            {namedOnly.length > 0 && (
              <p className="mt-6 text-[15px] leading-relaxed text-ink-700">
                We also cover {listJoin(namedOnly)}
                {market.slug === "toronto" ? ", and the rest of the city." : `, and the rest of ${market.displayName}.`}
              </p>
            )}
          </Container>
        </section>
      )}

      {market.hubSections && market.hubSections.length > 0 && (
        <section className="border-b border-stone-300 py-16 sm:py-24">
          <Container className="flex max-w-3xl flex-col gap-12 sm:gap-14">
            {market.hubSections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-2xl text-charcoal sm:text-3xl">{section.heading}</h2>
                <div className="mt-5 flex flex-col gap-4">
                  {section.paragraphs.map((p) => (
                    <p key={p} className="text-[15px] leading-relaxed text-ink-700 text-pretty sm:text-base">
                      <RichText text={p} />
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </Container>
        </section>
      )}

      <section className="py-16 sm:py-24">
        <Container>
          <h2 className="font-display text-2xl text-charcoal sm:text-3xl">Wildlife we handle in {market.displayName}</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {species.map((s) => (
              <Link
                key={s.slug}
                href={`/wildlife/${s.slug}`}
                className="group flex flex-col items-center gap-3 rounded-sm border border-stone-300 bg-bone-50 px-4 py-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-pine-500 hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pine-100">
                  <Image
                    src={`/images/wildlife-icons/${s.iconId}.png`}
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </span>
                <span className="font-display text-base text-charcoal">{s.name}</span>
              </Link>
            ))}
          </div>
          <DamageRepairBanner className="mt-4" />
          <GuaranteeBlock className="mt-6" />
        </Container>
      </section>

      {showAvailabilityNote && (
        <section className="border-t border-stone-300 bg-bone-50 py-10">
          <Container>
            <p className="text-sm text-stone-500">{availabilityNote}</p>
          </Container>
        </section>
      )}

      <section className="border-t border-stone-300 py-16 sm:py-24">
        <Container>
          <JsonLd data={faqJsonLd(faqs)} />
          <h2 className="font-display text-2xl text-charcoal sm:text-3xl">
            {active ? "Common questions" : "Good to know"}
          </h2>
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <section className="border-t border-stone-300 bg-charcoal py-16 text-bone-50 sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-md text-balance font-display text-3xl leading-[1.1] text-bone-50">
            {active ? `Ready when you are, ${market.displayName}.` : `We'll be in ${market.displayName} soon.`}
          </h2>
          <CTAButton href="/contact" size="lg" event="cta_get_help_now" eventMeta={{ location: `market-${market.slug}-final` }}>
            {PRIMARY_CTA_LABEL}
          </CTAButton>
        </Container>
      </section>
    </>
  );
}
