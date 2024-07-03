/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#97ABE4',
        'custom-green': '#9CC48E',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}