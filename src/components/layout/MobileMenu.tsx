import { NavLink as RouterNavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/utils/cn";
import { NAV_LINKS } from "@/constants/navigation";

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Full-screen slide-down nav for small viewports. Mirrors the desktop
 * NAV_LINKS list so the two never drift apart.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden bg-olive-dark md:hidden"
        >
          <nav
            className="flex flex-col gap-1 px-6 py-4"
            aria-label="Mobile primary"
          >
            <div className="mb-2 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full text-cream transition-colors hover:bg-olive"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-olive",
                    isActive && "bg-olive"
                  )
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
