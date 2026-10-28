import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { HelpLink } from "@/components/shared/HelpLink";
import { CallNote, TrustRow } from "@/components/shared/TrustRow";
import { JsonLd } from "@/components/shared/JsonLd";
import { Illustration } from "@/components/illustrations/Illustration";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getPhone } from "@/lib/config/resolvers";
import { NOVEMBER_SPECIAL, NOVEMBER_SPECIAL_PATH } from "@/lib/data/november-special";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

/**
 * The November special test landing page (owner and the ads chat, Oct 28
 * 2026). The one page on the site with a price, and deliberately short: the
 * price, what it covers, and the same Call button, 24/7 and rating lines,
 * Get Help Now (photos and text) and trust row as every other landing page,
 * then the site's closing band. The copy and the rules are in
 * lib/data/november-special.ts. Reached from the test ad only: not in the
 * menus, not on the /wildlife index, not in the sitemap, and `noindex`.
 * Phone order (TrustRow mobileOrder): back link, H1, the cover line, the
 * guarantee line (both order 4, in that order), the Call button with the 24/7
 * and rating lines under it, Get Help Now, insurance.
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
          <p className="order-4 mt-3 max-w-xl font-display text-lg leading-snug text-pine-700 text-pretty sm:mt-5 sm:text-xl">
            {c.coverLine}
          </p>
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

      <FinalCTA />
    </>
  );
}
