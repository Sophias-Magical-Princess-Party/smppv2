/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'hand-writing': ['"Raleway"', "sans-serif"],
        'test': ['"Source Serif Pro"', "serif"]
      }
    },
    backgroundImage: {
      'hero-banner': "url('./assets/Trio-Herov2.jpg')",
      'test-banner': "url('./Trio-Hero.png')",
      'gradient-to-t': "linear-gradient(to top, var(--tw-gradient-stops))",
      'gradient-to-r': "linear-gradient(to right, var(--tw-gradient-stops))",
      'gradient-to-l': "linear-gradient(to left, var(--tw-gradient-stops))",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
