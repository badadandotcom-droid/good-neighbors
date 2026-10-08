import { Container } from "@/components/shared/Container";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTAButton } from "@/components/shared/CTAButton";
import { FAQ_ITEMS } from "@/lib/data/faq";
import { JsonLd } from "@/components/shared/JsonLd";
import { pageMetadata, faqJsonLd } from "@/lib/seo";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";

export const metadata = pageMetadata({
  title: "Wildlife Removal FAQ for Toronto & the GTA",
  description:
    "Answers to the questions Toronto homeowners ask most about wildlife removal, sealing entry points, damage repair and the lifetime guarantee.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />

      <section className="border-b border-stone-300 py-16 sm:py-24">
        <Container className="max-w-2xl">
          <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-pine-600 uppercase">
            <span className="h-px w-6 bg-brass-400" aria-hidden="true" />
            FAQ
          </p>
          <h1 className="mt-4 text-balance font-display text-4xl leading-[1.06] text-charcoal sm:text-5xl">
            Toronto wildlife removal questions, answered plainly.
          </h1>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <FAQAccordion items={FAQ_ITEMS} />

          <div className="mt-14 flex flex-col items-start gap-5 rounded-sm border border-stone-300 bg-bone-50 p-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[15px] leading-relaxed text-ink-700">Still have a question, or ready to get help?</p>
            <CTAButton href="/contact" size="lg" event="cta_get_help_now" eventMeta={{ location: "faq-page" }}>
              {PRIMARY_CTA_LABEL}
            </CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
