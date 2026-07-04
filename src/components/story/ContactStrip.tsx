import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CONTACT_INFO } from "@/constants/contactInfo";

/**
 * Thin sage-colored band with email + phone, sampled at #D4D5B6. Appears
 * above the footer on the Our Story and Order Success pages only.
 */
export function ContactStrip() {
  return (
    <div className="bg-sage py-6 text-center text-sm text-olive-dark">
      <Container className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-8">
        <span className="inline-flex items-center gap-2">
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email Us:{" "}
          <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
            {CONTACT_INFO.email}
          </a>
        </span>
        <span className="inline-flex items-center gap-2">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Us:{" "}
          <a href={`tel:${CONTACT_INFO.phone}`} className="hover:underline">
            {CONTACT_INFO.phone}
          </a>{" "}
          ({CONTACT_INFO.hours.weekday})
        </span>
      </Container>
    </div>
  );
}
