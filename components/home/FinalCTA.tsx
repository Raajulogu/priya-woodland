import React from "react";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { ArrowRight, MessageSquareHeart } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#513B2D] text-[#F7F4EE] relative overflow-hidden" aria-label="Call to Action">
      {/* Decorative grain backdrop */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F7F4EE_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#80664E]/40 border border-[#80664E]/60 text-[#DED7CA] mb-6">
          <MessageSquareHeart className="w-6 h-6 text-[#DED7CA]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F7F4EE] mb-4">
          Found Something <span className="italic font-normal text-[#DED7CA]">You Love?</span>
        </h2>

        <p className="text-base sm:text-lg text-[#DED7CA] font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
          Have a question about a piece, custom measurements, or delivery to your home?
          Connect with us directly on WhatsApp and let us assist you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppCTA
            variant="whatsapp"
            size="lg"
            label="Chat on WhatsApp"
            className="w-full sm:w-auto shadow-lg"
          />

          <Link
            href="/collections"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-[#F7F4EE] border border-[#DED7CA]/40 font-medium text-base py-3 px-7 rounded-lg transition-all"
          >
            <span>Explore Complete Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-xs text-[#DED7CA]/70 font-sans mt-8">
          Personalised assistance • Auroville showroom visits welcome • No online checkout hassle
        </p>
      </div>
    </section>
  );
}
