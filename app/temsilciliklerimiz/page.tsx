"use client";

import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { FadeIn } from "@/components/ui/animations";
import { useLanguage } from "@/components/ui/LanguageProvider";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function TemsilciliklerimizPage() {
  const { t } = useLanguage();
  const p = t.partners;

  return (
    <>
      <PageHero tag={p.tag} title={p.title} subtitle={p.subtitle} />

      {/* ===== MOLYSLIP — Featured / Primary ===== */}
      <section className="py-section bg-bg-base">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xs font-mono tracking-[0.25em] uppercase text-accent">
                {p.molyMainLabel}
              </span>
              <div className="flex-1 h-px bg-line" />
            </div>
          </FadeIn>

          <div className="glass-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Logo side */}
              <FadeIn>
                <div
                  className="flex items-center justify-center p-12 lg:p-16 min-h-[280px]"
                  style={{ background: "#E2231A" }}
                >
                  <Image
                    src="/partners/molyslip.png"
                    alt="Molyslip Logo"
                    width={340}
                    height={238}
                    className="object-contain w-auto h-auto max-w-[280px]"
                    priority
                  />
                </div>
              </FadeIn>

              {/* Content side */}
              <FadeIn delay={0.1}>
                <div className="p-8 lg:p-12">
                  <div className="mb-5">
                    <h2
                      className="text-3xl font-light text-fg-primary mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Molyslip
                    </h2>
                    <span className="text-xs font-mono tracking-wide text-accent uppercase">
                      {p.molySub}
                    </span>
                  </div>

                  <p className="text-sm text-fg-secondary leading-relaxed font-light mb-5">
                    {p.molyDesc}
                  </p>

                  <a
                    href="https://molyslip.co.uk/glass/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-medium tracking-wide transition-all duration-300"
                    style={{ background: "var(--accent)", color: "#fff" }}
                  >
                    {p.molyWebsite}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Product range strip */}
            <FadeIn delay={0.15}>
              <div className="border-t border-line p-8 lg:p-12">
                <h3 className="text-2xs font-mono tracking-[0.2em] uppercase text-fg-muted mb-6">
                  {p.molyProductsTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {p.molyProducts.map((prod) => (
                    <div
                      key={prod.name}
                      className="flex items-start gap-3 p-4 rounded border border-line"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                      <div>
                        <div className="text-sm font-medium text-fg-primary mb-0.5">
                          {prod.name}
                        </div>
                        <div className="text-xs text-fg-muted leading-relaxed font-light">
                          {prod.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== DACH — Secondary ===== */}
      <section className="py-section bg-bg-surface border-t border-line">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xs font-mono tracking-[0.25em] uppercase text-fg-muted">
                {p.dachSecondaryLabel}
              </span>
              <div className="flex-1 h-px bg-line" />
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <a
              href="https://dachchemicals.com/tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block glass-card overflow-hidden hover:border-line-strong transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="flex items-center justify-center p-10 lg:p-12 bg-bg-base border-b lg:border-b-0 lg:border-r border-line">
                  <Image
                    src="/partners/dach.png"
                    alt="DACH Chemicals Logo"
                    width={240}
                    height={104}
                    className="object-contain w-auto h-auto max-w-[220px]"
                  />
                </div>

                <div className="lg:col-span-2 p-8 lg:p-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h2
                        className="text-2xl font-light text-fg-primary mb-1"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        DACH Chemicals &amp; Consultancy
                      </h2>
                      <span className="text-xs font-mono tracking-wide text-accent uppercase">
                        {p.dachSub}
                      </span>
                    </div>
                    <div
                      className="shrink-0 w-10 h-10 rounded flex items-center justify-center"
                      style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                    >
                      <ExternalLink size={16} />
                    </div>
                  </div>
                  <p className="text-sm text-fg-secondary leading-relaxed font-light">
                    {p.dachDesc}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-fg-muted group-hover:text-accent transition-colors">
                    {p.dachWebsite}
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>
          </FadeIn>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
