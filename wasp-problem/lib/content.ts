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
    title: "Call or Text Us",
    body: "Tell us your service address and where you're seeing the wasps. Send a photo if you can take one safely.",
  },
  {
    n: "2",
    title: "We Talk It Through",
    body: "We go over the problem, what it will cost, and when we can get there.",
  },
  {
    n: "3",
    title: "We Confirm the Appointment",
    body: "You get a confirmed time before we head out.",
  },
  {
    n: "4",
    title: "We Treat the Nest",
    body: "We deal with the active nest and explain what to expect for your particular job.",
  },
] as const;

/** Generic FAQ items only — each city page appends its own final, location-specific item. */
export const BASE_FAQS = [
  {
    q: "How quickly can you come?",
    a: `Call us at ${PHONE_TOLLFREE.display} and we'll tell you the earliest available appointment.`,
  },
  {
    q: "Do you take the nest away?",
    a: "Yes. When there's a visible nest, we take it down and take it with us when we're done. A hidden nest inside a wall or soffit is usually treated in place. If you want it taken out, that means opening up the wall — we do that too, at a separately quoted cost.",
  },
  {
    q: "Do I need to be home?",
    a: "No. As long as we can safely reach the nest, you don't need to be there.",
  },
  {
    q: "Can I book entirely by text?",
    a: "Yes. Text 416-700-4259 with your name, service address and a brief description of the problem. We'll discuss pricing and availability by text—no phone call required.",
  },
  {
    q: "Can I send you a photo?",
    a: "Yes. Photos of the area where the wasps are entering can help us understand the problem before arrival.",
  },
  {
    q: "How quickly will the wasps be gone?",
    a: "Activity can stop the same day, although some nests take longer after treatment. We'll explain what to expect for your particular job.",
  },
  {
    q: "What if I still see activity?",
    a: "Some activity in the first few days is normal, and it should tail off from there. If it hasn't settled down, call or text us and we'll come back.",
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
    q: "Can you help if I don't see the nest?",
    a: "Yes. Many nests are hidden inside a soffit, wall void, or other opening — you don't need to see the nest itself, just where wasps are entering and leaving. That's treated as a hidden nest ($220 + HST).",
  },
  {
    q: "Do you take the nest away?",
    a: "Yes. When there's a visible nest, we take it down and take it with us when we're done. A hidden nest inside a wall or soffit is usually treated in place. If you want it taken out, that means opening up the wall — we do that too, at a separately quoted cost.",
  },
  {
    q: "Do I need to be home?",
    a: "No. As long as we can safely reach the nest, you don't need to be there.",
  },
  {
    q: "Can I book entirely by text?",
    a: "Yes. Text 416-700-4259 with your name, service address and a brief description of the problem. We'll discuss pricing and availability by text—no phone call required.",
  },
  {
    q: "Is same-day service available?",
    a: "Same-day service is available in many cases, based on availability. Call or text us and we'll tell you the earliest appointment for your area.",
  },
  {
    q: "What affects the price?",
    a: "Price depends on whether the nest is visible ($180 + HST) or hidden ($220 + HST), whether more than one nest needs treatment (+$80 + HST each), and how high the nest is — under 10 ft is included, 10–35 ft adds $65 + HST, and over 35 ft is a $150 + HST ladder fee.",
  },
  {
    q: "How quickly will the wasps be gone?",
    a: "Activity can stop the same day, although some nests take longer after treatment. We'll explain what to expect for your particular job.",
  },
  {
    q: "What does the service guarantee cover?",
    a: "If wasps return to the nest we treated within 90 days, we come back and deal with it at no additional charge. It covers the nest we treated, not a new or unrelated nest elsewhere on the property.",
  },
] as const;
