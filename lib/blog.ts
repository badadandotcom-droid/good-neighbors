import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { getSituationContent } from "@/lib/data/situations";
import { getSpeciesPageContent } from "@/lib/data/species-pages";
import { getWildlifeBySlug } from "@/lib/data/wildlife";
import { CITIES, cityHeading, cityHref } from "@/lib/data/cities";
import { MARKETS, marketHref } from "@/lib/data/markets";
import { DAMAGE_REPAIR_PATH } from "@/lib/data/repairs";

/**
 * The blog (owner, Nov 2–3 2026, via GNW Blog 1): one markdown file per post
 * in `content/blog/`, read at build time. A post goes live by commit and
 * push; Vercel builds the pages. No webhook, no database, no client script.
 *
 * Front matter (the fields GNW Blog 1 asked for, plus two optional ones):
 *   title          the H1 and the page title (the layout adds " | Good Neighbors Wildlife")
 *   slug           the URL under /blog/ (must match the file name)
 *   description    the meta description, also the line under the H1
 *   date           YYYY-MM-DD, the day the post went live (newest first on /blog)
 *   primaryKeyword the search phrase the post is written for (kept in the
 *                  structured data as the post's keywords; not shown on the page)
 *   relatedPage    the service page for the job, e.g. /wildlife/something-in-the-attic
 *   relatedLabel   optional: the words for the related-page link; by default the
 *                  page's own heading from the site data
 *   guarantee      optional override: `false` leaves the lifetime guarantee line
 *                  off the post's trust row. By default a post follows its
 *                  related page (owner's rule, Oct 22 2026: the guarantee sits
 *                  only beside entry points we seal, so a post about dead animals,
 *                  skunks, decks or birds shows the insurance and 24/7 lines only).
 *   updated        optional YYYY-MM-DD, when the post was last changed
 *
 * Posts are not ad landing pages and carry no ads (owner, Nov 2026); their
 * H1 is the question people type, never an ad landing page's phrase.
 */
export type BlogPost = {
  title: string;
  slug: string;
  description: string;
  date: string;
  updated?: string;
  primaryKeyword: string;
  relatedPage: string;
  relatedLabel: string;
  guarantee: boolean;
  /** The post body rendered to HTML at build time. */
  html: string;
  /** The body as plain text (for word counts and checks). */
  text: string;
};

export const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const DATE = /^\d{4}-\d{2}-\d{2}$/;

function readPostFile(file: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const fileSlug = file.replace(/\.md$/, "");

  const required = ["title", "slug", "description", "date", "primaryKeyword", "relatedPage"] as const;
  for (const key of required) {
    if (typeof data[key] !== "string" || !data[key].trim()) {
      throw new Error(`content/blog/${file}: front matter needs a "${key}" line`);
    }
  }
  if (data.slug !== fileSlug) {
    throw new Error(`content/blog/${file}: slug "${data.slug}" must match the file name "${fileSlug}"`);
  }
  if (!DATE.test(data.date)) throw new Error(`content/blog/${file}: date must be YYYY-MM-DD`);
  if (data.updated !== undefined && !DATE.test(String(data.updated))) {
    throw new Error(`content/blog/${file}: updated must be YYYY-MM-DD`);
  }
  if (!String(data.relatedPage).startsWith("/")) {
    throw new Error(`content/blog/${file}: relatedPage must be a site path such as /wildlife/raccoons`);
  }

  const html = marked.parse(content, { async: false, gfm: true, breaks: false });
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();

  return {
    title: String(data.title),
    slug: fileSlug,
    description: String(data.description),
    date: String(data.date),
    updated: data.updated ? String(data.updated) : undefined,
    primaryKeyword: String(data.primaryKeyword),
    relatedPage: String(data.relatedPage),
    relatedLabel: typeof data.relatedLabel === "string" ? data.relatedLabel : relatedPageLabel(String(data.relatedPage)),
    guarantee: data.guarantee === false ? false : guaranteeForPage(String(data.relatedPage)),
    html,
    text,
  };
}

let cache: BlogPost[] | undefined;

/** Every post, newest first (same day: alphabetical by slug, so the order is stable). Read once per build. */
export function getAllPosts(): BlogPost[] {
  if (cache) return cache;
  if (!fs.existsSync(BLOG_DIR)) return (cache = []);
  // README.md documents the folder; a file starting with "_" is a draft and is not built.
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md") && f !== "README.md" && !f.startsWith("_"));
  cache = files
    .map(readPostFile)
    .sort((a, b) => (a.date === b.date ? a.slug.localeCompare(b.slug) : b.date.localeCompare(a.date)));
  return cache;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

/**
 * True once at least one post exists. Until then /blog is kept out of the
 * footer and the sitemap and is marked noindex, so nobody is sent to an
 * empty page (owner's yes, Nov 3 2026, GNW Website 21).
 */
export function hasPosts(): boolean {
  return getAllPosts().length > 0;
}

/**
 * Whether the page a post links to carries the lifetime guarantee line in
 * its trust row. The wildlife pages record it themselves (`trustRow:
 * "no-guarantee"` on the pages that seal nothing); every other page (the
 * hubs, the city pages, damage repair, contact) shows it.
 */
export function guaranteeForPage(pagePath: string): boolean {
  const m = pagePath.match(/^\/wildlife\/([^/?#]+)/);
  if (!m) return true;
  const content = getSituationContent(m[1]) ?? getSpeciesPageContent(m[1]);
  if (content?.trustRow === "no-guarantee") return false;
  const entry = getWildlifeBySlug(m[1]);
  if (entry?.trustRow === false) return false;
  return true;
}

/** The related page's own heading, so the link words describe the page they open. */
function relatedPageLabel(pagePath: string): string {
  if (pagePath === DAMAGE_REPAIR_PATH) return "Wildlife damage repair";
  const wildlife = pagePath.match(/^\/wildlife\/([^/?#]+)/);
  if (wildlife) {
    const entry = getWildlifeBySlug(wildlife[1]);
    if (entry) return entry.heading;
  }
  const city = CITIES.find((c) => cityHref(c) === pagePath);
  if (city) return cityHeading(city);
  const market = MARKETS.find((mk) => marketHref(mk) === pagePath);
  if (market) return `Wildlife removal in ${market.displayName}`;
  if (pagePath === "/contact") return "Contact us and send photos";
  return "The service page for this job";
}

/** "November 3, 2026", read as a Toronto date so it never shifts a day. */
export function formatPostDate(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12)).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Toronto",
  });
}
