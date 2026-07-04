import type { ContactPayload } from "@/types/contact";

/**
 * Submits the contact form. Mocked with a network-like delay since
 * there's no live backend — replace with `api.post("/contact", payload)`
 * once a real endpoint exists.
 */
export async function submitContactForm(
  _payload: ContactPayload
): Promise<{ success: true }> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { success: true };
}
