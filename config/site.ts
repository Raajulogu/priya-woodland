import { businessConfig } from "./business";

export const siteConfig = {
  name: businessConfig.name,
  title: "Priya Woodland | Antique Wooden Furniture & Craftsmanship | Auroville, Pondicherry",
  description:
    "Explore handcrafted wooden furniture, antique-style almirahs, solid teak dining tables, and traditional South Indian woodwork at Priya Woodland, Auroville. Enquire directly on WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://priyawoodland.com",
  ogImage: "/images/hero-workshop.webp",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "About Us", href: "/about" },
    { label: "Our Store", href: "/visit-us" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: {
    collections: [
      { label: "Antique Furniture", href: "/collections?category=antique-furniture" },
      { label: "Tables & Dining", href: "/collections?category=tables-seating" },
      { label: "Cabinets & Storage", href: "/collections?category=cabinets-storage" },
      { label: "Carved Doors & Pillars", href: "/collections?category=doors-pillars" },
      { label: "Wooden Decor & Craft", href: "/collections?category=wooden-decor" },
    ],
    company: [
      { label: "About Priya Woodland", href: "/about" },
      { label: "Visit Auroville Showroom", href: "/visit-us" },
      { label: "Direct WhatsApp Enquiry", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  seoKeywords: [
    "wooden furniture in auroville",
    "antique furniture pondicherry",
    "handcrafted teak furniture auroville",
    "wooden decor auroville road",
    "furniture shop near pondicherry",
    "priya woodland auroville",
    "priya woodland antique furniture",
    "chettinad wooden doors pondicherry",
    "solid wood dining table pondicherry",
  ],
};
