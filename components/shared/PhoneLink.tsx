"use client";

import { Illustration } from "@/components/illustrations/Illustration";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import type { PhoneConfig } from "@/lib/types";

export function PhoneLink({
  phone,
  className,
  showIcon = true,
  location,
}: {
  phone: PhoneConfig;
  className?: string;
  showIcon?: boolean;
  location?: string;
}) {
  return (
    <a
      href={phone.href}
      onClick={() => trackEvent("cta_call", { location })}
      className={cn("inline-flex items-center gap-2 font-medium tabular-nums", className)}
    >
      {showIcon && <Illustration id="phone-call" className="h-4 w-4 shrink-0" />}
      {phone.display}
    </a>
  );
}
