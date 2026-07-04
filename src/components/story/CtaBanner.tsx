import { Container } from "@/components/ui/Container";

export interface CtaBannerProps {
  title: string;
  subtitle: string;
}

/**
 * Thin sage-colored band with a centered two-line message. Sits between
 * the page content and the footer (Services page), same sage tone as
 * ContactStrip (#D4D5B6) but carrying a promotional message instead of
 * contact details.
 */
export function CtaBanner({ title, subtitle }: CtaBannerProps) {
  return (
    <div className="bg-sage py-8 text-center text-olive-dark">
      <Container>
        <p className="font-display text-lg">{title}</p>
        <p className="mt-1 text-sm">{subtitle}</p>
      </Container>
    </div>
  );
}
