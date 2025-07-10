/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  mode: 'jit',
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
        fadeInOut1: {
          '0%':   { opacity: 1 },
          '45%':  { opacity: 1 },
          '50%':  { opacity: 0 },
          '95%':  { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInOut2: {
          '0%':   { opacity: 0 },
          '45%':  { opacity: 0 },
          '50%':  { opacity: 1 },
          '95%':  { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        waving: 'wave 2s infinite ease-in-out',
        shaking: 'shake 8s infinite',
        fill: 'fill 2s ease-in-out forwards',
        'fade1': 'fadeInOut1 8s ease-in-out infinite',
        'fade2': 'fadeInOut2 8s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

