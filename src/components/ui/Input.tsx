import { forwardRef, useId } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

/**
 * Reusable text input with an associated label and inline validation
 * message, wired for React Hook Form via forwardRef.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-ink">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={cn(
            "rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-terracotta focus:outline-none",
            error && "border-tomato focus:border-tomato",
            className
          )}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-tomato">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
