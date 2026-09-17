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
    // Reproduced exactly as written, including the space before the period
    // after "inside". Do not tidy a customer's grammar inside a quotation.
    quote:
      "Excellent service. Showed up after dawn to make sure all the bees are inside . Very honest. Secured all the gaps around our house. Gave us a peace of mind. Highly recommend Duane to anyone with wasps issues. Thank you Duane!",
    author: "Patrick Chiu",
    source: "Google",
    rating: 5,
  },
  {
    // "Dwayne" is her spelling; the owner is Duane. Left as written.
    quote: "Dwayne fabulous service follow up care. I would recommend this company to all",
    author: "Linda Fairley",
    source: "Google",
    rating: 5,
  },
  {
    quote: "Amazing service and got the job done",
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
    src: "/jobs/brick-gap-wasp-7079149.jpg",
    alt: "A wasp at a narrow opening in the mortar joint of a brick wall, beside a white downspout.",
    caption: "A wasp at a gap in the brickwork beside a downspout.",
  },
  {
    src: "/jobs/brick-gap-treated-c2003b9.jpg",
    alt: "The same narrow opening in the brick wall with treatment applied around it.",
    caption: "Treatment applied at the gap in the brickwork.",
  },
  {
    src: "/jobs/mortar-nest-ca6cc9f.jpg",
    alt: "A small tube-shaped paper nest built into the mortar joint between stone and concrete.",
    caption: "A small nest built into a mortar joint.",
  },
];
