/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      'mainGreen' : '#018b55',
      'accentGreen': '#27ae60',
      'grayText': '#686D78',
      'backgroundGrey': '#f4f6f6'
    },
    backgroundImage: {
      'job': 'url("/project774/f2.jpg")',
      'enaira': 'url("/project774/h2.jpg")',
      'tech': 'url("/project774/l2.jpg")'
    }
  },
  },
  plugins: [],
  }