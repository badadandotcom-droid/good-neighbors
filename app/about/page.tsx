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
  question: string;
  title: string;
  body: string;
  slot: PhotoSlotId;
  icon: IllustrationId;
  imageOnLeft?: boolean;
}[] = [
  {
    question: "Who shows up at your door?",
    title: "A trained technician, not a stranger in a truck",
    body: "Every visit is handled by someone who does this work as their trade, not a subcontractor picked up for the day. They'll introduce themselves, explain what they're seeing, and walk you through what happens next before doing anything on your property.",
    slot: "conversation",
    icon: "phone-call",
  },
  {
    question: "How will they treat my home — and the animal?",
    title: "Careful with both, as a matter of course",
    body: "We work deliberately around roofing, siding, and landscaping, and explain what we're doing and why. The same care extends to the animal: wildlife that's found its way into the wrong place doesn't need to be treated cruelly to be removed effectively. Humane handling isn't an upgrade here — it's simply how the job gets done.",
    slot: "detail",
    icon: "shield-home",
    imageOnLeft: true,
  },
  {
    question: "Can I trust what they tell me?",
    title: "Straightforward, before and after",
    body: "You'll know what was found, what was done, and what — if anything — genuinely makes sense to do next. No inflated urgency, no jargon, and no pressure to decide anything on the spot.",
    slot: "arrival",
    icon: "inspection",
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
            A calm, professional response to an unwelcome situation.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-700 text-pretty">
            {BRAND.name} was built on a simple idea: wildlife removal doesn&apos;t have to feel alarming, and it
            doesn&apos;t have to come at the expense of the animal or your property. We handle the immediate
            problem quickly and humanely, and treat every home the way we&apos;d want ours treated.
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
                tone={i === 1 ? "wood" : i === 2 ? "charcoal" : "pine"}
                aspect="aspect-[4/3]"
                corner={chapter.imageOnLeft ? "top-left" : "bottom-right"}
              />
            </div>
            <div className={cn("lg:col-span-6", chapter.imageOnLeft ? "lg:order-2 lg:col-start-7" : "lg:order-1")}>
              <p className="font-display text-xl italic text-pine-600">{chapter.question}</p>
              <h2 className="mt-3 max-w-md text-balance font-display text-3xl leading-[1.1] text-charcoal sm:text-4xl">
                {chapter.title}
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-700 text-pretty">{chapter.body}</p>
            </div>
          </Container>
        </section>
      ))}

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-pine-600 uppercase">
              <span className="h-px w-6 bg-brass-400" aria-hidden="true" />
              What Makes Us Different
            </p>
            <h2 className="mt-4 max-w-md text-balance font-display text-3xl leading-[1.1] text-charcoal sm:text-4xl">
              One brand, growing one neighborhood at a time
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-700 text-pretty">
              {BRAND.name} launched in {BRAND.foundingRegion}. As we grow across Canada and, in time, the United
              States, every new market carries the same name, the same standards, and technicians who are
              genuinely local to the area they serve — never a franchise, never a faceless call centre.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <PhotoPlaceholder slot="streetscape" icon="roofline" tone="wood" aspect="aspect-[4/3]" corner="top-left" />
          </div>
        </Container>
      </section>

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
