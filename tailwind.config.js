module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      }
    },
  },
  variants: {
    extend: {
      transitionDuration: ["hover", "focus"],
      backgroundColor: ["active"],
      divideColor: ["group-hover"],
      backgroundColor: ["active"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
