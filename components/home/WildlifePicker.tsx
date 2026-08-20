import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Illustration } from "@/components/illustrations/Illustration";
import { getSpeciesEntries } from "@/lib/data/wildlife";

export function WildlifePicker() {
  const species = getSpeciesEntries();

  return (
    <section className="border-b border-stone-300 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Wildlife Removal"
          title="What are you dealing with?"
          description="Tell us the species if you know it. If you don't, that's the most common starting point — our technicians identify it on-site."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {species.map((s) => (
            <Link
              key={s.slug}
              href={`/wildlife/${s.slug}`}
              className="group flex flex-col items-start gap-5 rounded-sm border border-stone-300 bg-bone-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-pine-500 hover:bg-white hover:shadow-card"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-pine-50 transition-colors duration-200 group-hover:bg-pine-100">
                <Illustration
                  id={s.iconId}
                  weight="bold"
                  className="h-9 w-9 text-pine-600 transition-transform duration-200 group-hover:scale-105"
                />
              </span>
              <span className="font-display text-lg leading-tight text-charcoal">{s.name}</span>
            </Link>
          ))}

          <Link
            href="/contact"
            className="group col-span-2 flex flex-col justify-between gap-6 rounded-sm bg-pine-600 p-5 text-bone-50 transition-colors hover:bg-pine-700 sm:col-span-1 lg:col-span-2"
          >
            <span className="font-display text-lg leading-tight">Not sure what it is?</span>
            <span className="inline-flex items-center gap-2 text-sm text-pine-100 group-hover:text-bone-50">
              That&apos;s completely normal — get help now
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
