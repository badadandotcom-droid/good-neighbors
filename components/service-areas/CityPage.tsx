import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { SameDayBadge } from "@/components/shared/SameDayBadge";
import { Illustration } from "@/components/illustrations/Illustration";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { DamageRepairBanner } from "@/components/shared/DamageRepairBanner";
import { GuaranteeBlock } from "@/components/shared/GuaranteeBlock";
import { JsonLd } from "@/components/shared/JsonLd";
import { RichText, plainText } from "@/components/shared/RichText";
import { CITY_INDEX, cityHeading, cityHref, getCityBySlug } from "@/lib/data/cities";
import { getMarketBySlug, marketHref } from "@/lib/data/markets";
import { getFeaturedFaqs } from "@/lib/data/faq";
import { getPhone } from "@/lib/config/resolvers";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";
import { TrustRow } from "@/components/shared/TrustRow";
import type { City, IllustrationId } from "@/lib/types";

/**
 * One city page, e.g. /service-areas/brampton. The structure is shared; every
 * word of copy comes from the city's own entry in lib/data/cities.ts. The
 * hero's phone button is the same CTAButton tel: link as every other page,
 * so the phone-tap conversion keeps firing.
 */
export function CityPage({ city }: { city: City }) {
  const phone = getPhone();
  const region = getMarketBySlug(city.region);
  const heading = cityHeading(city);
  const path = cityHref(city);
  const faqs = [...getFeaturedFaqs(), ...city.faqs];
  const nearby = city.nearby
    .map((slug) => CITY_INDEX.find((p) => p.slug === slug))
    .filter((p): p is (typeof CITY_INDEX)[number] => Boolean(p))
    .map((p) => ({ ...p, live: Boolean(getCityBySlug(p.slug)) }));

  const animalSections: { heading: string; icon: IllustrationId; paragraphs: string[] }[] = [
    { heading: `Raccoon removal in ${city.name}`, icon: "raccoon", paragraphs: city.raccoons },
    { heading: `Squirrel removal in ${city.name}`, icon: "squirrel", paragraphs: city.squirrels },
    { heading: `Skunk, bird and bat removal in ${city.name}`, icon: "skunk", paragraphs: city.otherWildlife },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: heading,
          serviceType: "Wildlife removal",
          description: city.metaDescription,
          path,
          areaServed: [city.name],
          areaServedType: "City",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Service Areas", path: "/service-areas" },
          ...(region ? [{ name: region.displayName, path: marketHref(region) }] : []),
          { name: city.name, path },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <section className="relative overflow-hidden border-b border-stone-300 py-16 sm:py-24">
        <Illustration
          id="compass"
          className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 text-pine-600 opacity-[0.05]"
        />
        <Container className="relative flex max-w-3xl flex-col sm:block">
          {region && (
            <Link href={marketHref(region)} className="order-1 inline-block self-start text-sm font-medium text-stone-500 hover:text-charcoal">
              &larr; {region.displayName}
            </Link>
          )}
          <div className="order-2 mt-4">
            <SameDayBadge />
          </div>
          <h1 className="order-3 mt-4 text-balance font-display text-4xl leading-[1.05] text-charcoal sm:text-5xl">{heading}</h1>
          <p className="order-8 mt-8 font-display text-xl leading-snug text-pine-600 text-pretty sm:mt-3 sm:text-2xl">
            Humane wildlife removal for {city.name} homes: raccoons, squirrels, skunks, birds and bats.
          </p>
          <p className="order-9 mt-6 text-lg leading-relaxed text-ink-700 text-pretty">{city.intro}</p>

          <div className="order-5 mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            <CTAButton
              href={phone.href}
              size="lg"
              event="cta_call"
              eventMeta={{ location: `city-${city.slug}` }}
              className="w-full sm:w-auto"
            >
              {phone.display}
            </CTAButton>
            <CTAButton
              href="/contact"
              variant="outline"
              size="lg"
              event="cta_get_help_now"
              eventMeta={{ location: `city-${city.slug}` }}
              className="w-full font-semibold sm:w-auto"
            >
              {PRIMARY_CTA_LABEL}
            </CTAButton>
          </div>

          <TrustRow mobileOrder />
        </Container>
      </section>

      {city.neighbourhoods && city.neighbourhoods.length > 0 && (
        <section className="border-b border-stone-300 bg-bone-50 py-14">
          <Container>
            <h2 className="flex items-center gap-3 font-display text-xl text-charcoal sm:text-2xl">
              <Illustration id="compass" className="h-6 w-6 shrink-0 text-pine-600" />
              Neighbourhoods we cover in {city.name}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${city.name} neighbourhoods`}>
              {city.neighbourhoods.map((area) => (
                <li key={area} className="rounded-full border border-stone-300 bg-white px-3.5 py-1.5 text-sm text-ink-700">
                  {area}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl text-charcoal sm:text-3xl">Wildlife problems we see in {city.name}</h2>
          <div className="mt-6 flex flex-col gap-5">
            {city.problems.map((p) => (
              <p key={p} className="text-[15px] leading-relaxed text-ink-700 text-pretty sm:text-base">
                <RichText text={p} />
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-stone-300 bg-bone-50 py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
          {animalSections.map((section) => (
            <div key={section.heading} className="border-t-2 border-pine-600 pt-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pine-100">
                <Image
                  src={`/images/wildlife-icons/${section.icon}.png`}
                  alt=""
                  aria-hidden="true"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </span>
              <h2 className="mt-4 font-display text-2xl text-charcoal">{section.heading}</h2>
              <div className="mt-4 flex flex-col gap-4">
                {section.paragraphs.map((p) => (
                  <p key={p} className="text-[15px] leading-relaxed text-ink-700 text-pretty">
                    <RichText text={p} />
                  </p>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="border-t border-stone-300 py-14 sm:py-16">
        <Container className="flex flex-col gap-6">
          <DamageRepairBanner />
          <GuaranteeBlock />
        </Container>
      </section>

      <section className="border-t border-stone-300 bg-bone-50 py-16 sm:py-24">
        <Container>
          <h2 className="font-display text-2xl text-charcoal sm:text-3xl">Common questions in {city.name}</h2>
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <section className="border-t border-stone-300 py-14">
        <Container>
          <h2 className="font-display text-xl text-charcoal sm:text-2xl">Nearby areas we also serve</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {region && (
              <li>
                <Link
                  href={marketHref(region)}
                  className="inline-block rounded-full border border-pine-600 bg-pine-50 px-3.5 py-1.5 text-sm font-medium text-pine-700 hover:bg-pine-100"
                >
                  All of {region.displayName}
                </Link>
              </li>
            )}
            {nearby.map((p) =>
              p.live ? (
                <li key={p.slug}>
                  <Link
                    href={cityHref(p)}
                    className="inline-block rounded-full border border-stone-300 bg-white px-3.5 py-1.5 text-sm font-medium text-pine-700 hover:border-pine-500"
                  >
                    {p.name}
                  </Link>
                </li>
              ) : (
                <li key={p.slug} className="rounded-full border border-stone-300 bg-white px-3.5 py-1.5 text-sm text-ink-700">
                  {p.name}
                </li>
              ),
            )}
          </ul>
        </Container>
      </section>

      <section className="border-t border-stone-300 bg-charcoal py-16 text-bone-50 sm:py-20">
        <Container className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-md text-balance font-display text-3xl leading-[1.1] text-bone-50">
            Ready when you are, {city.name}.
          </h2>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <CTAButton
              href={phone.href}
              size="lg"
              variant="secondary"
              event="cta_call"
              eventMeta={{ location: `city-${city.slug}-final` }}
              className="w-full font-semibold sm:w-auto"
            >
              {phone.display}
            </CTAButton>
            <CTAButton
              href="/contact"
              size="lg"
              event="cta_get_help_now"
              eventMeta={{ location: `city-${city.slug}-final` }}
              className="w-full sm:w-auto"
            >
              {PRIMARY_CTA_LABEL}
            </CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}

/** Body copy of a city page as plain text, for the word-count check and the ads report. */
export function cityBodyText(city: City): string {
  return [city.intro, ...city.problems, ...city.raccoons, ...city.squirrels, ...city.otherWildlife, ...city.faqs.flatMap((f) => [f.question, f.answer])]
    .map(plainText)
    .join("\n");
}
