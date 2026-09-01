import Link from "next/link";
import { PhoneLink } from "@/components/PhoneLink";
import { NestSigns } from "@/components/NestSigns";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TreatmentTimeline } from "@/components/TreatmentTimeline";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinalCta } from "@/components/FinalCta";
import { SiteFooter } from "@/components/SiteFooter";
import { PHONE, SAME_DAY_SERVICE } from "@/lib/site";
import { BASE_FAQS } from "@/lib/content";
import { CITY_LOCATIONS, type CityLocation } from "@/lib/locations";

export function CityPage({ location }: { location: CityLocation }) {
  const otherCities = CITY_LOCATIONS.filter((l) => l.slug !== location.slug);
  const faqs = [...BASE_FAQS, location.extraFaq];

  return (
    <>
      {/* HERO */}
      <section className="bg-yellow px-5 pt-10 pb-12 text-center">
        <h1 className="text-4xl leading-[1.05] font-black uppercase sm:text-6xl">
          {location.h1}
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-lg font-bold sm:text-xl">
          {location.heroSubheadline}
        </p>
        <p className="mx-auto mt-2 max-w-xs text-sm font-medium sm:max-w-sm">
          Proudly serving {location.city} and communities across the GTA.
        </p>

        <p className="mx-auto mt-5 inline-block rounded-sm bg-black px-3 py-1 text-xs font-black tracking-wide text-yellow uppercase">
          {SAME_DAY_SERVICE.headline}*
        </p>

        <PhoneLink
          location={`city-${location.slug}-hero`}
          className="mt-4 inline-block w-full max-w-xs rounded-sm bg-black px-6 py-4 text-xl font-black tracking-tight text-yellow sm:w-auto"
        >
          CALL NOW
          <br className="sm:hidden" />
          <span className="sm:ml-2">{PHONE.display}</span>
        </PhoneLink>

        <p className="mx-auto mt-4 max-w-xs text-sm font-medium sm:max-w-sm">
          Fast help for active wasp nests around your home.
        </p>
        <p className="mx-auto mt-1 max-w-xs text-xs text-black/70 sm:max-w-sm">
          *{SAME_DAY_SERVICE.disclaimer}
        </p>
      </section>

      {/* INTRO */}
      <section className="px-5 py-12 text-center">
        <div className="mx-auto max-w-md">
          {location.intro.map((paragraph, i) => (
            <p key={i} className={i === 0 ? "text-base leading-relaxed" : "mt-4 text-base leading-relaxed"}>
              {paragraph}
            </p>
          ))}
          <PhoneLink
            location={`city-${location.slug}-intro`}
            className="mt-6 inline-block rounded-sm border-4 border-black px-6 py-3 text-lg font-black"
          >
            Call {PHONE.display}
          </PhoneLink>
        </div>
      </section>

      <NestSigns ctaLocation={`city-${location.slug}-nest-signs`} />
      <ProcessSteps />
      <TreatmentTimeline />

      {/* SERVICE AREA CROSS-LINKS */}
      <section className="bg-yellow/15 px-5 py-12 text-center">
        <div className="mx-auto max-w-md">
          <h2 className="text-2xl uppercase sm:text-3xl">Also Serving the GTA</h2>
          <p className="mt-4 text-base leading-relaxed">
            Alongside {location.city}, Wasp Problem is a primary service provider for{" "}
            {otherCities.map((l) => l.city).join(" and ")}, and we also serve Toronto and
            communities across the wider GTA.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {otherCities.map((l) => (
              <li key={l.slug}>
                <Link
                  href={l.href}
                  className="block rounded-sm border-2 border-black px-3 py-1 text-sm font-bold"
                >
                  {l.city}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#service-areas"
                className="block rounded-sm border-2 border-black px-3 py-1 text-sm font-bold"
              >
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
