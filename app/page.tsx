import { HeroSection } from "@/components/sections/HeroSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { VideoSection } from "@/components/sections/VideoSection";
import { PartnersPreview } from "@/components/sections/PartnersPreview";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <VideoSection />
      <PartnersPreview />
      <CtaSection />
    </>
  );
}
