/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Arial", "sans-serif"],
      serif: ["Georgia", "Times New Roman", "serif"],
      mono: ["Consolas", "Monaco", "monospace"],
    },
    colors: {
      outerRingOne: "#aed9e8",
      outerRingSecond: "#abdaea",
      middleRingOne: "#86cbde",
      middleRingSecond: "#84d0e7",
      innerRingOne: "#78c9e1",
      innerRingSecond: "#77cbe5",
      mainThemeColor: "#f7f6f2",
      sirNameColor: "#e6644a",
      lastNameColor: "#77cbe5",
      orangeStartColor: "#fc6a4f",
      orangeEndColor: "#f56b4e",
    },
    extend: {
      backgroundImage: {
        "bg-card": "url('../../assets/img/cardbgone.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
});
