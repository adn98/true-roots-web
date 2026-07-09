import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";
import { CartItemRow } from "@/components/cart/CartItemRow";
import { CartAddOns } from "@/components/cart/CartAddOns";
import { FreeShippingProgress } from "@/components/cart/FreeShippingProgress";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { useCartStore } from "@/store/cartStore";

/**
 * Cart page. Shipping is intentionally shown as "To be calculated" here
 * (it depends on the delivery address entered at Checkout) — the real
 * number appears on the Checkout page's summary.
 */
export function Cart() {
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.subtotal());
  const itemCount = useCartStore((state) => state.itemCount());

  if (items.length === 0) {
    return (
      <Container className="flex flex-col items-center gap-4 py-24 text-center">
        <h1 className="font-display text-2xl text-navy">Your cart is empty</h1>
        <p className="text-sm text-ink/60">
          Looks like you haven't planted anything yet.
        </p>
        <Link to="/products" className={buttonVariants({ className: "mt-2" })}>
          Shop All Products
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-12 md:py-16">
      <h1 className="mb-8 font-display text-3xl text-navy">
        Your Cart ({itemCount} {itemCount === 1 ? "item" : "items"})
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <FreeShippingProgress subtotal={subtotal} />

          <div className="rounded-card bg-white px-5 shadow-card">
            {items.map((item) => (
              <CartItemRow key={item.product.id} item={item} />
            ))}
          </div>

          <CartAddOns />
        </div>

        <div className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start">
          <OrderSummary
            subtotal={subtotal}
            shipping={0}
            shippingLabel="To be calculated"
            total={subtotal}
            footer={
              <div className="flex flex-col gap-3 pt-2">
                <Link
                  to="/checkout"
                  className={buttonVariants({ fullWidth: true })}
                >
                  Secure checkout
                </Link>
                <Link
                  to="/products"
                  className={buttonVariants({
                    variant: "outline",
                    fullWidth: true,
                  })}
                >
                  Continue shopping
                </Link>
                <p className="flex items-center justify-center gap-1.5 pt-1 text-xs text-ink/50">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  256-bit Secure SSL Checkout
                </p>
              </div>
            }
          />
        </div>
      </div>
    </Container>
  );
}
