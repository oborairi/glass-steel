"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/animations";
import { useLanguage } from "@/components/ui/LanguageProvider";

export function CtaSection() {
  const { t } = useLanguage();
  const c = t.cta;

  return (
    <section className="py-section bg-bg-raised border-t border-line">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <FadeIn className="max-w-xl">
            <h2
              className="display-heading"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              {c.title1}
              <br />
              <em className="text-fg-secondary not-italic">{c.titleEm}</em>
            </h2>
            <p className="body-text text-sm mt-4">{c.subtitle}</p>
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col sm:flex-row gap-4">
            <Link href="/iletisim" className="btn-primary group whitespace-nowrap">
              {c.quote}
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a href="tel:+905307388080" className="btn-ghost whitespace-nowrap">
              +90 (530) 738 80 80
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
