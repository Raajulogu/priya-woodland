"use client";

import React, { useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { businessConfig } from "@/config/business";
import { X } from "lucide-react";

export function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <aside aria-label="WhatsApp Quick Enquiry" className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-[#F7F4EE] border border-[#DED7CA] rounded-2xl shadow-xl overflow-hidden transition-all animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="bg-[#513B2D] p-4 text-[#F7F4EE] flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
                <WhatsAppIcon className="w-5 h-5 fill-white" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-base leading-tight text-[#F7F4EE]">
                  {businessConfig.name}
                </h4>
                <p className="text-[11px] text-[#DED7CA] font-sans">
                  Auroville Road • Handcrafted Woodwork
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#DED7CA] hover:text-white p-1 transition-colors"
              aria-label="Close WhatsApp card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 bg-white/70">
            <div className="bg-[#EFE9DF] p-3 rounded-xl rounded-tl-sm text-xs text-[#292820] leading-relaxed mb-3">
              <p className="font-medium text-[#513B2D] mb-1">Vanakkam & Welcome!</p>
              Have a question about a piece, custom timber sizes, or visiting our Auroville showroom?
              Send us a direct message on WhatsApp.
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-xs py-2.5 px-4 rounded-xl shadow-sm transition-all hover:shadow duration-200"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Start WhatsApp Chat</span>
            </a>
            
            <p className="text-[10px] text-center text-[#77765C] mt-2">
              Typically responds within a few hours • Direct with workshop
            </p>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open WhatsApp conversation options"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white animate-pulse" />
          <WhatsAppIcon className="w-7 h-7 fill-white" />
        </button>

        {/* Hover Pill on Desktop */}
        {!isOpen && (
          <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 bg-[#292820] text-[#F7F4EE] text-xs font-medium py-1.5 px-3 rounded-full shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Enquire on WhatsApp
          </div>
        )}
      </div>
    </aside>
  );
}
