import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { Illustration } from "@/components/illustrations/Illustration";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CallNote, TrustRow } from "@/components/shared/TrustRow";
import { JsonLd } from "@/components/shared/JsonLd";
import { PhotoPlaceholder } from "@/components/shared/PhotoPlaceholder";
import { RepairSection } from "@/components/shared/RepairSection";
import { RichText } from "@/components/shared/RichText";
import { RelatedWildlife } from "@/components/wildlife/RelatedWildlife";
import { getPhone } from "@/lib/config/resolvers";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";
import type { SituationContent } from "@/lib/data/situations";
import type { WildlifeEntry } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * The long-form template for the two "situation" pages (something in the
 * attic / in the walls) and, since Oct 2026, the raccoon, squirrel and bird pages:
 * an optional sound guide, a section per topic, the reasons not to wait or
 * DIY, how a visit goes, the page's own sealing-and-repair block with the
 * lifetime guarantee, and a FAQ with matching FAQPage schema.
 *
 * A species page keeps the live page's hero (photo, intro paragraph) and its
 * signs and areas lists word for word, adds the trust row under the buttons,
 * and skips the sound guide. A situation page renders exactly as before.
 * Phone and Get Help Now buttons are the same CTAButton markup as every
 * other page, so the phone-tap conversion keeps firing.
 */
export function SituationPage({
  entry,
  content,
  hero,
}: {
  entry: WildlifeEntry;
  content: SituationContent;
  /** Species pages: the photo tone and side, as the short species template chooses them. */
  hero?: { tone: "pine" | "wood" | "charcoal"; imageOnLeft: boolean };
}) {
  const phone = getPhone();
  const path = `/wildlife/${entry.slug}`;
  const isSpecies = entry.category === "species";
  const visitSteps = content.visitSteps ?? [
    { term: "On arrival", detail: `We confirm the ${entry.singular.toLowerCase()} activity and check how it's getting in.` },
    {
      term: "During the visit",
      detail: entry.visitNote ?? "Removal is handled humanely, with care taken around your roofline and finishes.",
    },
    { term: "Before we leave", detail: "We'll explain what we found, what we did, and how the animal got in." },
  ];

  const ctas = (
    <div className="order-5 mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
      <CTAButton
        href={phone.href}
        size="lg"
        event="cta_call"
        eventMeta={{ location: `wildlife-${entry.slug}` }}
        className="w-full sm:w-auto"
      >
        Call {phone.display}
      </CTAButton>
      <CallNote />
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
  );

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: entry.heading,
          serviceType: entry.serviceType ?? (isSpecies ? `${entry.singular} removal` : "Wildlife removal"),
          description: entry.metaDescription,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Wildlife Removal", path: "/wildlife" },
          { name: isSpecies ? entry.heading : entry.name, path },
        ])}
      />
      <JsonLd data={faqJsonLd(content.faqs)} />

      {isSpecies ? (
        <section className="border-b border-stone-300 py-16 sm:py-24">
          <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className={cn("flex flex-col sm:block lg:col-span-7", hero?.imageOnLeft && "lg:order-2")}>
              <Link href="/wildlife" className="order-1 self-start text-sm font-medium text-stone-500 hover:text-charcoal">
                &larr; Wildlife Removal
              </Link>
              <div className="order-3 mt-4 flex items-center gap-4">
                <Image
                  src={`/images/wildlife-icons/${entry.iconId}.png`}
                  alt=""
                  aria-hidden="true"
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 object-contain"
                />
                <h1 className="text-balance font-display text-4xl leading-[1.02] text-charcoal sm:text-5xl">
                  {entry.heading}
                </h1>
              </div>
              <p className="order-8 mt-8 font-display text-xl leading-snug text-pine-600 text-pretty sm:mt-6 sm:text-2xl">{content.subhead}</p>
              <p className="order-9 mt-4 max-w-lg text-lg leading-relaxed text-ink-700 text-pretty">{entry.intro}</p>
              {ctas}
              {content.trustRow && <TrustRow mobileOrder guarantee={content.trustRow !== "no-guarantee"} />}
            </div>
            <div className={cn("lg:col-span-5", hero?.imageOnLeft && "lg:order-1")}>
              <PhotoPlaceholder
                slot="detail"
                icon={entry.iconId}
                tone={hero?.tone ?? "pine"}
                corner={hero?.imageOnLeft ? "top-left" : "bottom-right"}
                aspect="aspect-[4/3]"
                note={entry.photoOverride ? entry.photoAlt : "A Good Neighbors technician cutting wire mesh to seal an entry point"}
                src={entry.photoOverride}
              />
            </div>
          </Container>
        </section>
      ) : (
        <section className="relative overflow-hidden border-b border-stone-300 py-16 sm:py-24">
          <Illustration
            id={entry.iconId}
            className="pointer-events-none absolute -right-16 -bottom-16 h-96 w-96 text-pine-600 opacity-[0.05]"
          />
          <Container className="relative flex max-w-3xl flex-col sm:block">
            <Link href="/wildlife" className="order-1 inline-block self-start text-sm font-medium text-stone-500 hover:text-charcoal">
              &larr; Wildlife Removal
            </Link>
            <div className="order-3 mt-6 flex items-start gap-4">
              <Illustration id={entry.iconId} weight="bold" className="mt-1 h-12 w-12 shrink-0 text-pine-600 sm:h-14 sm:w-14" />
              <h1 className="text-balance font-display text-4xl leading-[1.04] text-charcoal sm:text-5xl">{entry.heading}</h1>
            </div>
            <p className="order-8 mt-8 font-display text-xl leading-snug text-pine-600 text-pretty sm:mt-6 sm:text-2xl">{content.subhead}</p>
            {content.keepLine && <p className="order-9 mt-3 text-lg leading-relaxed text-ink-700">{content.keepLine}</p>}
            {ctas}
            {content.trustRow && <TrustRow mobileOrder guarantee={content.trustRow !== "no-guarantee"} />}
          </Container>
        </section>
      )}

      {content.signs && (
        <section className="border-b border-stone-300 bg-bone-50 py-16 sm:py-24">
          <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-display text-2xl text-charcoal sm:text-3xl">{content.signs.heading}</h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-700 text-pretty sm:text-base">{content.signs.intro}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {entry.commonSigns.map((sign) => (
                  <li key={sign} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-700 sm:text-base">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-pine-500" aria-hidden="true" />
                    {sign}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="border-t-2 border-brass-400 pt-5">
                <h3 className="font-display text-lg text-charcoal">Where it usually happens</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {entry.commonAreas.map((area) => (
                    <li key={area} className="rounded-full border border-stone-300 bg-white px-3 py-1 text-xs font-medium text-ink-700">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
              {entry.relatedNote && (
                <p className="mt-8 text-sm leading-relaxed text-ink-700 text-pretty">
                  <RichText text={entry.relatedNote} />
                </p>
              )}
            </aside>
          </Container>
        </section>
      )}

      {content.soundGuide && (
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
      )}

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
                  <p className="text-[15px] leading-relaxed text-ink-700 sm:text-base">
                    <RichText text={step} />
                  </p>
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
