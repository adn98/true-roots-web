import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { contactSchema } from "@/schemas/contactSchema";
import type { ContactFormValues } from "@/schemas/contactSchema";
import { CONTACT_INFO } from "@/constants/contactInfo";
import { submitContactForm } from "@/services/contactService";

const INFO_CARDS = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: [CONTACT_INFO.location.line1, CONTACT_INFO.location.address],
  },
  {
    icon: Phone,
    title: "Phone Number",
    lines: [CONTACT_INFO.phone],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [CONTACT_INFO.email],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: [CONTACT_INFO.hours.weekday, CONTACT_INFO.hours.saturday],
  },
];

/**
 * Contact page: sand-panel form on the left, sage-panel info cards on
 * the right, matching the reference split layout exactly.
 */
export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    await submitContactForm(values);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-sand px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto max-w-md rounded-card bg-sage p-6 md:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Full Name:"
                error={errors.fullName?.message}
                {...register("fullName")}
              />
              <Input
                label="Email:"
                type="email"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Number:"
                type="tel"
                error={errors.number?.message}
                {...register("number")}
              />
              <Input
                label="Company (if any):"
                error={errors.company?.message}
                {...register("company")}
              />
            </div>
            <Input
              label="Product/Service interested in:"
              error={errors.interest?.message}
              {...register("interest")}
            />
            <Textarea
              label="Message:"
              error={errors.message?.message}
              {...register("message")}
            />
            <Button type="submit" variant="secondary" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send Message"}
            </Button>
            {submitted && (
              <p className="text-sm text-olive-dark">
                Thanks — we'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="bg-sage px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto flex max-w-md flex-col gap-4">
          {INFO_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex items-start gap-4 rounded-card bg-white p-5 shadow-card"
            >
              <card.icon className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" aria-hidden="true" />
              <div>
                <h3 className="font-display text-sm text-terracotta">
                  {card.title}
                </h3>
                {card.lines.map((line) => (
                  <p key={line} className="text-sm text-ink/70">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
