import { ShieldCheckIcon } from "@/components/shared/GuaranteeLine";
import { GUARANTEE } from "@/lib/config/site";
import { cn } from "@/lib/utils";

/**
 * The lifetime guarantee as a standalone block, in the owner's exact wording
 * (GUARANTEE.full, never paraphrased). Pages with a repair section get the
 * same box from RepairSection; city and hub pages use this one.
 */
export function GuaranteeBlock({ className, as: Heading = "h2" }: { className?: string; as?: "h2" | "h3" }) {
  return (
    <div className={cn("rounded-sm bg-pine-700 p-7 text-bone-50 sm:p-9", className)}>
      <ShieldCheckIcon className="h-8 w-8 text-brass-300" />
      <Heading className="mt-4 font-display text-2xl leading-tight text-bone-50">Lifetime guarantee</Heading>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-pine-100 text-pretty sm:text-base">{GUARANTEE.full}</p>
    </div>
  );
}
