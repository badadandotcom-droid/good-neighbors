import { PHONE } from "@/lib/site";

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

/** Generic FAQ items only — each page appends its own final, location-specific item. */
export const BASE_FAQS = [
  {
    q: "How quickly can you come?",
    a: `Call us at ${PHONE.display} and we'll tell you the earliest available appointment.`,
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
