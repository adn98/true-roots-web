import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type BadgeVariant = "sand" | "olive" | "tomato" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  sand: "bg-sand text-ink",
  olive: "bg-olive text-cream",
  tomato: "bg-tomato text-cream",
  outline: "border border-ink/20 text-ink",
};

/**
 * Small pill label used for stock status, categories, and callouts.
 */
export function Badge({ variant = "sand", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-3 py-1 text-xs font-medium tracking-wide",
        VARIANT_STYLES[variant],
        className
      )}
      {...props}
    />
  );
}
