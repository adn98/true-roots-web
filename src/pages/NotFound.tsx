import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";

export function NotFound() {
  return (
    <Container className="flex flex-col items-center gap-4 py-24 text-center">
      <h1 className="font-display text-4xl text-navy">404</h1>
      <p className="text-ink/70">
        This patch of earth hasn't been planted yet.
      </p>
      <Link to="/" className={buttonVariants({ className: "mt-2" })}>
        Back to Home
      </Link>
    </Container>
  );
}
