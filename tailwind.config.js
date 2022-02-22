module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      /*sort*/
      primary: "#000000",
      /*hvid*/
      secondary: "#ffffff",
      /*gul*/
      third: "#F1F500",
      /*blå*/
      fourth: "#0500FF",
      /*pink*/
      fifth: "#FF01D6",
      /*grøn*/
      sixth: "#00B412",
      /*rød*/
      seventh: "#FF0000",
      /*orange*/
      eighth: "#FD8900",
      /*lilla*/
      ninth: "#9800F5",
    },

    fontFamily: {
      jetbrains: "'JetBrains Mono', monospace;",
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
