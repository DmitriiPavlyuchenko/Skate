/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    screens: {
      desktop: { max: "1280px" },
      smDesktop: { max: "992px" },
      table: { max: "768px" },
      smTable: { max: "640px" },
      phone: { max: "480px" },
      smPhone: { max: "320px" },
    },
  },
  colors: {
    black: "#000000",
    white: "#ffffff",
  },
  extend: {
    spacing: {
      60: "60rem",
      30: "30rem",
    },
  },
  plugins: [],
};
