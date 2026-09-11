import Link from "next/link";
import { ContactActions } from "@/components/ContactActions";
import { TrustPoints } from "@/components/TrustPoints";
import { PhoneLink } from "@/components/PhoneLink";
import { NestSigns } from "@/components/NestSigns";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PricingTable } from "@/components/PricingTable";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { TreatmentTimeline } from "@/components/TreatmentTimeline";
import { TrustSection } from "@/components/TrustSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinalCta } from "@/components/FinalCta";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import { PHONE_TOLLFREE, SAME_DAY_SERVICE } from "@/lib/site";
import { BASE_FAQS } from "@/lib/content";
import { REVIEWS, PHOTOS } from "@/lib/testimonials";
import { CITY_LOCATIONS, type CityLocation } from "@/lib/locations";

export function CityPage({ location }: { location: CityLocation }) {
  const otherCities = CITY_LOCATIONS.filter((l) => l.slug !== location.slug);
  const faqs = [...BASE_FAQS, location.extraFaq];
  const pill =
    "inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold shadow-card transition-colors hover:border-ink hover:bg-yellow-tint";

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white px-5 pt-12 pb-14 text-center sm:pt-20 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(60%_60%_at_50%_0%,rgb(255_212_0_/_0.22),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-yellow-deep/40 bg-yellow-tint px-3.5 py-1.5 text-xs font-bold tracking-[0.12em] text-ink uppercase">
            <span className="h-2 w-2 rounded-full bg-yellow-deep" aria-hidden="true" />
            {SAME_DAY_SERVICE.headline}*
          </p>

          <h1 className="mt-6 text-4xl leading-[1.02] uppercase sm:text-6xl">{location.h1}</h1>
          <p className="mx-auto mt-5 max-w-md text-xl font-bold sm:text-2xl">
            {location.heroSubheadline}
          </p>
          <p className="mx-auto mt-2 max-w-md text-base text-muted sm:text-lg">
            Proudly serving {location.city} and communities across the GTA.
          </p>

          <div className="mt-8">
            <ContactActions ctaLocationPrefix={`city-${location.slug}-hero`} variant="light" />
          </div>

          <div className="mt-9 flex justify-center">
            <TrustPoints />
          </div>

          <p className="mx-auto mt-7 max-w-sm text-sm font-medium">
            Fast help for active wasp, hornet and carpenter bee problems around your home.
          </p>
          <p className="mx-auto mt-2 max-w-sm text-xs text-muted">*{SAME_DAY_SERVICE.disclaimer}</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-5 pb-16 text-center sm:pb-24">
        <div className="mx-auto max-w-xl border-t border-line pt-12 sm:pt-16">
          {location.intro.map((paragraph, i) => (
            <p
              key={i}
              className={i === 0 ? "text-base leading-relaxed sm:text-lg" : "mt-4 text-base leading-relaxed sm:text-lg"}
            >
              {paragraph}
            </p>
          ))}
          <PhoneLink
            location={`city-${location.slug}-intro`}
            className="btn btn-dark mt-8 px-7 py-4 text-lg"
          >
            Call {PHONE_TOLLFREE.display}
          </PhoneLink>
        </div>
      </section>

      <TrustSection reviews={REVIEWS} photos={PHOTOS} />
      <NestSigns ctaLocation={`city-${location.slug}-nest-signs`} />
      <ProcessSteps />
      <PricingTable />
      <GuaranteeSection />
      <TreatmentTimeline />

      {/* SERVICE AREA CROSS-LINKS */}
      <section className="bg-surface px-5 py-16 text-center sm:py-24">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Service area"
            title="Also Serving the GTA"
            lede={
              <>
                Alongside {location.city}, Wasp Problem is a primary service provider for{" "}
                {otherCities.map((l) => l.city).join(" and ")}, and we also serve Toronto and
                communities across the wider GTA.
              </>
            }
          />
          <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
            {otherCities.map((l) => (
              <li key={l.slug}>
                <Link href={l.href} className={pill}>
                  {l.city}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#service-areas" className={pill}>
                All Service Areas
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <FaqAccordion items={faqs} />
      <FinalCta ctaLocation={`city-${location.slug}-final`} />
      <SiteFooter />
    </>
  );
}
