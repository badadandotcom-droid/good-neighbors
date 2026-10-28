import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { HelpLink } from "@/components/shared/HelpLink";
import { GuaranteeBlock } from "@/components/shared/GuaranteeBlock";
import { CallNote, TrustRow } from "@/components/shared/TrustRow";
import { JsonLd } from "@/components/shared/JsonLd";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { RichText } from "@/components/shared/RichText";
import { Illustration } from "@/components/illustrations/Illustration";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getPhone } from "@/lib/config/resolvers";
import { NOVEMBER_SPECIAL, NOVEMBER_SPECIAL_PATH } from "@/lib/data/november-special";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

/**
 * The November special test landing page (owner, Oct 28 2026, via the ads
 * chat). The one page on the site with a price; the copy and the rules are in
 * lib/data/november-special.ts. Reached from the test ad only: not in the
 * menus, not on the /wildlife index, not in the sitemap, and `noindex`
 * (the offer is dated). The hero keeps the landing-page order on a phone
 * (H1, price lines, guarantee line, Call button, 24/7 and rating, Get Help
 * Now, insurance), with the price line directly under the H1 as the ads
 * chat asked; the price lines take order 4 ahead of the guarantee line.
 */
export const metadata: Metadata = {
  ...pageMetadata({
    title: NOVEMBER_SPECIAL.title,
    description: NOVEMBER_SPECIAL.metaDescription,
    path: NOVEMBER_SPECIAL_PATH,
  }),
  // Out of Google's index (a dated offer), but its links to the rest of the
  // site still count.
  robots: { index: false, follow: true },
};

export default function NovemberSpecialPage() {
  const phone = getPhone();
  const c = NOVEMBER_SPECIAL;

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: c.h1,
          serviceType: "Wildlife removal",
          description: c.metaDescription,
          path: NOVEMBER_SPECIAL_PATH,
        })}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: "November Special", path: NOVEMBER_SPECIAL_PATH }])} />
      <JsonLd data={faqJsonLd(c.faqs)} />

      <section className="relative overflow-hidden border-b border-stone-300 py-16 sm:py-24">
        <Illustration
          id="attic"
          className="pointer-events-none absolute -right-16 -bottom-16 h-96 w-96 text-pine-600 opacity-[0.05]"
        />
        <Container className="relative flex max-w-3xl flex-col sm:block">
          <Link href="/wildlife" className="order-1 inline-block self-start text-sm font-medium text-stone-500 hover:text-charcoal">
            &larr; Wildlife Removal
          </Link>
          <p className="order-2 mt-6 flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-pine-600 uppercase">
            <span className="h-px w-6 bg-brass-400" aria-hidden="true" />
            {c.kicker}
          </p>
          <h1 className="order-3 mt-3 text-balance font-display text-[2.125rem] leading-[1.04] text-charcoal sm:text-5xl">{c.h1}</h1>
          <div className="order-4 mt-3 flex flex-col gap-1 sm:mt-5">
            <p className="font-display text-lg leading-snug text-pine-700 sm:text-xl">{c.priceLine}</p>
            <p className="text-sm leading-relaxed text-ink-700">{c.additionalLine}</p>
          </div>
          <p className="order-8 mt-8 font-display text-xl leading-snug text-pine-600 text-pretty sm:mt-6 sm:text-2xl">{c.subhead}</p>
          <p className="order-9 mt-3 text-lg leading-relaxed text-ink-700">{c.intro}</p>
          <div className="order-5 mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            <CTAButton
              href={phone.href}
              size="lg"
              event="cta_call"
              eventMeta={{ location: "november-special" }}
              className="w-full sm:w-auto"
            >
              Call {phone.display}
            </CTAButton>
            <CallNote />
            <HelpLink location="november-special" />
          </div>
          <TrustRow mobileOrder />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="flex max-w-3xl flex-col gap-12 sm:gap-14">
          {c.sections.map((section, i) => (
            <div key={section.heading}>
              <h2 className="font-display text-2xl text-charcoal sm:text-3xl">{section.heading}</h2>
              <div className="mt-5 flex flex-col gap-4">
                {section.paragraphs.map((p) => (
                  <p key={p} className="text-[15px] leading-relaxed text-ink-700 text-pretty sm:text-base">
                    <RichText text={p} />
                  </p>
                ))}
              </div>
              {i === 0 && <GuaranteeBlock className="mt-8" as="h3" />}
            </div>
          ))}
        </Container>
      </section>

      <section className="border-t border-stone-300 bg-bone-50 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl text-charcoal sm:text-3xl">{c.process.heading}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-700 text-pretty sm:text-base">{c.process.intro}</p>
          <ol className="mt-8 flex flex-col gap-4 border-t border-stone-300 pt-8">
            {c.process.steps.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="w-8 shrink-0 font-display text-2xl leading-none text-brass-400" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-ink-700 sm:text-base">
                  <RichText text={step} />
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm leading-relaxed text-stone-500">{c.process.outro}</p>
        </Container>
      </section>

      <section className="border-t border-stone-300 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl text-charcoal sm:text-3xl">{c.faqHeading}</h2>
          <div className="mt-10">
            <FAQAccordion items={c.faqs} />
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
