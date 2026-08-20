import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { PhotoPlaceholder } from "@/components/shared/PhotoPlaceholder";

export function PropertyCareTeaser() {
  return (
    <section className="border-b border-stone-300 py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <PhotoPlaceholder slot="inspection" icon="soffit-vent" tone="wood" aspect="aspect-[4/3]" corner="top-left" />
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-pine-600 uppercase">
            <span className="h-px w-6 bg-brass-400" aria-hidden="true" />
            After the Immediate Job
          </p>
          <h2 className="mt-4 max-w-lg text-balance font-display text-3xl leading-[1.1] text-charcoal sm:text-4xl">
            We solve the problem first. Prevention is a conversation for after.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-700 text-pretty">
            Once the wildlife is handled, your technician can point out how it likely got in and flag any
            vulnerable areas. If it&apos;s worth addressing, we&apos;ll explain the options — with no pressure to
            decide on the spot.
          </p>
          <Link href="/property-care" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-pine-600 hover:text-pine-700">
            Learn about property care &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
