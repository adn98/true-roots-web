import type { Product, ProductCategory } from "@/types/product";

/**
 * Display labels for the three growingInfo chips on the product detail
 * page. Seed categories read literally ("Sunlight", "Days to Harvest",
 * "Ideal Soil" — matching the reference design exactly); compost and
 * tools reuse the same three data slots under labels that make sense
 * for a non-seed product.
 */
export const PRODUCT_INFO_LABELS: Record<
  ProductCategory,
  [string, string, string]
> = {
  vegetables: ["Sunlight", "Days to Harvest", "Ideal Soil"],
  herbs: ["Sunlight", "Days to Harvest", "Ideal Soil"],
  flowers: ["Sunlight", "Days to Harvest", "Ideal Soil"],
  compost: ["Best For", "Ready to Use", "Works With"],
  tools: ["Best For", "Durability", "Works With"],
};

const img = (seed: string, w = 800, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "heirloom-tomato-seeds",
    name: "Heirloom Tomato Seeds",
    category: "vegetables",
    price: 250,
    unitLabel: "Per Packet (~50 Seeds)",
    badgeLabel: "100% Organic & Non-GMO",
    image: img("tr-tomato-1"),
    gallery: [img("tr-tomato-1"), img("tr-tomato-2"), img("tr-tomato-3")],
    shortDescription: "Rich, sun-ripened heirloom tomatoes for your garden.",
    description:
      "A prized multi-generational family heirloom known for its massive, deeply ribbed fruits and rich, old-fashioned sweet flavor. These seeds have been carefully harvested from plants grown strictly under organic, sustainable conditions. High-yield and highly resilient.",
    growingInfo: {
      sunlight: "Full Sun",
      daysToHarvest: "75 – 80 days",
      idealSoil: "Loamy, pH 6.0–6.8",
    },
    highlights: [
      "100% non-GMO & open-pollinated",
      "Germinates in 7–10 days",
      "Best sown indoors 6 weeks before last frost",
      "Yields approx. 40 tomatoes per plant",
    ],
    inStock: true,
    rating: 4.8,
  },
  {
    id: "2",
    slug: "organic-compost-mix",
    name: "Organic Compost Mix",
    category: "compost",
    price: 350,
    unitLabel: "Per 5kg Bag",
    badgeLabel: "100% Organic & Peat-Free",
    image: img("tr-compost-1"),
    gallery: [img("tr-compost-1"), img("tr-compost-2"), img("tr-compost-3")],
    shortDescription: "Nutrient-rich, peat-free compost for every bed.",
    description:
      "Our signature blend of aged organic matter feeds the soil, not just the plant. Peat-free and slow-releasing, it improves structure and water retention in raised beds, containers, and in-ground rows alike.",
    growingInfo: {
      sunlight: "Any Condition",
      daysToHarvest: "Ready to Use",
      idealSoil: "Enriches All Soil Types",
    },
    highlights: [
      "Peat-free, sustainably sourced",
      "Improves drainage and water retention",
      "Safe for vegetables, herbs, and flowers",
      "Odor-free once worked into soil",
    ],
    inStock: true,
    rating: 4.9,
  },
  {
    id: "3",
    slug: "sweet-basil-seeds",
    name: "Sweet Basil Seeds",
    category: "herbs",
    price: 180,
    unitLabel: "Per Packet (~100 Seeds)",
    badgeLabel: "100% Organic & Non-GMO",
    image: img("tr-basil-1"),
    gallery: [img("tr-basil-1"), img("tr-basil-2"), img("tr-basil-3")],
    shortDescription: "Fragrant, classic basil for kitchen gardens.",
    description:
      "A kitchen-garden staple, our Sweet Basil is aromatic and fast-growing, perfect for containers on a sunny windowsill or a full herb bed outdoors.",
    growingInfo: {
      sunlight: "Full Sun",
      daysToHarvest: "45 – 60 days",
      idealSoil: "Rich, well-drained",
    },
    highlights: [
      "Ready to harvest in 6–8 weeks",
      "Thrives in containers or beds",
      "Attracts pollinators",
    ],
    inStock: true,
    rating: 4.7,
  },
  {
    id: "4",
    slug: "rainbow-carrot-seeds",
    name: "Rainbow Carrot Seeds",
    category: "vegetables",
    price: 210,
    unitLabel: "Per Packet (~75 Seeds)",
    badgeLabel: "100% Organic & Non-GMO",
    image: img("tr-carrot-1"),
    gallery: [img("tr-carrot-1"), img("tr-carrot-2"), img("tr-carrot-3")],
    shortDescription: "A colorful mix of purple, orange and gold carrots.",
    description:
      "This vibrant carrot blend brings color and sweetness to every harvest. Loose, sandy soil produces the straightest roots, but they adapt well to raised beds.",
    growingInfo: {
      sunlight: "Full Sun",
      daysToHarvest: "65 – 75 days",
      idealSoil: "Loose, Sandy Loam",
    },
    highlights: [
      "Blend of 5 heirloom carrot varieties",
      "Harvest in 65–75 days",
      "Sweet, crisp texture",
    ],
    inStock: true,
    rating: 4.6,
  },
  {
    id: "5",
    slug: "sunflower-seeds",
    name: "Giant Sunflower Seeds",
    category: "flowers",
    price: 150,
    unitLabel: "Per Packet (~20 Seeds)",
    badgeLabel: "100% Organic & Non-GMO",
    image: img("tr-sunflower-1"),
    gallery: [img("tr-sunflower-1"), img("tr-sunflower-2"), img("tr-sunflower-3")],
    shortDescription: "Towering, pollinator-friendly sunflowers.",
    description:
      "Watch these giants climb up to 10 feet tall over a single season. Their broad, golden heads are a favorite of bees and songbirds alike.",
    growingInfo: {
      sunlight: "Full Sun",
      daysToHarvest: "80 – 100 days",
      idealSoil: "Well-drained, Fertile",
    },
    highlights: [
      "Grows up to 10 ft tall",
      "Full sun, drought tolerant once established",
      "Great for pollinator gardens",
    ],
    inStock: true,
    rating: 4.9,
  },
  {
    id: "6",
    slug: "curly-kale-seeds",
    name: "Curly Kale Seeds",
    category: "vegetables",
    price: 190,
    unitLabel: "Per Packet (~60 Seeds)",
    badgeLabel: "100% Organic & Non-GMO",
    image: img("tr-kale-1"),
    gallery: [img("tr-kale-1"), img("tr-kale-2"), img("tr-kale-3")],
    shortDescription: "Cold-hardy, nutrient-dense kale.",
    description:
      "Curly Kale is a resilient, cool-season green that sweetens after the first frost. A reliable performer for spring and fall harvests.",
    growingInfo: {
      sunlight: "Full Sun to Part Shade",
      daysToHarvest: "55 – 70 days",
      idealSoil: "Rich, Moist Loam",
    },
    highlights: [
      "Cold hardy to 20°F",
      "Continuous harvest — cut and it regrows",
      "High in vitamins A, C, and K",
    ],
    inStock: true,
    rating: 4.5,
  },
  {
    id: "7",
    slug: "lavender-seeds",
    name: "English Lavender Seeds",
    category: "flowers",
    price: 230,
    unitLabel: "Per Packet (~40 Seeds)",
    badgeLabel: "100% Organic & Non-GMO",
    image: img("tr-lavender-1"),
    gallery: [img("tr-lavender-1"), img("tr-lavender-2"), img("tr-lavender-3")],
    shortDescription: "Fragrant perennial lavender for borders.",
    description:
      "A classic perennial with silvery foliage and fragrant purple spikes. Once established, English Lavender is remarkably drought-tolerant.",
    growingInfo: {
      sunlight: "Full Sun",
      daysToHarvest: "90 – 200 days",
      idealSoil: "Sandy, Well-drained",
    },
    highlights: [
      "Perennial — returns year after year",
      "Drought tolerant once established",
      "Attracts bees and butterflies",
    ],
    inStock: true,
    rating: 4.8,
  },
  {
    id: "8",
    slug: "bamboo-hand-trowel",
    name: "Bamboo-Handle Hand Trowel",
    category: "tools",
    price: 450,
    unitLabel: "Per Tool",
    badgeLabel: "Sustainably Made",
    image: img("tr-trowel-1"),
    gallery: [img("tr-trowel-1"), img("tr-trowel-2"), img("tr-trowel-3")],
    shortDescription: "Durable carbon-steel trowel with a bamboo handle.",
    description:
      "Built to last, this hand trowel features a rust-resistant carbon-steel head and a sustainably sourced bamboo handle, sized comfortably for extended use.",
    growingInfo: {
      sunlight: "Indoor & Outdoor Use",
      daysToHarvest: "Built to Last",
      idealSoil: "Works in Any Soil",
    },
    highlights: [
      "Rust-resistant carbon steel head",
      "Sustainably sourced bamboo handle",
      "Ergonomic grip",
    ],
    inStock: true,
    rating: 4.7,
  },
  {
    id: "9",
    slug: "seed-starting-pots",
    name: "Seed Starting Pots",
    category: "tools",
    price: 75,
    unitLabel: "Pack of 2",
    badgeLabel: "Biodegradable",
    image: img("tr-addon-pots"),
    gallery: [img("tr-addon-pots")],
    shortDescription: "Compact biodegradable pots for starting seedlings.",
    description:
      "Give seedlings a gentle start with these compact, biodegradable pots — plant the whole pot directly into the ground once roots take hold, no transplant shock required.",
    growingInfo: {
      sunlight: "Indoor & Outdoor Use",
      daysToHarvest: "Reusable Season to Season",
      idealSoil: "Works With Any Seed Mix",
    },
    highlights: [
      "Fully biodegradable material",
      "Reduces transplant shock",
      "Pack of 2, stackable for storage",
    ],
    inStock: true,
    rating: 4.6,
  },
  {
    id: "10",
    slug: "watering-can",
    name: "Watering Can",
    category: "tools",
    price: 75,
    unitLabel: "1.5L",
    badgeLabel: "Rust-Resistant",
    image: img("tr-addon-can"),
    gallery: [img("tr-addon-can")],
    shortDescription: "A gentle-pour 1.5L can, sized for containers and beds.",
    description:
      "A lightweight, gentle-pour watering can with a long spout for precise watering around delicate seedlings, sized comfortably for balconies and raised beds.",
    growingInfo: {
      sunlight: "Indoor & Outdoor Use",
      daysToHarvest: "Built to Last",
      idealSoil: "Works With Any Container",
    },
    highlights: [
      "1.5L capacity, lightweight when full",
      "Long spout for precise, gentle watering",
      "Rust-resistant finish",
    ],
    inStock: true,
    rating: 4.5,
  },
  {
    id: "11",
    slug: "sweet-bell-pepper-seeds",
    name: "Sweet Bell Pepper Seeds",
    category: "vegetables",
    price: 200,
    unitLabel: "Per Packet (~30 Seeds)",
    badgeLabel: "100% Organic & Non-GMO",
    image: img("tr-pepper-1"),
    gallery: [img("tr-pepper-1"), img("tr-pepper-2"), img("tr-pepper-3")],
    shortDescription: "Crisp, sweet peppers in red, yellow and green.",
    description:
      "These Sweet Bell Peppers ripen from green to vivid red and yellow, offering a sweet crunch that's equally at home raw or roasted.",
    growingInfo: {
      sunlight: "Full Sun",
      daysToHarvest: "70 – 90 days",
      idealSoil: "Rich, Well-drained",
    },
    highlights: [
      "Best started indoors 8 weeks before last frost",
      "Full sun, consistent watering",
      "Harvest in 70–90 days",
    ],
    inStock: false,
    rating: 4.4,
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  PRODUCTS.find((product) => product.slug === slug);

export const getRelatedProducts = (product: Product, limit = 4): Product[] =>
  PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, limit);
