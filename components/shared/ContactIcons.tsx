/**
 * Small UI glyphs for contact actions.
 *
 * The illustration system (components/illustrations) is line art on a 120-unit
 * canvas with a ~1.75 stroke. Shrunk to a 16px button icon that stroke renders at
 * roughly 0.23px, so it all but disappears — the phone in a call button read as an
 * empty green box. These are drawn on a 24-unit grid instead, so a 2-unit stroke
 * stays solid at button sizes. Use them wherever a contact icon sits at 16–20px;
 * keep the illustrations for the large decorative placements they were drawn for.
 */

type IconProps = { className?: string };

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M5 3.5h3.2l1.6 4.2-2.1 1.4a11.5 11.5 0 0 0 7.2 7.2l1.4-2.1 4.2 1.6V19a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3 5.5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}
