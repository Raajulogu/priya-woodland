import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trees, Hammer, Compass } from "lucide-react";

export function BrandIntro() {
  return (
    <section className="py-20 sm:py-24 bg-[#F7F4EE] relative overflow-hidden" aria-labelledby="brand-intro-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with layered imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Image: Woodworking / Furniture texture */}
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-xl border border-[#DED7CA]">
                <Image
                  src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1000&q=80"
                  alt="Artisanal solid wood joinery and natural grain"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Overlapping Secondary Card: Craftsmanship callout */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#513B2D] text-[#F7F4EE] p-5 sm:p-6 rounded-2xl shadow-2xl max-w-xs border border-[#80664E]/40 hidden sm:block">
                <p className="text-xs uppercase tracking-widest text-[#DED7CA] font-sans font-semibold mb-1">
                  Coromandel Heritage
                </p>
                <p className="font-serif text-lg leading-snug">
                  &ldquo;Every knot, ring, and grain tells a story of earth and time.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#77765C] font-semibold mb-3">
              Craftsmanship &amp; Heritage
            </span>
            <h2 id="brand-intro-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#292820] tracking-tight leading-[1.18] mb-6">
              Where Wood Finds <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#513B2D]">Its Character.</span>
            </h2>

            <p className="text-base text-[#292820]/80 font-sans leading-relaxed mb-6">
              Located on Auroville Road in Edayanchavadi, Priya Woodland is dedicated
              to preserving the quiet dignity of solid timber. We curate antique furniture
              and handcraft bespoke pieces where the natural soul of mature teakwood,
              rosewood, and seasoned hardwoods takes center stage.
            </p>

            <p className="text-base text-[#292820]/80 font-sans leading-relaxed mb-8">
              From monumental Chettinad-style armoires to custom-dimensioned dining
              tables and hand-carved temple doors, each piece is built to outlast trends
              and bring grounded warmth into everyday living spaces.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#DED7CA] mb-8">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EFE9DF] flex items-center justify-center text-[#513B2D] mb-3">
                  <Trees className="w-5 h-5 text-[#80664E]" />
                </div>
                <h4 className="font-serif font-semibold text-base text-[#292820] mb-1">
                  Seasoned Timber
                </h4>
                <p className="text-xs text-[#77765C] font-sans leading-normal">
                  Naturally dried and aged solid wood built for tropical resilience.
                </p>
              </div>

              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EFE9DF] flex items-center justify-center text-[#513B2D] mb-3">
                  <Hammer className="w-5 h-5 text-[#80664E]" />
                </div>
                <h4 className="font-serif font-semibold text-base text-[#292820] mb-1">
                  Living Joinery
                </h4>
                <p className="text-xs text-[#77765C] font-sans leading-normal">
                  Traditional mortise, tenon, and hand-carved architectural details.
                </p>
              </div>

              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EFE9DF] flex items-center justify-center text-[#513B2D] mb-3">
                  <Compass className="w-5 h-5 text-[#80664E]" />
                </div>
                <h4 className="font-serif font-semibold text-base text-[#292820] mb-1">
                  Auroville Spirit
                </h4>
                <p className="text-xs text-[#77765C] font-sans leading-normal">
                  Rooted in the calm, creative design culture of the international township.
                </p>
              </div>
            </div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#513B2D] hover:text-[#80664E] transition-colors group"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
