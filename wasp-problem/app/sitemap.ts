import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/site";
import { CITY_LOCATIONS } from "@/lib/locations";
import { LANDING_PAGES } from "@/lib/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BRAND.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...LANDING_PAGES.map((page) => ({
      url: new URL(page.href, BRAND.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...CITY_LOCATIONS.map((location) => ({
      url: new URL(location.href, BRAND.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
