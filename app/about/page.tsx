import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { getBreadcrumbSchema } from "@/lib/seo";
import { TreePine, Hammer, Compass, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Handcrafted Wooden Furniture & Antique Heritage",
  description:
    "Learn about Priya Woodland — our reverence for seasoned timber, South Indian woodworking traditions, and our showroom in Auroville.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Header */}
      <section className="bg-[#EFE9DF] py-16 sm:py-24 border-b border-[#DED7CA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#77765C] font-semibold mb-3 block">
            Our Story &amp; Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#292820] tracking-tight leading-tight mb-6">
            Wood with Memory. <br />
            <span className="italic font-normal text-[#513B2D]">
              Crafted for Generations.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#292820]/80 font-sans leading-relaxed max-w-2xl mx-auto">
            Located in Edayanchavadi on the road leading into the international township of Auroville,
            Priya Woodland is a tribute to honest joinery, seasoned hardwoods, and the rich antique heritage of the Coromandel coast.
          </p>
        </div>
      </section>

      {/* Story Narrative & Imagery */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            <div className="lg:col-span-6 space-y-6 text-base text-[#292820]/80 font-sans leading-relaxed">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#80664E] font-semibold block">
                The Auroville Context
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#292820] tracking-tight">
                Rooted in Calm, Sustainable Design
              </h2>
              <p>
                Auroville and the surrounding Pondicherry region have long been a sanctuary for
                architecture that breathes with nature. Terracotta tiles, open courtyards, shaded
                verandas, and solid wood are essential elements of this regional identity.
              </p>
              <p>
                At Priya Woodland, our focus is simple: to offer furniture that carries the substance
                of mature solid timber. We work with naturally seasoned teak, rosewood, and reclaimed
                architectural elements, honoring the unique knots, growth rings, and natural imperfections
                that give real wood its soul.
              </p>
              <p>
                Unlike mass-market furniture made of compressed fiber and paper veneers, each piece in our
                showroom possesses structural heft and an organic patina that grows richer with every passing year.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#DED7CA]">
                <Image
                  src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1200&q=80"
                  alt="Crafting solid wood furniture in the workshop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Core Values / Craft Pillars */}
          <div className="pt-16 border-t border-[#DED7CA]">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#77765C] font-semibold mb-2 block">
                Our Commitments
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#292820]">
                What Defines Every <span className="italic font-normal text-[#513B2D]">Priya Woodland Piece</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#EFE9DF] p-8 rounded-2xl border border-[#DED7CA]">
                <div className="w-12 h-12 rounded-xl bg-[#513B2D] text-[#F7F4EE] flex items-center justify-center mb-6">
                  <TreePine className="w-6 h-6 text-[#DED7CA]" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#292820] mb-3">
                  Seasoned Solid Timber
                </h3>
                <p className="text-sm text-[#292820]/75 font-sans leading-relaxed">
                  We reject flimsy particle boards and synthetic laminates. Our pieces are crafted
                  from genuine solid teak, Indian rosewood, and seasoned timber chosen for strength
                  and organic depth.
                </p>
              </div>

              <div className="bg-[#EFE9DF] p-8 rounded-2xl border border-[#DED7CA]">
                <div className="w-12 h-12 rounded-xl bg-[#513B2D] text-[#F7F4EE] flex items-center justify-center mb-6">
                  <Hammer className="w-6 h-6 text-[#DED7CA]" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#292820] mb-3">
                  Heritage Joinery &amp; Detail
                </h3>
                <p className="text-sm text-[#292820]/75 font-sans leading-relaxed">
                  Traditional mortise-and-tenon construction, hand-carved floral escutcheons, solid brass
                  fittings, and hand-rubbed oil waxes that let the natural grain breathe freely.
                </p>
              </div>

              <div className="bg-[#EFE9DF] p-8 rounded-2xl border border-[#DED7CA]">
                <div className="w-12 h-12 rounded-xl bg-[#513B2D] text-[#F7F4EE] flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6 text-[#DED7CA]" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#292820] mb-3">
                  Bespoke Dimensions
                </h3>
                <p className="text-sm text-[#292820]/75 font-sans leading-relaxed">
                  Every home is distinct. We work closely with clients to tailor table lengths,
                  wardrobe internal configurations, and architectural door frames to exact room proportions.
                </p>
              </div>
            </div>
          </div>

          {/* Physical Showroom Callout */}
          <div className="mt-20 bg-[#513B2D] text-[#F7F4EE] rounded-3xl p-8 sm:p-14 border border-[#3A291E] shadow-xl">
            <div className="max-w-3xl">
              <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#DED7CA] font-semibold mb-3 block">
                Physical Showroom in Edayanchavadi
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#F7F4EE] mb-4">
                Come Experience the Timber in Person
              </h2>
              <p className="text-base text-[#DED7CA] font-sans leading-relaxed mb-8">
                Nothing compares to running your hands across natural wood grain. We invite you to
                visit our showroom on Auroville Road to explore currently finished pieces, restored
                antiques, and discuss custom timber projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/visit-us"
                  className="inline-flex items-center justify-center gap-2 bg-[#F7F4EE] text-[#513B2D] hover:bg-white font-semibold text-sm py-3 px-6 rounded-lg transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Showroom Location &amp; Map</span>
                </Link>
                <WhatsAppCTA
                  variant="whatsapp"
                  size="md"
                  label="Message Us on WhatsApp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
