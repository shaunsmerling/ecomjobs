/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      common: "-0.01em",
    },
    colors: {
      lightGray: {
        25: "#ECECEE",
        50: "#64748B",
        100: "#DFDFDF",
        200: "#EEEEEE",
        300: "#757E95",
        400: "#F1F5F9",
      },
      lightGreen: {
        50: "#F8FEF5",
        100: "#7ED957",
        200: "#305F4B",
        300: "#2F604B",
        400: "#258B60",
      },
      lightYellow: {
        100: "#FFF8E1",
      },
      transparent: "transparent",
      current: "currentColor",
      mongo: "#17614A",
      hover: "#22A956",
      d2c: "#fffcd3",
      btn: "#fef266",
      bnr: "#bcb48c",
      insight: "#c6c2c2",
      insightblue: "#0922FF",
      primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
    },
    extend: {
      fontFamily: {
        'body': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
        montserrant: ['Montserrat', 'sans-serif'],
        Studio6: ['Studio6', 'sans-serif'],
        Amaranth: ["Amaranth", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      lineHeight: {
        30: "1.875rem",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms"), require('@tailwindcss/typography')],
};
 