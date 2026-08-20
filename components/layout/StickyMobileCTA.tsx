"use client";

import { usePathname } from "next/navigation";
import { CTAButton } from "@/components/shared/CTAButton";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";
import { getPhone } from "@/lib/config/resolvers";
import { trackEvent } from "@/lib/analytics";

/** Mobile-only persistent conversion bar — the fastest path to a call or the form from anywhere on the site. */
export function StickyMobileCTA() {
  const pathname = usePathname();
  const phone = getPhone();

  if (pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-px border-t border-stone-300 bg-bone-50/95 backdrop-blur-md sm:hidden">
      <a
        href={phone.href}
        onClick={() => trackEvent("cta_call", { location: "sticky-mobile" })}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-medium text-ink"
      >
        Call Now
      </a>
      <CTAButton
        href="/contact"
        size="md"
        event="cta_get_help_now"
        eventMeta={{ location: "sticky-mobile" }}
        className="flex-[1.4] rounded-none py-3.5"
      >
        {PRIMARY_CTA_LABEL}
      </CTAButton>
    </div>
  );
}
