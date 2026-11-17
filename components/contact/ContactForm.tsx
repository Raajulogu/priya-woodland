"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productOfInterest: "",
    message: "",
    _hp: "", // Honeypot anti-spam
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isConfigPending, setIsConfigPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    setIsConfigPending(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(data.message || "Thank you. Your message has been sent.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          productOfInterest: "",
          message: "",
          _hp: "",
        });
      } else {
        if (data.isConfigPending) {
          setIsConfigPending(true);
        }
        setError(data.error || "Failed to submit enquiry. Please try WhatsApp.");
      }
    } catch {
      setError("Network error. Please try reaching us directly on WhatsApp or phone.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#EFE9DF] p-6 sm:p-10 rounded-3xl border border-[#DED7CA] shadow-sm">
      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#292820] mb-2">
        Send an Email Enquiry
      </h3>
      <p className="text-xs sm:text-sm text-[#77765C] font-sans mb-8">
        Have specific dimensional questions or architectural joinery plans? Fill out the form
        below and our workshop will review your request.
      </p>

      {/* Success Notification */}
      {success && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Enquiry Sent Successfully</p>
            <p className="text-xs text-emerald-700 mt-0.5">{success}</p>
          </div>
        </div>
      )}

      {/* Error / Pending Config Notification */}
      {error && (
        <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm space-y-3">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Notice</p>
              <p className="text-xs text-amber-800 mt-0.5">{error}</p>
            </div>
          </div>
          {isConfigPending && (
            <div className="pt-2 border-t border-amber-200/60">
              <p className="text-xs text-amber-800 mb-2">
                For immediate pricing, availability, and photo requests:
              </p>
              <WhatsAppCTA
                variant="whatsapp"
                size="sm"
                label="Message Us on WhatsApp Now"
              />
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Anti-spam honeypot (hidden) */}
        <input
          type="text"
          name="_hp"
          value={formData._hp}
          onChange={(e) => setFormData({ ...formData, _hp: e.target.value })}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#513B2D] uppercase tracking-wider mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Anand Kumar"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#F7F4EE] border border-[#DED7CA] rounded-xl px-4 py-3 text-sm text-[#292820] placeholder-[#77765C]/60 focus:outline-none focus:ring-2 focus:ring-[#513B2D]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#513B2D] uppercase tracking-wider mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#F7F4EE] border border-[#DED7CA] rounded-xl px-4 py-3 text-sm text-[#292820] placeholder-[#77765C]/60 focus:outline-none focus:ring-2 focus:ring-[#513B2D]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#513B2D] uppercase tracking-wider mb-1.5">
              Phone Number / WhatsApp
            </label>
            <input
              type="tel"
              placeholder="+91 98438 00000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#F7F4EE] border border-[#DED7CA] rounded-xl px-4 py-3 text-sm text-[#292820] placeholder-[#77765C]/60 focus:outline-none focus:ring-2 focus:ring-[#513B2D]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#513B2D] uppercase tracking-wider mb-1.5">
              Product of Interest
            </label>
            <input
              type="text"
              placeholder="e.g. Teak Armoire, Custom Table"
              value={formData.productOfInterest}
              onChange={(e) => setFormData({ ...formData, productOfInterest: e.target.value })}
              className="w-full bg-[#F7F4EE] border border-[#DED7CA] rounded-xl px-4 py-3 text-sm text-[#292820] placeholder-[#77765C]/60 focus:outline-none focus:ring-2 focus:ring-[#513B2D]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#513B2D] uppercase tracking-wider mb-1.5">
            Your Message *
          </label>
          <textarea
            required
            rows={4}
            placeholder="Tell us about the piece you are looking for, room dimensions, or any specific timber preferences..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#F7F4EE] border border-[#DED7CA] rounded-xl px-4 py-3 text-sm text-[#292820] placeholder-[#77765C]/60 focus:outline-none focus:ring-2 focus:ring-[#513B2D]"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#513B2D] hover:bg-[#3A291E] disabled:bg-[#80664E] text-[#F7F4EE] font-semibold text-sm py-3 px-8 rounded-xl shadow-sm hover:shadow transition-all"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
