/**
 * Single source of truth for True Roots' contact details, reused by the
 * Contact page's info card, and by the ContactStrip band shown on the
 * Our Story and Order Success pages.
 */
export const CONTACT_INFO = {
  email: "support@trueroots.com",
  phone: "+91 91234 56789",
  hours: {
    weekday: "Mon–Fri: 9AM–6PM",
    saturday: "Sat: 10AM–4PM",
  },
  location: {
    line1: "Our Location",
    address: "123 Garden Lane, Suite A, Green City, 1000",
  },
} as const;
