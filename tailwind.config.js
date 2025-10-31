/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(220, 60, 70)',
        secondary: 'rgb(235, 140, 145)',
        neutralLight: 'rgb(250, 247, 245)',
        neutralDark: 'rgb(90, 90, 90)'
      },
      fontFamily: {
        brand: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        cooper: ['Lilita One', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

