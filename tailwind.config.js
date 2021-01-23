module.exports = {
  purge: {
    enabled: false,
    content: ["./src/**/*.svelte", "./src/**/*.html"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#ff3e00",
      secondary: "#2d9ca8",
      error: "#B00020",
      warning: "#ff9800",
      information: "#13afa2",
    },
    fontFamily: {},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
