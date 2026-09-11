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
        src: "/jobs/garage-wasp-initial.jpg",
        alt: "Trap board taped beside a garage door, covered in captured wasps, at the initial visit.",
        label: "Initial visit",
      },
      {
        src: "/jobs/garage-wasp-followup.jpg",
        alt: "The same garage doorway at the follow-up visit, with no wasp activity.",
        label: "Follow-up visit",
      },
    ],
  },
];
