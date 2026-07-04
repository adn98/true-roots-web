import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padded?: boolean;
  raised?: boolean;
}

/**
 * Generic surface container. Used across product cards, info cards,
 * and summary panels (checkout, cart).
 */
export function Card({
  padded = true,
  raised = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card bg-white",
        raised ? "shadow-raised" : "shadow-card",
        padded && "p-6",
        className
      )}
      {...props}
    />
  );
}
