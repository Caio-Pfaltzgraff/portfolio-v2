// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['Plus Jakarta Sans', 'sans-serif'],
        title: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        dark: {
          light: '#202020',
          strong: '#121212',
        },
        light: '#F9F9F9',
        midnightBlue: '#051933',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

