/**
 * "Related reading": two or three blog posts linked from the foot of a main
 * page (ads chat, ADS 69, Nov 23 2026; owner's yes Nov 24 2026, 3:17 PM, in
 * GNW Website 36). First batch only. The ads chat decides which pages get a
 * block: never a page with a keyword scoring 7+, and the Toronto hub, the
 * region hubs and the unscored city pages wait for the next Monday scores.
 * /wildlife/dead-bird-removal was approved but has no block: no post is about
 * birds yet. The block sits below the page's last Call button, so nothing
 * above it moves. Link text is the post's own title.
 */
export const RELATED_READING: Record<string, string[]> = {
  "/wildlife/damage-repair": ["soffit-and-fascia-animal-damage", "roof-leaks-from-animal-damage", "raccoon-damage-home-insurance"],
  "/service-areas/north-york": ["how-do-raccoons-get-in-the-attic", "signs-of-squirrels-in-attic", "does-the-city-remove-raccoons"],
  "/wildlife/raccoon-under-deck": ["get-rid-of-raccoons-under-deck", "do-raccoons-hibernate", "does-the-city-remove-raccoons"],
  "/wildlife/something-in-the-walls": ["what-animal-is-in-my-attic", "squirrels-chewing-wires-in-attic"],
};
