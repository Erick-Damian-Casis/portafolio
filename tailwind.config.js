/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        forest:'#2d112b'
      }
    },
    fontFamily:{
      rubik: ['Rubik Vinyl'],
      titan: ['Titan One'],
      oleo: ['Oleo Script'],
      vadodara: ['Hind Vadodara'],
    },
  },
  plugins: [],
}
