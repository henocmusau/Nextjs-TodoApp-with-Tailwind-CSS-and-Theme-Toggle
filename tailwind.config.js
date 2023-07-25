/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bgDark': '#181824',
        'bgLight': '#e2e8f0',
        'bgDarkSecondary': '#25273C',

      },
      backgroundImage: {
        'darkImage': 'url(../assets/imgs/bg2.jpg)',
        'lightImage': 'url(../assets/imgs/bg1.jpg)',
      }
    },
  },
  plugins: [],
}
