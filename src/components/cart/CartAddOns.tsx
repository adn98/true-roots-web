import { Plus } from "lucide-react";
import { ADDON_SLUGS } from "@/constants/addons";
import { getProductBySlug } from "@/constants/products";
import { formatCurrency } from "@/utils/format";
import { useCartStore } from "@/store/cartStore";

/**
 * "Add a little extra…" upsell box shown beneath the cart's line items,
 * suggesting small accessory products a shopper might have missed.
 */
export function CartAddOns() {
  const addItem = useCartStore((state) => state.addItem);
  const addOns = ADDON_SLUGS.map(getProductBySlug).filter(
    (product): product is NonNullable<typeof product> => Boolean(product)
  );

  if (addOns.length === 0) return null;

  return (
    <div className="rounded-card bg-sand p-5">
      <h3 className="font-display text-base text-ink">Add a little extra…</h3>
      <p className="mt-1 text-sm text-ink/60">
        Suggested add-ons for your FREE shipping!
      </p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {addOns.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-3 rounded-lg bg-white p-3"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-12 w-12 shrink-0 rounded-md object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">
                {product.name}
              </p>
              <p className="text-xs text-ink/60">
                {product.unitLabel} · {formatCurrency(product.price, { decimals: true })}
              </p>
            </div>
            <button
              type="button"
              onClick={() => addItem(product, 1)}
              aria-label={`Add ${product.name} to cart`}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-olive text-cream transition-colors hover:bg-olive-dark"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
