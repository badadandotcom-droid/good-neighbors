import { PRICING } from "@/lib/pricing";
import { GUARANTEE } from "@/lib/site";

function Check() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-5 w-5 shrink-0 rounded-full bg-yellow p-1 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

/** Three facts already stated elsewhere on the page, surfaced under the hero CTA. Nothing here is a claim the rest of the site doesn't make. */
export function TrustPoints({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "dark" ? "text-white/85" : "text-ink";
  const points = [
    <>
      Upfront pricing from <strong className="font-extrabold">${PRICING[0].amount} + HST</strong>
    </>,
    <a key="g" href="#guarantee" className="underline decoration-yellow decoration-2 underline-offset-4">
      {GUARANTEE.name}
    </a>,
    <>Wasps, hornets &amp; carpenter bees</>,
  ];

  return (
    <ul className={`flex flex-col items-start gap-2.5 text-sm font-semibold sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-7 ${text}`}>
      {points.map((point, i) => (
        <li key={i} className="flex items-center gap-2">
          <Check />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}
