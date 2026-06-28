import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { LanguageProvider } from "@/components/ui/LanguageProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Glass Steel — Mühendislik Danışmanlık",
    template: "%s | Glass Steel",
  },
  description:
    "Glass Steel Mühendislik Danışmanlık San. ve Dış Tic. Ltd. Şti. — Cam ve çelik yapılar için ileri düzey mühendislik çözümleri.",
  keywords: [
    "cam mühendislik",
    "çelik konstrüksiyon",
    "yapısal danışmanlık",
    "glass steel",
    "mühendislik",
    "istanbul",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.glass-steel.com.tr",
    siteName: "Glass Steel Mühendislik",
    title: "Glass Steel — Mühendislik Danışmanlık",
    description:
      "Cam ve çelik yapılar için ileri düzey mühendislik danışmanlığı ve dış ticaret çözümleri.",
  },
  robots: { index: true, follow: true },
};

// Prevent theme flash before hydration
const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('gs-theme');
      var system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      var theme = saved || system;
      if (theme === 'dark') document.documentElement.classList.add('dark');
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
