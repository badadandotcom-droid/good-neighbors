import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Container } from "@/components/shared/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/blog";
import { blogPostingJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

/**
 * One blog post, rendered at build time from its markdown file in
 * content/blog (lib/blog.ts): the site's hero with the Call button on the
 * first phone screen, the post body, a link to the service page for the
 * job, and the closing band. Posts are not ad landing pages and carry no
 * ads; their trust row follows the related page (no guarantee line beside
 * work that seals nothing).
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}` });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const wordCount = post.text.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;

  return (
    <>
      <JsonLd
        data={blogPostingJsonLd({
          title: post.title,
          description: post.description,
          path,
          date: post.date,
          updated: post.updated,
          primaryKeyword: post.primaryKeyword,
          wordCount,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ])}
      />

      <BlogHero
        back={{ label: "Blog", href: "/blog" }}
        kicker={<time dateTime={post.date}>{formatPostDate(post.date)}</time>}
        heading={post.title}
        lead={post.description}
        guarantee={post.guarantee}
        location={`blog-${post.slug}`}
      />

      <article className="py-14 sm:py-24">
        <Container className="max-w-3xl">
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />

          <aside className="mt-12 border-t-2 border-brass-400 pt-5 sm:mt-16">
            <p className="text-xs font-semibold tracking-[0.14em] text-stone-500 uppercase">The service page for this job</p>
            <p className="mt-3 text-lg">
              <Link href={post.relatedPage} className="font-display text-charcoal underline underline-offset-4 hover:text-pine-700">
                {post.relatedLabel}
              </Link>
            </p>
          </aside>
        </Container>
      </article>

      <FinalCTA />
    </>
  );
}
