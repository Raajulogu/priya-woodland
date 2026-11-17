import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { ArrowRight, Sparkles, ShieldCheck, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-[#EFE9DF] overflow-hidden border-b border-[#DED7CA]" aria-label="Hero Section">
      {/* Background with warm ambient lighting & layered imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85"
          alt="Warm wooden interior with handcrafted solid teak furniture and natural light"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.92] contrast-[1.02]"
        />
        {/* Editorial gradient scrim - ensures high contrast readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4EE]/95 via-[#F7F4EE]/85 to-transparent sm:w-3/4 lg:w-3/5" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#513B2D]/10 backdrop-blur-sm border border-[#513B2D]/20 text-[#513B2D] text-xs font-sans tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#513B2D]" />
            <span>Auroville Road, Edayanchavadi</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#292820] font-semibold tracking-tight leading-[1.12] mb-6">
            Timeless Wood. <br />
            <span className="italic font-normal text-[#513B2D]">
              Natural Character.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#292820]/80 font-sans leading-relaxed mb-8 max-w-xl">
            Discover the beauty of wooden craftsmanship and timeless furniture at
            Priya Woodland. Solid teak dining tables, antique-style almirahs, and
            traditional South Indian woodwork preserved for modern homes.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Link
              href="/collections"
              className="inline-flex items-center justify-center gap-2 bg-[#513B2D] hover:bg-[#3A291E] text-[#F7F4EE] font-medium text-sm sm:text-base py-3.5 px-7 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span>Explore Our Collection</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <WhatsAppCTA
              variant="whatsapp"
              size="lg"
              label="Enquire on WhatsApp"
              className="w-full sm:w-auto"
            />
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 border-t border-[#80664E]/20 grid grid-cols-3 gap-4 text-xs font-sans text-[#292820]/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#80664E] shrink-0" />
              <span>Solid Hardwoods</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#80664E] shrink-0" />
              <span>Artisan Joinery</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#80664E] shrink-0" />
              <span>Auroville Showroom</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
