import { PHONE_TOLLFREE } from "@/lib/site";

/**
 * Business facts shared across the homepage and every city landing page —
 * the process, the post-treatment timeline, and the core FAQ answers are the
 * same regardless of which city a visitor lands from, so they live here once
 * instead of being duplicated (and drifting) per page.
 */

export const PROCESS_STEPS = [
  {
    n: "1",
    title: "Call Us",
    body: "Tell us where you're seeing the wasps.",
  },
  {
    n: "2",
    title: "We Assess the Problem",
    body: "We determine where the activity is coming from and the appropriate treatment.",
  },
  {
    n: "3",
    title: "We Treat the Nest",
    body: "We deal with the active wasp problem and explain what to expect afterward.",
  },
] as const;

export const TREATMENT_TIMELINE = [
  { day: "Day 5", result: "At least 50% less activity." },
  { day: "Day 10", result: "Approximately 90% less activity." },
  { day: "Day 14", result: "There should be no activity." },
] as const;

/** Generic FAQ items only — each city page appends its own final, location-specific item. */
export const BASE_FAQS = [
  {
    q: "How quickly can you come?",
    a: `Call us at ${PHONE_TOLLFREE.display} and we'll tell you the earliest available appointment.`,
  },
  {
    q: "Can I send you a photo?",
    a: "Yes. Photos of the area where the wasps are entering can help us understand the problem before arrival.",
  },
  {
    q: "Will the wasps disappear immediately?",
    a: "Not always. Returning wasps may continue entering the treated area temporarily. Activity should decrease substantially over the following days.",
  },
  {
    q: "What if I still see activity?",
    a: "By Day 5 there should be at least 50% less activity, by Day 10 approximately 90% less, and by Day 14 there should be no activity. Contact us if those benchmarks are not being met.",
  },
] as const;

/** What the business handles — kept explicit so scope doesn't drift into general pest control or wildlife services. */
export const WHAT_WE_HANDLE = [
  {
    title: "Visible Nests",
    body: "The nest itself can be seen — hanging under an eave, attached to a wall, or out in the open.",
  },
  {
    title: "Hidden Nests",
    body: "Wasps entering and leaving through a soffit, wall void, or hole, even when the nest itself isn't visible.",
  },
  {
    title: "Wasps & Hornets",
    body: "Active wasp and hornet nests around the home, treated at the source.",
  },
  {
    title: "Carpenter Bees",
    body: "Carpenter bees boring into wood — fascia, decks, siding and other structural wood.",
  },
] as const;

export const WHAT_WE_HANDLE_SCOPE_NOTE =
  "We focus on wasp, hornet and carpenter bee nests — not general pest control or wildlife removal.";

/** Homepage-specific FAQ set — replaces the appended-BASE_FAQS pattern city pages still use, since the homepage needs pricing/guarantee-aware answers. */
export const HOMEPAGE_FAQS = [
  {
    q: "Can you help if I cannot see the nest?",
    a: "Yes. Many nests are hidden inside a soffit, wall void, or other opening — you don't need to see the nest itself, just where wasps are entering and leaving. That's treated as a hidden nest ($220 + HST).",
  },
  {
    q: "Is same-day service available?",
    a: "Same-day service is available in many cases, based on availability. Call us and we'll tell you the earliest appointment for your area.",
  },
  {
    q: "What affects the price?",
    a: "Price depends on whether the nest is visible ($180 + HST) or hidden ($220 + HST), whether more than one nest needs treatment (+$80 + HST each), and whether a ladder is required (+$65 + HST).",
  },
  {
    q: "Will activity stop immediately?",
    a: "Not immediately. Returning wasps may continue entering the treated area for a short time. Activity should decrease substantially over the days that follow.",
  },
  {
    q: "What does the service guarantee cover?",
    a: "Our 90-day service guarantee means if activity isn't decreasing as expected, or the treated nest becomes active again, within 90 days we'll come back and follow up at no additional charge. It covers the treated nest, not unrelated nests elsewhere on the property.",
  },
] as const;
