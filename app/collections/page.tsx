import React, { Suspense } from "react";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { CollectionsClient } from "@/components/products/CollectionsClient";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Wooden Furniture Collections & Antique Catalogue",
  description:
    "Browse handcrafted teak dining tables, antique almirahs, colonial plantation chairs, carved doors, and custom woodwork from Priya Woodland in Auroville.",
  alternates: {
    canonical: "/collections",
  },
};

export default function CollectionsPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Collections", url: "/collections" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Page Header */}
      <div className="bg-[#EFE9DF] py-14 sm:py-20 border-b border-[#DED7CA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#77765C] font-semibold mb-2 block">
            Auroville Timber Catalogue
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#292820] tracking-tight mb-4">
            Our Furniture <span className="italic font-normal text-[#513B2D]">Collections</span>
          </h1>
          <p className="text-base sm:text-lg text-[#292820]/80 font-sans leading-relaxed">
            Each piece reflects seasoned timber, traditional joinery, and the timeless character
            of South Indian and colonial craftsmanship. Click any piece to inspect details or enquire directly on WhatsApp.
          </p>
        </div>
      </div>

      {/* Main Catalog Section */}
      <section className="py-14 sm:py-20 bg-[#F7F4EE]" aria-label="Collections Catalogue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="text-center py-24 text-sm text-[#77765C] font-sans">
                Loading furniture collections...
              </div>
            }
          >
            <CollectionsClient initialProducts={products} categories={categories} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
