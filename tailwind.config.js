const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d9488",
        secondary: "#3b82f6",
        navy: "#0f1419",
        dark: "#242936",
        darker: "#1e222c",
        darkest: "#1a1e28",
        darkish: "#333640",
        light: "#f2f4f7",
        lighter: "#f7f7f7",
        lightest: "#fcfcfc",
        lightish: "#ebedf0",
      },
      maxWidth: {
        screen: "100vw",
      },
      fontSize: {
        xxs: "0.6rem",
      },
      fontFamily: {
        inter: ["var(--inter-font)", ...fontFamily.sans],
        lexend: ["var(--lexend-font)", ...fontFamily.sans],
        mono: ["var(--firacode-font)", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
}
