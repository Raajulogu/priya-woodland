import React from "react";
import { Hero } from "@/components/home/Hero";
import { BrandIntro } from "@/components/home/BrandIntro";
import { CollectionsGrid } from "@/components/home/CollectionsGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CraftStory } from "@/components/home/CraftStory";
import { StoreLocationPreview } from "@/components/home/StoreLocationPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <CollectionsGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <CraftStory />
      <StoreLocationPreview />
      <FinalCTA />
    </>
  );
}
