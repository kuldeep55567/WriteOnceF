'use client';

import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/feature-section";
import { PlatformsSection } from "@/components/home/platform-section";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <FeaturesSection />
      <PlatformsSection />
      <CTASection />
    </main>
  );
}