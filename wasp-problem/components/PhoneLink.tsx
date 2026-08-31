"use client";

import { trackEvent } from "@/lib/analytics";
import { PHONE } from "@/lib/site";

/** Every clickable phone number on the site routes through here so click tracking is never missed. */
export function PhoneLink({
  className,
  location,
  children,
}: {
  className?: string;
  location: string;
  children: React.ReactNode;
}) {
  return (
    <a href={PHONE.href} onClick={() => trackEvent("cta_call", { location })} className={className}>
      {children}
    </a>
  );
}
