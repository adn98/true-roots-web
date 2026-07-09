import { useNavigate, useParams, Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { ImageGallery } from "@/components/product/ImageGallery";
import { getProductBySlug, PRODUCT_INFO_LABELS } from "@/constants/products";
import { formatCurrency } from "@/utils/format";
import { useCartStore } from "@/store/cartStore";

/**
 * Product detail page: gallery, organic badge, price, three growing-info
 * chips (labels adapt per category — seeds vs. compost vs. tools), full
 * description, and Add to Cart / Buy Now actions.
 */
export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <Container className="py-24 text-center">
        <h1 className="font-display text-2xl text-navy">
          We couldn't find that product.
        </h1>
        <Link
          to="/products"
          className="mt-4 inline-block text-sm font-medium text-terracotta hover:underline"
        >
          ← Back to Shop All
        </Link>
      </Container>
    );
  }

  const [labelA, labelB, labelC] = PRODUCT_INFO_LABELS[product.category];
  const infoChips = [
    { label: labelA, value: product.growingInfo.sunlight },
    { label: labelB, value: product.growingInfo.daysToHarvest },
    { label: labelC, value: product.growingInfo.idealSoil },
  ];

  const handleBuyNow = () => {
    addItem(product, 1);
    navigate("/checkout");
  };

  return (
    <Container className="py-12 md:py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
        <ImageGallery images={product.gallery} alt={product.name} />

        <div className="flex flex-col gap-4">
          <Badge variant="olive" className="w-fit">
            {product.badgeLabel}
          </Badge>

          <h1 className="font-display text-3xl text-navy md:text-4xl">
            {product.name}
          </h1>

          <StarRating rating={product.rating} />

          <p className="font-display text-2xl text-ink">
            {formatCurrency(product.price)}
            <span className="ml-2 text-sm font-normal text-ink/60">
              / {product.unitLabel}
            </span>
          </p>

          <div className="grid grid-cols-3 gap-3 py-2">
            {infoChips.map((chip) => (
              <div
                key={chip.label}
                className="rounded-card bg-white p-3 text-center shadow-card"
              >
                <p className="text-xs font-medium text-ink/60">
                  {chip.label}:
                </p>
                <p className="mt-1 text-sm font-semibold text-ink">
                  {chip.value}
                </p>
              </div>
            ))}
          </div>

          <p className="leading-relaxed text-ink/80">{product.description}</p>

          <div className="mt-2 flex flex-wrap gap-3">
            <Button
              disabled={!product.inStock}
              onClick={() => addItem(product, 1)}
            >
              Add to cart
            </Button>
            <Button disabled={!product.inStock} onClick={handleBuyNow}>
              Buy now
            </Button>
          </div>
          {!product.inStock && (
            <p className="text-sm text-tomato">
              This item is currently out of stock.
            </p>
          )}
        </div>
      </div>
    </Container>
  );
}
