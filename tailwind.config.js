/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Must include all template files
  ],
  theme: {
    extend: {
      colors: {
        lightblue: "#6EC1E4",
        softgreen: "#7FC6A4",
      },
      fontFamily: {
        sans: ["Fira Sans", ...defaultTheme.fontFamily.sans], // default body
        display: ["Montserrat", "Fira Sans", ...defaultTheme.fontFamily.sans], // headings
        alt: ["Open Sans", ...defaultTheme.fontFamily.sans], // optional alt body
      },
    },
  },
  plugins: [],
};
