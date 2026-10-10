import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { Illustration } from "@/components/illustrations/Illustration";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { JsonLd } from "@/components/shared/JsonLd";
import { RepairSection } from "@/components/shared/RepairSection";
import { RichText } from "@/components/shared/RichText";
import { RelatedWildlife } from "@/components/wildlife/RelatedWildlife";
import { getPhone } from "@/lib/config/resolvers";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";
import type { SituationContent } from "@/lib/data/situations";
import type { WildlifeEntry } from "@/lib/types";

/**
 * The long-form template for the two "situation" pages (something in the
 * attic / in the walls): a sound guide, a section per animal, the reasons
 * not to wait or DIY, how a visit goes, the page's own sealing-and-repair
 * block with the lifetime guarantee, and a FAQ with matching FAQPage schema.
 * Phone and Get Help Now buttons are the same CTAButton markup as every
 * other page, so the phone-tap conversion keeps firing.
 */
export function SituationPage({ entry, content }: { entry: WildlifeEntry; content: SituationContent }) {
  const phone = getPhone();
  const path = `/wildlife/${entry.slug}`;
  const visitSteps = [
    { term: "On arrival", detail: `We confirm the ${entry.singular.toLowerCase()} activity and check how it's getting in.` },
    { term: "During the visit", detail: "Removal is handled humanely, with care taken around your roofline and finishes." },
    { term: "Before we leave", detail: "We'll explain what we found, what we did, and how the animal got in." },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: entry.heading,
          serviceType: "Wildlife removal",
          description: entry.metaDescription,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Wildlife Removal", path: "/wildlife" },
          { name: entry.name, path },
        ])}
      />
      <JsonLd data={faqJsonLd(content.faqs)} />

      <section className="relative overflow-hidden border-b border-stone-300 py-16 sm:py-24">
        <Illustration
          id={entry.iconId}
          className="pointer-events-none absolute -right-16 -bottom-16 h-96 w-96 text-pine-600 opacity-[0.05]"
        />
        <Container className="relative max-w-3xl">
          <Link href="/wildlife" className="inline-block text-sm font-medium text-stone-500 hover:text-charcoal">
            &larr; Wildlife Removal
          </Link>
          <div className="mt-6 flex items-start gap-4">
            <Illustration id={entry.iconId} weight="bold" className="mt-1 h-12 w-12 shrink-0 text-pine-600 sm:h-14 sm:w-14" />
            <h1 className="text-balance font-display text-4xl leading-[1.04] text-charcoal sm:text-5xl">{entry.heading}</h1>
          </div>
          <p className="mt-6 font-display text-xl leading-snug text-pine-600 text-pretty sm:text-2xl">{content.subhead}</p>
          {content.keepLine && <p className="mt-3 text-lg leading-relaxed text-ink-700">{content.keepLine}</p>}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <CTAButton
              href={phone.href}
              size="lg"
              event="cta_call"
              eventMeta={{ location: `wildlife-${entry.slug}` }}
              className="w-full sm:w-auto"
            >
              {phone.display}
            </CTAButton>
            <CTAButton
              href="/contact"
              variant="outline"
              size="lg"
              event="cta_get_help_now"
              eventMeta={{ location: `wildlife-${entry.slug}` }}
              className="w-full font-semibold sm:w-auto"
            >
              {PRIMARY_CTA_LABEL}
            </CTAButton>
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-300 bg-bone-50 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl text-charcoal sm:text-3xl">{content.soundGuide.heading}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-700 sm:text-base">{content.soundGuide.intro}</p>
          <div
            className="mt-8 hidden grid-cols-[1.4fr_1fr_1.2fr] gap-6 text-xs font-semibold tracking-[0.14em] text-stone-500 uppercase sm:grid"
            aria-hidden="true"
          >
            <span>The sound</span>
            <span>When</span>
            <span>Most likely</span>
          </div>
          <ul className="mt-3 divide-y divide-stone-300 border-t border-b border-stone-300">
            {content.soundGuide.rows.map((row) => (
              <li key={row.sound} className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-[1.4fr_1fr_1.2fr] sm:gap-6">
                <div>
                  <span className="block text-xs font-semibold tracking-[0.14em] text-stone-500 uppercase sm:hidden">The sound</span>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink sm:mt-0">{row.sound}</p>
                </div>
                <div>
                  <span className="block text-xs font-semibold tracking-[0.14em] text-stone-500 uppercase sm:hidden">When</span>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-700 sm:mt-0">{row.when}</p>
                </div>
                <div>
                  <span className="block text-xs font-semibold tracking-[0.14em] text-stone-500 uppercase sm:hidden">Most likely</span>
                  <p className="mt-1 text-[15px] leading-relaxed font-medium text-pine-700 sm:mt-0">
                    {row.href ? (
                      <Link href={row.href} className="underline underline-offset-2 hover:text-pine-600">
                        {row.likely}
                      </Link>
                    ) : (
                      row.likely
                    )}
                  </p>
                  {row.note && <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{row.note}</p>}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="flex max-w-3xl flex-col gap-12 sm:gap-14">
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-2xl text-charcoal sm:text-3xl">{section.heading}</h2>
              <div className="mt-5 flex flex-col gap-4">
                {section.paragraphs.map((p) => (
                  <p key={p} className="text-[15px] leading-relaxed text-ink-700 text-pretty sm:text-base">
                    <RichText text={p} />
                  </p>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      {content.process && (
        <section className="border-t border-stone-300 bg-bone-50 py-16 sm:py-24">
          <Container className="max-w-3xl">
            <h2 className="font-display text-2xl text-charcoal sm:text-3xl">{content.process.heading}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-700 text-pretty sm:text-base">{content.process.intro}</p>

            <dl className="mt-8 flex flex-col gap-6 border-t border-stone-300 pt-8 sm:flex-row sm:gap-10">
              {visitSteps.map((step) => (
                <div key={step.term} className="sm:flex-1">
                  <dt className="font-display text-base text-pine-600">{step.term}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-ink-700">{step.detail}</dd>
                </div>
              ))}
            </dl>

            <ol className="mt-10 flex flex-col gap-4 border-t border-stone-300 pt-8">
              {content.process.steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="w-8 shrink-0 font-display text-2xl leading-none text-brass-400" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-relaxed text-ink-700 sm:text-base">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm leading-relaxed text-stone-500">{content.process.outro}</p>
          </Container>
        </section>
      )}

      {entry.repair && <RepairSection section={entry.repair} className="border-t border-stone-300" />}

      <section className="border-t border-stone-300 bg-bone-50 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl text-charcoal sm:text-3xl">{content.faqHeading}</h2>
          <div className="mt-10">
            <FAQAccordion items={content.faqs} />
          </div>
        </Container>
      </section>

      <RelatedWildlife currentSlug={entry.slug} />
      <FinalCTA />
    </>
  );
}
