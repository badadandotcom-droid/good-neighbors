import { SectionHeading } from "@/components/SectionHeading";
import { WHAT_WE_HANDLE, WHAT_WE_HANDLE_SCOPE_NOTE } from "@/lib/content";

export function WhatWeHandle() {
  return (
    <section className="bg-surface px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Our specialty" title="What We Handle" />

        <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {WHAT_WE_HANDLE.map((item) => (
            <div key={item.title} className="card px-5 py-5 sm:px-6 sm:py-6">
              <dt className="font-display text-lg font-extrabold tracking-tight">{item.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{item.body}</dd>
            </div>
          ))}
        </dl>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-muted">
          {WHAT_WE_HANDLE_SCOPE_NOTE}
        </p>
      </div>
    </section>
  );
}
