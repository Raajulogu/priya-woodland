import React from "react";
import { TreePine, Hammer, MessageSquareCheck, Store, Compass, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: TreePine,
    title: "Seasoned Solid Timber",
    description:
      "We source authentic mature teak, rosewood, and reclaimed hardwoods with natural resilience against tropical humidity and time.",
  },
  {
    icon: Hammer,
    title: "Traditional Handcrafting",
    description:
      "Built with time-tested joinery methods — mortise and tenon, keyed stretchers, and hand-carved motifs — without disposable composite boards.",
  },
  {
    icon: Store,
    title: "Auroville Showroom Presence",
    description:
      "Visit us in person on Auroville Road in Edayanchavadi to touch the wood grains, check dimensions, and inspect authentic patinas.",
  },
  {
    icon: MessageSquareCheck,
    title: "Direct WhatsApp Enquiries",
    description:
      "No impersonal web carts or generic bots. Message directly with us for bespoke sizing, real-time photos, and price quotations.",
  },
  {
    icon: Compass,
    title: "Architectural & Antique Heritage",
    description:
      "From restored temple pillars to Chettinad doors, we supply distinctive architectural features for villas, resorts, and private residences.",
  },
  {
    icon: HeartHandshake,
    title: "Custom Timber Orders",
    description:
      "Need a 10-seater dining slab or specific wardrobe measurements? We accommodate custom commissions crafted to your space.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 bg-[#EFE9DF] border-y border-[#DED7CA]" aria-labelledby="why-choose-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#77765C] font-semibold mb-2 block">
            The Priya Woodland Difference
          </span>
          <h2 id="why-choose-us-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#292820] tracking-tight">
            Built with <span className="italic font-normal text-[#513B2D]">Integrity &amp; Timber</span>
          </h2>
          <p className="text-base text-[#292820]/80 font-sans mt-4">
            In an era of mass-produced veneer and MDF, we remain dedicated to the warmth,
            weight, and character of genuine solid wood.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-[#F7F4EE] p-8 rounded-2xl border border-[#DED7CA] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#513B2D] text-[#F7F4EE] flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6 text-[#DED7CA]" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#292820] mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-[#292820]/75 font-sans leading-relaxed">
                    {reason.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#DED7CA]/60 flex items-center text-xs font-mono text-[#80664E]">
                  <span>0{index + 1} &bull; AUTHENTIC CRAFT</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
