import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "PW-ANT-101",
    slug: "chettinad-reclaimed-teak-armoire",
    name: "Chettinad Reclaimed Teak Armoire",
    category: "antique-furniture",
    categoryName: "Antique & Heritage Furniture",
    shortDescription:
      "A monumental two-door wardrobe crafted from seasoned reclaimed teakwood, featuring traditional iron latchwork and rich honey-amber patina.",
    fullDescription:
      "This antique-style armoire reflects the stately woodworking traditions of Tamil Nadu and the Coromandel coast. Handcrafted from heavy, naturally aged teakwood with authentic tongue-and-groove joinery, the piece showcases natural timber striations and historic hand-planed surfaces. Inside, adjustable solid wood shelving and a concealed brass lock offer enduring utility for modern bedrooms or grand entryways.",
    primaryImage:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    ],
    material: "Solid Reclaimed Teakwood & Hand-forged Brass Hardware",
    finish: "Natural beeswax polish with antique hand-distressed patina",
    dimensions: "Approx. 195 cm (H) x 115 cm (W) x 58 cm (D)",
    origin: "Handcrafted in the Auroville / Tamil Nadu woodworking tradition",
    priceNote: "Price available upon enquiry. Custom dimensions available.",
    isFeatured: true,
    inStock: true,
    isSampleCatalog: true,
    specifications: [
      { label: "Timber", value: "Seasoned Reclaimed Teak (Tectona grandis)" },
      { label: "Joinery", value: "Traditional mortise and tenon joinery" },
      { label: "Hardware", value: "Solid hand-cast brass and blackened iron" },
      { label: "Shelving", value: "3 removable solid timber shelves + hanging rail" },
      { label: "Maintenance", value: "Occasional natural wax buffing" },
    ],
    tags: ["Armoire", "Antique", "Teakwood", "Wardrobe", "Heritage"],
  },
  {
    id: "PW-ANT-102",
    slug: "colonial-brass-fitted-hope-chest",
    name: "Coromandel Brass-Fitted Timber Chest",
    category: "antique-furniture",
    categoryName: "Antique & Heritage Furniture",
    shortDescription:
      "A maritime-inspired timber hope chest bound with solid brass corner braces, side carry rings, and hand-carved floral escutcheons.",
    fullDescription:
      "Inspired by trade trunks that once traveled the Bay of Bengal, this solid timber storage chest combines rustic strength with decorative brass strapwork. Each corner is reinforced with hand-hammered brass fittings, while the lid opens on heavy-duty iron hinges to reveal fragrant cedar or seasoned teak interior storage ideal for heirlooms, textiles, and collectibles.",
    primaryImage:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    ],
    material: "Aged Teakwood with Brass & Hand-cast Iron",
    finish: "Matte oil finish preserving authentic timber character",
    dimensions: "Approx. 52 cm (H) x 98 cm (W) x 48 cm (D)",
    origin: "Auroville artisan workshop",
    priceNote: "Enquire directly for price and currently available chest designs.",
    isFeatured: true,
    inStock: true,
    isSampleCatalog: true,
    specifications: [
      { label: "Timber", value: "Aged solid Indian teak" },
      { label: "Hardware", value: "Solid brass strapwork & heavy side handles" },
      { label: "Function", value: "Coffee table or trunk storage" },
      { label: "Weight", value: "Heavy solid timber construction" },
    ],
    tags: ["Chest", "Brass Fittings", "Trunk", "Antique Decor"],
  },
  {
    id: "PW-TAB-201",
    slug: "monastery-solid-teak-dining-table",
    name: "Monastery Solid Teak Dining Table",
    category: "tables-seating",
    categoryName: "Tables & Seating",
    shortDescription:
      "An expansive 8-seater dining table featuring twin sculpted trestle pedestals and an unadorned 2-inch thick solid teak tabletop.",
    fullDescription:
      "Built for gathering, the Monastery Dining Table celebrates the sheer density and grain texture of mature timber. The top is surfaced with broad solid planks hand-planed to a satin touch, supported by robust architectural trestles connected with a traditional keyed timber stretcher. Perfectly suited for contemporary Auroville villas, heritage homes, and farmhouses.",
    primaryImage:
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1200&q=80",
    ],
    material: "100% Solid Plantation & Reclaimed Teakwood",
    finish: "Water-resistant matte polyurethane & organic beeswax blend",
    dimensions: "Approx. 76 cm (H) x 220 cm (L) x 100 cm (W)",
    origin: "Handcrafted in Auroville region",
    priceNote: "Custom lengths (6-seater to 12-seater) available upon WhatsApp enquiry.",
    isFeatured: true,
    inStock: true,
    isSampleCatalog: true,
    specifications: [
      { label: "Capacity", value: "Seats 8-10 people comfortably" },
      { label: "Top Thickness", value: "approx. 45 mm solid wood" },
      { label: "Base Type", value: "Trestle base with pegged timber stretcher" },
      { label: "Customization", value: "Available in custom dimensions" },
    ],
    tags: ["Dining Table", "Teak", "Trestle Table", "Solid Wood"],
  },
  {
    id: "PW-TAB-202",
    slug: "colonial-cane-plantation-easy-chair",
    name: "Colonial Plantation Easy Chair",
    category: "tables-seating",
    categoryName: "Tables & Seating",
    shortDescription:
      "Classic Anglo-Indian colonial lounger with hand-woven rattan cane back, curved wooden armrests, and swing-out leg rests.",
    fullDescription:
      "The quintessential veranda chair of South India, beloved across Pondicherry and coastal bungalows for over a century. Features an ergonomic reclining angle, meticulously hand-woven natural rattan canework for cool air circulation in tropical climates, and elegant turned timber legs crafted from seasoned hardwood.",
    primaryImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
    ],
    material: "Solid Teak Frame & Natural Woven Rattan Cane",
    finish: "Warm Walnut stain with natural wax topcoat",
    dimensions: "Approx. 95 cm (H) x 72 cm (W) x 110 cm (D)",
    origin: "Auroville workshop craft",
    priceNote: "Available in single chairs or matching pairs. Enquire on WhatsApp.",
    isFeatured: true,
    inStock: true,
    isSampleCatalog: true,
    specifications: [
      { label: "Canework", value: "Traditional octagonal hand-woven rattan" },
      { label: "Frame", value: "Hand-shaped seasoned teakwood" },
      { label: "Comfort", value: "Deep reclining posture with ergonomic lumbar support" },
      { label: "Usage", value: "Verandas, living areas, library reading nooks" },
    ],
    tags: ["Planter Chair", "Cane Chair", "Colonial Seating", "Veranda"],
  },
  {
    id: "PW-CAB-301",
    slug: "glazed-apothecary-display-cabinet",
    name: "Glazed Apothecary Display Cabinet",
    category: "cabinets-storage",
    categoryName: "Cabinets & Display",
    shortDescription:
      "A grand display vitrine combining multi-pane glass doors, antique brass latch bolts, and a lower tier of apothecary-style drawers.",
    fullDescription:
      "An arresting centerpiece for dining rooms, studios, or retail displays. Hand-built from seasoned hardwood, the upper vitrine provides dust-free visibility for ceramic tableware, curated curios, or fine glassware behind framed glass panes. Below, nine apothecary drawers fitted with brass cup pulls offer discreet, organized storage.",
    primaryImage:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    ],
    material: "Solid Indian Rosewood / Teak with Clear Architectural Glass",
    finish: "Hand-rubbed dark walnut patina",
    dimensions: "Approx. 210 cm (H) x 135 cm (W) x 48 cm (D)",
    origin: "Handcrafted in Edayanchavadi, Auroville",
    priceNote: "Price and lead time upon WhatsApp enquiry.",
    isFeatured: true,
    inStock: true,
    isSampleCatalog: true,
    specifications: [
      { label: "Glass", value: "4 mm clear toughened glass panes" },
      { label: "Drawers", value: "9 traditional wood-runner drawers with brass label holders" },
      { label: "Doors", value: "Twin tall framed doors with locking cremone bolts" },
    ],
    tags: ["Apothecary", "Vitrines", "Display Cabinet", "Bookshelf"],
  },
  {
    id: "PW-DOR-401",
    slug: "chettinad-carved-heritage-entrance-door",
    name: "Chettinad Carved Heritage Entrance Door",
    category: "doors-pillars",
    categoryName: "Carved Doors & Pillars",
    shortDescription:
      "An authentic monumental South Indian teak door with hand-carved floral panels, heavy brass studs, and a decorative lintel arch.",
    fullDescription:
      "Renowned throughout Pondicherry and Auroville architecture, antique-style carved entrance doors lend timeless dignity to villas and modern homes alike. Hand-carved by skilled artisans using age-old chisels, each panel bears auspicious floral rosettes and protective geometric motifs. Embellished with solid brass pyramid bosses and a traditional brass drop latch.",
    primaryImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80",
    ],
    material: "Mature Dense Teakwood with Cast Brass Studs & Latch",
    finish: "Weather-treated antique oil finish for indoor or semi-sheltered entries",
    dimensions: "Approx. 220 cm (H) x 120 cm (W) frame opening",
    origin: "Tamil Nadu heritage woodwork",
    priceNote: "Available with custom frame fabrication. Enquire on WhatsApp for quotes.",
    isFeatured: true,
    inStock: true,
    isSampleCatalog: true,
    specifications: [
      { label: "Carving", value: "Deep relief hand carving across 12 individual panels" },
      { label: "Door Type", value: "Double shutter entrance door with heavy frame" },
      { label: "Fittings", value: "Solid brass rivets, door knocker & drop chain" },
      { label: "Architectural Use", value: "Main portal, courtyard entrance, or feature gate" },
    ],
    tags: ["Heritage Door", "Carved Door", "Chettinad", "Architectural Wood"],
  },
  {
    id: "PW-DOR-402",
    slug: "antique-turned-teak-pillar-pair",
    name: "Auroville Restored Teakwood Pillars (Pair)",
    category: "doors-pillars",
    categoryName: "Carved Doors & Pillars",
    shortDescription:
      "A matched pair of architectural wooden pillars with turned central shafts, lotus-bud capitals, and carved stone-compatible plinths.",
    fullDescription:
      "Recovered from heritage South Indian residences and lovingly restored in our Auroville workshop, these teak pillars represent extraordinary architectural presence. Ideal for framing veranda porticos, courtyard pavilions, or living room transitions.",
    primaryImage:
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    ],
    material: "Seasoned Solid Teakwood",
    finish: "Soft antique hand wax",
    dimensions: "Approx. 240 cm (H) x 18 cm diameter",
    origin: "Heritage Coromandel restoration",
    priceNote: "Sold as a pair or set of four. Inquire on WhatsApp for current stock.",
    isFeatured: false,
    inStock: true,
    isSampleCatalog: true,
    specifications: [
      { label: "Quantity", value: "Matched pair (2 pillars)" },
      { label: "Capitals", value: "Hand-carved four-way bracket capitals" },
      { label: "Structural", value: "Load-bearing or decorative architectural placement" },
    ],
    tags: ["Pillars", "Architectural", "Carved Wood", "Heritage"],
  },
  {
    id: "PW-DEC-501",
    slug: "sculptural-carved-teak-mirror-frame",
    name: "Coromandel Carved Teak Mirror Frame",
    category: "wooden-decor",
    categoryName: "Wooden Decor & Craft",
    shortDescription:
      "An ornate wall mirror framed in solid hand-carved teakwood with floral tendril borders and natural matte finish.",
    fullDescription:
      "A statement accent for foyers, powder rooms, or above consoles. Each leaf and petal in the frame is individually chiseled by hand, celebrating the warm honey undertones of natural timber. Fitted with premium silver-backed mirror glass.",
    primaryImage:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    ],
    material: "Solid Teakwood & 5 mm Beveled Mirror Glass",
    finish: "Hand-rubbed linseed oil and matte wax",
    dimensions: "Approx. 110 cm (H) x 75 cm (W) x 6 cm (D)",
    origin: "Auroville artisan woodcarvers",
    priceNote: "Enquire directly on WhatsApp for pricing and shipping options.",
    isFeatured: false,
    inStock: true,
    isSampleCatalog: true,
    specifications: [
      { label: "Mounting", value: "Heavy-duty concealed rear wall cleats" },
      { label: "Glass", value: "5 mm high-clarity mirror glass included" },
      { label: "Weight", value: "Approx. 14 kg" },
    ],
    tags: ["Mirror", "Carved Frame", "Decor", "Teak"],
  },
  {
    id: "PW-DEC-502",
    slug: "hand-turned-teak-candle-pillar-trio",
    name: "Hand-Turned Wooden Pillar Candle Trio",
    category: "wooden-decor",
    categoryName: "Wooden Decor & Craft",
    shortDescription:
      "A graduated set of three lathe-turned solid wood candle holders with organic ring profiles and brass candle cups.",
    fullDescription:
      "Crafted from offcuts of seasoned timber to minimize workshop waste, these turned wooden pillars bring warm candlelight and sculptural height to dinner tables and mantels. No two pieces share the exact grain pattern.",
    primaryImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    material: "Turned Indian Rosewood & Solid Brass Inserts",
    finish: "Natural beeswax buffed to a smooth luster",
    dimensions: "Heights: 30 cm, 25 cm, and 18 cm",
    origin: "Priya Woodland workshop",
    priceNote: "Set of three. Enquire on WhatsApp for immediate takeaway.",
    isFeatured: false,
    inStock: true,
    isSampleCatalog: true,
    specifications: [
      { label: "Set Size", value: "3 graduated pillar stands" },
      { label: "Cup Diameter", value: "Fits standard pillar or taper candles up to 7 cm diameter" },
      { label: "Base", value: "Felt-lined base to prevent surface scratching" },
    ],
    tags: ["Candle Holders", "Turned Wood", "Decor", "Gift Item"],
  },
  {
    id: "PW-CUS-601",
    slug: "bespoke-live-edge-slab-console",
    name: "Live-Edge Teak Slab Console Table",
    category: "custom-woodwork",
    categoryName: "Custom Woodwork & Commissions",
    shortDescription:
      "A single continuous slab of seasoned wood celebrating natural organic live edges, paired with blackened minimalist iron trestles.",
    fullDescription:
      "A true marriage of nature's wild geometry and refined joinery. Selected from carefully dried timber logs, each console retains its bark contours, butterfly key stabilization joints, and unique burl figure. Commissioned custom-to-order according to your room length.",
    primaryImage:
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80",
    ],
    material: "Single-slab Solid Hardwood & Hand-forged Matte Black Steel",
    finish: "Hand-rubbed natural hardwax oil (food-safe, water-repellent)",
    dimensions: "Custom length (approx. 140 cm – 240 cm) x 40 cm (D) x 78 cm (H)",
    origin: "Custom commissioned in Auroville",
    priceNote: "Made to order. Message us on WhatsApp with your desired dimensions.",
    isFeatured: true,
    inStock: true,
    isSampleCatalog: true,
    specifications: [
      { label: "Commission Type", value: "Made to order / bespoke dimensions" },
      { label: "Stabilization", value: "Hand-inlaid brass or rosewood butterfly keys" },
      { label: "Edge", value: "Natural bark live edge preserved with debarking and sanding" },
    ],
    tags: ["Live Edge", "Console", "Custom Woodwork", "Slab Furniture"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(productId: string, category: string, limit = 3): Product[] {
  return products
    .filter((p) => p.id !== productId && p.category === category)
    .slice(0, limit);
}
