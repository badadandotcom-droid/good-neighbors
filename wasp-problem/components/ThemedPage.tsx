import Link from "next/link";
import { ContactActions } from "@/components/ContactActions";
import { TrustPoints } from "@/components/TrustPoints";
import { PhoneLink } from "@/components/PhoneLink";
import { PricingTable } from "@/components/PricingTable";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { TrustSection } from "@/components/TrustSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LeadFormSection } from "@/components/LeadFormSection";
import { FinalCta } from "@/components/FinalCta";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import { TollFreeNumber } from "@/components/TollFreeNumber";
import { SameDayNote } from "@/components/SameDayNote";
import { AVAILABILITY_24_7, SAME_DAY_SERVICE } from "@/lib/site";
import { REVIEWS } from "@/lib/testimonials";
import { CITY_LOCATIONS } from "@/lib/locations";
import type { ThemedPage as ThemedPageContent } from "@/lib/themed-pages";

/** A page that carries one specific search. Hero, then the page's own copy, then the shared price, guarantee, FAQ and city links. */
export function ThemedPage({ page }: { page: ThemedPageContent }) {
  const featuredCities = CITY_LOCATIONS.filter((l) => l.featured !== false);
  const pill =
    "inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold shadow-card transition-colors hover:border-ink hover:bg-yellow-tint";

  return (
    <>
      <section className="relative overflow-hidden bg-white px-5 pt-12 pb-14 text-center sm:pt-20 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(60%_60%_at_50%_0%,rgb(255_212_0_/_0.22),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-yellow-deep/40 bg-yellow-tint px-3.5 py-1.5 text-xs font-bold tracking-[0.06em] text-ink uppercase min-[360px]:tracking-[0.12em]">
            <span className="h-2 w-2 rounded-full bg-yellow-deep" aria-hidden="true" />
            {SAME_DAY_SERVICE.headline}*
          </p>
          <h1 className="mt-6 text-4xl leading-[1.02] uppercase sm:text-6xl">{page.h1}</h1>
          <p className="mx-auto mt-5 max-w-md text-xl font-bold sm:text-2xl">{page.heroSubheadline}</p>
          <p className="mx-auto mt-4 max-w-md text-base font-bold sm:text-lg">{AVAILABILITY_24_7}</p>
          <div className="mt-8">
            <ContactActions ctaLocationPrefix={`${page.slug}-hero`} variant="light" requestLink />
          </div>
          <div className="mt-9 flex justify-center">
            <TrustPoints />
          </div>
          <SameDayNote />
        </div>
      </section>

      <section className="bg-white px-5 pb-16 text-center sm:pb-24">
        <div className="mx-auto max-w-xl border-t border-line pt-12 sm:pt-16">
          {page.intro.map((p, i) => (
            <p key={i} className={`${i ? "mt-4 " : ""}text-base leading-relaxed sm:text-lg`}>
              {p}
            </p>
          ))}
          <PhoneLink location={`${page.slug}-intro`} className="btn btn-dark mt-8 px-7 py-4 text-lg">
            Call <TollFreeNumber />
          </PhoneLink>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <SectionHeading title={page.seeingHeading} />
          <ul className="mt-10 flex flex-col gap-4">
            {page.seeing.map((item) => (
              <li key={item.title} className="card px-5 py-5 sm:px-6">
                <h3 className="text-lg font-extrabold">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed">{item.seen}</p>
                <p className="mt-2 text-base leading-relaxed text-muted">{item.means}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-xl">
          <SectionHeading title={page.waitHeading} />
          <div className="mt-8 flex flex-col gap-4 text-base leading-relaxed sm:text-lg">
            {page.wait.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-xl">
          <SectionHeading title={page.doHeading} />
          <ol className="mt-8 flex flex-col gap-4">
            {page.doSteps.map((step, i) => (
              <li key={i} className="card flex gap-4 px-5 py-4 sm:px-6">
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow font-display font-black text-black"
                >
                  {i + 1}
                </span>
                <span className="text-base leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <TrustSection reviews={REVIEWS} />
      <PricingTable />
      <section className="bg-white px-5 pb-16 text-center sm:pb-24">
        <p className="mx-auto max-w-xl rounded-[0.625rem] bg-yellow-tint px-5 py-4 text-left text-base leading-relaxed">
          {page.priceNote}
        </p>
      </section>
      <GuaranteeSection />
      <FaqAccordion items={page.faqs} background="white" />

      <section className="bg-surface px-5 py-16 text-center sm:py-24">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Service area"
            title="Where We Work"
            lede={
              <>
                See all of our{" "}
                <Link href="/" prefetch={false} className="font-semibold underline decoration-yellow decoration-2 underline-offset-4">
                  wasp nest removal services
                </Link>
                , or find your city.
              </>
            }
          />
          <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
            {featuredCities.map((l) => (
              <li key={l.slug}>
                <Link href={l.href} prefetch={false} className={pill}>
                  {l.city}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#service-areas" prefetch={false} className={pill}>
                All Service Areas
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <LeadFormSection page={page.href} background="white" />
      <FinalCta ctaLocation={`${page.slug}-final`} />
      <SiteFooter />
    </>
  );
}
