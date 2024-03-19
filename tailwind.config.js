/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#415A77',
          dark: '#0D1B2A',
          medium: '#1B263B',
          light: '#778DA9'
        },
        gray: {
          light: '#E0E1DD'
        }
      }
    },
  },
  plugins: [],
}

