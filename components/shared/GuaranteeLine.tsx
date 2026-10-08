import { GUARANTEE } from "@/lib/config/site";
import { cn } from "@/lib/utils";

/** A small shield with a check — the guarantee's one visual mark. */
export function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={cn("shrink-0", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 2.2 3.8 4.6v4.8c0 4 2.7 7 6.2 8.4 3.5-1.4 6.2-4.4 6.2-8.4V4.6L10 2.2Z" />
      <path d="m7.1 10.1 2 2 3.9-4.1" />
    </svg>
  );
}

/** The short, near-the-top guarantee line: "Lifetime guarantee on every entry point we seal." */
export function GuaranteeLine({ className }: { className?: string }) {
  return (
    <p className={cn("flex items-center gap-2 text-sm font-medium text-pine-700", className)}>
      <ShieldCheckIcon className="h-4 w-4 text-pine-600" />
      {GUARANTEE.short}
    </p>
  );
}
