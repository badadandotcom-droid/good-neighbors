import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PhoneLink } from "@/components/PhoneLink";
import { StickyCallBar } from "@/components/StickyCallBar";
import { BRAND, PHONE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: "Wasp Removal Toronto | Wasp Problem",
  description: BRAND.description,
  alternates: { canonical: BRAND.url },
  icons: { icon: "/icon", apple: "/apple-icon" },
  openGraph: {
    title: "Wasp Removal Toronto | Wasp Problem",
    description: BRAND.description,
    url: BRAND.url,
    siteName: BRAND.name,
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary",
    title: "Wasp Removal Toronto | Wasp Problem",
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
    telephone: PHONE.href.replace("tel:", ""),
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Toronto and the Greater Toronto Area",
    },
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
        <header className="flex items-center justify-between gap-3 bg-black px-4 py-3">
          <span className="text-sm font-black tracking-tight text-yellow uppercase">
            Wasp Problem
          </span>
          <PhoneLink
            location="header"
            className="rounded-sm bg-yellow px-3 py-1.5 text-sm font-black tracking-tight text-black"
          >
            {PHONE.display}
          </PhoneLink>
        </header>
        <main id="main-content">{children}</main>
        <StickyCallBar />
      </body>
    </html>
  );
}
