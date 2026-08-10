import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#17324D",
        teal: "#0F7784",
        "teal-action": "#137F8D",
        "teal-dark": "#0F6F7A",
        aqua: "#5ED2DD",
        soft: "#F3F6F7",
        slate: "#465969",
        alert: "#A83E3E"
      },
      fontFamily: {
        sans: ["Inter", "Aptos", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        display: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(23, 50, 77, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
