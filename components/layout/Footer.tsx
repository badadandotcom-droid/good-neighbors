import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { PhoneLink } from "@/components/shared/PhoneLink";
import { BRAND, CONTACT } from "@/lib/config/site";
import { getPhone, getPositioningLine } from "@/lib/config/resolvers";
import { getActiveMarkets, marketHref } from "@/lib/data/markets";
import { getSpeciesEntries } from "@/lib/data/wildlife";

export function Footer() {
  const phone = getPhone();
  const species = getSpeciesEntries();
  const markets = getActiveMarkets();

  return (
    <footer className="border-t border-stone-300 bg-charcoal text-bone-100">
      <Container className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 sm:py-20 lg:grid-cols-5">
        <div className="col-span-2 pr-4 lg:col-span-2">
          <Link href="/" className="font-display text-2xl text-bone-50">
            {BRAND.name}
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-300">
            {getPositioningLine()} Serving homeowners across {BRAND.foundingRegion}.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm">
            <PhoneLink phone={phone} location="footer" className="text-bone-50 hover:text-pine-100" />
            <a href={`mailto:${CONTACT.email}`} className="text-stone-300 hover:text-bone-50">
              {CONTACT.email}
            </a>
          </div>
        </div>

        <FooterColumn
          title="Wildlife Removal"
          links={[
            { label: "All Wildlife Services", href: "/wildlife" },
            ...species.map((s) => ({ label: s.name, href: `/wildlife/${s.slug}` })),
          ]}
        />

        <FooterColumn
          title="Service Areas"
          links={[
            { label: "All Service Areas", href: "/service-areas" },
            ...markets.map((m) => ({ label: m.displayName, href: marketHref(m) })),
          ]}
        />

        <FooterColumn
          title="Company"
          links={[
            { label: "About", href: "/about" },
            { label: "Property Care", href: "/property-care" },
            { label: "FAQ", href: "/faq" },
            { label: "Contact", href: "/contact" },
          ]}
        />
      </Container>

      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-stone-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.
        </p>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-bone-100">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-bone-100">
            Terms of Service
          </Link>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-[0.14em] text-stone-400 uppercase">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-stone-300 hover:text-bone-50">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
