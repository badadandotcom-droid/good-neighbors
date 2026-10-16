import { ContactActions } from "@/components/ContactActions";
import { TrustPoints } from "@/components/TrustPoints";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PricingTable } from "@/components/PricingTable";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { TrustSection } from "@/components/TrustSection";
import { HiddenNestSection } from "@/components/HiddenNestSection";
import { WhatWeHandle } from "@/components/WhatWeHandle";
import { BeesSection } from "@/components/BeesSection";
import { RecentJobs } from "@/components/RecentJobs";
import { ServiceAreaList } from "@/components/ServiceAreaList";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LeadFormSection } from "@/components/LeadFormSection";
import { FinalCta } from "@/components/FinalCta";
import { SiteFooter } from "@/components/SiteFooter";
import { SameDayNote } from "@/components/SameDayNote";
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
          <p className="inline-flex items-center gap-2 rounded-full border border-yellow-deep/40 bg-yellow-tint px-3.5 py-1.5 text-xs font-bold tracking-[0.06em] text-ink uppercase min-[360px]:tracking-[0.12em]">
            <span className="h-2 w-2 rounded-full bg-yellow-deep" aria-hidden="true" />
            {SAME_DAY_SERVICE.headline}*
          </p>

          {/* The lawn-sign lockup is the brand look, not the heading (owner's call, Oct 2026). The H1 is the
              service-and-area line under it, which names what people search for; the h1 base styles are
              cleared so it looks exactly like the two plain lines it replaced. */}
          <p className="sign-lockup mt-6 text-6xl leading-[0.95] uppercase sm:text-8xl">
            Wasp{" "}
            <br />
            Problem?
          </p>
          <h1 className="mx-auto mt-5 max-w-md font-sans tracking-normal text-wrap">
            <span className="block text-xl font-bold sm:text-2xl">Professional Wasp Nest Removal</span>{" "}
            <span className="mt-2 block text-base font-normal text-muted sm:text-lg">Serving Toronto &amp; the GTA</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base font-bold sm:text-lg">{AVAILABILITY_24_7}</p>

          <div className="mt-8">
            <ContactActions ctaLocationPrefix="hero" variant="light" requestLink />
          </div>

          <div className="mt-9 flex justify-center">
            <TrustPoints />
          </div>

          <SameDayNote />
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
      <BeesSection />
      <ProcessSteps />
      <ServiceAreaList />
      <LeadFormSection page="/" />
      <FinalCta ctaLocation="final-cta" />
      <SiteFooter />
    </>
  );
}
