"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Product, ProductCategory } from "@/types/product";
import { ProductCard } from "@/components/products/ProductCard";
import { Search, SlidersHorizontal, X } from "lucide-react";

interface CollectionsClientProps {
  initialProducts: Product[];
  categories: ProductCategory[];
}

export function CollectionsClient({
  initialProducts,
  categories,
}: CollectionsClientProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.material.toLowerCase().includes(query) ||
        product.id.toLowerCase().includes(query) ||
        product.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [initialProducts, selectedCategory, searchQuery]);

  const activeCategoryObj = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Control Bar: Categories & Search */}
      <div className="bg-[#EFE9DF] p-4 sm:p-6 rounded-2xl border border-[#DED7CA] space-y-4">
        {/* Top bar: Search input */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#77765C]" />
            <input
              type="text"
              placeholder="Search by timber, piece name, or product ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F7F4EE] border border-[#DED7CA] rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-[#292820] placeholder-[#77765C] focus:outline-none focus:ring-2 focus:ring-[#513B2D] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#77765C] hover:text-[#292820]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#80664E] self-end sm:self-center">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>
              Showing {filteredProducts.length} of {initialProducts.length} Pieces
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none text-xs">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "bg-[#513B2D] text-[#F7F4EE] font-semibold shadow-sm"
                : "bg-[#F7F4EE] text-[#292820]/80 hover:bg-[#DED7CA] border border-[#DED7CA]"
            }`}
          >
            All Collections ({initialProducts.length})
          </button>

          {categories.map((cat) => {
            const count = initialProducts.filter((p) => p.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-[#513B2D] text-[#F7F4EE] font-semibold shadow-sm"
                    : "bg-[#F7F4EE] text-[#292820]/80 hover:bg-[#DED7CA] border border-[#DED7CA]"
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Banner if filtered */}
      {activeCategoryObj && (
        <div className="bg-[#F7F4EE] border-l-4 border-[#513B2D] p-5 rounded-r-2xl border-y border-r border-[#DED7CA]">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#292820]">
            {activeCategoryObj.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#77765C] font-sans mt-1">
            {activeCategoryObj.description}
          </p>
        </div>
      )}

      {/* Grid of Products */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#EFE9DF]/50 rounded-2xl border border-dashed border-[#DED7CA] p-8">
          <p className="font-serif text-2xl text-[#513B2D] mb-2">No matching pieces found</p>
          <p className="text-sm text-[#77765C] font-sans max-w-md mx-auto mb-6">
            We regularly restore and craft unique one-off pieces that may not yet appear here.
            Message us on WhatsApp with what you are looking for.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-xs font-semibold uppercase tracking-wider text-[#513B2D] hover:underline"
          >
            Clear Filters &amp; View All
          </button>
        </div>
      )}
    </div>
  );
}
