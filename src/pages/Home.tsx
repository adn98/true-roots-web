import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/Button";
import { ProductGrid } from "@/components/product/ProductGrid";
import { PRODUCTS } from "@/constants/products";

const FEATURED = PRODUCTS.slice(0, 4);

/**
 * Landing page: full-bleed hero over an aerial farmland photo with the
 * "Grow Organic. Live Sustainably." headline and primary CTA, followed
 * by the New Arrivals teaser grid.
 */
export function Home() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-olive text-cream md:min-h-[80vh]">
        <img
          src="https://picsum.photos/seed/tr-hero-field/1600/1000"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16"
        >
          <h1 className="max-w-xl font-display text-4xl uppercase leading-tight md:text-6xl">
            Grow Organic.
            <br />
            Live Sustainably.
          </h1>
          <p className="mt-4 max-w-md font-medium text-cream/90">
            Handpicked seeds, organic soil amendments, and heirloom tools for
            every growing season. Direct from farms to your doorstep.
          </p>
          <Link
            to="/products"
            className={buttonVariants({
              size: "lg",
              className: "mt-8 uppercase",
            })}
          >
            Shop Now
          </Link>
        </motion.div>
      </section>

      <Section tone="sand">
        <h2 className="text-center font-display text-3xl text-navy">
          New Arrivals
        </h2>
        <div className="mt-10">
          <ProductGrid products={FEATURED} />
        </div>
      </Section>
    </>
  );
}
