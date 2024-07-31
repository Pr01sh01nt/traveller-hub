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
      screens :{

        'max-ssm': {'max': '450px'}, // Target screens smaller than 450px
        'max-sm': {'max': '639px'}, // Target screens smaller than 640px
        'max-md': {'max': '700px'}, // Target screens smaller than 768px
        'max-lg': {'max': '1023px'}, // Target screens smaller than 1024px
        'max-xl': {'max': '1279px'}, // Target screens smaller than 1280px
        'max-2xl': {'max': '1535px'},// Target screens smaller than 1536px
      },
      fontFamily: {
        sans: ['Edu+AU+VIC+WA+NT+Hand','Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        hand: ['Edu AU VIC WA NT Hand','Danfo']
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/roadai.jpeg')",
      },
      boxShadow: {
        'custom-sm': '2px 2px 0px rgba(0, 0, 0, 0.1)', // Example of a small shadow with low opacity
        'custom-md': '4px 4px 8px rgba(0, 0, 0, 0.3)', // Example of a medium shadow with moderate opacity
        'custom-lg': '6px 6px 12px rgba(0, 0, 0, 0.5)', // Example of a large shadow with higher opacity
        'custom-xl': '8px 8px 16px rgba(0, 0, 0, 0.7)', // Example of an extra-large shadow with high opacity
        'custom-xll': '30px 25px 0px', // Example of an extra-large shadow with high opacity
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}