/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#1a73e8',
          light: '#4791db',
          dark: '#115293',
        }
      }
    },
  },
  plugins: [],
}