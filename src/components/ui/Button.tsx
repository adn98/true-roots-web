import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  // Primary CTA — Shop Now, Add to Cart, Buy Now, Secure Checkout
  primary:
    "bg-terracotta text-cream hover:bg-terracotta-dark active:bg-terracotta-dark",
  // Secondary — Place Order, Track Order, Send Message
  secondary: "bg-olive text-cream hover:bg-olive-dark active:bg-olive-dark",
  // Soft outline — Continue Shopping, Go to Cart
  outline:
    "bg-sand text-terracotta border border-terracotta/30 hover:bg-terracotta/10",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-6 py-3",
  lg: "text-base px-8 py-3.5",
};

export interface ButtonVariantsOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

/**
 * Returns the same class string the Button component renders with, for
 * styling non-button elements (typically React Router `Link`s that need
 * to look like a button, e.g. the hero "Shop Now" link).
 */
// eslint-disable-next-line react-refresh/only-export-components -- buttonVariants is intentionally co-located with Button
export function buttonVariants({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: ButtonVariantsOptions = {}): string {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-pill font-medium tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50",
    VARIANT_STYLES[variant],
    SIZE_STYLES[size],
    fullWidth && "w-full",
    className
  );
}

/**
 * Primary reusable button. Pill-shaped per design tokens, with subtle
 * hover/active states and full keyboard focus support.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, fullWidth, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, fullWidth, className })}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
