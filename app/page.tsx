import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { WildlifePicker } from "@/components/home/WildlifePicker";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PropertyCareTeaser } from "@/components/home/PropertyCareTeaser";
import { ServiceAreasTeaser } from "@/components/home/ServiceAreasTeaser";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { getFeaturedFaqs } from "@/lib/data/faq";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/config/site";

export const metadata = pageMetadata({
  title: `${BRAND.name} | Humane, Local Wildlife Removal`,
  description: BRAND.description,
  path: "/",
});

export default function HomePage() {
  const featuredFaqs = getFeaturedFaqs();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(featuredFaqs)) }}
      />
      <Hero />
      <TrustBar />
      <WildlifePicker />
      <HowItWorks />
      <PropertyCareTeaser />
      <ServiceAreasTeaser />

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
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
