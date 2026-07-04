import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  number: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(15, "Enter a valid phone number"),
  company: z.string().optional(),
  interest: z.string().min(2, "Let us know what you're interested in"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
