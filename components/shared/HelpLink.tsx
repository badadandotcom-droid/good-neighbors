"use client";

import Link from "next/link";
import { CTAButton } from "@/components/shared/CTAButton";
import { trackEvent } from "@/lib/analytics";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";

/**
 * The hero's second call to action. On a phone it is a plain text link under
 * the Call button, so the Call button is the one big button on the first
 * screen (owner, Oct 27 2026, via the ads chat: a day of ad clicks brought no
 * calls); from `sm` up it is the outline button it always was. Same /contact
 * link and the same cta_get_help_now event either way. The sticky bottom bar
 * keeps its own Get Help Now button.
 */
export function HelpLink({ location }: { location: string }) {
  return (
    <>
      <Link
        href="/contact"
        onClick={() => trackEvent("cta_get_help_now", { location })}
        className="self-start text-base font-semibold text-pine-700 underline underline-offset-4 sm:hidden"
      >
        {PRIMARY_CTA_LABEL}
      </Link>
      <div className="hidden sm:contents">
        <CTAButton
          href="/contact"
          variant="outline"
          size="lg"
          event="cta_get_help_now"
          eventMeta={{ location }}
          className="font-semibold"
        >
          {PRIMARY_CTA_LABEL}
        </CTAButton>
      </div>
    </>
  );
}
