const { theme } = require("./theme.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: theme.colors,
      fontSize: theme.fontSize,
      fontFamily: {
        ...theme.fontFamily,
        sans: ["Montserrat", "sans-serif"],
      },
      boxShadow: theme.boxShadow,
      borderRadius: theme.borderRadius,
      spacing: theme.spacing,
    },
  },
  plugins: [],
};
