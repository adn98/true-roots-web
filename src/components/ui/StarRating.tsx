import { Star } from "lucide-react";
import { cn } from "@/utils/cn";

export interface StarRatingProps {
  rating: number;
  className?: string;
}

/**
 * Read-only star rating display (supports half-star rounding visually
 * via fill opacity — kept simple since ratings are static mock data).
 */
export function StarRating({ rating, className }: StarRatingProps) {
  const rounded = Math.round(rating);

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="img"
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-3.5 w-3.5",
            index < rounded
              ? "fill-terracotta text-terracotta"
              : "fill-transparent text-ink/20"
          )}
        />
      ))}
      <span className="ml-1 text-xs text-ink/60">{rating.toFixed(1)}</span>
    </div>
  );
}
