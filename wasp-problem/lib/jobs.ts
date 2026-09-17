/**
 * Real completed jobs only — our own factual summary of work we performed,
 * never presented as a customer quotation or a review. Photos are real
 * job photos stored in public/jobs/. Describe only what the work was and
 * what the customer confirmed; never claim repairs, cleanup, or any other
 * work that wasn't performed.
 */

export type JobImage = {
  src: string;
  alt: string;
  /** Short stage label shown under the photo, e.g. "Initial visit". */
  label: string;
};

export type Job = {
  id: string;
  title: string;
  summary: string;
  images: readonly JobImage[];
};

export const JOBS: readonly Job[] = [
  {
    id: "garage-wasp-problem",
    title: "Wasp problem beside a garage — resolved",
    summary:
      "We treated a wasp problem beside this garage. The customer confirmed that wasp activity stopped completely after treatment.",
    images: [
      {
        src: "/jobs/garage-initial-85b43b0.jpg",
        alt: "A glue board taped to the garage door frame, covered in captured wasps, with expanding foam visible along the brickwork.",
        label: "After initial visit",
      },
      {
        src: "/jobs/garage-followup-f2636ec.jpg",
        alt: "The same garage doorway at the follow-up visit, with the glue board removed and the foam still in place along the brickwork.",
        label: "Follow-up visit",
      },
    ],
  },
];
