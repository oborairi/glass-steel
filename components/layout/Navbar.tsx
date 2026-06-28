"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { clsx } from "clsx";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/components/ui/LanguageProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/hakkimizda" },
    { label: t.nav.partners, href: "/temsilciliklerimiz" },
    { label: t.nav.contact, href: "/iletisim" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* TOP UTILITY BAR */}
      <div
        className="hidden md:block border-b"
        style={{ background: "var(--bg-inverse)", borderColor: "var(--line)" }}
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-10 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+905307388080"
              className="flex items-center gap-1.5 text-2xs font-mono tracking-wider"
              style={{ color: "var(--fg-inverse)", opacity: 0.7 }}
            >
              <Phone size={11} /> +90 (530) 738 80 80
            </a>
            <a
              href="mailto:info@glass-steel.com.tr"
              className="flex items-center gap-1.5 text-2xs font-mono tracking-wider"
              style={{ color: "var(--fg-inverse)", opacity: 0.7 }}
            >
              <Mail size={11} /> info@glass-steel.com.tr
            </a>
          </div>
          <div
            className="text-2xs font-mono tracking-[0.2em]"
            style={{ color: "var(--fg-inverse)", opacity: 0.45 }}
          >
            İSTANBUL · TÜRKİYE
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <header
        className={clsx(
          "sticky top-0 z-50 transition-all duration-300 border-b",
          scrolled ? "shadow-sm" : ""
        )}
        style={{ background: "var(--bg-base)", borderColor: "var(--line)" }}
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Image
                src="/logo-mark.png"
                alt="Glass Steel Logo"
                width={40}
                height={40}
                className="object-contain w-10 h-10"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: "var(--fg-primary)" }}
              >
                GLASS-STEEL
              </span>
              <span
                className="text-[9px] font-mono tracking-[0.12em] mt-0.5"
                style={{ color: "var(--fg-muted)" }}
              >
                {t.nav.logoSub}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center h-full">
            {navLinks.map((link) => (
              <div key={link.href} className="relative h-full flex items-center">
                <Link
                  href={link.href}
                  className="flex items-center px-4 h-full text-xs font-medium tracking-[0.06em] uppercase transition-colors duration-200"
                  style={{
                    color:
                      pathname === link.href
                        ? "var(--accent)"
                        : "var(--fg-secondary)",
                  }}
                >
                  {link.label}
                </Link>
                {pathname === link.href && (
                  <span
                    className="absolute bottom-0 left-4 right-4 h-0.5"
                    style={{ background: "var(--accent)" }}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <div className="w-px h-5" style={{ background: "var(--line)" }} />
            <ThemeToggle />
            <Link
              href="/iletisim"
              className="hidden md:inline-flex text-2xs font-mono tracking-wider uppercase px-5 py-2.5 rounded transition-all duration-300"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              {t.nav.quote}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center"
              style={{ color: "var(--fg-secondary)" }}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden overflow-y-auto pt-24 pb-10 px-6"
            style={{ background: "var(--bg-base)" }}
          >
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-4 text-lg font-medium border-b"
                  style={{
                    color:
                      pathname === link.href
                        ? "var(--accent)"
                        : "var(--fg-primary)",
                    borderColor: "var(--line)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/iletisim"
              className="mt-8 inline-flex w-full justify-center text-sm font-medium tracking-wider uppercase px-6 py-3.5 rounded"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              {t.nav.quote}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
