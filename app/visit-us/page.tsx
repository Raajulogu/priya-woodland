import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { businessConfig } from "@/config/business";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { getBreadcrumbSchema } from "@/lib/seo";
import {
  MapPin,
  Phone,
  Clock,
  Compass,
  Car,
  Navigation,
  ArrowUpRight,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Visit Our Auroville Showroom | Location & Directions",
  description:
    "Plan your visit to Priya Woodland on Auroville Road, Edayanchavadi. View wooden furniture, antiques, and handcrafted architectural pieces in person.",
  alternates: {
    canonical: "/visit-us",
  },
};

export default function VisitUsPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Our Store", url: "/visit-us" },
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
            Auroville, Tamil Nadu
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#292820] tracking-tight mb-4">
            Visit Our <span className="italic font-normal text-[#513B2D]">Showroom</span>
          </h1>
          <p className="text-base sm:text-lg text-[#292820]/80 font-sans leading-relaxed max-w-2xl mx-auto">
            Experience our furniture collections, antique almirahs, and solid wood designs in person
            along the peaceful, tree-lined Auroville Road in Edayanchavadi.
          </p>
        </div>
      </section>

      {/* Main Visiting Section */}
      <section className="py-16 sm:py-24 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Showroom Details Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#EFE9DF] p-6 sm:p-8 rounded-2xl border border-[#DED7CA] shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase text-[#80664E] tracking-wider block mb-1">
                    Store Location
                  </span>
                  <h2 className="font-serif text-2xl font-semibold text-[#292820] mb-2">
                    {businessConfig.legalName}
                  </h2>
                  <div className="flex items-start gap-3 text-sm text-[#292820]/80 font-sans mt-3">
                    <MapPin className="w-5 h-5 text-[#80664E] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#292820]">{businessConfig.location.street}</p>
                      <p>{businessConfig.location.area}, {businessConfig.location.city}</p>
                      <p>{businessConfig.location.state} – {businessConfig.location.postalCode}, {businessConfig.location.country}</p>
                      <p className="text-xs text-[#77765C] mt-2 italic">
                        Landmark: {businessConfig.location.landmark}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#DED7CA]">
                  <span className="text-xs font-mono uppercase text-[#80664E] tracking-wider block mb-2">
                    Opening Hours (Indicative)
                  </span>
                  <div className="flex items-start gap-3 text-sm text-[#292820]/80 font-sans">
                    <Clock className="w-5 h-5 text-[#80664E] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-medium text-[#292820]">{businessConfig.hours.weekdays}</p>
                      <p>{businessConfig.hours.sunday}</p>
                      <div className="mt-2 p-2.5 rounded-lg bg-[#F7F4EE] border border-[#DED7CA] flex items-start gap-2 text-xs text-[#77765C]">
                        <Info className="w-4 h-4 text-[#80664E] shrink-0 mt-0.5" />
                        <span>{businessConfig.hours.notice}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#DED7CA]">
                  <span className="text-xs font-mono uppercase text-[#80664E] tracking-wider block mb-2">
                    Direct Contact
                  </span>
                  <div className="flex items-center gap-3 text-sm text-[#292820]/80 font-sans">
                    <Phone className="w-5 h-5 text-[#80664E] shrink-0" />
                    <div>
                      <a
                        href={`tel:${businessConfig.contact.phone}`}
                        className="font-semibold text-[#513B2D] hover:underline"
                      >
                        {businessConfig.contact.phoneFormatted}
                      </a>
                      <p className="text-xs text-[#77765C]">Call ahead for immediate assistance</p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href={businessConfig.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#513B2D] hover:bg-[#3A291E] text-[#F7F4EE] font-medium text-sm py-3 px-5 rounded-xl shadow-sm transition-all"
                  >
                    <Compass className="w-4 h-4" />
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <WhatsAppCTA
                    variant="whatsapp"
                    size="md"
                    label="WhatsApp Us Before You Come"
                    className="w-full"
                  />
                </div>
              </div>

              {/* How to Reach Guide */}
              <div className="bg-[#F7F4EE] p-6 rounded-2xl border border-[#DED7CA] space-y-4">
                <h3 className="font-serif text-lg font-semibold text-[#292820] flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#80664E]" />
                  <span>How to Reach Us</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#292820]/80 font-sans">
                  <li className="flex items-start gap-2">
                    <Car className="w-4 h-4 text-[#80664E] shrink-0 mt-0.5" />
                    <span>
                      <strong>From White Town / Pondicherry (approx. 15-20 mins):</strong> Take
                      the Pondicherry-Tindivanam or East Coast Road toward Auroville Main Road to Edayanchavadi.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Car className="w-4 h-4 text-[#80664E] shrink-0 mt-0.5" />
                    <span>
                      <strong>From Chennai / ECR (approx. 2.5 hours):</strong> Turn right at the
                      Auroville Toll Gate onto Auroville Road; proceed towards Edayanchavadi.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Map & Visual Frame Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DED7CA] bg-[#EFE9DF] h-[480px] sm:h-[540px] w-full">
                <iframe
                  title="Priya Woodland Auroville Showroom Map"
                  src={businessConfig.location.googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Showroom Visual Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-44 rounded-xl overflow-hidden border border-[#DED7CA]">
                  <Image
                    src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80"
                    alt="Showroom display of wooden furniture"
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-xs text-white font-medium">
                    Showroom Furniture
                  </span>
                </div>

                <div className="relative h-44 rounded-xl overflow-hidden border border-[#DED7CA]">
                  <Image
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
                    alt="Architectural carved wooden doors in showroom"
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-xs text-white font-medium">
                    Carved Architectural Doors
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
