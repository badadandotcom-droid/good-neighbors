"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { trackEvent, type ConversionEvent } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "ghost" | "outline-on-dark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-pine-600 text-bone-50 hover:bg-pine-700 active:bg-pine-700",
  secondary: "bg-bone-50 text-ink border border-stone-400 hover:border-ink hover:bg-white",
  ghost: "text-ink hover:text-pine-600",
  "outline-on-dark": "border border-bone-50/40 text-bone-50 hover:bg-bone-50/10",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-[15px] rounded-sm",
  lg: "px-7 py-4 text-base rounded-sm",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  event,
  eventMeta,
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  event?: ConversionEvent;
  eventMeta?: Record<string, string | number | boolean | undefined>;
  onClick?: () => void;
}) {
  const handleClick = () => {
    if (event) trackEvent(event, eventMeta);
    onClick?.();
  };

  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} onClick={handleClick} className={cn(base, variants[variant], sizes[size], className)}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
}
