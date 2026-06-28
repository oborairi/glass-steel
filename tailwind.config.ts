import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens driven by CSS variables (switch with .dark class)
        bg: {
          base: "var(--bg-base)",
          surface: "var(--bg-surface)",
          raised: "var(--bg-raised)",
          inverse: "var(--bg-inverse)",
        },
        fg: {
          primary: "var(--fg-primary)",
          secondary: "var(--fg-secondary)",
          muted: "var(--fg-muted)",
          inverse: "var(--fg-inverse)",
        },
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line-strong)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
          ink: "var(--accent-ink)",
        },
        // Raw palette (still available if needed)
        obsidian: "#0A0A0B",
        void: "#111113",
        graphite: "#1C1C1F",
        steel: "#2A2A2F",
        "steel-mid": "#3A3A42",
        chrome: "#8B9099",
        silver: "#B8BCC6",
        platinum: "#D4D8E0",
        "glass-blue": "#3B82C4",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        "display-sm": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-md": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
        "display-lg": ["5rem", { lineHeight: "1", letterSpacing: "-0.05em" }],
      },
      spacing: {
        "18": "4.5rem",
        "30": "7.5rem",
        section: "6rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
