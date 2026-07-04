import type { CheckoutPayload, OrderConfirmation } from "@/types/order";
import { generateOrderId } from "@/utils/format";

/**
 * Submits an order. Mocked with a network-like delay since there's no
 * live backend — replace the body with `api.post("/orders", payload)`
 * once a real endpoint exists.
 */
export async function submitOrder(
  payload: CheckoutPayload
): Promise<OrderConfirmation> {
  await new Promise((resolve) => setTimeout(resolve, 700));

  return {
    orderId: generateOrderId(),
    placedAt: new Date().toISOString(),
    total: payload.total,
    email: payload.delivery.email,
    items: payload.items,
  };
}
