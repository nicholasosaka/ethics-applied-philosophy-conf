const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fogra: "#0A090C",
        jet: "#3B3A3D",
        ghost: "#F4F4F4",
        slate: "#6D8EA0",
        chestnut: "#BC4749",
        cream: "#FCEEDE"
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms')
  ],
};
