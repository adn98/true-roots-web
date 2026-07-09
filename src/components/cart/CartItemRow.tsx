import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import type { CartItem } from "@/types/cart";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { formatCurrency } from "@/utils/format";
import { useCartStore } from "@/store/cartStore";

export interface CartItemRowProps {
  item: CartItem;
}

/**
 * Single line item in the cart: thumbnail, name, quantity control,
 * line total, and a remove action. Reads/writes quantity directly
 * through the cart store.
 */
export function CartItemRow({ item }: CartItemRowProps) {
  const setQuantity = useCartStore((state) => state.setQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const { product, quantity } = item;

  return (
    <div className="flex items-center gap-4 border-b border-ink/10 py-4 last:border-b-0">
      <Link
        to={`/products/${product.slug}`}
        className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-sand"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <Link
          to={`/products/${product.slug}`}
          className="truncate font-display text-sm text-ink hover:text-terracotta"
        >
          {product.name}
        </Link>
        <span className="text-xs capitalize text-ink/50">{product.category}</span>
        <QuantitySelector
          quantity={quantity}
          onChange={(value) => setQuantity(product.id, value)}
          className="mt-1"
        />
      </div>

      <div className="flex flex-col items-end gap-3">
        <span className="font-display text-sm text-ink">
          {formatCurrency(product.price * quantity)}
        </span>
        <button
          type="button"
          onClick={() => removeItem(product.id)}
          aria-label={`Remove ${product.name} from cart`}
          className="text-ink/40 transition-colors hover:text-tomato"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
