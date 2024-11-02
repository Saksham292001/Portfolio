/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        bluish: 'rgba(30, 58, 138, 0.8)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};



