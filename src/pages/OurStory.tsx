import { Section } from "@/components/ui/Section";
import { ContactStrip } from "@/components/story/ContactStrip";
import { VALUES, valueToneClassName } from "@/constants/services";

/**
 * Our Story page: mission statement beside a hero photo, four value
 * cards in their reference tones (terracotta, neutral, navy, sage),
 * and the shared ContactStrip band above the footer.
 */
export function OurStory() {
  return (
    <>
      <Section tone="sand">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <h1 className="font-display text-3xl text-navy">Our story</h1>
            <p className="mt-4 leading-relaxed text-ink/80">
              True Roots started with a simple, heartfelt mission: to protect
              and pass down the incredible varieties of multi-generational
              heirloom seeds that are quietly disappearing from our tables.
              We are here to celebrate biodiversity, honor generations of
              agricultural wisdom, and give you access to the absolute
              purest materials for growing healthy, flavor-packed food.
              Every single seed packet we pack by hand carries a rich piece
              of living history — it's an open invitation to join us in
              cultivation and grow a greener, more sustainable future
              together.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-card shadow-raised">
            <img
              src="https://picsum.photos/seed/tr-our-story/900/700"
              alt="A hand planting a seed in dark, rich soil"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.id}
                className={`rounded-card p-6 ${valueToneClassName(value.tone)}`}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
                <h2 className="mt-4 font-display text-base">{value.title}</h2>
                <p className="mt-2 text-sm leading-relaxed opacity-90">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <ContactStrip />
    </>
  );
}
