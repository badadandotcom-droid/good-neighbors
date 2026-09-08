import type { FaqItem } from "@/lib/types";
import { DEFAULT_SAME_DAY_SERVICE } from "@/lib/config/site";

/**
 * FAQ copy references the same-day cutoff via DEFAULT_SAME_DAY_SERVICE so it
 * never drifts out of sync with the centralized config. `featured: true`
 * items appear in the homepage FAQ preview; the full list renders on /faq.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Can you come today?",
    answer: `In most cases, yes. ${DEFAULT_SAME_DAY_SERVICE.qualificationMessage} If same-day service isn't available in your area right now, we'll tell you upfront and get you the next available time.`,
    featured: true,
    sameDaySpecific: true,
  },
  {
    question: `What's the ${DEFAULT_SAME_DAY_SERVICE.cutoffLabel} cutoff about?`,
    answer: `Requests received before ${DEFAULT_SAME_DAY_SERVICE.cutoffLabel} local time give us the best chance of reaching your property the same day. Requests after that are usually scheduled for the next available slot — we'll confirm timing when you contact us.`,
    featured: true,
    sameDaySpecific: true,
  },
  {
    question: "I don't know what animal it is. Is that a problem?",
    answer:
      "Not at all. Most people who contact us haven't seen the animal, just heard it. Tell us what you're hearing and where, and our technician will identify it on-site.",
    featured: true,
  },
  {
    question: "Is the animal treated humanely?",
    answer: "Yes. We use humane removal methods suited to the animal and the situation.",
    featured: true,
  },
  {
    question: "What should I do if I hear something in my attic?",
    answer:
      "Avoid the urge to go up and investigate yourself, especially if young animals may be involved. Note when you hear activity and roughly where, and contact us — that information helps our technician right away.",
  },
  {
    question: "What should I do if I hear something in a wall?",
    answer:
      "Leave the wall alone — cutting into it yourself can make the situation harder to resolve. Let us know which wall and when the noise happens, and we'll take it from there.",
  },
  {
    question: "Can I send you a photo?",
    answer:
      "Yes, photos of the animal, the entry point, or any damage help us prepare before we arrive. You can add photos when you request help, or send them separately once we're in touch.",
  },
  {
    question: "How much does wildlife removal cost?",
    answer: "We'll confirm the price with you once we understand the problem, before any work begins.",
  },
  {
    question: "Do you service my area?",
    answer:
      "We currently serve Toronto, York Region, Durham Region and Peel Region. Check our service areas page, or reach out and we'll let you know if we cover your area.",
    featured: true,
  },
  {
    question: "What happens after the animal is removed?",
    answer:
      "Once we've confirmed the animals are out, we secure the entry point to help prevent them from getting back in.",
  },
];

export function getFeaturedFaqs(opts?: { sameDayEligible?: boolean }): FaqItem[] {
  const sameDayEligible = opts?.sameDayEligible ?? true;
  return FAQ_ITEMS.filter((f) => f.featured && (sameDayEligible || !f.sameDaySpecific));
}
