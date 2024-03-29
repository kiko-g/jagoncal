const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      colors: {
        dark: '#0f1419',
        light: '#f2f4f7',
      },
      maxWidth: {
        screen: '100vw',
      },
      fontSize: {
        xxs: '0.6rem',
      },
      fontFamily: {
        inter: ['var(--inter-font)', ...fontFamily.sans],
        lexend: ['var(--lexend-font)', ...fontFamily.sans],
        code: ['Fira Code', ...fontFamily.mono],
      },
      boxShadow: {
        uniform: '0 0 8px 0 rgba(0, 0, 0, 0.25)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '25%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translateX(0%)' },
          '75%': { transform: 'translateX(25%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        scroll: 'marquee 50s linear infinite',
      },
    },
  },
}
