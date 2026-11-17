import React from "react";
import type { Metadata } from "next";
import { businessConfig } from "@/config/business";
import { ContactForm } from "@/components/contact/ContactForm";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { getBreadcrumbSchema } from "@/lib/seo";
import {
  MapPin,
  Phone,
  Compass,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & WhatsApp Enquiries | Priya Woodland Auroville",
  description:
    "Connect directly with Priya Woodland on WhatsApp or email for custom wooden furniture enquiries, prices, and showroom appointments in Auroville.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <section className="bg-[#EFE9DF] py-14 sm:py-20 border-b border-[#DED7CA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#77765C] font-semibold mb-3 block">
            Direct Communication
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#292820] tracking-tight mb-4">
            Connect With <span className="italic font-normal text-[#513B2D]">Our Workshop</span>
          </h1>
          <p className="text-base sm:text-lg text-[#292820]/80 font-sans leading-relaxed max-w-2xl mx-auto">
            Whether you have a question about an antique piece, require custom dimensions, or wish
            to plan a visit to our Auroville showroom, we are delighted to assist.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact & WhatsApp Focus (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Highlight WhatsApp Card */}
              <div className="bg-[#513B2D] text-[#F7F4EE] p-8 rounded-3xl border border-[#3A291E] shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/20 text-[#25D366] text-xs font-sans font-semibold mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    <span>Fastest Response Channel</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold mb-3 text-[#F7F4EE]">
                    Instant WhatsApp Enquiry
                  </h3>

                  <p className="text-sm text-[#DED7CA] font-sans leading-relaxed mb-6">
                    WhatsApp is our primary channel. Send us photos of your room, ask for current
                    prices, or request live video walk-throughs of showroom pieces.
                  </p>

                  <WhatsAppCTA
                    variant="whatsapp"
                    size="lg"
                    label="Chat on WhatsApp"
                    className="w-full shadow-md"
                  />
                </div>
              </div>

              {/* Showroom & Contact Cards */}
              <div className="bg-[#EFE9DF] p-6 sm:p-8 rounded-3xl border border-[#DED7CA] space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#513B2D] text-[#F7F4EE] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#DED7CA]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-lg text-[#292820]">
                      Auroville Showroom
                    </h4>
                    <p className="text-xs sm:text-sm text-[#292820]/80 font-sans mt-1">
                      {businessConfig.location.fullAddress}
                    </p>
                    <a
                      href={businessConfig.location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#80664E] font-semibold hover:underline mt-2"
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#DED7CA] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#513B2D] text-[#F7F4EE] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#DED7CA]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-lg text-[#292820]">
                      Phone
                    </h4>
                    <a
                      href={`tel:${businessConfig.contact.phone}`}
                      className="text-xs sm:text-sm font-semibold text-[#513B2D] hover:underline block mt-1"
                    >
                      {businessConfig.contact.phoneFormatted}
                    </a>
                    <p className="text-xs text-[#77765C] mt-0.5">
                      Direct voice calls during showroom hours
                    </p>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#DED7CA] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#513B2D] text-[#F7F4EE] flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-5 h-5 text-[#DED7CA]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-lg text-[#292820]">
                      Instagram
                    </h4>
                    <a
                      href={businessConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#513B2D] hover:underline mt-1"
                    >
                      <span>{businessConfig.social.instagramHandle}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <p className="text-xs text-[#77765C] mt-0.5">
                      Explore daily workshop arrivals &amp; custom commissions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
