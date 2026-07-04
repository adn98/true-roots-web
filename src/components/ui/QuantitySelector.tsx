import { Minus, Plus } from "lucide-react";
import { cn } from "@/utils/cn";

export interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

/**
 * Stepper control for choosing item quantity, used on product detail
 * and cart line items.
 */
export function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 99,
  className,
}: QuantitySelectorProps) {
  const decrease = () => onChange(Math.max(min, quantity - 1));
  const increase = () => onChange(Math.min(max, quantity + 1));

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-pill border border-ink/15 bg-white",
        className
      )}
    >
      <button
        type="button"
        onClick={decrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className="flex h-9 w-9 items-center justify-center rounded-l-pill text-ink transition-colors hover:bg-sand disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      <span className="min-w-[2rem] text-center text-sm font-medium tabular-nums">
        {quantity}
      </span>
      <button
        type="button"
        onClick={increase}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className="flex h-9 w-9 items-center justify-center rounded-r-pill text-ink transition-colors hover:bg-sand disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
