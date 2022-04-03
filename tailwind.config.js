const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      saturate: {
        25: ".25",
        75: ".75",
      },
      scale: {
        60: ".60",
      },
    },
    colors: {
      // Colors you want to add go here
      transparent: "transparent",
      current: "currentColor",
      primary: colors.cyan,
      gray: colors.gray,
      white: colors.white,
      yellow: colors.yellow,
      red: colors.red,
      green: colors.green,
    },
    screens: {
      xs: "479px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
