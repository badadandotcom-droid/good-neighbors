import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  size = "md",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
  className?: string;
  titleClassName?: string;
}) {
  const titleSizes = {
    sm: "text-3xl sm:text-4xl",
    md: "text-4xl sm:text-5xl",
    lg: "text-5xl sm:text-6xl lg:text-7xl",
  } as const;

  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-pine-600 uppercase">{eyebrow}</p>
      )}
      <h2 className={cn(titleSizes[size], "text-balance font-normal leading-[1.08]", titleClassName)}>{title}</h2>
      {description && <p className="mt-5 text-lg leading-relaxed text-ink-700 text-pretty">{description}</p>}
    </div>
  );
}
