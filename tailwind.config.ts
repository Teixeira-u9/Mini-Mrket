import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta "mercado fresco de barrio"
        paper: "#FBF7F0", // fondo papel/crema
        ink: "#27201A", // texto principal cálido
        leaf: {
          DEFAULT: "#3F7A3A", // verde hoja (primario)
          dark: "#2F5C2C",
          light: "#5FA557",
        },
        tomato: "#E25234", // acento tomate
        sun: "#F2B33D", // acento mostaza/sol
        clay: "#E9E0D1", // bordes/superficies suaves
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(39,32,26,0.04), 0 8px 24px -12px rgba(39,32,26,0.18)",
        pop: "0 12px 40px -12px rgba(39,32,26,0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
        "slide-in": "slide-in 0.3s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
