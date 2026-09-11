import { WHAT_WE_HANDLE, WHAT_WE_HANDLE_SCOPE_NOTE } from "@/lib/content";

export function WhatWeHandle() {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl uppercase sm:text-3xl">What We Handle</h2>

        <dl className="mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
          {WHAT_WE_HANDLE.map((item) => (
            <div key={item.title} className="rounded-sm border-2 border-black/15 px-4 py-4">
              <dt className="text-base font-black">{item.title}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-black/80">{item.body}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 text-sm leading-relaxed text-black/70">{WHAT_WE_HANDLE_SCOPE_NOTE}</p>
      </div>
    </section>
  );
}
