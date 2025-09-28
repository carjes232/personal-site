import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        hud: {
          bg: "#0A0A0F",
          surface: "#13131A",
          "surface-alt": "#1A1A24",
          border: "#2A2A35",
          text: "#F8FAFC",
          subtle: "#94A3B8",
          accent: "#00D4FF",
          "accent-strong": "#00B8E6",
          success: "#4ADE80",
          warning: "#FBBF24",
          error: "#F87171",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "SFMono-Regular"],
      },
      boxShadow: {
        hud: "0 20px 40px -24px rgba(6, 182, 212, 0.35)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 2.4s ease-in-out infinite",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
