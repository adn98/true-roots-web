import type { Product } from "@/types/product";
import { ProductCard } from "@/components/product/ProductCard";

export interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

/**
 * Responsive grid of ProductCards: 2 columns on mobile, up to 4 on
 * desktop. Shows a friendly empty state when filters return nothing.
 */
export function ProductGrid({
  products,
  emptyMessage = "No products match your filters yet.",
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-ink/60">{emptyMessage}</p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
