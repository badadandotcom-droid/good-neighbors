import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ShieldCheckIcon } from "@/components/shared/GuaranteeLine";
import { GUARANTEE } from "@/lib/config/site";
import { DAMAGE_REPAIR_PATH } from "@/lib/data/repairs";
import type { RepairSection as RepairSectionData } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * "We don't just remove the animal" — the page's own sealing + repair copy,
 * the lifetime guarantee in the owner's exact wording, and a link to the
 * damage repair page. Each page passes its own heading and paragraphs.
 */
export function RepairSection({
  section,
  eyebrow = "Sealing & repair",
  className,
}: {
  section: RepairSectionData;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <section className={cn("py-16 sm:py-24", className)}>
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="mb-4 flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-pine-600 uppercase">
            <span className="h-px w-6 bg-brass-400" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="max-w-xl text-balance font-display text-3xl leading-[1.1] text-charcoal sm:text-4xl">
            {section.heading}
          </h2>
          <div className="mt-6 flex max-w-xl flex-col gap-4">
            {section.paragraphs.map((p) => (
              <p key={p} className="text-[15px] leading-relaxed text-ink-700 text-pretty sm:text-base">
                {p}
              </p>
            ))}
          </div>
          <Link
            href={DAMAGE_REPAIR_PATH}
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-pine-600 hover:text-pine-700"
          >
            {section.linkLabel}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <aside className="lg:col-span-5 lg:self-center">
          <div className="rounded-sm bg-pine-700 p-7 text-bone-50 sm:p-9">
            <ShieldCheckIcon className="h-8 w-8 text-brass-300" />
            <h3 className="mt-4 font-display text-2xl leading-tight text-bone-50">Lifetime guarantee</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-pine-100 text-pretty">{GUARANTEE.full}</p>
          </div>
        </aside>
      </Container>
    </section>
  );
}
