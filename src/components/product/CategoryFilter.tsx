import { cn } from "@/utils/cn";
import type { ProductCategory } from "@/types/product";

export interface CategoryOption {
  label: string;
  value: ProductCategory | "all";
}

const CATEGORY_OPTIONS: CategoryOption[] = [
  { label: "All", value: "all" },
  { label: "Vegetables", value: "vegetables" },
  { label: "Herbs", value: "herbs" },
  { label: "Flowers", value: "flowers" },
  { label: "Tools", value: "tools" },
];

export interface CategoryFilterProps {
  active: ProductCategory | "all";
  onChange: (value: ProductCategory | "all") => void;
}

/**
 * Pill-style category filter bar for the Shop All page.
 */
export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Filter products by category"
    >
      {CATEGORY_OPTIONS.map((option) => {
        const isActive = active === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={isActive}
            className={cn(
              "rounded-pill px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-olive text-cream"
                : "bg-sand text-ink hover:bg-olive-light hover:text-cream"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
