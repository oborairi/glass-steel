"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/ui/LanguageProvider";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-bg-base">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(var(--accent) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-[0.08] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/4 w-px h-full opacity-[0.06]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--line-strong), transparent)",
          }}
        />
        <div
          className="absolute top-0 right-1/4 w-px h-full opacity-[0.06]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--line-strong), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Tag */}
          <motion.div variants={itemVariants}>
            <span className="section-tag">
              {t.hero.tag}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="display-heading text-display-lg mt-6 mb-8"
          >
            {t.hero.title1}{" "}
            <em className="text-fg-secondary not-italic">{t.hero.titleEm1}</em>
            {" "}{t.hero.titleMid}{" "}
            <em className="text-fg-secondary not-italic">{t.hero.titleEm2}</em>{" "}
            {t.hero.titleEnd}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="body-text text-lg max-w-xl leading-relaxed mb-12"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="/temsilciliklerimiz" className="btn-primary group">
              {t.hero.ctaPartners}
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link href="/iletisim" className="btn-ghost">
              {t.hero.ctaContact}
            </Link>
          </motion.div>
        </motion.div>

        {/* Partner badges row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 pt-10 border-t border-line"
        >
          <p className="text-2xs font-mono text-fg-muted tracking-[0.2em] uppercase mb-6">
            {t.hero.brandsLabel}
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <div
              className="flex items-center justify-center px-5 py-3 rounded"
              style={{ background: "#E2231A" }}
            >
              <Image
                src="/partners/molyslip.png"
                alt="Molyslip"
                width={120}
                height={84}
                className="object-contain h-10 w-auto"
              />
            </div>
            <Image
              src="/partners/dach.png"
              alt="DACH Chemicals"
              width={120}
              height={52}
              className="object-contain h-9 w-auto opacity-80"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <div
          className="w-px h-12 animate-pulse-slow"
          style={{
            background:
              "linear-gradient(to bottom, var(--line-strong), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
