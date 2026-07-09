import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonVariants, Button } from "@/components/ui/Button";
import { DeliveryField } from "@/components/checkout/DeliveryField";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { checkoutSchema } from "@/schemas/checkoutSchema";
import type { CheckoutFormValues } from "@/schemas/checkoutSchema";
import { useCartStore, ESTIMATED_TAX } from "@/store/cartStore";
import { submitOrder } from "@/services/orderService";
import { formatCurrency } from "@/utils/format";
import { cn } from "@/utils/cn";

const PAYMENT_OPTIONS: { value: CheckoutFormValues["paymentMethod"]; label: string }[] = [
  { value: "card", label: "Card" },
  { value: "upi", label: "UPI / Net Banking" },
  { value: "wallet", label: "Digital Wallets" },
];

/**
 * Purchase page: Delivery details form (left, sand panel) and an Order
 * Summary card on a sage panel (right) with the item preview and full
 * cost breakdown including estimated tax.
 */
export function Checkout() {
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.subtotal());
  const shipping = useCartStore((state) => state.shipping());
  const tax = items.length > 0 ? ESTIMATED_TAX : 0;
  const total = subtotal + shipping + tax;
  const clearCart = useCartStore((state) => state.clearCart);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { paymentMethod: "card" },
  });

  const selectedPayment = watch("paymentMethod");

  const onSubmit = async (values: CheckoutFormValues) => {
    const confirmation = await submitOrder({
      delivery: {
        email: values.email,
        name: values.name,
        address: values.address,
        city: values.city,
        zipCode: values.zipCode,
        phone: values.phone,
      },
      paymentMethod: values.paymentMethod,
      items,
      subtotal,
      shipping,
      tax,
      total,
    });
    clearCart();
    navigate("/order-success", { state: { confirmation } });
  };

  if (items.length === 0) {
    return (
      <Container className="flex flex-col items-center gap-4 py-24 text-center">
        <h1 className="font-display text-2xl text-navy">
          Your cart is empty
        </h1>
        <p className="text-sm text-ink/60">
          Add something to your cart before checking out.
        </p>
        <Link to="/products" className={buttonVariants({ className: "mt-2" })}>
          Shop All Products
        </Link>
      </Container>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-sand px-6 py-12 md:px-10 md:py-16 lg:px-16">
          <h1 className="font-display text-2xl text-terracotta">
            Delivery details
          </h1>
          <div className="mt-6 flex flex-col gap-4">
            <DeliveryField
              label="Email :"
              type="email"
              error={errors.email?.message}
              {...register("email")}
            />
            <DeliveryField
              label="Name :"
              error={errors.name?.message}
              {...register("name")}
            />
            <DeliveryField
              label="Address :"
              error={errors.address?.message}
              {...register("address")}
            />
            <div className="grid grid-cols-2 gap-4">
              <DeliveryField
                label="City :"
                error={errors.city?.message}
                {...register("city")}
              />
              <DeliveryField
                label="Zip Code :"
                error={errors.zipCode?.message}
                {...register("zipCode")}
              />
            </div>
            <DeliveryField
              label="Phone :"
              type="tel"
              error={errors.phone?.message}
              {...register("phone")}
            />
          </div>

          <h2 className="mt-10 font-display text-2xl text-terracotta">
            Payment Methods
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {PAYMENT_OPTIONS.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-center gap-3 text-sm text-ink"
              >
                <input
                  type="radio"
                  value={option.value}
                  checked={selectedPayment === option.value}
                  onChange={() => setValue("paymentMethod", option.value)}
                  className="h-4 w-4 accent-terracotta"
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-start justify-center bg-sage px-6 py-12 md:px-10 md:py-16 lg:px-16">
          <OrderSummary
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
            itemsPreview={
              <div className="flex flex-col gap-3 border-b border-ink/10 pb-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-14 w-14 shrink-0 rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-display text-sm text-ink">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-ink/60">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium text-ink">
                      {formatCurrency(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            }
            footer={
              <div className="flex flex-col gap-3 pt-2">
                <Button type="submit" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? "Placing order…" : "Place Order"}
                </Button>
                <Link
                  to="/cart"
                  className={cn(
                    buttonVariants({ variant: "outline", fullWidth: true }),
                    "bg-sand"
                  )}
                >
                  Go to cart
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
    </form>
  );
}
