import { COST_PAGE } from "@/lib/cost-page";
import { YELLOW_JACKET_PAGE } from "@/lib/yellow-jacket-page";

/**
 * Ad-group landing pages beyond the homepage and the city pages. Each one listed here goes in the
 * sitemap and in the footer's links on every page. Add a new page here when it goes live.
 */
export const LANDING_PAGES: readonly { href: string; label: string }[] = [
  { href: COST_PAGE.href, label: "Wasp nest removal cost" },
  { href: YELLOW_JACKET_PAGE.href, label: "Yellow jacket removal" },
];
