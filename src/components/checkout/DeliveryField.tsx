import { forwardRef, useId } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export interface DeliveryFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

/**
 * Checkout-only input styled with an inline terracotta label chip fused
 * to a white input, matching the "Email :" / "Name :" / "Address :"
 * pill rows in the reference Delivery Details form. Kept distinct from
 * the general-purpose Input component since this label-chip treatment
 * is a one-off signature element, not a pattern used elsewhere.
 */
export const DeliveryField = forwardRef<HTMLInputElement, DeliveryFieldProps>(
  ({ label, error, id, className, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className="flex flex-col gap-1.5">
        <div
          className={cn(
            "flex items-stretch overflow-hidden rounded-pill border border-transparent bg-white transition-colors focus-within:border-terracotta",
            error && "border-tomato",
            className
          )}
        >
          <label
            htmlFor={inputId}
            className="flex shrink-0 items-center whitespace-nowrap bg-terracotta px-4 text-sm font-medium text-cream"
          >
            {label}
          </label>
          <input
            ref={ref}
            id={inputId}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${inputId}-error` : undefined}
            className="w-full min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none"
            {...props}
          />
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-tomato">
            {error}
          </p>
        )}
      </div>
    );
  }
);

DeliveryField.displayName = "DeliveryField";
