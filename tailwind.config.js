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
      'tech': 'url("/project774/l2.jpg")',
      'desktopBG': "url('https://res.cloudinary.com/tacafrica/image/upload/v1665999037/my_folder/wetransfer_oct_2023/WhatsApp_Image_2022-10-17_at_9.08.05_AM_ji8mom.jpg')",
      'goals_enaira': "url('https://res.cloudinary.com/tacafrica/image/upload/v1665933799/my_folder/wetransfer_oct_2023/image00064_lye79d.jpg')",
      'goals_tech': "url('https://res.cloudinary.com/tacafrica/image/upload/v1665933797/my_folder/wetransfer_oct_2023/image00065_sq2fei.jpg')",
      'goals_job': "url('https://res.cloudinary.com/tacafrica/image/upload/v1657883873/my_folder/projects/ageqfoxdysye0qngyp2h.jpg')"
    },
  },
  },
  plugins: [],
  }