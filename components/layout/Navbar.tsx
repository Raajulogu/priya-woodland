"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/shared/Logo";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { siteConfig } from "@/config/site";
import { businessConfig } from "@/config/business";
import { Menu, X, Phone, MapPin } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top micro-announcement banner */}
      <div className="bg-[#513B2D] text-[#F7F4EE] text-xs py-1.5 px-4 text-center font-sans tracking-wide border-b border-[#3A291E] hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-[#DED7CA]">
            <MapPin className="w-3.5 h-3.5 text-[#A3876D]" />
            <span>Auroville Road, Edayanchavadi, Auroville 605101</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#A3876D]" />
              <span>Call: {businessConfig.contact.phoneFormatted}</span>
            </a>
            <span className="text-[#80664E]">•</span>
            <span className="text-[#DED7CA]">Custom Wooden Furniture &amp; Antiques</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F4EE]/95 backdrop-blur-md shadow-sm border-b border-[#DED7CA] py-3"
            : "bg-[#F7F4EE] border-b border-[#DED7CA]/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo variant="horizontal" theme="light" />

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-9" aria-label="Main Navigation">
              {siteConfig.navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-sans text-sm tracking-wide transition-colors duration-200 relative py-1 ${
                      isActive
                        ? "text-[#513B2D] font-semibold"
                        : "text-[#292820]/80 hover:text-[#513B2D] font-normal"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#513B2D] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: WhatsApp CTA (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <WhatsAppCTA
                variant="whatsapp"
                size="sm"
                label="Enquire on WhatsApp"
              />
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center space-x-2">
              <WhatsAppCTA
                variant="whatsapp"
                size="sm"
                label="WhatsApp"
                className="py-1.5 px-2.5 text-xs"
              />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                className="p-2 rounded-lg text-[#513B2D] hover:bg-[#EFE9DF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#513B2D]"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F7F4EE] border-b border-[#DED7CA] px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {siteConfig.navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-base font-sans tracking-wide transition-colors ${
                      isActive
                        ? "bg-[#EFE9DF] text-[#513B2D] font-semibold"
                        : "text-[#292820] hover:bg-[#EFE9DF]/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-[#DED7CA] flex flex-col space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#77765C] px-3">
                  <MapPin className="w-4 h-4 text-[#80664E] shrink-0" />
                  <span>Auroville Road, Edayanchavadi, Auroville</span>
                </div>
                <a
                  href={`tel:${businessConfig.contact.phone}`}
                  className="flex items-center gap-2 text-xs text-[#513B2D] px-3 font-medium"
                >
                  <Phone className="w-4 h-4 text-[#80664E] shrink-0" />
                  <span>Call {businessConfig.contact.phoneFormatted}</span>
                </a>
                <WhatsAppCTA
                  variant="whatsapp"
                  size="md"
                  label="Start WhatsApp Enquiry"
                  className="w-full mt-2"
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
