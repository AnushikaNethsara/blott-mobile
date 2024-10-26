/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{tsx,jsx,ts,js}",
    "./app/**/*.{tsx,jsx,ts,js}",
    "./components/**/*.{tsx,jsx,ts,js}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#523AE4",
        cynical: "#171717",
        alabaster: "#FAFAFA",
        nickel: "#737373",
        darkBlue: "#05021B",
        disableBlue: "#B0B8E1",
      },
      fontFamily: {
        raleway: ["Raleway_400Regular", "sans-serif"],
        rubik: ["Rubik_400Regular", "sans-serif"],
        roboto: ["Roboto_400Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
