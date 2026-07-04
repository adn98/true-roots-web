/**
 * Site footer. A single olive bar with a centered copyright line —
 * matches the reference exactly (no wordmark or link columns).
 */
export function Footer() {
  return (
    <footer className="bg-olive py-4 text-center text-xs text-cream/90">
      © {new Date().getFullYear()} True Roots E-Commerce Ltd. All rights
      reserved. | <span className="cursor-pointer hover:underline">Privacy Policy</span> |{" "}
      <span className="cursor-pointer hover:underline">Terms of Service</span>
    </footer>
  );
}
