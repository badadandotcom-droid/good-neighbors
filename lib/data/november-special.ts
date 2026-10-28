/**
 * ============================================================================
 * NOVEMBER SPECIAL — the one page on the site that carries a price
 * ============================================================================
 * Owner's call, Oct 28 2026 (via the ads chat, ADS 35): the site stays
 * price-free except this one test landing page for the November test ad.
 * The page says the price and what it covers, and nothing more (owner, Oct 28,
 * 2:57 AM to 9:22 AM; ADS 35's note of 9:25 AM): one entry hole, every animal
 * that got into the home through it removed, and that hole sealed. A second
 * hole and anything else the job needs are quoted on site, never on the page.
 * No regular price, no what-if cases, no FAQ, no "starting at" or "from".
 *
 * Off the site menus, off the /wildlife index, out of the sitemap and
 * `noindex`: the page is reached from the ad only (the offer is dated). Live
 * Nov 1, taken down Dec 1.
 *
 * The only dollar figure on the page is $699, plus the $5 million insurance
 * line in the trust row; scripts/checks/crawl.mjs allows the price on this
 * page only.
 */

export const NOVEMBER_SPECIAL_PATH = "/november-special";

export const NOVEMBER_SPECIAL = {
  /** The bare title; the layout appends " | Good Neighbors Wildlife". */
  title: "November Special: $699 + HST",
  h1: "November Special: $699 + HST",
  /**
   * Directly under the H1: what the price covers, and nothing else. The ads
   * chat's line said "one animal"; the price covers every animal that came in
   * through the one hole, babies included (owner's price rule), so it says so.
   */
  coverLine: "Covers removing every animal that got into your home through one entry hole, and sealing that hole.",
  metaDescription:
    "November special: $699 plus HST. Covers removing every animal that got into your home through one entry hole, and sealing that hole. Calls answered 24/7.",
};
