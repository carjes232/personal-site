import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        hud: {
          bg: "#121211",
          surface: "#181816",
          "surface-alt": "#1e1e1b",
          border: "#34332f",
          text: "#ecebe6",
          subtle: "#a9a79f",
          accent: "#9fc2b0",
          "accent-strong": "#bdd8c9",
          success: "#a8c79a",
          warning: "#d9b878",
          error: "#e09a8f",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        hud: "none",
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
