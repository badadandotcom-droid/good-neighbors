import Link from "next/link";
import { PhoneLink } from "@/components/PhoneLink";
import { NestSigns } from "@/components/NestSigns";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TreatmentTimeline } from "@/components/TreatmentTimeline";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinalCta } from "@/components/FinalCta";
import { SiteFooter } from "@/components/SiteFooter";
import { PHONE, SAME_DAY_SERVICE, SECONDARY_SERVICE_AREAS } from "@/lib/site";
import { BASE_FAQS } from "@/lib/content";
import { CITY_LOCATIONS } from "@/lib/locations";

const FAQS = [
  ...BASE_FAQS,
  {
    q: "Do you service Toronto?",
    a: "Yes. We service Toronto and surrounding GTA areas, with a current focus on Mississauga, Oakville and Burlington.",
  },
] as const;

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-yellow px-5 pt-10 pb-12 text-center">
        <h1 className="text-5xl leading-[0.95] font-black uppercase sm:text-7xl">
          Wasp
          <br />
          Problem?
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-lg font-bold sm:text-xl">
          Wasp Nest Removal Across the GTA
        </p>
        <p className="mx-auto mt-2 max-w-xs text-sm font-medium sm:max-w-sm">
          Fast, professional wasp nest removal with focused service throughout Mississauga,
          Oakville &amp; Burlington.
        </p>

        <p className="mx-auto mt-5 inline-block rounded-sm bg-black px-3 py-1 text-xs font-black tracking-wide text-yellow uppercase">
          {SAME_DAY_SERVICE.headline}*
        </p>

        <PhoneLink
          location="hero"
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

      <NestSigns ctaLocation="section-active-nest" />
      <ProcessSteps />
      <TreatmentTimeline />

      {/* SERVICE AREAS */}
      <section id="service-areas" className="bg-yellow/15 px-5 py-12 text-center">
        <div className="mx-auto max-w-md">
          <h2 className="text-2xl uppercase sm:text-3xl">Wasp Removal Across the GTA</h2>
          <p className="mt-4 text-base leading-relaxed">
            Right now, Wasp Problem is prioritizing wasp nest removal in Mississauga, Oakville
            and Burlington — alongside continued coverage across Toronto and the wider GTA.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {CITY_LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={loc.href}
                className="block rounded-sm border-4 border-black bg-black px-4 py-4 text-yellow"
              >
                <span className="block text-lg font-black uppercase">{loc.city}</span>
                <span className="mt-1 block text-xs font-medium text-yellow/80">
                  Wasp Nest Removal &rarr;
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed">
            We also serve homeowners throughout Toronto and surrounding GTA communities,
            including {SECONDARY_SERVICE_AREAS.join(", ")}.
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {SECONDARY_SERVICE_AREAS.map((area) => (
              <li
                key={area}
                className="rounded-sm border-2 border-black px-3 py-1 text-sm font-bold"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqAccordion items={FAQS} />
      <FinalCta ctaLocation="final-cta" />
      <SiteFooter />
    </>
  );
}
