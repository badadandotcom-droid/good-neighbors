import { Fraunces } from "next/font/google";

/**
 * Fraunces italic is used in exactly three places: the positioning line in the
 * homepage hero, on the Wildlife Removal index, and on the region hubs. It has
 * its own font declaration, imported only by those three. Declared in the root
 * layout beside the upright Fraunces, it was preloaded (about 118 KB) on every
 * page, including the ad landing pages that never show an italic.
 *
 * `preload: false`: /service-areas/[slug] serves the hubs and the city pages
 * from one route and Next preloads per route, so with preloading on every city
 * page would still fetch the italic. Without it, the browser downloads the file
 * only where an element actually uses it.
 *
 * Use `frauncesItalic.className` in place of `font-display italic`; it sets the
 * family and the italic style together, with the same fallback stack as
 * --font-display.
 */
export const frauncesItalic = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  axes: ["opsz"],
  display: "swap",
  preload: false,
  fallback: ["Iowan Old Style", "Georgia", "serif"],
});
