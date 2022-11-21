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
      fontSize: {
        'body-md': [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '500',
          },
        ],
        'body-sm': [
          '1rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '700',
          },
        ],
        'heading-xl': [
          '3.5rem',
          {
            lineHeight: '4.375rem',
            fontWeight: '800',
          },
        ],
        'heading-lg': [
          '2.5rem',
          {
            lineHeight: '3.188rem',
            fontWeight: '800',
          },
        ],
        'heading-md': [
          '2rem',
          {
            lineHeight: '2.5rem',
            fontWeight: '800',
          },
        ],
        'heading-sm': [
          '1.5rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '800',
          },
        ],
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
