/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'color-black': '#000000', // Add your custom color here
        'color-gray': '#1E201E',
        'color-blue': '#40A2D8', 
        'color-white': '#EEEEEE',

      },
      fontFamily: {
        'spartan': ['League Spartan', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Montserrat-semibold': ['Montserrat-semibold', 'sans-serif'],
        'FreightBlack-Regular': ['FreightDispProBlack-Regular', 'sans-serif'],
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateY(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateY(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateY(2px)' },
        },
        fill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--final-width)' },
        },
      },
      animation: {
        waving: 'wave 2s infinite ease-in-out',
        shaking: 'shake 8s infinite',
        fill: 'fill 2s ease-in-out forwards',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

