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

export const PHOTOS: readonly JobPhoto[] = [];
