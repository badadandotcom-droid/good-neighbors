import { ContactActions } from "@/components/ContactActions";
import { TrustPoints } from "@/components/TrustPoints";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PricingTable } from "@/components/PricingTable";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { TreatmentTimeline } from "@/components/TreatmentTimeline";
import { TrustSection } from "@/components/TrustSection";
import { WhatWeHandle } from "@/components/WhatWeHandle";
import { ServiceAreaList } from "@/components/ServiceAreaList";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinalCta } from "@/components/FinalCta";
import { SiteFooter } from "@/components/SiteFooter";
import { SAME_DAY_SERVICE } from "@/lib/site";
import { HOMEPAGE_FAQS } from "@/lib/content";
import { REVIEWS, PHOTOS } from "@/lib/testimonials";

export default function Home() {
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

          <h1 className="mt-6 text-5xl leading-[0.95] uppercase sm:text-7xl">
            Wasp
            <br />
            Problem?
          </h1>
          <p className="mx-auto mt-5 max-w-md text-xl font-bold sm:text-2xl">
            Professional Wasp Nest Removal
          </p>
          <p className="mx-auto mt-2 max-w-md text-base text-muted sm:text-lg">
            Serving Toronto &amp; the GTA &middot; Visible and hidden nests
          </p>

          <div className="mt-8">
            <ContactActions ctaLocationPrefix="hero" variant="light" />
          </div>

          <div className="mt-9 flex justify-center">
            <TrustPoints />
          </div>

          <p className="mx-auto mt-7 max-w-sm text-xs text-muted">*{SAME_DAY_SERVICE.disclaimer}</p>
        </div>
      </section>

      <TrustSection reviews={REVIEWS} photos={PHOTOS} />
      <WhatWeHandle />
      <PricingTable />
      <ProcessSteps />
      <GuaranteeSection />
      <TreatmentTimeline />
      <FaqAccordion items={HOMEPAGE_FAQS} />
      <ServiceAreaList />
      <FinalCta ctaLocation="final-cta" />
      <SiteFooter />
    </>
  );
}
