import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { PhoneLink } from "@/components/shared/PhoneLink";
import { SameDayBadge } from "@/components/shared/SameDayBadge";
import { PhotoPlaceholder } from "@/components/shared/PhotoPlaceholder";
import { Illustration } from "@/components/illustrations/Illustration";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { MARKETS, getMarketBySlug } from "@/lib/data/markets";
import { getSpeciesEntries } from "@/lib/data/wildlife";
import { getFeaturedFaqs } from "@/lib/data/faq";
import { getPhone, getPositioningLine, getSameDayConfig } from "@/lib/config/resolvers";
import { pageMetadata, localBusinessJsonLd, faqJsonLd } from "@/lib/seo";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";

export function generateStaticParams() {
  return MARKETS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const market = getMarketBySlug(slug);
  if (!market) return {};

  return pageMetadata({
    title: market.brandName,
    description: market.seoDescription,
    path: `/service-areas/${market.slug}`,
    noIndex: market.status !== "active",
  });
}

/** Rotates market photo tone through the palette so the network reads as varied local operations, not one template stamped repeatedly. */
const TONES = ["pine", "wood", "charcoal"] as const;

export default async function MarketPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const market = getMarketBySlug(slug);
  if (!market) notFound();

  const phone = getPhone(market);
  const species = getSpeciesEntries();
  const active = market.status === "active";
  const faqs = getFeaturedFaqs({ sameDayEligible: active });
  const sameDay = getSameDayConfig(market);
  const showAvailabilityNote = active ? !sameDay.enabled : true;
  const availabilityNote = active
    ? sameDay.disabledMessage
    : `We're not yet dispatching technicians to ${market.displayName} — reach out and we'll let you know as we expand into the area.`;
  const marketIndex = MARKETS.findIndex((m) => m.slug === market.slug);
  const tone = TONES[marketIndex % TONES.length];

  const jsonLd = localBusinessJsonLd(market);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-stone-300 py-16 sm:py-24">
        <Illustration
          id="compass"
          className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 text-pine-600 opacity-[0.05]"
        />
        <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Link href="/service-areas" className="text-sm font-medium text-stone-500 hover:text-charcoal">
              &larr; Service Areas
            </Link>

            {active ? (
              <SameDayBadge market={market} className="mt-4" />
            ) : (
              <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-brass-400 bg-brass-300/15 px-3 py-1 text-xs font-medium tracking-wide text-brass-600 uppercase">
                Coming soon to this area
              </span>
            )}

            <h1 className="mt-4 text-balance font-display text-4xl leading-[1.05] text-charcoal sm:text-5xl">
              {market.brandName}
            </h1>
            <p className="mt-3 font-display text-xl italic text-pine-600">{getPositioningLine(market)}</p>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-700 text-pretty">{market.heroBlurb}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CTAButton href="/contact" size="lg" event="cta_get_help_now" eventMeta={{ location: `market-${market.slug}` }}>
                {PRIMARY_CTA_LABEL}
              </CTAButton>
              <PhoneLink phone={phone} location={`market-${market.slug}`} className="justify-center text-lg text-ink hover:text-pine-600" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <PhotoPlaceholder
              slot="streetscape"
              icon="roofline"
              tone={tone}
              aspect="aspect-[4/3]"
              note={`${market.displayName} residential streetscape`}
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-300 bg-bone-50 py-14">
        <Container>
          <h2 className="flex items-center gap-3 font-display text-lg text-charcoal">
            <Illustration id="compass" className="h-6 w-6 text-pine-600" />
            Areas we cover near {market.displayName}
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {market.serviceArea.map((area) => (
              <span key={area} className="rounded-full border border-stone-300 bg-white px-3.5 py-1.5 text-sm text-ink-700">
                {area}
              </span>
            ))}
          </div>
        </Container>
      </section>

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
                  <Illustration id={s.iconId} weight="bold" className="h-7 w-7 text-pine-600" />
                </span>
                <span className="font-display text-base text-charcoal">{s.name}</span>
              </Link>
            ))}
          </div>
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
          />
          <h2 className="font-display text-2xl text-charcoal sm:text-3xl">
            {active ? `Questions from ${market.displayName} homeowners` : "Good to know"}
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
