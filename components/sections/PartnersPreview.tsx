"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/animations";
import { useLanguage } from "@/components/ui/LanguageProvider";

export function PartnersPreview() {
  const { t } = useLanguage();
  const p = t.partnersPreview;

  return (
    <section className="py-section bg-bg-surface border-t border-line">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeIn>
            <span className="section-tag">{p.tag}</span>
            <h2
              className="display-heading mt-3"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              {p.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/temsilciliklerimiz"
              className="group inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-fg-muted hover:text-fg-secondary transition-colors"
            >
              {p.detail}
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Molyslip — featured */}
          <FadeIn className="lg:col-span-2">
            <a
              href="https://molyslip.co.uk/glass/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block glass-card overflow-hidden hover:border-line-strong transition-colors h-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                <div
                  className="flex items-center justify-center p-10 min-h-[200px]"
                  style={{ background: "#E2231A" }}
                >
                  <Image
                    src="/partners/molyslip.png"
                    alt="Molyslip"
                    width={220}
                    height={154}
                    className="object-contain w-auto h-auto max-w-[200px]"
                  />
                </div>
                <div className="p-7 flex flex-col justify-center">
                  <span className="text-2xs font-mono tracking-[0.15em] uppercase text-accent mb-2">
                    {p.molyLabel}
                  </span>
                  <h3 className="text-lg font-medium text-fg-primary mb-2">
                    {p.molyTitle}
                  </h3>
                  <p className="text-xs text-fg-muted leading-relaxed font-light mb-4">
                    {p.molyDesc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-2xs font-mono tracking-wider uppercase text-fg-muted group-hover:text-accent transition-colors">
                    {p.website} <ExternalLink size={11} />
                  </span>
                </div>
              </div>
            </a>
          </FadeIn>

          {/* DACH — secondary */}
          <FadeIn delay={0.1}>
            <a
              href="https://dachchemicals.com/tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block glass-card overflow-hidden hover:border-line-strong transition-colors h-full"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-center p-10 min-h-[140px] bg-bg-base border-b border-line">
                  <Image
                    src="/partners/dach.png"
                    alt="DACH Chemicals"
                    width={180}
                    height={78}
                    className="object-contain w-auto h-auto max-w-[170px]"
                  />
                </div>
                <div className="p-7 flex flex-col justify-center flex-1">
                  <h3 className="text-base font-medium text-fg-primary mb-2">
                    {p.dachTitle}
                  </h3>
                  <p className="text-xs text-fg-muted leading-relaxed font-light mb-4">
                    {p.dachDesc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-2xs font-mono tracking-wider uppercase text-fg-muted group-hover:text-accent transition-colors">
                    {p.website} <ExternalLink size={11} />
                  </span>
                </div>
              </div>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
