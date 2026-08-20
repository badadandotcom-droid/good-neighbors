/**
 * The specimen-plate corner bracket — a small, recurring device (see
 * .corner-marks in globals.css) that appears on photo placeholders and
 * feature illustrations alike, borrowed from field-guide plates and
 * architectural drawings. It's the visual thread tying photography and
 * illustration together as one system. Render inside a `relative` parent.
 */
export function CornerMarks({ className }: { className?: string }) {
  return (
    <div className={className ? `corner-marks ${className}` : "corner-marks"} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
