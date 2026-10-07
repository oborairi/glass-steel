"use client";

import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { FadeIn } from "@/components/ui/animations";
import { useLanguage } from "@/components/ui/LanguageProvider";

export default function HakkimizdaPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      <PageHero tag={a.tag} title={a.title} />

      {/* Main about text */}
      <section className="py-section bg-bg-base">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text */}
            <div className="space-y-8">
              {[a.p1, a.p2, a.p3, a.p4].map((text, i) => (
                <FadeIn key={i} delay={0.08 * i}>
                  <p className="text-lg text-fg-secondary leading-loose font-light">
                    {text}
                  </p>
                </FadeIn>
              ))}
            </div>

            {/* Looping intro video */}
            <FadeIn delay={0.15} className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-lg border border-line bg-black aspect-video">
                <video
                  src="/about-loop.mp4"
                  poster="/about-loop-poster.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-label={a.watchVideo}
                  className="w-full h-full object-cover"
                />
              </div>
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
