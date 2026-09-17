/**
 * Real customer evidence only — no fabricated quotes, names, ratings, dates,
 * photos, locations, review counts, or overall business ratings. Quote text
 * is reproduced exactly as the customer wrote it and is never edited,
 * shortened, or combined with details from the job or any reply.
 *
 * `sourceUrl` is only for a verified public link to the review itself. Do not
 * put a "leave us a review" request link here — that link asks visitors to
 * write a review and would misrepresent an existing one.
 */

export type Review = {
  quote: string;
  author: string;
  source?: string;
  sourceUrl?: string;
  rating?: number;
};

export type JobPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export const REVIEWS: readonly Review[] = [
  {
    quote: "Amazing service and got the job done.",
    author: "Ryan Spinner",
    source: "Google",
    rating: 5,
  },
];

export const PHOTOS: readonly JobPhoto[] = [
  {
    src: "/jobs/gable-nest-4f7cf56.jpg",
    alt: "A large grey paper nest built into the peak of a roof gable, with its entrance hole visible underneath.",
    caption: "An exposed nest built into a roof peak.",
  },
  {
    src: "/jobs/porch-trim-743257d.jpg",
    alt: "Several wasps flying around a narrow gap where porch trim meets the siding.",
    caption: "Wasps going in and out of a gap in porch trim.",
  },
  {
    src: "/jobs/trap-board-f84188f.jpg",
    alt: "A trap board held up against a brick wall, covered in captured wasps.",
    caption: "Wasps caught on a trap board.",
  },
  {
    src: "/jobs/stone-wall-65e1376.jpg",
    alt: "An applicator tube inserted into a joint in a stone retaining wall, with a wasp beside it.",
    caption: "Treating a gap in a stone retaining wall.",
  },
  {
    src: "/jobs/mortar-nest-ca6cc9f.jpg",
    alt: "A small tube-shaped paper nest built into the mortar joint between stone and concrete.",
    caption: "A small nest built into a mortar joint.",
  },
];
