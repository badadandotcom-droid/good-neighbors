import type { FaqItem } from "@/lib/types";

/** Native <details>/<summary> accordion — accessible and animation-free by default, no JS required. */
export function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-stone-300 border-t border-b border-stone-300">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg text-charcoal sm:text-xl">
            {item.question}
            <span className="relative h-4 w-4 shrink-0 text-pine-600">
              <span className="absolute inset-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
              <span className="absolute inset-0 top-1/2 left-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-200 group-open:rotate-90" />
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-700 text-pretty">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
