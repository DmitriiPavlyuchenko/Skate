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
  },
  screens: {
    desktop: "1280px",
    smDesktop: "992px",
    table: "768px",
    smTable: "640px",
    phone: "480px",
    smPhone: "320px",
  },
  colors: {
    black: "#000000",
    white: "#ffffff",
  },
  extend: {
    spacing: {
      60: "60rem",
    },
  },
  plugins: [],
};
