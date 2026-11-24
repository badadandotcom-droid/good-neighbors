import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { getPostBySlug } from "@/lib/blog";
import { RELATED_READING } from "@/lib/data/related-reading";

/** Blog posts that go with this page (lib/data/related-reading.ts). Renders nothing on a page with no list. */
export function RelatedReading({ path }: { path: string }) {
  const posts = (RELATED_READING[path] ?? []).map((slug) => getPostBySlug(slug)).filter((p) => p !== undefined);
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-stone-300 bg-bone-50 py-12 sm:py-14">
      <Container className="max-w-3xl">
        <h2 className="font-display text-xl text-charcoal">Related reading</h2>
        <ul className="mt-4 flex flex-col gap-2.5">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="font-medium text-pine-600 underline underline-offset-2 hover:text-pine-700">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
