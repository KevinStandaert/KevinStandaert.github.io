/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: {
          50: "#f4f6ef",
          100: "#e5ecdb",
          200: "#cedbbb",
          300: "#aec393",
          400: "#91ac6f",
          500: "#739052",
          600: "#658147",
          700: "#455833",
          800: "#3a482c",
          900: "#333e29",
          950: "#192013",
        },
        sundown: {
          50: "#fef2f2",
          100: "#ffe1e1",
          200: "#ffc8c8",
          300: "#ffb1b1",
          400: "#fd6c6c",
          500: "#f53e3e",
          600: "#e22020",
          700: "#be1717",
          800: "#9d1717",
          900: "#821a1a",
          950: "#470808",
        },
      },
    },
  },
  plugins: [],
};
