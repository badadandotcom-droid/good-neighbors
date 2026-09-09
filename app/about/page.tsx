import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { PhotoPlaceholder } from "@/components/shared/PhotoPlaceholder";
import { pageMetadata } from "@/lib/seo";
import { BRAND, PRIMARY_CTA_LABEL } from "@/lib/config/site";
import { cn } from "@/lib/utils";
import type { IllustrationId, PhotoSlotId } from "@/lib/types";

export const metadata = pageMetadata({
  title: "About",
  description: `${BRAND.name} is a humane wildlife removal company built around fast, local, professional service.`,
  path: "/about",
});

const CHAPTERS: {
  title: string;
  body: string;
  slot: PhotoSlotId;
  photoDescription: string;
  icon: IllustrationId;
  imageOnLeft?: boolean;
}[] = [
  {
    title: "What to expect when we arrive",
    body: "Your technician will take a look at the problem and explain how we'll handle it. We'll confirm the price with you before any work begins.",
    slot: "conversation",
    photoDescription: "A Good Neighbors technician pointing out a roofline detail to a homeowner outside her house.",
    icon: "phone-call",
  },
  {
    title: "Careful with your home and the animal",
    body: "We use humane removal methods and work carefully around your roofline, siding and landscaping.",
    slot: "detail",
    photoDescription: "A technician cutting wire mesh at an outdoor workbench.",
    icon: "shield-home",
    imageOnLeft: true,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-stone-300 py-16 sm:py-24">
        <Container className="max-w-2xl">
          <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-pine-600 uppercase">
            <span className="h-px w-6 bg-brass-400" aria-hidden="true" />
            About {BRAND.name}
          </p>
          <h1 className="mt-4 text-balance font-display text-4xl leading-[1.06] text-charcoal sm:text-5xl">
            Wildlife removal for your home.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-700 text-pretty">
            Good Neighbors provides humane raccoon, squirrel, bat and bird removal for homeowners in Toronto,
            York Region, Durham Region and Peel Region.
          </p>
        </Container>
      </section>

      {CHAPTERS.map((chapter, i) => (
        <section
          key={chapter.title}
          className={cn(
            "border-b border-stone-300 py-16 sm:py-24",
            i % 2 === 1 ? "bg-bone-50" : "bg-transparent",
          )}
        >
          <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className={cn("lg:col-span-5", chapter.imageOnLeft ? "lg:order-1" : "lg:order-2")}>
              <PhotoPlaceholder
                slot={chapter.slot}
                icon={chapter.icon}
                tone={i === 1 ? "wood" : "pine"}
                aspect="aspect-[4/3]"
                corner={chapter.imageOnLeft ? "top-left" : "bottom-right"}
                note={chapter.photoDescription}
              />
            </div>
            <div className={cn("lg:col-span-6", chapter.imageOnLeft ? "lg:order-2 lg:col-start-7" : "lg:order-1")}>
              <h2 className="max-w-md text-balance font-display text-3xl leading-[1.1] text-charcoal sm:text-4xl">
                {chapter.title}
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-700 text-pretty">{chapter.body}</p>
            </div>
          </Container>
        </section>
      ))}

      <section className="border-t border-stone-300 bg-charcoal py-16 text-bone-50 sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-md text-balance font-display text-3xl leading-[1.1] text-bone-50">
            Have a wildlife problem right now?
          </h2>
          <CTAButton href="/contact" size="lg" event="cta_get_help_now" eventMeta={{ location: "about-page" }}>
            {PRIMARY_CTA_LABEL}
          </CTAButton>
        </Container>
      </section>
    </>
  );
}
