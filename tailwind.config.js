/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      titleFont: ["Mulish", "sans-serif"],
      textFont: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        backgroundColor: "#fff",
        grayBackground: "#f9f9f9",
        titleColor: "#000",
        textColor: "#767676",
        mainColor: "#147efb",
        blackShade: "#2d2e32",
      },
      boxShadow: {
        defaultShadow: "0 0 10px rgba(0,0,0,.09)",
      },
      animation: {
        spinSlow: "spin 9s linear infinite",
      },
    },
  },
  plugins: [],
};
