"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { businessConfig } from "@/config/business";
import { siteConfig } from "@/config/site";
import {
  MapPin,
  Phone,
  Clock,
  Compass,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#513B2D] text-[#F7F4EE] pt-16 pb-12 border-t border-[#3A291E]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#80664E]/40">
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            <Logo variant="horizontal" theme="dark" />
            <p className="text-sm font-sans text-[#DED7CA] leading-relaxed max-w-md">
              Specialist showroom for handcrafted wooden furniture, antique-style almirahs,
              solid teak dining pieces, and South Indian architectural heritage woodwork in the
              Auroville and Pondicherry region.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <WhatsAppCTA
                variant="whatsapp"
                size="sm"
                label="WhatsApp Workshop"
              />
              <a
                href={businessConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-sans text-[#DED7CA] hover:text-white bg-[#3A291E] hover:bg-[#80664E] py-2 px-3.5 rounded-lg transition-colors border border-[#80664E]/50"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{businessConfig.social.instagramHandle}</span>
                <ArrowUpRight className="w-3 h-3 text-[#DED7CA]/70" />
              </a>
            </div>
          </div>

          {/* Col 2: Collections Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg font-semibold tracking-wide text-[#F7F4EE] mb-4">
              Collections
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-[#DED7CA]">
              {siteConfig.footerLinks.collections.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg font-semibold tracking-wide text-[#F7F4EE] mb-4">
              Discover
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-[#DED7CA]">
              {siteConfig.footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Showroom & Visit (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-3.5">
            <h3 className="font-serif text-lg font-semibold tracking-wide text-[#F7F4EE] mb-1">
              Auroville Showroom
            </h3>
            
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#DED7CA]">
              <MapPin className="w-4 h-4 text-[#A3876D] shrink-0 mt-0.5" />
              <span>{businessConfig.location.fullAddress}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#DED7CA]">
              <Phone className="w-4 h-4 text-[#A3876D] shrink-0" />
              <a
                href={`tel:${businessConfig.contact.phone}`}
                className="hover:text-white transition-colors"
              >
                {businessConfig.contact.phoneFormatted}
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-[#DED7CA]">
              <Clock className="w-4 h-4 text-[#A3876D] shrink-0 mt-0.5" />
              <div>
                <p>{businessConfig.hours.weekdays}</p>
                <p>{businessConfig.hours.sunday}</p>
                <p className="text-[10px] text-[#A3876D] mt-0.5 italic">
                  *Preliminary hours; enquire prior to visiting
                </p>
              </div>
            </div>

            <a
              href={businessConfig.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#A3876D] hover:text-white transition-colors pt-1"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Get Directions on Google Maps</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-[#DED7CA]/80 space-y-4 sm:space-y-0">
          <p>
            &copy; {currentYear} {businessConfig.legalName}. All rights reserved. Auroville, Tamil Nadu, India.
          </p>
          <div className="flex items-center space-x-6 text-[11px]">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy &amp; Data Notice
            </Link>
            <Link
              href="/visit-us"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Location &amp; Visiting
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Direct Enquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
