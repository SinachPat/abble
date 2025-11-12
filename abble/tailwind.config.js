/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    gridTemplateColumns: {
      '10/60/30': '10% 60% 30%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}
