"use client";

import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { FadeIn } from "@/components/ui/animations";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { useLanguage } from "@/components/ui/LanguageProvider";

export default function HakkimizdaPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      <PageHero tag={a.tag} title={a.title} />

      {/* Main about text + video */}
      <section className="py-section bg-bg-base">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <FadeIn>
                <p className="text-lg text-fg-secondary leading-loose font-light mb-8">
                  {a.p1}
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-lg text-fg-secondary leading-loose font-light">
                  {a.p2}
                </p>
              </FadeIn>
            </div>

            {/* Video */}
            <FadeIn delay={0.15}>
              <VideoPlayer src="/intro.mp4" label={a.watchVideo} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-section bg-bg-surface border-t border-line">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <span className="section-tag">{a.approachTag}</span>
            <h2
              className="display-heading mt-3 mb-12"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              {a.approachTitle}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {a.highlights.map((item, i) => (
              <FadeIn key={item.title} delay={0.08 * i}>
                <div className="glass-card p-7 h-full">
                  <div className="w-1 h-6 bg-accent mb-5" />
                  <h3 className="text-base font-medium text-fg-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-fg-secondary leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
