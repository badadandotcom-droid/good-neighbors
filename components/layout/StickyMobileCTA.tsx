"use client";

import { usePathname } from "next/navigation";
import { CTAButton } from "@/components/shared/CTAButton";
import { Illustration } from "@/components/illustrations/Illustration";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";
import { getPhone } from "@/lib/config/resolvers";
import { trackEvent } from "@/lib/analytics";

/**
 * Mobile-only persistent conversion bar — the fastest path to a call or the form
 * from anywhere on the site.
 *
 * Both halves are filled buttons on purpose. The call used to be bare text on the
 * bar's own background, which read as a caption rather than a control, and it is
 * the action an urgent caller wants most.
 */
export function StickyMobileCTA() {
  const pathname = usePathname();
  const phone = getPhone();

  if (pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-300 bg-bone-50/95 backdrop-blur-md sm:hidden">
      <div className="flex gap-2.5 px-4 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
        <a
          href={phone.href}
          onClick={() => trackEvent("cta_call", { location: "sticky-mobile" })}
          className="flex flex-1 items-center justify-center gap-2 rounded-sm bg-pine-600 py-3.5 text-sm font-semibold text-bone-50 transition-colors active:bg-pine-700"
        >
          <Illustration id="phone-call" className="h-4 w-4 shrink-0" />
          Call Now
        </a>
        <CTAButton
          href="/contact"
          size="md"
          variant="outline"
          event="cta_get_help_now"
          eventMeta={{ location: "sticky-mobile" }}
          className="flex-1 py-3.5 text-sm font-semibold"
        >
          {PRIMARY_CTA_LABEL}
        </CTAButton>
      </div>
    </div>
  );
}
