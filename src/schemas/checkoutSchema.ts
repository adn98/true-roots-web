import { z } from "zod";

export const checkoutSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  name: z.string().min(2, "Enter your full name"),
  address: z.string().min(5, "Enter your street address"),
  city: z.string().min(2, "Enter your city"),
  zipCode: z
    .string()
    .min(4, "Enter a valid zip / postal code")
    .max(10, "Enter a valid zip / postal code"),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(15, "Enter a valid phone number"),
  paymentMethod: z.enum(["card", "upi", "wallet"], {
    required_error: "Choose a payment method",
  }),
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
