import { useMemo, useState } from "react";
import { Section } from "@/components/ui/Section";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CategoryFilter } from "@/components/product/CategoryFilter";
import { PRODUCTS } from "@/constants/products";
import type { ProductCategory } from "@/types/product";

/**
 * Shop All page: full product catalog with a category filter bar.
 */
export function Products() {
  const [category, setCategory] = useState<ProductCategory | "all">("all");

  const filtered = useMemo(
    () =>
      category === "all"
        ? PRODUCTS
        : PRODUCTS.filter((product) => product.category === category),
    [category]
  );

  return (
    <Section tone="sand">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="font-display text-3xl text-navy">Shop All</h1>
        <CategoryFilter active={category} onChange={setCategory} />
      </div>
      <ProductGrid products={filtered} />
    </Section>
  );
}
