"use client";

import { useState } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/animations";
import { Phone, Mail, Clock, Send } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeebzjoq";

export default function IletisimPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(
          "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin veya doğrudan e-posta gönderin."
        );
      }
    } catch {
      setError(
        "Bağlantı hatası. Lütfen internet bağlantınızı kontrol edip tekrar deneyin."
      );
    } finally {
      setSending(false);
    }
  };

  const contactDetails = [
    {
      icon: Phone,
      label: "Telefon",
      value: "+90 (530) 738 80 80",
    },
    {
      icon: Mail,
      label: "E-posta",
      value: "info@glass-steel.com.tr",
    },
    {
      icon: Clock,
      label: "Çalışma Saatleri",
      value: "Pazartesi – Cuma\n09:00 – 18:00",
    },
  ];

  return (
    <>
      <PageHero
        tag="İletişim"
        title="Projeniz için bize ulaşın"
        subtitle="Teknik danışmanlık, fiyat teklifi veya genel bilgi için aşağıdaki kanallardan iletişime geçebilirsiniz."
      />

      <section className="py-section bg-bg-base">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="flex flex-col gap-2">
                  {contactDetails.map((detail) => {
                    const href =
                      detail.label === "Telefon"
                        ? "tel:+905307388080"
                        : detail.label === "E-posta"
                        ? "mailto:info@glass-steel.com.tr"
                        : undefined;
                    return (
                      <div
                        key={detail.label}
                        className="flex items-start gap-4 py-5 border-b border-line"
                      >
                        <div
                          className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                          style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                        >
                          <detail.icon size={17} />
                        </div>
                        <div>
                          <div className="text-2xs font-mono text-accent tracking-[0.15em] uppercase mb-1.5">
                            {detail.label}
                          </div>
                          {href ? (
                            <a
                              href={href}
                              className="text-sm text-fg-primary whitespace-pre-line leading-relaxed hover:text-accent transition-colors"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <div className="text-sm text-fg-primary whitespace-pre-line leading-relaxed">
                              {detail.value}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <div className="glass-card p-8 lg:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                        style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                      >
                        <Send size={22} />
                      </div>
                      <h3 className="text-xl font-light text-fg-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>
                        Mesajınız iletildi
                      </h3>
                      <p className="text-sm text-fg-secondary max-w-sm">
                        En geç bir iş günü içinde sizinle iletişime geçeceğiz.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field name="ad_soyad" label="Ad Soyad *" placeholder="Adınız Soyadınız" required />
                        <Field name="firma" label="Firma *" placeholder="Firma Adı" required />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field name="email" label="E-posta *" type="email" placeholder="email@firma.com" required />
                        <Field name="telefon" label="Telefon" type="tel" placeholder="+90 5xx xxx xx xx" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-medium text-fg-secondary tracking-wide">
                          Mesajınız *
                        </label>
                        <textarea
                          name="mesaj"
                          rows={5}
                          required
                          placeholder="Projeniz veya talebiniz hakkında kısa bilgi verin..."
                          className="px-4 py-3 rounded border border-line bg-bg-base text-sm text-fg-primary outline-none focus:border-accent transition-colors resize-none leading-relaxed"
                        />
                      </div>

                      {error && (
                        <p className="text-xs text-red-500 leading-relaxed">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={sending}
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-sm font-medium tracking-wide transition-all duration-300 disabled:opacity-60"
                        style={{ background: "var(--accent)", color: "#fff" }}
                      >
                        {sending ? "Gönderiliyor..." : "Teklif / Bilgi İste"}
                        {!sending && <Send size={14} />}
                      </button>
                      <p className="text-2xs text-fg-muted text-center">
                        * Zorunlu alanlar · En geç 1 iş günü içinde dönüş yapılır
                      </p>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-fg-secondary tracking-wide">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="px-4 py-3 rounded border border-line bg-bg-base text-sm text-fg-primary outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
