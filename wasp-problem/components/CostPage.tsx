import Link from "next/link";
import { ContactActions } from "@/components/ContactActions";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinalCta } from "@/components/FinalCta";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { HeroPrices } from "@/components/HeroPrices";
import { LeadFormSection } from "@/components/LeadFormSection";
import { PhoneLink } from "@/components/PhoneLink";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { TollFreeNumber } from "@/components/TollFreeNumber";
import { Check } from "@/components/TrustPoints";
import { TrustSection } from "@/components/TrustSection";
import {
  COST_EXAMPLES,
  COST_FAQS,
  COST_INCLUDES,
  COST_PAGE,
  COST_QUOTED_SEPARATELY,
  PRICE_DETAIL,
} from "@/lib/cost-page";
import { CITY_LOCATIONS } from "@/lib/locations";
import { PRICING } from "@/lib/pricing";
import { AVAILABILITY_24_7 } from "@/lib/site";
import { REVIEWS } from "@/lib/testimonials";

/**
 * Landing page for the Google Ads ad group "Wasp Nest Removal Cost". The first phone screen
 * carries the H1, the two headline prices, the guarantee and the Call button; everything
 * below answers what a person pricing a job asks next. Copy and figures live in
 * lib/cost-page.ts. Section backgrounds alternate white / surface down the page.
 */
export function CostPage() {
  // Unfeatured cities (Oakville, Burlington, Brampton) stay out of cross-links, as on the city pages.
  const cities = CITY_LOCATIONS.filter((l) => l.featured !== false);
  const pill =
    "inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold shadow-card transition-colors hover:border-ink hover:bg-yellow-tint";
  const textLink = "underline decoration-yellow-deep decoration-2 underline-offset-4";

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white px-5 pt-9 pb-12 text-center sm:pt-16 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(60%_60%_at_50%_0%,rgb(255_212_0_/_0.22),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-2xl">
          <h1 className="text-4xl leading-[1.02] uppercase sm:text-6xl">{COST_PAGE.h1}</h1>
          <p className="mx-auto mt-3 max-w-md text-base text-muted sm:text-lg">Serving Toronto &amp; the GTA</p>

          <HeroPrices />

          <p className="mx-auto mt-5 max-w-md text-base font-bold sm:text-lg">{AVAILABILITY_24_7}</p>
          <div className="mt-4">
            <ContactActions ctaLocationPrefix="cost-hero" variant="light" requestLink />
          </div>
        </div>
      </section>

      {/* PRICE LIST — id="pricing" is the target of the "Visible nest ... Hidden nest ..." link in the closing call-to-action. */}
      <section id="pricing" className="bg-surface px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-xl">
          <SectionHeading
            eyebrow="Residential pricing"
            title="Wasp Nest Removal Price List"
            lede="The cost of wasp nest removal depends on whether the nest is visible or hidden, how many nests there are, and how high they sit. What we quote is what you pay."
          />

          <dl className="card mt-10 divide-y divide-line overflow-hidden shadow-card-lg">
            {PRICING.map((item) => (
              <div key={item.id} className="flex items-baseline justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5">
                <dt className="text-base font-semibold">
                  {item.label}
                  {PRICE_DETAIL[item.id] && (
                    <span className="mt-1 block text-sm leading-relaxed font-normal text-muted">
                      {PRICE_DETAIL[item.id]}
                    </span>
                  )}
                  {item.note?.map((line, i) => (
                    <span
                      key={line}
                      className={`block text-xs leading-snug font-medium text-muted italic ${i === 0 ? "mt-1" : i === 1 ? "mt-1.5" : ""}`}
                    >
                      {line}
                    </span>
                  ))}
                </dt>
                <dd className="shrink-0 font-display text-xl font-extrabold tracking-tight whitespace-nowrap">
                  ${item.amount}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-center text-sm leading-relaxed text-muted">
            We confirm your total price, including any required ladder fees, before starting work.{" "}
            <strong className="font-bold text-ink">Commercial</strong> and institutional properties are quoted
            separately.
          </p>

          <div className="mt-8 text-center">
            <PhoneLink location="cost-pricing" className="btn btn-dark px-7 py-4 text-lg">
              Call <TollFreeNumber />
            </PhoneLink>
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="bg-white px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-xl">
          <SectionHeading
            eyebrow="Examples"
            title="Wasp Removal Cost, Added Up"
            lede="The cost of wasp removal for the most common jobs, added up from the price list above."
          />
          <ul className="card mt-10 divide-y divide-line overflow-hidden shadow-card-lg">
            {COST_EXAMPLES.map((example) => (
              <li key={example.situation} className="flex items-baseline justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5">
                <span className="text-base font-semibold">
                  {example.situation}
                  {example.sum && (
                    <span className="mt-1 block text-xs leading-snug font-medium text-muted italic">{example.sum}</span>
                  )}
                </span>
                <span className="shrink-0 font-display text-xl font-extrabold tracking-tight whitespace-nowrap">
                  ${example.total}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT THE PRICE COVERS */}
      <section className="bg-surface px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="No surprises" title="What Your Wasp Nest Removal Cost Includes" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="card px-5 py-6 sm:px-6">
              <p className="text-xs font-bold tracking-[0.12em] text-muted uppercase">Included</p>
              <ul className="mt-4 flex flex-col gap-3 text-base leading-snug">
                {COST_INCLUDES.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-0.5">
                      <Check />
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card px-5 py-6 sm:px-6">
              <p className="text-xs font-bold tracking-[0.12em] text-muted uppercase">Quoted separately</p>
              <ul className="mt-4 flex flex-col gap-3 text-base leading-snug">
                {COST_QUOTED_SEPARATELY.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ink" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Call and tell us what you have. We go over what it will cost before we start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS IF YOU WAIT */}
      <section className="bg-white px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading eyebrow="Before you decide" title="What Happens If You Wait" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
            A wasp nest keeps growing through the summer, and more wasps come and go around it. Near a door, a window,
            a deck or a play area, that means more chances of someone being stung.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
            If the wasps are going into a hole in the wall, the nest is usually inside it. Spraying the opening from outside
            rarely reaches the nest, and it can push the wasps deeper into the wall or into the house. We treat hidden
            nests at the source.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
            Call and we&rsquo;ll tell you the earliest available appointment.
          </p>
          <div className="mt-8">
            <PhoneLink location="cost-wait" className="btn btn-primary min-h-14 px-7 py-4 text-xl">
              Call <TollFreeNumber />
            </PhoneLink>
          </div>
        </div>
      </section>

      <GuaranteeSection />
      <FaqAccordion items={COST_FAQS} background="white" title="Wasp Removal Cost Questions" />
      <TrustSection reviews={REVIEWS} />
      <ProcessSteps />

      {/* CITY AND HOMEPAGE LINKS */}
      <section className="bg-white px-5 py-16 text-center sm:py-24">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Service area"
            title="Wasp Nest Removal Cost in Your City"
            lede="Wasp Problem handles wasp nest removal across Toronto and the GTA. The price list on this page is the same one shown on each city page."
          />
          <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
            {cities.map((l) => (
              <li key={l.slug}>
                <Link href={l.href} prefetch={false} className={pill}>
                  {l.city} wasp removal
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Or see everything we do on the{" "}
            <Link href="/" prefetch={false} className={`font-semibold text-ink ${textLink}`}>
              Wasp Problem homepage
            </Link>
            .
          </p>
        </div>
      </section>

      <LeadFormSection page={COST_PAGE.href} background="surface" />
      <FinalCta ctaLocation="cost-final" />
      <SiteFooter />
    </>
  );
}
