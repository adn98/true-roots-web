import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { formatCurrency } from "@/utils/format";

export interface OrderSummaryProps {
  subtotal: number;
  /** Numeric shipping cost. Ignored for display when shippingLabel is set. */
  shipping: number;
  /** Override the shipping line's display, e.g. "To be calculated". */
  shippingLabel?: string;
  tax?: number;
  total: number;
  title?: string;
  /** Optional line-item preview rendered above the cost breakdown (Checkout page). */
  itemsPreview?: ReactNode;
  footer?: ReactNode;
}

/**
 * Cost breakdown card (subtotal, shipping, optional tax, total) used on
 * both the Cart and Checkout pages, so the numbers never drift between
 * them. `footer` accepts the page-specific call to action (e.g.
 * "Secure Checkout" vs "Place Order").
 */
export function OrderSummary({
  subtotal,
  shipping,
  shippingLabel,
  tax,
  total,
  title = "Order Summary",
  itemsPreview,
  footer,
}: OrderSummaryProps) {
  return (
    <Card raised className="flex flex-col gap-4">
      <h2 className="font-display text-lg text-ink">{title}</h2>

      {itemsPreview}

      <dl className="flex flex-col gap-2 text-sm">
        <div className="flex items-center justify-between">
          <dt className="text-ink/60">Subtotal:</dt>
          <dd className="text-ink">{formatCurrency(subtotal, { decimals: true })}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-ink/60">Shipping:</dt>
          <dd className="text-ink">
            {shippingLabel ??
              (shipping === 0 ? "Free" : formatCurrency(shipping, { decimals: true }))}
          </dd>
        </div>
        {tax !== undefined && (
          <div className="flex items-center justify-between">
            <dt className="text-ink/60">Estimate Tax:</dt>
            <dd className="text-ink">{formatCurrency(tax, { decimals: true })}</dd>
          </div>
        )}
      </dl>

      <div className="flex items-center justify-between border-t border-ink/10 pt-4">
        <span className="font-display text-base text-ink">Total:</span>
        <span className="font-display text-xl text-ink">
          {formatCurrency(total, { decimals: true })}
        </span>
      </div>

      {footer}
    </Card>
  );
}
