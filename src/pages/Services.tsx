import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CtaBanner } from "@/components/story/CtaBanner";
import { SERVICES } from "@/constants/services";

/**
 * Services page: four expert-service cards followed by a sage-colored
 * promotional band. No CTA button here — the reference design keeps
 * this band as plain text.
 */
export function Services() {
  return (
    <>
      <Section tone="sand">
        <h1 className="text-center font-display text-3xl text-navy">
          Cultivating Success: Our Expert Services
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="flex flex-col items-center text-center">
                <Icon
                  className={`h-8 w-8 ${service.iconColorClassName}`}
                  aria-hidden="true"
                />
                <h2 className="mt-4 font-display text-base text-ink">
                  {service.title}:
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      <CtaBanner
        title="Transform Your Patch of Earth Today."
        subtitle="Learn More About Our Premium Consultations & Programs."
      />
    </>
  );
}
