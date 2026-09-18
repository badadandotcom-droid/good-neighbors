import { PHONE_TOLLFREE } from "@/lib/site";

/**
 * The branded number with its keypad digits tucked under the letters:
 *
 *     1-800-800-WASP
 *                9277
 *
 * The digits are absolutely positioned, so adding them can't change a
 * button's height, and they scale with whatever font size the button uses.
 *
 * The whole visual treatment is aria-hidden with one sr-only string beside
 * it: splitting the number across spans made assistive tech announce
 * "1-800-800- WASP" with a pause at the seam, so the spoken name is supplied
 * once, cleanly, instead.
 */
export function TollFreeNumber() {
  const letters = PHONE_TOLLFREE.display.slice(-4);
  const prefix = PHONE_TOLLFREE.display.slice(0, -4);
  return (
    <>
      <span className="sr-only">{PHONE_TOLLFREE.display}</span>
      <span aria-hidden="true" className="relative inline-block whitespace-nowrap">
        {prefix}
        <span className="relative inline-block">
          {letters}
          <span className="absolute inset-x-0 top-full -mt-[0.1em] text-center text-[0.45em] font-bold tracking-[0.18em] opacity-75">
            {PHONE_TOLLFREE.numeric.slice(-4)}
          </span>
        </span>
      </span>
    </>
  );
}
