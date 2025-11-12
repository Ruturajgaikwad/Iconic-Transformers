/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayscale: {
          50: "#F7F7F8",
          100: "#EEEEF0",
          200: "#D9D9DE",
          300: "#B7B8C2",
          400: "#9092A0",
          500: "#727585",
          600: "#5A5C6A",
          700: "#4B4D59",
          800: "#41434B",
          900: "#393A41",
          950: "#26262B",
        },
        dominant: "#FCFFFF",   // Added
        secondary: "#99E1D9",  // Added
        accent: "#202C39",     // Added
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
