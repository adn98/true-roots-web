import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";
import { Container } from "@/components/ui/Container";

type SectionTone = "cream" | "sand" | "olive" | "sage";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  containerClassName?: string;
}

const TONE_STYLES: Record<SectionTone, string> = {
  cream: "bg-cream text-ink",
  sand: "bg-sand text-ink",
  olive: "bg-olive text-cream",
  sage: "bg-sage text-olive-dark",
};

/**
 * Full-bleed vertical section wrapper with a themed background and a
 * centered, padded container inside it.
 */
export function Section({
  tone = "sand",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 md:py-24", TONE_STYLES[tone], className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
