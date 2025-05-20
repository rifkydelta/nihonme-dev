/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          50: '#E6EDF7',
        },
        primary: {
          200: '#90CDF4',
        }
      },
      boxShadow: {
        'neu': '6px 6px 12px #c5ccd8, -6px -6px 12px #ffffff',
        'neu-sm': '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff',
        'neu-xs': '2px 2px 4px #d1d9e6, -2px -2px 4px #ffffff',
        'neu-inner': 'inset 4px 4px 8px #c5ccd8, inset -4px -4px 8px #ffffff',
        'neu-inner-sm': 'inset 2px 2px 4px #c5ccd8, inset -2px -2px 4px #ffffff',
      }
    },
  },
  plugins: [],
}