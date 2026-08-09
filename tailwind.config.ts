import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#17324D",
        teal: "#0B6670",
        aqua: "#5ED2DD",
        soft: "#F3F6F7",
        slate: "#465969",
        alert: "#A83E3E"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(23, 50, 77, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
