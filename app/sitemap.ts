import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/config/site";
import { MARKETS, marketHref } from "@/lib/data/markets";
import { WILDLIFE } from "@/lib/data/wildlife";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/wildlife", "/service-areas", "/about", "/contact", "/faq", "/property-care"];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: new URL(path, BRAND.url).toString(),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/contact" ? 0.9 : 0.7,
  }));

  for (const entry of WILDLIFE) {
    entries.push({
      url: new URL(`/wildlife/${entry.slug}`, BRAND.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const market of MARKETS) {
    entries.push({
      url: new URL(marketHref(market), BRAND.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: market.status === "active" ? 0.8 : 0.5,
    });
  }

  return entries;
}
