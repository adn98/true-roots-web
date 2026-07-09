import { formatCurrency } from "@/utils/format";
import { FREE_SHIPPING_THRESHOLD } from "@/store/cartStore";

export interface FreeShippingProgressProps {
  subtotal: number;
}

/**
 * "Just ₹X away from FREE Shipping" progress bar shown above the cart's
 * line items, tracking subtotal against FREE_SHIPPING_THRESHOLD.
 */
export function FreeShippingProgress({ subtotal }: FreeShippingProgressProps) {
  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);
  const percent = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const qualifies = remaining === 0;

  return (
    <div className="rounded-card bg-sand p-5">
      <p className="text-sm font-medium text-ink">
        {qualifies
          ? "You've unlocked FREE Shipping!"
          : `Just ${formatCurrency(remaining)} away from FREE Shipping`}
      </p>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-pill bg-white">
        <div
          className="h-full rounded-pill bg-olive transition-all duration-500"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={Math.round(percent)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progress toward free shipping"
        />
      </div>
      <p className="mt-1.5 text-right text-xs text-ink/60">
        {formatCurrency(subtotal)}/{formatCurrency(FREE_SHIPPING_THRESHOLD)}
      </p>
    </div>
  );
}
