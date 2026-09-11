/**
 * Real customer evidence only — no fabricated quotes, names, ratings, or
 * counts. Both arrays are empty until genuine, approved reviews/photos are
 * supplied; components/TrustSection.tsx renders nothing while they're empty,
 * so the section is prepared but stays off the live page until real data
 * lands here. Populate from a verified Google Business Profile or other
 * approved source, and link `source` to the real profile URL when adding a
 * review.
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

export const REVIEWS: readonly Review[] = [];

export const PHOTOS: readonly JobPhoto[] = [];
