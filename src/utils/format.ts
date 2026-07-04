/**
 * Format a number as Indian Rupees, e.g. 250 -> "₹250", 355 -> "₹355".
 * Pass `{ decimals: true }` to force two decimal places (used in cost
 * breakdowns like the cart/checkout summary, matching the design).
 */
export function formatCurrency(
  amount: number,
  options?: { decimals?: boolean }
): string {
  const decimals = options?.decimals ?? false;
  const formatted = amount.toLocaleString("en-IN", {
    minimumFractionDigits: decimals ? 2 : 0,
    maximumFractionDigits: 2,
  });
  return `\u20B9${formatted}`;
}

/**
 * Generate a short, human-friendly order id, e.g. "TR-12345678"
 */
export function generateOrderId(): string {
  const random = Math.floor(10000000 + Math.random() * 89999999);
  return `TR-${random}`;
}

/**
 * Format an ISO date string as "June 15, 2026".
 */
export function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
