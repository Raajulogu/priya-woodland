import { businessConfig } from "@/config/business";
import { siteConfig } from "@/config/site";

/**
 * Generate a clean, properly URL-encoded WhatsApp link
 */
export function getWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Generate WhatsApp enquiry link for a specific product
 */
export function getProductWhatsAppUrl(
  product: { id: string; name: string; slug?: string }
): string {
  const productUrl = product.slug ? `${siteConfig.url}/collections/${product.slug}` : "";
  
  const message = [
    `Hello ${businessConfig.name},`,
    "",
    "I am interested in the following product:",
    "",
    `Product: ${product.name}`,
    `Product ID: ${product.id}`,
    productUrl ? `Link: ${productUrl}` : "",
    "",
    "Could you please share the price, details and availability?",
    "",
    "Thank you.",
  ]
    .filter(Boolean)
    .join("\n");

  return getWhatsAppUrl(businessConfig.contact.whatsappNumber, message);
}

/**
 * Generate general WhatsApp enquiry link
 */
export function getGeneralWhatsAppUrl(): string {
  const message = [
    `Hello ${businessConfig.name},`,
    "",
    "I found your website and would like to know more about your wooden furniture and products.",
    "",
    "Could you please assist me?",
    "",
    "Thank you.",
  ].join("\n");

  return getWhatsAppUrl(businessConfig.contact.whatsappNumber, message);
}

/**
 * Generate WhatsApp link for planning a showroom visit
 */
export function getVisitWhatsAppUrl(): string {
  const message = [
    `Hello ${businessConfig.name},`,
    "",
    "I am planning to visit your Auroville showroom on Auroville Road, Edayanchavadi.",
    "",
    "Could you please share the best time to visit and current showroom timings?",
    "",
    "Thank you.",
  ].join("\n");

  return getWhatsAppUrl(businessConfig.contact.whatsappNumber, message);
}
