import React from "react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { ArrowUpRight } from "lucide-react";

export function CollectionsGrid() {
  return (
    <section className="py-20 bg-[#EFE9DF] border-y border-[#DED7CA]" aria-labelledby="collections-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#77765C] font-semibold mb-2 block">
              Curated Offerings
            </span>
            <h2 id="collections-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#292820] tracking-tight">
              Explore Our <span className="italic font-normal text-[#513B2D]">Collections</span>
            </h2>
            <p className="text-base text-[#292820]/80 font-sans mt-3">
              From historic antique almirahs to custom live-edge tables and architectural South Indian doors.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#513B2D] hover:text-[#80664E] transition-colors group"
            >
              <span>View All Pieces</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/collections?category=${category.id}`}
              className="group relative bg-[#F7F4EE] rounded-2xl overflow-hidden border border-[#DED7CA] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Category Image */}
              <div className="relative h-64 w-full overflow-hidden bg-[#EFE9DF]">
                <Image
                  src={category.image}
                  alt={`${category.name} collection at Priya Woodland`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-4 right-4 bg-[#F7F4EE]/90 backdrop-blur-sm text-[#513B2D] text-xs font-semibold px-2.5 py-1 rounded-full">
                  Explore
                </div>
              </div>

              {/* Category Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#292820] group-hover:text-[#513B2D] transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-xs font-serif italic text-[#80664E] mb-2">
                    {category.headline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#292820]/75 font-sans leading-relaxed line-clamp-2">
                    {category.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#DED7CA] flex items-center justify-between text-xs font-semibold text-[#513B2D]">
                  <span>Discover Designs</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
