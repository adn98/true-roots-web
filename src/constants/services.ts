import {
  Compass,
  Droplets,
  Handshake,
  Home,
  Presentation,
  Recycle,
  Sprout,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  iconColorClassName: string;
  title: string;
  description: string;
}

/**
 * The four expert-service cards on the Services page, in the same order
 * and with the same icon colors as the reference design (blue map, brown
 * soil, green greenhouse, red presentation icon).
 */
export const SERVICES: ServiceItem[] = [
  {
    id: "landscape-design",
    icon: Compass,
    iconColorClassName: "text-sky-600",
    title: "Landscape & Garden Design",
    description:
      "Personal consultations for backyard transformations, urban balconies, and biodiverse farm layouts.",
  },
  {
    id: "soil-testing",
    icon: Droplets,
    iconColorClassName: "text-amber-700",
    title: "Soil Testing & Regeneration",
    description:
      "Analyze your earth and receive an organic roadmap to restore soil health and nutrient balance.",
  },
  {
    id: "community-spaces",
    icon: Home,
    iconColorClassName: "text-emerald-600",
    title: "Corporate & Community Green Spaces",
    description:
      "B2B installations for office buildings and urban areas looking to incorporate edible gardens or green walls.",
  },
  {
    id: "workshops",
    icon: Presentation,
    iconColorClassName: "text-tomato",
    title: "True Roots Workshops",
    description:
      "Private and group educational sessions focused on seasonal planting, composting, and pest management.",
  },
];

export type ValueTone = "terracotta" | "neutral" | "navy" | "sage";

export interface ValueItem {
  id: string;
  icon: LucideIcon;
  tone: ValueTone;
  title: string;
  description: string;
}

const TONE_STYLES: Record<ValueTone, string> = {
  terracotta: "bg-terracotta text-cream",
  neutral: "bg-neutralcard text-cream",
  navy: "bg-navy text-cream",
  sage: "bg-sage text-olive-dark",
};

export function valueToneClassName(tone: ValueTone): string {
  return TONE_STYLES[tone];
}

/**
 * The four value cards on the Our Story page, in the same order and
 * tones as the reference design (terracotta, neutral gray, navy, sage).
 */
export const VALUES: ValueItem[] = [
  {
    id: "sustainable-practices",
    icon: Recycle,
    tone: "terracotta",
    title: "Sustainable Practices",
    description:
      "Curating everything you need to grow organically and take gentle care of your patch of earth.",
  },
  {
    id: "seed-preservation",
    icon: Sprout,
    tone: "neutral",
    title: "Seed Preservation",
    description:
      "Keeping living history alive by saving and protecting pure, multi-generational heirloom varieties.",
  },
  {
    id: "community-growth",
    icon: Users,
    tone: "navy",
    title: "Community Growth",
    description:
      "Creating a welcoming space where gardeners and farmers can share wisdom, learn, and grow together.",
  },
  {
    id: "farmer-partnerships",
    icon: Handshake,
    tone: "sage",
    title: "Farmer Partnerships",
    description:
      "Working hand-in-hand with independent heritage growers who love the soil as much as we do.",
  },
];
