"use client";

import { trackEvent } from "@/lib/analytics";
import { PHONE_LOCAL } from "@/lib/site";

/**
 * Text Us action — hardcoded to the local number's sms: link. No `number`
 * prop by design: the toll-free number's texting capability isn't
 * confirmed, so it should never be reachable through this component.
 */
export function TextLink({
  className,
  location,
  ariaLabel,
  children,
}: {
  className?: string;
  location: string;
  /** Use when the visible label is abbreviated, so the accessible name still names the number. */
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={PHONE_LOCAL.smsHref}
      onClick={() => trackEvent("cta_text", { location })}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
