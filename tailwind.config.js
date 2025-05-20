/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#bae0ff',
          300: '#7cc6ff',
          400: '#36a7ff',
          500: '#0090ff',
          600: '#006fee',
          700: '#005bc4',
          800: '#004c9e',
          900: '#003e81',
        },
        accent: {
          50: '#f5f3ff',
          100: '#ede8ff',
          200: '#dcd1ff',
          300: '#c3adff',
          400: '#a57cff',
          500: '#8f4fff',
          600: '#7c2fff',
          700: '#6d1ee6',
          800: '#5a17bd',
          900: '#4a149a',
        },
        surface: {
          50: '#f5f7fa',
          100: '#eef1f5',
          200: '#e9edf2',
          300: '#dee3ea',
          400: '#cbd2dc',
          500: '#b0bac7',
          600: '#8e99a8',
          700: '#77818f',
          800: '#666f7a',
          900: '#4d5560',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        'neu-sm': '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff',
        'neu': '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff',
        'neu-lg': '10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff',
        'neu-inner': 'inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};