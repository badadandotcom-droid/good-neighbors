import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { WildlifePicker } from "@/components/home/WildlifePicker";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServiceAreasTeaser } from "@/components/home/ServiceAreasTeaser";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { JsonLd } from "@/components/shared/JsonLd";
import { RepairSection } from "@/components/shared/RepairSection";
import { getFeaturedFaqs } from "@/lib/data/faq";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import type { RepairSection as RepairSectionData } from "@/lib/types";

export const metadata = pageMetadata({
  title: "Humane Wildlife Removal in Toronto & the GTA",
  description:
    "Humane wildlife removal in Toronto & the GTA. We seal the entry point and repair the damage it caused. Lifetime guarantee on every entry point we seal.",
  path: "/",
});

const REPAIR: RepairSectionData = {
  heading: "We remove the animal, seal the way in, and repair the damage",
  paragraphs: [
    "Getting the animal out is only part of the job. Once it's out, we seal the spot it was using to get in and repair what it damaged, whether that's a torn soffit, a chewed roof vent or a lifted section of shingles.",
    "Repairs are matched to your home's existing materials and colours and handled by the same company that removed the animal, so there's no separate roofer or contractor to find.",
  ],
  linkLabel: "See the repairs we handle",
};

export default function HomePage() {
  const featuredFaqs = getFeaturedFaqs();

  return (
    <>
      <JsonLd data={faqJsonLd(featuredFaqs)} />
      <Hero />
      <TrustBar />
      <WildlifePicker />
      <HowItWorks />
      <RepairSection section={REPAIR} eyebrow="More than removal" className="border-b border-stone-300" />
      <ServiceAreasTeaser />

      <section className="py-14 sm:py-28">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Good to know" />
            <Link href="/faq" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-pine-600 hover:text-pine-700">
              View all questions &rarr;
            </Link>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FAQAccordion items={featuredFaqs} />
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
