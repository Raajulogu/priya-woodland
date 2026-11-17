import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/config/business";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy & Customer Data Notice",
  description: "Information regarding how customer enquiries and privacy are respected at Priya Woodland.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="bg-[#EFE9DF] py-14 sm:py-20 border-b border-[#DED7CA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#292820] tracking-tight mb-3">
            Privacy &amp; Data Notice
          </h1>
          <p className="text-sm sm:text-base text-[#77765C] font-sans">
            How Priya Woodland handles customer enquiries, WhatsApp communications, and privacy.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F7F4EE]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-stone text-sm text-[#292820]/80 font-sans leading-relaxed space-y-6">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#513B2D] mb-2">
              1. Direct Communication Model
            </h2>
            <p>
              {businessConfig.legalName} is not a conventional ecommerce platform. We do not
              require users to create accounts, store passwords, or process credit card payments
              through this website. All product purchases and price quotations are handled directly
              via WhatsApp, telephone, or in person at our Auroville showroom.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#513B2D] mb-2">
              2. Information Collected via Enquiries
            </h2>
            <p>
              When you submit a contact form or send a WhatsApp message, we collect only the
              information you explicitly provide: your name, telephone number, email address,
              and specific furniture questions. This information is used strictly to reply to your
              inquiry and coordinate showroom visits or deliveries.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#513B2D] mb-2">
              3. WhatsApp Conversations
            </h2>
            <p>
              WhatsApp conversations initiated from this website are conducted on the WhatsApp
              messaging platform and governed by Meta&apos;s privacy policies. We do not sell, rent, or
              share your phone number or conversation details with third parties for marketing.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#513B2D] mb-2">
              4. Contact Regarding Your Data
            </h2>
            <p>
              If you have any questions or would like your contact history removed from our records,
              you may reach out to us at {businessConfig.contact.phoneFormatted} or message our
              official WhatsApp number directly.
            </p>
          </div>

          <div className="pt-6 border-t border-[#DED7CA]">
            <Link
              href="/"
              className="text-xs font-semibold uppercase tracking-wider text-[#513B2D] hover:underline"
            >
              &larr; Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
