import type { CartItem } from "@/types/cart";

export type PaymentMethod = "card" | "upi" | "wallet";

export interface DeliveryDetails {
  email: string;
  name: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
}

export interface CheckoutPayload {
  delivery: DeliveryDetails;
  paymentMethod: PaymentMethod;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export interface OrderConfirmation {
  orderId: string;
  placedAt: string;
  total: number;
  email: string;
  items: CartItem[];
}
