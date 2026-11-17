import React from "react";
import Link from "next/link";
import { businessConfig } from "@/config/business";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { MapPin, Phone, Clock, Compass, ArrowUpRight } from "lucide-react";

export function StoreLocationPreview() {
  return (
    <section className="py-20 sm:py-24 bg-[#EFE9DF] border-y border-[#DED7CA]" aria-labelledby="store-preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Details & Visiting Information (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#77765C] font-semibold mb-2 block">
              Physical Showroom &amp; Workshop
            </span>
            <h2 id="store-preview-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#292820] tracking-tight mb-4">
              Visit Us at <span className="italic font-normal text-[#513B2D]">Auroville</span>
            </h2>
            <p className="text-base text-[#292820]/80 font-sans leading-relaxed mb-8">
              We welcome you to experience our solid wood furniture, antique collections,
              and architectural doors in person. Feel the weight, examine the patinas, and speak
              directly with us regarding custom dimensions.
            </p>

            <div className="space-y-4 mb-8 bg-[#F7F4EE] p-6 rounded-2xl border border-[#DED7CA]">
              <div className="flex items-start gap-3 text-sm text-[#292820]">
                <MapPin className="w-5 h-5 text-[#80664E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#513B2D]">Showroom Address</p>
                  <p className="text-[#292820]/80 mt-0.5">{businessConfig.location.fullAddress}</p>
                  <p className="text-xs text-[#77765C] mt-1">{businessConfig.location.landmark}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#292820] pt-3 border-t border-[#DED7CA]">
                <Clock className="w-5 h-5 text-[#80664E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#513B2D]">Visiting Hours</p>
                  <p className="text-[#292820]/80 mt-0.5">{businessConfig.hours.weekdays}</p>
                  <p className="text-[#292820]/80">{businessConfig.hours.sunday}</p>
                  <p className="text-xs text-[#A3876D] mt-1 italic">
                    {businessConfig.hours.notice}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#292820] pt-3 border-t border-[#DED7CA]">
                <Phone className="w-5 h-5 text-[#80664E] shrink-0" />
                <div>
                  <p className="font-semibold text-[#513B2D]">Direct Contact</p>
                  <a
                    href={`tel:${businessConfig.contact.phone}`}
                    className="text-[#292820]/80 hover:text-[#513B2D] transition-colors"
                  >
                    {businessConfig.contact.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={businessConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#513B2D] hover:bg-[#3A291E] text-[#F7F4EE] text-sm font-semibold py-3 px-6 rounded-lg shadow-sm transition-all"
              >
                <Compass className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <WhatsAppCTA
                variant="whatsapp"
                size="md"
                label="Message on WhatsApp"
              />
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame & Visual Representation (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DED7CA] bg-[#EFE9DF] h-[380px] sm:h-[460px] w-full">
              <iframe
                title="Priya Woodland Auroville Showroom Location Map"
                src={businessConfig.location.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Map Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-[#F7F4EE]/95 backdrop-blur-md p-4 rounded-xl border border-[#DED7CA] shadow-lg">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif font-semibold text-sm text-[#513B2D]">
                      {businessConfig.legalName}
                    </h3>
                    <p className="text-[11px] text-[#77765C] font-sans mt-0.5">
                      Auroville Road, Edayanchavadi • 15 mins from White Town, Pondicherry
                    </p>
                  </div>
                  <Link
                    href="/visit-us"
                    className="text-xs font-semibold text-[#80664E] hover:text-[#513B2D] shrink-0 underline"
                  >
                    Full Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
