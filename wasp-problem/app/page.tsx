import { ContactActions } from "@/components/ContactActions";
import { TrustPoints } from "@/components/TrustPoints";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PricingTable } from "@/components/PricingTable";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { TrustSection } from "@/components/TrustSection";
import { HiddenNestSection } from "@/components/HiddenNestSection";
import { WhatWeHandle } from "@/components/WhatWeHandle";
import { RecentJobs } from "@/components/RecentJobs";
import { ServiceAreaList } from "@/components/ServiceAreaList";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LeadFormSection } from "@/components/LeadFormSection";
import { FinalCta } from "@/components/FinalCta";
import { SiteFooter } from "@/components/SiteFooter";
import { AVAILABILITY_24_7, SAME_DAY_SERVICE } from "@/lib/site";
import { HOMEPAGE_FAQS } from "@/lib/content";
import { REVIEWS } from "@/lib/testimonials";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white px-5 pt-12 pb-14 text-center sm:pt-20 sm:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(60%_60%_at_50%_0%,rgb(255_212_0_/_0.22),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-yellow-deep/40 bg-yellow-tint px-3.5 py-1.5 text-xs font-bold tracking-[0.12em] text-ink uppercase">
            <span className="h-2 w-2 rounded-full bg-yellow-deep" aria-hidden="true" />
            {SAME_DAY_SERVICE.headline}*
          </p>

          <h1 className="sign-lockup mt-6 text-6xl leading-[0.95] uppercase sm:text-8xl">
            Wasp{" "}
            <br />
            Problem?
          </h1>
          <p className="mx-auto mt-5 max-w-md text-xl font-bold sm:text-2xl">
            Professional Wasp Nest Removal
          </p>
          <p className="mx-auto mt-2 max-w-md text-base text-muted sm:text-lg">
            Serving Toronto &amp; the GTA
          </p>
          <p className="mx-auto mt-4 max-w-md text-base font-bold sm:text-lg">{AVAILABILITY_24_7}</p>

          <div className="mt-8">
            <ContactActions ctaLocationPrefix="hero" variant="light" requestLink />
          </div>

          <div className="mt-9 flex justify-center">
            <TrustPoints />
          </div>

          <p className="mx-auto mt-7 max-w-sm text-xs text-muted">*{SAME_DAY_SERVICE.disclaimer}</p>
        </div>
      </section>

      <TrustSection reviews={REVIEWS} />
      {/* Callers say "wasps going into a hole", so that section sits right after the proof and sets up the hidden-nest price below. */}
      <HiddenNestSection />
      {/*
       * Order is: what it costs, what's guaranteed, your questions — then the
       * proof. The FAQ carries the answers that actually calm a nervous
       * caller (kids and pets, do you take the nest away), so it runs ahead
       * of the photo gallery instead of below three screens of it.
       * Backgrounds alternate white / surface down the page.
       */}
      <PricingTable />
      <GuaranteeSection />
      <FaqAccordion items={HOMEPAGE_FAQS} background="white" />
      <RecentJobs />
      <WhatWeHandle />
      <ProcessSteps />
      <ServiceAreaList />
      <LeadFormSection page="/" />
      <FinalCta ctaLocation="final-cta" />
      <SiteFooter />
    </>
  );
}
