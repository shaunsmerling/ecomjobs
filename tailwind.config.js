/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "mongo": "#17614A",
      "hover": "#22A956"
    },
    extend: {
    fontFamily: {
      'Amaranth': ['Amaranth', 'sans-serif'] 
    },
  },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px'
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}
