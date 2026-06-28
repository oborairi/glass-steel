"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/ui/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/hakkimizda" },
    { label: t.nav.partners, href: "/temsilciliklerimiz" },
    { label: t.nav.contact, href: "/iletisim" },
  ];

  const partnerLinks = [
    { label: "Molyslip", href: "/temsilciliklerimiz" },
    { label: "DACH Chemicals", href: "/temsilciliklerimiz" },
  ];

  return (
    <footer className="bg-bg-surface border-t border-line pt-16 pb-8">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 w-fit">
              <div className="w-9 h-9 flex items-center justify-center">
                <Image
                  src="/logo-mark.png"
                  alt="Glass Steel Logo"
                  width={36}
                  height={36}
                  className="object-contain w-9 h-9"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-medium text-fg-primary tracking-wide">
                  GLASS-STEEL
                </span>
                <span className="text-[9px] font-mono text-fg-muted tracking-[0.12em] mt-0.5">
                  {t.nav.logoSub}
                </span>
              </div>
            </Link>
            <p className="text-sm text-fg-muted leading-relaxed max-w-sm font-light">
              {t.footer.desc}
            </p>
            <div className="mt-8 space-y-2">
              <a
                href="mailto:info@glass-steel.com.tr"
                className="block text-2xs font-mono text-fg-muted tracking-wider hover:text-accent transition-colors"
              >
                info@glass-steel.com.tr
              </a>
              <a
                href="tel:+905307388080"
                className="block text-2xs font-mono text-fg-muted tracking-wider hover:text-accent transition-colors"
              >
                +90 (530) 738 80 80
              </a>
            </div>
          </div>

          {/* Quick Access */}
          <div>
            <h4 className="text-2xs font-mono tracking-[0.2em] uppercase text-fg-muted mb-5">
              {t.footer.quickAccess}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fg-muted hover:text-fg-secondary transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-2xs font-mono tracking-[0.2em] uppercase text-fg-muted mb-5">
              {t.footer.partners}
            </h4>
            <ul className="space-y-3">
              {partnerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-fg-muted hover:text-fg-secondary transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gradient-line mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-2xs font-mono text-fg-muted tracking-wider text-center md:text-left">
            © {year} Glass Steel Mühendislik Danışmanlık San. ve Dış Tic. Ltd. Şti. — {t.footer.rights}
          </p>
          <p className="text-2xs font-mono tracking-widest" style={{ color: "var(--fg-muted)" }}>
            İSTANBUL · TÜRKİYE
          </p>
        </div>
      </div>
    </footer>
  );
}
