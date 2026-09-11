"use client";

import { trackEvent } from "@/lib/analytics";
import { PHONE_TOLLFREE } from "@/lib/site";

type PhoneNumber = { display: string; href: string };

/**
 * Every clickable phone number on the site routes through here so click
 * tracking is never missed. Defaults to the toll-free number — the primary
 * branded CTA everywhere — so call sites only need to pass `number` when
 * they're deliberately linking the local secondary number instead.
 */
export function PhoneLink({
  className,
  location,
  number = PHONE_TOLLFREE,
  children,
}: {
  className?: string;
  location: string;
  number?: PhoneNumber;
  children: React.ReactNode;
}) {
  return (
    <a
      href={number.href}
      onClick={() => trackEvent("cta_call", { location, number: number.display })}
      className={className}
    >
      {children}
    </a>
  );
}
