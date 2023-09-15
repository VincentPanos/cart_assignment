import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      light: "#fffdfa",
      dark: "#242424",
      orange: "#ff7849",
      green: "#00917C",
      yellow: "#273444",
      red: "#ff2c2c",
      blue: "#1aa7ec"
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
