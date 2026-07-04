import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { Menu, Search, ShoppingCart, Sprout, User } from "lucide-react";
import { cn } from "@/utils/cn";
import { NAV_LINKS } from "@/constants/navigation";
import { useCartStore } from "@/store/cartStore";
import { useDisclosure } from "@/hooks/useDisclosure";
import { MobileMenu } from "@/components/layout/MobileMenu";

/**
 * Sticky top navigation. Olive background sampled at #707A5A across
 * every page, with the two-line "True / Roots" wordmark, a pill
 * highlight on the active link, and search/cart/account icons matching
 * the reference header. The cart icon carries a live item-count badge
 * from the cart store.
 */
export function Navbar() {
  const mobileMenu = useDisclosure();
  const itemCount = useCartStore((state) => state.itemCount());

  return (
    <header className="sticky top-0 z-40 bg-olive text-cream">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
        <Link to="/" className="flex items-center gap-2">
          <Sprout className="h-8 w-8 shrink-0" aria-hidden="true" />
          <span className="font-display text-xl font-semibold leading-tight">
            True
            <br />
            Roots
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-pill px-4 py-1.5 text-sm font-medium transition-colors hover:text-cream",
                  isActive ? "bg-olive-light/60 text-cream" : "text-cream/85"
                )
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-olive-dark"
          >
            <Search className="h-5 w-5" />
          </button>

          <Link
            to="/cart"
            aria-label={`Cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-olive-dark"
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta text-[10px] font-semibold text-cream">
                {itemCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            aria-label="Account"
            className="hidden h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-olive-dark sm:flex"
          >
            <User className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={mobileMenu.open}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-olive-dark md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <MobileMenu open={mobileMenu.isOpen} onClose={mobileMenu.close} />
    </header>
  );
}
