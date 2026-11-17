export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string; // e.g., "PW-ANT-01"
  slug: string;
  name: string;
  category: string; // e.g., "antique-furniture"
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  primaryImage: string;
  material: string;
  finish: string;
  dimensions?: string;
  origin?: string;
  priceNote: string;
  priceDisplay?: string; // Only if confirmed, otherwise undefined
  isFeatured: boolean;
  inStock: boolean;
  isSampleCatalog: boolean; // Transparently identifies sample design catalogue
  specifications: ProductSpecification[];
  tags: string[];
}

export interface ProductCategory {
  id: string; // slug
  name: string;
  headline: string;
  description: string;
  image: string;
  featuredCount: number;
}
