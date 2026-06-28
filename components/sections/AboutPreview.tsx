"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/animations";
import { useLanguage } from "@/components/ui/LanguageProvider";

export function AboutPreview() {
  const { t } = useLanguage();
  const a = t.aboutPreview;

  return (
    <section className="py-section bg-bg-base">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: text */}
          <div>
            <FadeIn>
              <span className="section-tag">{a.tag}</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="display-heading mt-4 mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {a.title1}
                <br />
                <em className="text-fg-secondary not-italic">{a.titleEm}</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="body-text text-base mb-6 leading-relaxed">{a.p1}</p>
              <p className="body-text text-base mb-10 leading-relaxed">{a.p2}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/hakkimizda" className="btn-ghost group">
                {a.more}
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </FadeIn>
          </div>

          {/* Right: pillars */}
          <div className="grid grid-cols-2 gap-3">
            {a.pillars.map((pillar, i) => (
              <FadeIn key={pillar.label} delay={0.1 + i * 0.08}>
                <div className="glass-card p-6 h-full">
                  <div className="w-1 h-6 bg-accent mb-5" />
                  <h3 className="text-sm font-medium text-fg-primary mb-2">
                    {pillar.label}
                  </h3>
                  <p className="text-xs text-fg-muted leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
