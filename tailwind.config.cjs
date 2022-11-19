/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'slate-gray': '#666CA3',
        'gun-metal': '#13183F',
        'light-slate-gray': '#83869A',
        'violet-red': '#F74780',
        'light-pink': '#FFA7C3',
        maroon: '#F02AA6',
        tomato: '#FF6F48',
        'royal-blue': '#4851FF',
      },
    },
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
