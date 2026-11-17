import { businessConfig } from "@/config/business";
import { siteConfig } from "@/config/site";
import { Product } from "@/types/product";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "@id": `${siteConfig.url}/#store`,
    name: businessConfig.legalName,
    alternateName: businessConfig.name,
    description: businessConfig.description,
    url: siteConfig.url,
    telephone: businessConfig.contact.phone,
    priceRange: "₹₹ - ₹₹₹",
    image: [
      `${siteConfig.url}/logo/priya-woodland-logo.svg`,
      `${siteConfig.url}/images/hero-workshop.webp`,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: businessConfig.location.street,
      addressLocality: businessConfig.location.area,
      addressRegion: businessConfig.location.state,
      postalCode: businessConfig.location.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessConfig.location.geo.latitude,
      longitude: businessConfig.location.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      businessConfig.social.instagram,
      businessConfig.social.youtube,
    ].filter(Boolean),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

export function getProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.shortDescription,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: businessConfig.name,
    },
    material: product.material,
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/collections/${product.slug}`,
      priceCurrency: "INR",
      price: "0", // Stated as quote upon WhatsApp enquiry
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceType: "https://schema.org/PriceTypeEnumeration#Quotation",
      },
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: businessConfig.name,
      },
    },
  };
}
