export type ProductCategory =
  | "vegetables"
  | "herbs"
  | "flowers"
  | "compost"
  | "tools";

export interface GrowingInfo {
  sunlight: string;
  daysToHarvest: string;
  idealSoil: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  /** e.g. "Per Packet (~50 Seeds)" or "Per 5kg Bag" */
  unitLabel: string;
  /** e.g. "100% Organic & Non-GMO" */
  badgeLabel: string;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  growingInfo: GrowingInfo;
  highlights: string[];
  inStock: boolean;
  rating: number;
}
