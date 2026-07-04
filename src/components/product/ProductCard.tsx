import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "@/types/product";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/utils/format";
import { useCartStore } from "@/store/cartStore";

export interface ProductCardProps {
  product: Product;
}

/**
 * Compact product tile used in grids (Home featured, Shop All).
 * Links to the product detail page; the CTA adds directly to cart
 * without navigating away.
 */
export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <motion.div
      className="group flex flex-col overflow-hidden rounded-card bg-white shadow-card transition-shadow hover:shadow-raised"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        to={`/products/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-sand"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {!product.inStock && (
          <Badge variant="outline" className="absolute left-3 top-3 bg-white">
            Out of stock
          </Badge>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link to={`/products/${product.slug}`}>
          <h3 className="font-display text-base text-ink">{product.name}</h3>
        </Link>
        <p className="line-clamp-2 text-sm text-ink/60">
          {product.shortDescription}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-display text-lg text-ink">
            {formatCurrency(product.price)}
          </span>
          <Button
            size="sm"
            disabled={!product.inStock}
            onClick={() => addItem(product, 1)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
