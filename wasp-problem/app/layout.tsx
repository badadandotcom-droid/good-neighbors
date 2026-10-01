import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Anton, Archivo, Manrope } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { PhoneLink } from "@/components/PhoneLink";
import { StickyCallBar } from "@/components/StickyCallBar";
import { TextLink } from "@/components/TextLink";
import { BRAND, GA_MEASUREMENT_ID, PHONE_LOCAL, PHONE_TOLLFREE, SERVICE_AREAS } from "@/lib/site";
import { PRICING } from "@/lib/pricing";

/** Sign face — the heavy condensed grotesque matching the lawn-sign lettering. Used only for the "WASP PROBLEM?" lockup. */
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

/**
 * Owner-specified homepage title (it already ends with the brand, so it bypasses the
 * template). The asterisk is the owner's: it points to "based on availability" on
 * the page, since a title has no room for the qualifier itself.
 */
const HOME_TITLE = "Wasp Nest Removal Toronto & GTA | 24/7 Same-Day Service* | Wasp Problem";

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: HOME_TITLE,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
  alternates: { canonical: BRAND.url },
  openGraph: {
    title: HOME_TITLE,
    description: BRAND.description,
    url: BRAND.url,
    siteName: BRAND.name,
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: BRAND.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

/** Phone calls answered around the clock — see AVAILABILITY_24_7 in lib/site.ts. 00:00–23:59 is how schema.org expresses a full day. */
const OPEN_24_7 = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  opens: "00:00",
  closes: "23:59",
};

/** PestControl is a schema.org LocalBusiness subtype, so this is the LocalBusiness markup. */
function localBusinessJsonLd() {
  const amounts = PRICING.map((item) => item.amount);
  return {
    "@context": "https://schema.org",
    "@type": "PestControl",
    name: BRAND.name,
    description: BRAND.description,
    url: BRAND.url,
    telephone: PHONE_LOCAL.href.replace("tel:", ""),
    contactPoint: [PHONE_TOLLFREE, PHONE_LOCAL].map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone.href.replace("tel:", ""),
      contactType: "customer service",
      areaServed: "CA",
      availableLanguage: "en",
      hoursAvailable: OPEN_24_7,
    })),
    openingHoursSpecification: OPEN_24_7,
    priceRange: `$${Math.min(...amounts)}-$${Math.max(...amounts)}`,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
      ...SERVICE_AREAS.map((city) => ({ "@type": "City", name: city })),
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable} ${manrope.variable}`}>
      <body className="pb-16 antialiased sm:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <header className="border-b-[3px] border-yellow bg-black">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-3 py-3 sm:px-5">
            <Link href="/" prefetch={false} className="flex min-h-11 min-w-0 items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element -- tiny static brand mark, no benefit from next/image here */}
              <img
                src="/brand/wasp-icon-header.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 shrink-0 rounded-md"
              />
              <span className="truncate font-display text-xs font-extrabold tracking-tight text-white uppercase min-[375px]:text-sm">
                Wasp Problem
              </span>
            </Link>
            <div className="flex shrink-0 items-center gap-2">
              {/* The 416 line takes calls and texts, so each action gets its own link: this one calls, the next one texts. */}
              <PhoneLink
                number={PHONE_LOCAL}
                location="header-local"
                className="btn hidden min-h-11 border-[1.5px] border-white/30 bg-transparent px-4 py-2 text-sm text-white hover:border-white hover:bg-white/10 md:inline-flex"
              >
                Call {PHONE_LOCAL.display}
              </PhoneLink>
              <TextLink
                location="header-text"
                ariaLabel={`Text ${PHONE_LOCAL.display}`}
                className="btn hidden min-h-11 border-[1.5px] border-white/30 bg-transparent px-4 py-2 text-sm text-white hover:border-white hover:bg-white/10 md:inline-flex"
              >
                Text us
              </TextLink>
              <PhoneLink
                location="header"
                className="btn btn-primary min-h-11 shadow-none whitespace-nowrap px-3 py-2 text-sm"
              >
                {PHONE_TOLLFREE.display}
              </PhoneLink>
            </div>
          </div>
        </header>
        <main id="main-content">{children}</main>
        <StickyCallBar />
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
