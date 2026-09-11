import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { PhoneLink } from "@/components/PhoneLink";
import { StickyCallBar } from "@/components/StickyCallBar";
import { BRAND, GA_MEASUREMENT_ID, PHONE_TOLLFREE, SERVICE_AREAS } from "@/lib/site";

const HOME_TITLE = "Wasp Nest Removal – Toronto & the GTA";

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${HOME_TITLE} | ${BRAND.name}`,
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
    card: "summary",
    title: HOME_TITLE,
    description: BRAND.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffd400",
};

function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "PestControl",
    name: BRAND.name,
    description: BRAND.description,
    url: BRAND.url,
    telephone: PHONE_TOLLFREE.href.replace("tel:", ""),
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
    <html lang="en">
      <body className="pb-16 antialiased sm:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-sm focus:bg-black focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <header className="flex items-center justify-between gap-3 bg-black px-3 py-3 sm:px-4">
          <Link href="/" className="flex min-w-0 items-center gap-1">
            {/* eslint-disable-next-line @next/next/no-img-element -- tiny static brand mark, no benefit from next/image here */}
            <img
              src="/brand/wasp-icon-header.png"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 shrink-0 rounded-sm"
            />
            <span className="truncate text-xs font-black tracking-tight text-yellow uppercase min-[375px]:text-sm">
              Wasp Problem
            </span>
          </Link>
          <PhoneLink
            location="header"
            className="whitespace-nowrap rounded-sm bg-yellow px-2.5 py-1.5 text-sm font-black tracking-tight text-black"
          >
            {PHONE_TOLLFREE.display}
          </PhoneLink>
        </header>
        <main id="main-content">{children}</main>
        <StickyCallBar />
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
