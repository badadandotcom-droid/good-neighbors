/**
 * Photo limits for the Get Help form, shared by the browser (which shrinks
 * photos to fit) and the server (which enforces them). Five photos at the
 * per-photo cap, plus the form fields, stay well under Vercel's 4.5 MB
 * request limit.
 */
export const PHOTO_LIMITS = {
  maxCount: 5,
  /** Per processed JPEG. */
  maxBytesEach: 700 * 1024,
  /** All photos together. */
  maxBytesTotal: 3.5 * 1024 * 1024,
  /** Largest original file we'll try to read in the browser. */
  maxOriginalBytes: 40 * 1024 * 1024,
} as const;

/** Added to the lead email whenever photos were tried but didn't make it. */
export const PHOTOS_FAILED_NOTE = "Customer tried to attach photos, but they didn't come through.";

/**
 * How long the browser waits on a send with photos before giving up on the
 * photos and sending the lead without them. Generous, so slow mobile uploads
 * still get through.
 */
export const PHOTO_SEND_TIMEOUT_MS = 60_000;
