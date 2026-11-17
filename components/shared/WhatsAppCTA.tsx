import React from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl, getProductWhatsAppUrl, getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { businessConfig } from "@/config/business";
import { Product } from "@/types/product";

interface WhatsAppCTAProps {
  product?: Product | { id: string; name: string; slug?: string };
  label?: string;
  variant?: "primary" | "whatsapp" | "outline" | "compact";
  size?: "sm" | "md" | "lg";
  className?: string;
  customMessage?: string;
}

export function WhatsAppCTA({
  product,
  label,
  variant = "whatsapp",
  size = "md",
  className = "",
  customMessage,
}: WhatsAppCTAProps) {
  let href: string;

  if (product) {
    href = getProductWhatsAppUrl(product);
  } else if (customMessage) {
    href = getWhatsAppUrl(businessConfig.contact.whatsappNumber, customMessage);
  } else {
    href = getGeneralWhatsAppUrl();
  }

  const defaultLabel = product ? "Enquire on WhatsApp" : "Chat on WhatsApp";
  const displayLabel = label || defaultLabel;

  // Base styles
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-lg select-none focus:outline-none focus-visible:ring-2 active:scale-[0.98]";

  // Size variations
  const sizeClasses = {
    sm: "text-xs py-2 px-3.5",
    md: "text-sm py-2.5 px-5",
    lg: "text-base py-3 px-7",
  };

  // Variant styling
  const variantClasses = {
    whatsapp:
      "bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-sm hover:shadow-md focus-visible:ring-[#25D366]/50",
    primary:
      "bg-[#513B2D] hover:bg-[#3E2B20] text-[#F7F4EE] shadow-sm hover:shadow-md focus-visible:ring-[#513B2D]/50",
    outline:
      "border border-[#513B2D] text-[#513B2D] hover:bg-[#513B2D] hover:text-[#F7F4EE] focus-visible:ring-[#513B2D]/30",
    compact:
      "text-xs py-1.5 px-3 bg-[#EFE9DF] hover:bg-[#25D366] text-[#513B2D] hover:text-white border border-[#DED7CA] hover:border-[#25D366]",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-4 h-4 sm:w-5 sm:h-5",
    lg: "w-5 h-5",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-label={`${displayLabel} via WhatsApp`}
    >
      <WhatsAppIcon
        className={`${iconSizes[size]} fill-current shrink-0`}
      />
      <span>{displayLabel}</span>
    </a>
  );
}
