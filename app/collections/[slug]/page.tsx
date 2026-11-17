import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductCard } from "@/components/products/ProductCard";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { getProductSchema, getBreadcrumbSchema } from "@/lib/seo";
import {
  ChevronRight,
  ShieldCheck,
  Truck,
  MapPin,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Priya Woodland Antique Furniture`,
    description: product.shortDescription,
    alternates: {
      canonical: `/collections/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | Priya Woodland Auroville`,
      description: product.shortDescription,
      images: [
        {
          url: product.primaryImage,
          width: 1200,
          height: 800,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.id, product.category, 3);
  const productJsonLd = getProductSchema(product);
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Collections", url: "/collections" },
    { name: product.name, url: `/collections/${product.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="bg-[#F7F4EE] py-6 sm:py-8 border-b border-[#DED7CA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans text-[#77765C]">
            <Link href="/" className="hover:text-[#513B2D] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#DED7CA]" />
            <Link href="/collections" className="hover:text-[#513B2D] transition-colors">
              Collections
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#DED7CA]" />
            <Link
              href={`/collections?category=${product.category}`}
              className="hover:text-[#513B2D] transition-colors"
            >
              {product.categoryName}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#DED7CA]" />
            <span className="text-[#292820] font-medium truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="py-12 sm:py-16 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Gallery Column (7 cols) */}
            <div className="lg:col-span-7">
              <ProductGallery images={product.images} productName={product.name} />

              {/* Timber Guarantee Card */}
              <div className="mt-8 bg-[#EFE9DF] p-6 rounded-2xl border border-[#DED7CA] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans text-[#292820]/80">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#80664E] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#513B2D]">Authentic Timber</p>
                    <p className="text-[11px] text-[#77765C]">Hand-selected seasoned hardwoods</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Truck className="w-5 h-5 text-[#80664E] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#513B2D]">Safe Delivery</p>
                    <p className="text-[11px] text-[#77765C]">Auroville, Pondicherry &amp; Pan-India</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-[#80664E] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#513B2D]">View at Showroom</p>
                    <p className="text-[11px] text-[#77765C]">Available for in-person inspection</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info & Conversion Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono font-semibold tracking-wider text-[#80664E] bg-[#EFE9DF] px-2.5 py-1 rounded-md border border-[#DED7CA]">
                  ID: {product.id}
                </span>
                <span className="text-xs font-sans text-[#77765C]">
                  {product.categoryName}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#292820] tracking-tight leading-tight mb-4">
                {product.name}
              </h1>

              <div className="p-4 bg-[#EFE9DF] rounded-xl border border-[#DED7CA] mb-6">
                <p className="text-xs font-mono text-[#80664E] uppercase tracking-wider mb-1">
                  Pricing &amp; Availability
                </p>
                <p className="text-lg font-serif font-semibold text-[#513B2D]">
                  {product.priceNote}
                </p>
                <p className="text-xs text-[#77765C] font-sans mt-1">
                  Tap below to receive immediate pricing, timber confirmation, and delivery estimates directly on WhatsApp.
                </p>
              </div>

              {/* Primary WhatsApp Action Button */}
              <div className="space-y-3 mb-8">
                <WhatsAppCTA
                  product={product}
                  variant="whatsapp"
                  size="lg"
                  label="Enquire via WhatsApp"
                  className="w-full text-base py-3.5 shadow-md hover:shadow-lg"
                />
                <p className="text-[11px] text-center text-[#77765C] font-sans">
                  Pre-fills product name &amp; ID {product.id}. You simply press send in WhatsApp.
                </p>
              </div>

              {/* Full Description */}
              <div className="prose prose-stone text-sm text-[#292820]/80 font-sans leading-relaxed space-y-4 mb-8">
                <p>{product.fullDescription}</p>
              </div>

              {/* Specifications Table */}
              <div className="border-t border-[#DED7CA] pt-6 space-y-4">
                <h3 className="font-serif text-lg font-semibold text-[#292820]">
                  Craftsmanship Details
                </h3>

                <dl className="grid grid-cols-1 divide-y divide-[#DED7CA] text-xs sm:text-sm font-sans">
                  <div className="py-2.5 flex justify-between">
                    <dt className="text-[#77765C]">Material</dt>
                    <dd className="font-medium text-[#292820] text-right">{product.material}</dd>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <dt className="text-[#77765C]">Finish</dt>
                    <dd className="font-medium text-[#292820] text-right">{product.finish}</dd>
                  </div>
                  {product.dimensions && (
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#77765C]">Dimensions</dt>
                      <dd className="font-medium text-[#292820] text-right">{product.dimensions}</dd>
                    </div>
                  )}
                  {product.origin && (
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#77765C]">Craft Heritage</dt>
                      <dd className="font-medium text-[#292820] text-right">{product.origin}</dd>
                    </div>
                  )}
                  {product.specifications.map((spec) => (
                    <div key={spec.label} className="py-2.5 flex justify-between">
                      <dt className="text-[#77765C]">{spec.label}</dt>
                      <dd className="font-medium text-[#292820] text-right">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Showroom Visit Option */}
              <div className="mt-8 pt-6 border-t border-[#DED7CA]">
                <div className="flex items-start gap-3 bg-[#F7F4EE] border border-[#DED7CA] p-4 rounded-xl">
                  <MapPin className="w-4 h-4 text-[#80664E] shrink-0 mt-0.5" />
                  <div className="text-xs font-sans">
                    <p className="font-semibold text-[#513B2D]">Want to view this piece in person?</p>
                    <p className="text-[#77765C] mt-0.5">
                      Visit our showroom on Auroville Road in Edayanchavadi.
                    </p>
                    <Link
                      href="/visit-us"
                      className="text-[#80664E] font-semibold hover:underline mt-1 inline-block"
                    >
                      Showroom Directions &amp; Hours &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {related.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#EFE9DF] border-t border-[#DED7CA]" aria-labelledby="related-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#77765C] font-semibold block mb-1">
                  Complementary Pieces
                </span>
                <h2 id="related-heading" className="font-serif text-2xl sm:text-3xl font-semibold text-[#292820]">
                  More from <span className="italic font-normal text-[#513B2D]">{product.categoryName}</span>
                </h2>
              </div>
              <Link
                href="/collections"
                className="text-xs sm:text-sm font-semibold text-[#513B2D] hover:underline"
              >
                View All &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
