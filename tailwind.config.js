/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", 
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./index.html",
],

  theme: {
    extend: {
      colors: {
        blue: {
          300: '#001227',
          400: '#053E80',
    },
    white:{
      300: '#E9EFF2',
      400: '#F8F9FA'
    }
    ,},
  },
  plugins: [],
}

}