import { ContactActions } from "@/components/ContactActions";
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
      <section className="bg-yellow px-5 pt-10 pb-12 text-center">
        <h1 className="text-5xl leading-[0.95] font-black uppercase sm:text-7xl">
          Wasp
          <br />
          Problem?
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-lg font-bold sm:text-xl">
          Professional Wasp Nest Removal
        </p>
        <p className="mx-auto mt-2 max-w-xs text-sm font-medium sm:max-w-sm">
          Serving Toronto &amp; the GTA
        </p>

        <p className="mx-auto mt-5 inline-block rounded-sm bg-black px-3 py-1 text-xs font-black tracking-wide text-yellow uppercase">
          {SAME_DAY_SERVICE.headline}*
        </p>
        <p className="mx-auto mt-2 max-w-xs text-sm font-medium sm:max-w-sm">
          Visible and hidden nests.
        </p>

        <div className="mt-6">
          <ContactActions ctaLocationPrefix="hero" variant="light" />
        </div>

        <p className="mx-auto mt-4 max-w-xs text-xs text-black/70 sm:max-w-sm">
          *{SAME_DAY_SERVICE.disclaimer}
        </p>
        <a href="#guarantee" className="mt-3 inline-block text-sm font-bold underline underline-offset-2">
          90-Day Service Guarantee
        </a>
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
