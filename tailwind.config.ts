import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        coal: "var(--color-coal)",
        canvas: "var(--color-canvas)",
        surface: "var(--color-surface)",
        "surface-raised": "var(--color-surface-raised)",
        line: "var(--color-line)",
        muted: "var(--color-muted)",
        blue: "var(--color-blue)",
        violet: "var(--color-violet)",
        amber: "var(--color-amber)"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(0, 0, 0, 0.28)",
        blue: "0 12px 35px rgba(95, 143, 255, 0.18)"
      },
      borderRadius: {
        card: "1.25rem",
        panel: "1.75rem"
      }
    }
  },
  plugins: []
};

export default config;
