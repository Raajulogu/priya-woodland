import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="group bg-[#F7F4EE] rounded-2xl overflow-hidden border border-[#DED7CA] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Product Image Box */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE9DF]">
        <Link
          href={`/collections/${product.slug}`}
          className="block w-full h-full"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={product.primaryImage}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="text-[11px] font-mono tracking-wider bg-[#513B2D]/90 backdrop-blur-sm text-[#F7F4EE] px-2.5 py-0.5 rounded-full">
            {product.id}
          </span>
          {product.isFeatured && (
            <span className="text-[11px] font-sans font-medium bg-[#80664E]/90 backdrop-blur-sm text-white px-2 py-0.5 rounded-full">
              Signature
            </span>
          )}
        </div>

        {/* Category Pill */}
        <div className="absolute bottom-3 left-3">
          <span className="text-[11px] font-sans font-medium bg-[#F7F4EE]/90 backdrop-blur-sm text-[#513B2D] px-2.5 py-1 rounded-md border border-[#DED7CA]/60">
            {product.categoryName}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#292820] group-hover:text-[#513B2D] transition-colors leading-snug mb-2">
            <Link href={`/collections/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#292820]/75 font-sans leading-relaxed line-clamp-2 mb-3">
            {product.shortDescription}
          </p>

          <div className="space-y-1 text-xs text-[#77765C] font-sans mb-4">
            <p>
              <strong className="text-[#513B2D]">Material:</strong> {product.material}
            </p>
            {product.dimensions && (
              <p>
                <strong className="text-[#513B2D]">Size:</strong> {product.dimensions}
              </p>
            )}
          </div>
        </div>

        {/* Card Actions & Enquiry */}
        <div className="pt-4 border-t border-[#DED7CA] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <Link
            href={`/collections/${product.slug}`}
            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#513B2D] hover:text-[#80664E] transition-colors py-2 px-1"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <WhatsAppCTA
            product={product}
            variant="whatsapp"
            size="sm"
            label="Enquire via WhatsApp"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </article>
  );
}
