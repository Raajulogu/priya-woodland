"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/products/ProductCard";
import { products, getFeaturedProducts } from "@/data/products";
import { categories } from "@/data/categories";
import { ArrowRight, Sparkles } from "lucide-react";

export function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const featured = getFeaturedProducts();
  const displayedProducts =
    activeCategory === "all"
      ? featured
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 sm:py-24 bg-[#F7F4EE]" aria-labelledby="featured-products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE9DF] text-[#80664E] text-xs font-sans font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Masterpieces &amp; Signature Works</span>
          </div>
          <h2 id="featured-products-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#292820] tracking-tight mb-4">
            Featured <span className="italic font-normal text-[#513B2D]">Creations</span>
          </h2>
          <p className="text-base text-[#292820]/80 font-sans leading-relaxed">
            A curated selection of our finest antique-style almirahs, solid timber dining tables,
            and hand-carved heritage accents.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all ${
                activeCategory === "all"
                  ? "bg-[#513B2D] text-[#F7F4EE] shadow-sm font-semibold"
                  : "bg-[#EFE9DF] text-[#292820]/80 hover:bg-[#DED7CA]"
              }`}
            >
              All Featured
            </button>
            {categories.slice(0, 4).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#513B2D] text-[#F7F4EE] shadow-sm font-semibold"
                    : "bg-[#EFE9DF] text-[#292820]/80 hover:bg-[#DED7CA]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.slice(0, 6).map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 2} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 bg-[#513B2D] hover:bg-[#3A291E] text-[#F7F4EE] font-medium text-sm py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all group"
          >
            <span>Explore Complete Catalogue</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
