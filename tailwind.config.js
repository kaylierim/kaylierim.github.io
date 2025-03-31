/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'vanilla-ravioli': ['Vanilla Ravioli', 'serif'],
      'poppins': ['Poppins', 'sans serif']
    },
    screens: {
      desktop: { min: "1280px" },
      laptop: { max: "1279px" },
      tablet: { max: "1023px" },
      mobile: { max: "767px" },
    },
    extend: {
    colors: {
      navy: "#2F4156",
      teal: "#567C8D",
      "sky-blue": "#C8D9E6",
      beige: "#F5EFEB"
    },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

