/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    aspectRatio: true,
    // preflight: false,
  },
  theme: {
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
    extend: {
      colors:{
        // primary: 'rgb(var(--color-primary) / <alpha-value>)',
        // secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        primary: colors.blue,
        secondary: colors.gray,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/line-clamp'),
  ],
}
