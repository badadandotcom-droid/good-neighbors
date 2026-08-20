"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { PhoneLink } from "@/components/shared/PhoneLink";
import { BRAND, NAV_ITEMS, PRIMARY_CTA_LABEL } from "@/lib/config/site";
import { getPhone } from "@/lib/config/resolvers";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const phone = getPhone();

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-stone-300 bg-bone/90 backdrop-blur-md">
      <Container className="flex h-[68px] items-center justify-between sm:h-20">
        <Link href="/" className="font-display text-xl tracking-tight text-charcoal sm:text-2xl">
          {BRAND.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-1 text-[15px] font-medium text-ink-700 transition-colors hover:text-charcoal"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-pine-500 transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex">
            <PhoneLink phone={phone} location="header" className="text-sm text-ink-700 hover:text-charcoal" />
          </span>
          <span className="hidden sm:inline-flex">
            <CTAButton href="/contact" size="md" event="cta_get_help_now" eventMeta={{ location: "header" }}>
              {PRIMARY_CTA_LABEL}
            </CTAButton>
          </span>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-px w-5 bg-charcoal transition-transform duration-200",
                  open && "translate-y-[7px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-charcoal transition-opacity duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-px w-5 bg-charcoal transition-transform duration-200",
                  open && "-translate-y-[7px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </Container>
      </header>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-[68px] bottom-0 z-40 overflow-y-auto bg-bone transition-[opacity,visibility] duration-200 sm:top-20 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-stone-200 py-4 font-display text-2xl text-charcoal"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-4">
            <CTAButton
              href="/contact"
              size="lg"
              event="cta_get_help_now"
              eventMeta={{ location: "mobile-nav" }}
              onClick={closeMenu}
            >
              {PRIMARY_CTA_LABEL}
            </CTAButton>
            <PhoneLink phone={phone} location="mobile-nav" className="justify-center text-lg text-ink-700" />
          </div>
        </Container>
      </div>
    </>
  );
}
