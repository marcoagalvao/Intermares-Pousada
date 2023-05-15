/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      'vermelho-escuro' : '#600000',
      'verde-oliva' : '#006060'
    },
    fontFamily: {
      banner : ['Cookie', 'sans-serif'],
      texto : ['Roboto', 'sans-serif']
    },},
  },
  plugins: [],
}

