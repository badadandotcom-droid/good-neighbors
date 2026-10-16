import { PHONE_TOLLFREE } from "@/lib/site";

/**
 * The note the hero badge's asterisk points to, under the hero buttons on the homepage and every
 * city page. The 1-800 line takes calls only, so "call or text" never sits next to it. The number
 * stays on one line.
 */
export function SameDayNote() {
  return (
    <p className="mx-auto mt-7 max-w-sm text-xs text-muted">
      *Same-day service is based on availability. Call{" "}
      <span className="whitespace-nowrap">{PHONE_TOLLFREE.display}</span> to confirm for your area.
    </p>
  );
}
