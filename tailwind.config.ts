import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Header / footer / secondary buttons — sampled #707A5A across every screen
        olive: {
          light: "#8A9470",
          DEFAULT: "#707A5A",
          dark: "#5C6549",
        },
        // Primary CTA — sampled #D47861 (Shop Now, Add to Cart, Buy Now, Secure Checkout)
        terracotta: {
          light: "#E9C4B8",
          DEFAULT: "#D47861",
          dark: "#BE6247",
        },
        // Main content surface — sampled #F2EBD3, used on nearly every page
        sand: "#F2EBD3",
        // Secondary panel surface — sampled #D4D5B6 (checkout/contact side panels,
        // CTA + contact-info bands, "Farmer Partnerships" value card)
        sage: "#D4D5B6",
        // Outermost background fallback
        cream: "#F8F5E8",
        // Heading text + "Community Growth" value card — sampled #4E5C6C
        navy: {
          DEFAULT: "#4E5C6C",
          dark: "#3E4A57",
        },
        // "Seed Preservation" value card — sampled flat #A1A1A1
        neutralcard: {
          DEFAULT: "#A1A1A1",
          dark: "#898989",
        },
        // Imagery / error accent
        tomato: {
          DEFAULT: "#BF2A1D",
          dark: "#8F2016",
        },
        // Default body text
        ink: "#2B2A25",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Work Sans'", "sans-serif"],
      },
      borderRadius: {
        card: "1rem",
        pill: "999px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(43, 42, 37, 0.08)",
        raised: "0 8px 30px rgba(43, 42, 37, 0.12)",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
} satisfies Config;
