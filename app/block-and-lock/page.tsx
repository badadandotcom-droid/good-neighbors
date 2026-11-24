import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { HelpLink } from "@/components/shared/HelpLink";
import { CallNote, TrustRow } from "@/components/shared/TrustRow";
import { GuaranteeBlock } from "@/components/shared/GuaranteeBlock";
import { RichText } from "@/components/shared/RichText";
import { JsonLd } from "@/components/shared/JsonLd";
import { Illustration } from "@/components/illustrations/Illustration";
import { getPhone } from "@/lib/config/resolvers";
import { BLOCK_AND_LOCK, BLOCK_AND_LOCK_PATH } from "@/lib/data/block-and-lock";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

/**
 * Block and Lock: whole-house sealing (owner, Nov 23-24 2026). The copy and
 * the owner's rules are in lib/data/block-and-lock.ts. The hero is the landing
 * pages' own: H1, guarantee line, the big Call button with the 24/7 and rating
 * lines, Get Help Now, trust row (the job seals entry points, so the guarantee
 * applies). In the sitemap; not in the menus or the footer yet (a footer link
 * touches every page, so it waits for the ads chat). No ad lands here.
 */
export const metadata: Metadata = pageMetadata({
  title: BLOCK_AND_LOCK.title,
  description: BLOCK_AND_LOCK.metaDescription,
  path: BLOCK_AND_LOCK_PATH,
});

const H2 = "font-display text-2xl text-charcoal sm:text-3xl";
const P = "text-[15px] leading-relaxed text-ink-700 text-pretty sm:text-base";

function Prose({ heading, paragraphs }: { heading: string; paragraphs: string[] }) {
  return (
    <div>
      <h2 className={H2}>{heading}</h2>
      <div className="mt-5 flex flex-col gap-4">
        {paragraphs.map((p) => (
          <p key={p} className={P}>
            <RichText text={p} />
          </p>
        ))}
      </div>
    </div>
  );
}

export default function BlockAndLockPage() {
  const phone = getPhone();
  const c = BLOCK_AND_LOCK;

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: c.h1,
          serviceType: "Animal exclusion and entry point sealing",
          description: c.metaDescription,
          path: BLOCK_AND_LOCK_PATH,
        })}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: "Block and Lock", path: BLOCK_AND_LOCK_PATH }])} />

      <section className="relative overflow-hidden border-b border-stone-300 py-16 sm:py-24">
        <Illustration
          id="attic"
          className="pointer-events-none absolute -right-16 -bottom-16 h-96 w-96 text-pine-600 opacity-[0.05]"
        />
        <Container className="relative flex max-w-3xl flex-col sm:block">
          <Link href="/wildlife" className="order-1 inline-block self-start text-sm font-medium text-stone-500 hover:text-charcoal">
            &larr; Wildlife Removal
          </Link>
          <h1 className="order-3 mt-6 text-balance font-display text-4xl leading-[1.04] text-charcoal sm:text-5xl">{c.h1}</h1>
          <div className="order-5 mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            <CTAButton
              href={phone.href}
              size="lg"
              event="cta_call"
              eventMeta={{ location: "block-and-lock" }}
              className="w-full sm:w-auto"
            >
              Call {phone.display}
            </CTAButton>
            <CallNote />
            <HelpLink location="block-and-lock" />
          </div>
          <TrustRow mobileOrder />
          <div className="order-8 mt-8 flex flex-col gap-4">
            {c.intro.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-ink-700 text-pretty">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-300 py-16 sm:py-24">
        <Container className="flex max-w-3xl flex-col gap-12 sm:gap-14">
          <Prose heading={c.scope.heading} paragraphs={c.scope.paragraphs} />

          <div>
            <h2 className={H2}>{c.checks.heading}</h2>
            <ul className="mt-5 flex list-disc flex-col gap-2 pl-5">
              {c.checks.items.map((item) => (
                <li key={item} className={P}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={H2}>{c.steps.heading}</h2>
            <ol className="mt-5 flex list-decimal flex-col gap-3 pl-5">
              {c.steps.items.map((step) => (
                <li key={step.title} className={P}>
                  <strong className="font-semibold text-charcoal">{step.title}</strong>
                  {step.text && <> {step.text}</>}
                </li>
              ))}
            </ol>
          </div>

          <Prose heading={c.method.heading} paragraphs={c.method.paragraphs} />

          <div>
            <GuaranteeBlock />
            <div className="mt-6 flex flex-col gap-4">
              {c.afterGuarantee.map((p) => (
                <p key={p} className={P}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          <Prose heading={c.job.heading} paragraphs={c.job.paragraphs} />
          <Prose heading={c.renters.heading} paragraphs={c.renters.paragraphs} />
          <Prose heading={c.inside.heading} paragraphs={c.inside.paragraphs} />
        </Container>
      </section>

      <section className="bg-pine-700 py-14 text-bone-50 sm:py-24">
        <Container className="flex max-w-3xl flex-col items-start gap-6">
          <h2 className="text-balance font-display text-4xl leading-[1.08] text-bone-50 sm:text-5xl">{c.book.heading}</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-pine-100 text-pretty">{c.book.text}</p>
          <CTAButton
            href={phone.href}
            size="lg"
            variant="secondary"
            event="cta_call"
            eventMeta={{ location: "block-and-lock-book" }}
            className="w-full font-semibold sm:w-auto"
          >
            Call {phone.display}
          </CTAButton>
        </Container>
      </section>
    </>
  );
}
