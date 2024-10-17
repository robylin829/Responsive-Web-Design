/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#F44336",
          dark: "#f3f81b",
          DEFAULT: "#f3f81b",
        },
        background: {
          light: "#EEEEEE",
          dark: "#000000",
          DEFAULT: "#000000",
        },
        word: {
          light: "#000000",
          dark: "#FFFFFF",
          DEFAULT: "#FFFFFF",
        },
      },
    },
  },
};
