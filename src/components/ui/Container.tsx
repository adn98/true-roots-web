import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

/**
 * Centers content and applies consistent max-width + horizontal padding
 * across breakpoints. Use inside Section, or standalone.
 */
export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16",
        className
      )}
      {...props}
    />
  );
}
