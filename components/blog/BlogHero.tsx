import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { HelpLink } from "@/components/shared/HelpLink";
import { CallNote, TrustRow } from "@/components/shared/TrustRow";
import { getPhone } from "@/lib/config/resolvers";

/**
 * The hero for /blog and every post: the same header, Call button, 24/7 line,
 * Google rating line and trust row as the site's landing pages, in the same
 * phone order (back link, kicker, H1, guarantee, the big Call button, then the
 * line under the H1), so the Call button sits on the first phone screen
 * (GNW Blog 1's note, Nov 3 2026). `guarantee={false}` leaves the lifetime
 * guarantee line off, for posts about jobs that seal nothing (lib/blog.ts).
 */
export function BlogHero({
  back,
  kicker,
  heading,
  lead,
  guarantee,
  location,
}: {
  back?: { label: string; href: string };
  kicker?: ReactNode;
  heading: string;
  lead: string;
  guarantee: boolean;
  location: string;
}) {
  const phone = getPhone();

  return (
    <section className="border-b border-stone-300 bg-bone-50 py-14 sm:py-24">
      <Container className="relative flex max-w-3xl flex-col sm:block">
        {back && (
          <Link href={back.href} className="order-1 inline-block self-start text-sm font-medium text-stone-500 hover:text-charcoal">
            &larr; {back.label}
          </Link>
        )}
        {kicker && (
          <p className="order-2 mt-5 text-xs font-semibold tracking-[0.14em] text-stone-500 uppercase sm:mt-6">{kicker}</p>
        )}
        <h1 className="order-3 mt-3 text-balance font-display text-4xl leading-[1.04] text-charcoal sm:text-5xl">{heading}</h1>
        <p className="order-8 mt-6 max-w-2xl text-lg leading-relaxed text-ink-700 text-pretty sm:mt-6 sm:text-xl">{lead}</p>
        <div className="order-5 mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
          <CTAButton href={phone.href} size="lg" event="cta_call" eventMeta={{ location }} className="w-full sm:w-auto">
            Call {phone.display}
          </CTAButton>
          <CallNote />
          <HelpLink location={location} />
        </div>
        <TrustRow mobileOrder guarantee={guarantee} />
      </Container>
    </section>
  );
}
