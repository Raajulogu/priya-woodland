import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export function CraftStory() {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F4EE] relative overflow-hidden" aria-labelledby="craft-story-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#77765C] font-semibold mb-2 block">
              Living Timber Traditions
            </span>
            <h2 id="craft-story-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#292820] tracking-tight leading-[1.18] mb-6">
              A Quiet Reverence for <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#513B2D]">Organic Wood &amp; Patina</span>
            </h2>

            <p className="text-base text-[#292820]/80 font-sans leading-relaxed mb-6">
              Wood is not an inert raw material; it breathes, ages, and records decades
              of history in its growth rings. In our Auroville workshop, woodworkers hand-plane
              and oil each piece so that its organic luster and subtle grain variations remain vivid.
            </p>

            <div className="space-y-3.5 mb-8">
              {[
                "Reclaimed seasoned timber salvaged with historical character",
                "Natural oil & beeswax finishes free from heavy chemical varnishes",
                "Custom joinery adapted for both tropical sea breezes and climate-controlled rooms",
                "Direct collaboration with homeowners, architects, and interior designers",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm text-[#292820]/85 font-sans">
                  <div className="w-5 h-5 rounded-full bg-[#EFE9DF] border border-[#80664E]/30 flex items-center justify-center text-[#513B2D] shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#513B2D]" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#513B2D] hover:bg-[#3A291E] text-[#F7F4EE] text-sm font-semibold py-3 px-6 rounded-lg shadow-sm transition-all group"
              >
                <span>Discover Our Workshop &amp; Roots</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-md border border-[#DED7CA]">
                  <Image
                    src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80"
                    alt="Artisan woodcarver working on solid timber"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden shadow-md border border-[#DED7CA]">
                  <Image
                    src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
                    alt="Hand-finished wooden texture and carving"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden shadow-md border border-[#DED7CA]">
                  <Image
                    src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80"
                    alt="Antique wooden chest with brass bindings"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-md border border-[#DED7CA]">
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
                    alt="Solid wood furniture in serene interior"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
