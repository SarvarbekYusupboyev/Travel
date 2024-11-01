/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      green: "#2B6F3E",
      black: "#202020",
      gray: "#959595",
      light: "#ffffff"
    },
  },
  plugins: [],
}

