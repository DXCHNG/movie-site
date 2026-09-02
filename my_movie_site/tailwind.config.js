/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent:  '#22D3EE',
        surface: '#161B22',
        dark:    '#0D1117',
      }
    }
  },
  plugins: [],
}