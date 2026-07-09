import { Link, useLocation } from "react-router-dom";
import { Droplet, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";
import { ContactStrip } from "@/components/story/ContactStrip";
import { formatCurrency, formatDate } from "@/utils/format";
import type { OrderConfirmation } from "@/types/order";

const CHECKLIST = [
  "Preparing your seeds",
  "Packing with love",
  "On the way soon",
];

/**
 * Order Success page. Reads the confirmation passed via router state
 * from Checkout; if someone lands here directly, shows a friendly
 * fallback instead of blank/undefined fields.
 */
export function OrderSuccess() {
  const location = useLocation();
  const confirmation = (location.state as { confirmation?: OrderConfirmation } | null)
    ?.confirmation;

  if (!confirmation) {
    return (
      <Container className="flex flex-col items-center gap-4 py-24 text-center">
        <h1 className="font-display text-2xl text-navy">
          No recent order found
        </h1>
        <p className="text-sm text-ink/60">
          Place an order to see your confirmation here.
        </p>
        <Link to="/products" className={buttonVariants({ className: "mt-2" })}>
          Shop All Products
        </Link>
      </Container>
    );
  }

  return (
    <>
      <Container className="flex flex-col items-center gap-4 py-16 text-center md:py-24">
        <h1 className="font-display text-3xl text-navy">
          Success! Your Seeds are Planted!
        </h1>

        <div className="relative my-6 flex h-40 w-40 items-center justify-center rounded-full bg-sky-100">
          <Droplet className="h-16 w-16 text-sky-500" aria-hidden="true" />
          <span className="absolute left-4 top-6 h-2 w-2 rounded-full bg-terracotta" />
          <span className="absolute right-6 top-4 h-1.5 w-1.5 rounded-full bg-olive" />
          <span className="absolute bottom-6 right-4 h-2 w-2 rounded-full bg-tomato" />
          <span className="absolute bottom-8 left-6 h-1.5 w-1.5 rounded-full bg-sage" />
        </div>

        <p className="max-w-md text-ink/80">
          We've got your order! Prepare your patch of earth, the adventure is
          about to begin.
        </p>

        <div className="mt-2 flex flex-col gap-1 text-sm">
          <p>
            <span className="font-display font-semibold text-ink">
              Order Number:
            </span>{" "}
            #{confirmation.orderId}
          </p>
          <p>
            <span className="font-display font-semibold text-ink">
              Ordered:
            </span>{" "}
            {formatDate(confirmation.placedAt)}
          </p>
          <p>
            <span className="font-display font-semibold text-ink">
              Total:
            </span>{" "}
            {formatCurrency(confirmation.total, { decimals: true })}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink/80">
          {CHECKLIST.map((step) => (
            <span key={step} className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-olive" aria-hidden="true" />
              {step}
            </span>
          ))}
        </div>

        <p className="mt-2 max-w-md text-sm text-ink/60">
          Expect an update in your inbox. In the meantime, happy dreaming of
          tomatoes and fresh herbs!
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            className={buttonVariants({ variant: "secondary" })}
          >
            Track Order
          </button>
          <Link to="/products" className={buttonVariants()}>
            Continue Shopping
          </Link>
        </div>
      </Container>

      <ContactStrip />
    </>
  );
}
