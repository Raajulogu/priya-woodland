import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F7F4EE] px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-xs font-mono font-semibold tracking-widest uppercase text-[#80664E] bg-[#EFE9DF] px-3 py-1 rounded-full border border-[#DED7CA]">
          404 • Page Not Found
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#292820] tracking-tight">
          A Lost Grain in the <span className="italic font-normal text-[#513B2D]">Workshop</span>
        </h1>

        <p className="text-sm text-[#77765C] font-sans leading-relaxed">
          The page or product piece you are searching for may have been moved, renamed,
          or archived.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#513B2D] hover:bg-[#3A291E] text-[#F7F4EE] text-xs sm:text-sm font-semibold py-3 px-6 rounded-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/collections"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EFE9DF] hover:bg-[#DED7CA] text-[#292820] text-xs sm:text-sm font-semibold py-3 px-6 rounded-lg border border-[#DED7CA] transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Browse Collections</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-[#DED7CA]/60">
          <p className="text-xs text-[#77765C] mb-3">Looking for a specific wooden piece?</p>
          <WhatsAppCTA variant="whatsapp" size="sm" label="Ask Us on WhatsApp" />
        </div>
      </div>
    </div>
  );
}
