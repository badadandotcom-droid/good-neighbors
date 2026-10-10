import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { WILDLIFE } from "@/lib/data/wildlife";
import { cn } from "@/lib/utils";

/** "Other wildlife we handle": the species grid at the foot of every wildlife page, minus the page's own animal. */
export function RelatedWildlife({ currentSlug }: { currentSlug: string }) {
  const related = WILDLIFE.filter((w) => w.slug !== currentSlug && w.category === "species");
  if (related.length === 0) return null;

  return (
    <section className="border-t border-stone-300 bg-bone-50 py-16 sm:py-20">
      <Container>
        <h2 className="font-display text-2xl text-charcoal">Other wildlife we handle</h2>
        <div className={cn("mt-8 grid grid-cols-2 gap-4", related.length > 4 ? "sm:grid-cols-3 lg:grid-cols-5" : "sm:grid-cols-4")}>
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/wildlife/${r.slug}`}
              className="group flex flex-col items-center gap-3 rounded-sm border border-stone-300 bg-white px-4 py-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-pine-500 hover:shadow-card"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pine-50">
                <Image
                  src={`/images/wildlife-icons/${r.iconId}.png`}
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </span>
              <span className="font-display text-base text-charcoal">{r.name}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
