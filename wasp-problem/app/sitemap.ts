import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/site";
import { CITY_LOCATIONS } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BRAND.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...CITY_LOCATIONS.map((location) => ({
      url: new URL(location.href, BRAND.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
