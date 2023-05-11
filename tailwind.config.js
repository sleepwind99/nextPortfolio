/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans', 'sans-serif'],
        'mont': ['var(--font-mont)', fontFamily.sans],
        'robo': ['var(--font-robo)', fontFamily.sans],
        'nanum': ['var(--font-nanum)', fontFamily.sans],
      },
      colors: {
        'point': '#FFC107',
        'light': '#FAFAFA',
        'shadow': '#e1e1e1',
        'dark': '#222222',
        'dark-shadow': '111111',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
