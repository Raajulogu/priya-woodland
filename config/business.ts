/**
 * Centralized Business Configuration for Priya Woodland
 * 
 * Note on verified vs preliminary directory data:
 * - Address & telephone are based on local directory listings for Auroville Road, Edayanchavadi.
 * - Email, exact hours, and specific pricing are unconfirmed directory items kept configurable.
 */

export interface BusinessConfig {
  name: string;
  legalName: string;
  displayName: string;
  tagline: string;
  description: string;
  shortDescription: string;
  established: string | null; // Kept null until client confirms
  
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsappNumber: string; // e.g. "919843881257"
    whatsappDisplay: string;
    email: string;
    isEmailConfirmed: boolean;
  };

  location: {
    street: string;
    area: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    fullAddress: string;
    landmark: string;
    geo: {
      latitude: number;
      longitude: number;
    };
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
  };

  social: {
    instagram: string;
    instagramHandle: string;
    youtube?: string;
  };

  hours: {
    weekdays: string;
    sunday: string;
    isConfirmed: boolean;
    notice: string;
  };

  assets: {
    logoLight: string;
    logoDark: string;
    logoMark: string;
    logoMarkDark: string;
    favicon: string;
  };

  features: {
    enableEmailEnquiries: boolean;
    whatsappFirst: boolean;
  };
}

export const businessConfig: BusinessConfig = {
  name: "Priya Woodland",
  legalName: "Priya Woodland Antique Furniture",
  displayName: "Priya Woodland • Antique & Handcrafted Wooden Furniture",
  tagline: "Timeless Wood. Natural Character.",
  description:
    "Specialist wooden furniture, antique-style collections, and custom timber craftsmanship in the Auroville & Pondicherry region.",
  shortDescription:
    "Handcrafted wooden furniture, vintage architectural pieces, and bespoke timber craftsmanship in Auroville.",
  established: null, // Client to confirm exact founding year

  contact: {
    phone: "+919843881257",
    phoneFormatted: "+91 98438 81257",
    whatsappNumber: "919843881257",
    whatsappDisplay: "+91 98438 81257",
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "enquiry@priyawoodland.com",
    isEmailConfirmed: false, // Flag to indicate placeholder email
  },

  location: {
    street: "Auroville Road",
    area: "Edayanchavadi",
    city: "Auroville",
    state: "Tamil Nadu",
    postalCode: "605101",
    country: "India",
    fullAddress: "Auroville Road, Edayanchavadi, Auroville, Tamil Nadu 605101, India",
    landmark: "On the main Auroville Road, Edayanchavadi junction",
    geo: {
      latitude: 11.9902,
      longitude: 79.8078,
    },
    googleMapsUrl: "https://maps.google.com/?q=Priya+Woodland+Antique+Furniture+Auroville+Road+Edayanchavadi+605101",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.946115998188!2d79.8052!3d11.9902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5363e1451f47d3%3A0x6a0c5c4e97a54a7f!2sEdayanchavadi%2C%20Auroville%2C%20Tamil%20Nadu%20605101!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  social: {
    instagram: "https://www.instagram.com/priya_woodland_auroville/",
    instagramHandle: "@priya_woodland_auroville",
    youtube: "https://www.youtube.com/@PriyaWoodlandAuroville",
  },

  hours: {
    weekdays: "Monday – Saturday: 9:30 AM – 7:30 PM",
    sunday: "Sunday: 10:00 AM – 5:00 PM",
    isConfirmed: false, // Stored as indicative visitor hours until client confirms
    notice: "Preliminary showroom hours. We recommend sending a quick WhatsApp message before visiting.",
  },

  assets: {
    logoLight: "/logo/priya-woodland-logo.svg",
    logoDark: "/logo/priya-woodland-logo-dark.svg",
    logoMark: "/logo/priya-woodland-mark.svg",
    logoMarkDark: "/logo/priya-woodland-mark-dark.svg",
    favicon: "/favicon/favicon.svg",
  },

  features: {
    enableEmailEnquiries: true,
    whatsappFirst: true,
  },
};
