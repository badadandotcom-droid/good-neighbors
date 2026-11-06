/**
 * Customer testimonials (owner, Nov 6 2026, via the ads chat ADS 55). Allowed
 * on the website only when ALL of these hold:
 *  - the customer gave written permission;
 *  - their exact words, never reworded (a note to us such as "OK to post" is
 *    left off);
 *  - signed with first names or initials only, nothing that points to their
 *    address;
 *  - labelled honestly as a message the customer sent us: never shown as a
 *    Google review, never with stars beside it, and the label avoids the words
 *    "review" and "rating" (the crawl check bans both outside the one real
 *    Google rating line);
 *  - one or two per page at most.
 * A testimonial may sit with photos of that customer's own job (owner: "The
 * photos and the words are of the same job"). Still banned: review widgets,
 * and any testimonial or review in the ads. Not put into structured data
 * (Google ignores self-serving review markup on a LocalBusiness).
 *
 * Photos: only the owner's own clean copies, resized for the web (no location
 * data, no content-credentials tag, checked Nov 6 2026). No faces, house
 * numbers or "Inc." shirts or van in frame. Alt text describes what the
 * picture shows and names no repair type the owner has not confirmed (see
 * lib/data/repairs.ts).
 */

export interface JobPhoto {
  src: string;
  alt: string;
  /** One plain word or two under the photo: Before, During, After. */
  label: string;
  /** Tailwind object-position class when the default centre crop cuts off the subject. */
  position?: string;
}

export interface Testimonial {
  /** The customer's exact words. Do not edit, trim or tidy. */
  quote: string;
  signature: string;
  label: string;
  photos: JobPhoto[];
}

export const CUSTOMER_MESSAGE_LABEL = "From a customer's message to us";

/**
 * Sheila & Jim, the garage-frame squirrel job (photos Oct 21, Oct 22 and
 * Nov 2 2026). Their words come from the Project doc
 * claude/google-profile-and-reviews-9.md; her first line ("Here is our review.
 * OK to post with first name or initials.") is the permission and is left off.
 * Signature "Sheila & Jim" is the owner's call.
 */
export const DAMAGE_REPAIR_TESTIMONIAL: Testimonial = {
  quote:
    "Thank you for solving our wildlife problem (squirrel). After a thorough inspection of the exterior of our home they sealed all possible entry points. The work was very well done and high quality. They carefully sourced materials and paint to match as close as possible. Great people to work with. Highly recommend.",
  signature: "Sheila & Jim",
  label: CUSTOMER_MESSAGE_LABEL,
  photos: [
    {
      src: "/images/garage-frame-before-wide.jpg",
      alt: "The base of a door frame beside a brick pillar, before the repair, with damage at the bottom of the frame",
      label: "Before",
    },
    {
      src: "/images/garage-frame-before-closeup.jpg",
      alt: "Close-up of the rotted bottom of the frame, with a gap down to the concrete",
      label: "Before, up close",
    },
    {
      src: "/images/garage-frame-during-cutout.jpg",
      alt: "The damaged bottom of the frame cut out, partway through the repair",
      label: "During",
    },
    {
      src: "/images/garage-frame-during-work.jpg",
      alt: "A technician kneeling at the frame, seen from behind, partway through the repair",
      label: "During",
    },
    {
      src: "/images/garage-frame-after.jpg",
      alt: "The base of the frame after the repair, finished clean at the concrete",
      label: "After",
      position: "object-top",
    },
  ],
};
