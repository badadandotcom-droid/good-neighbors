import Link from "next/link";
import { BlogHero } from "@/components/blog/BlogHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Container } from "@/components/shared/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { formatPostDate, getAllPosts } from "@/lib/blog";
import { blogJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

/**
 * The blog index (owner, Nov 2026, via GNW Blog 1): every post, newest
 * first, with the site's own header, footer, trust row and Call button.
 * Posts are markdown files in content/blog (lib/blog.ts). While no post
 * exists the page is noindex and stays out of the footer and the sitemap;
 * that switches itself on with the first post.
 */
const TITLE = "Wildlife Blog: Raccoons, Squirrels and Attics in Toronto";
const DESCRIPTION =
  "Plain answers from the Good Neighbors Wildlife crew: what's making the noise in your attic, how raccoons and squirrels get in, what to try, and when to call.";
const LEAD =
  "Plain answers from the crew that does the work: what the noise in your attic is, how animals get in, what to try first, and when to call.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/blog",
  noIndex: getAllPosts().length === 0,
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd
        data={blogJsonLd({
          name: TITLE,
          description: DESCRIPTION,
          posts: posts.map((p) => ({ title: p.title, path: `/blog/${p.slug}`, date: p.date })),
        })}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: "Blog", path: "/blog" }])} />

      {/* No guarantee line on the index (owner, Nov 3 2026, 1:27 PM, pencilled: "maybe the blog trust
          row shouldn't show the guarantee line"): the index is not about one job. Posts set their own. */}
      <BlogHero heading={TITLE} lead={LEAD} guarantee={false} location="blog-index" />

      <section className="py-14 sm:py-24">
        <Container className="max-w-3xl">
          {posts.length === 0 ? (
            <p className="text-lg leading-relaxed text-ink-700">The first post is on its way.</p>
          ) : (
            <ul className="flex flex-col divide-y divide-stone-300 border-t border-b border-stone-300">
              {posts.map((post) => (
                <li key={post.slug} className="py-8 sm:py-10">
                  <article>
                    <p className="text-xs font-semibold tracking-[0.14em] text-stone-500 uppercase">
                      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                    </p>
                    <h2 className="mt-3 font-display text-2xl leading-snug text-charcoal sm:text-3xl">
                      <Link href={`/blog/${post.slug}`} className="hover:text-pine-700">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-700 text-pretty sm:text-base">
                      {post.description}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-block text-sm font-semibold text-pine-700 underline underline-offset-4 hover:text-pine-600"
                    >
                      Read the post
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
