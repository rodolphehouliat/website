module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    colors: {
      primary: "#fa6400",
      secondary: "#142450",
      orange: "#f9a826",
      beige: "#e2dbd2",
      gray: "#535461",
      black: "black",
      white: "white",
    },
    fontFamily: {
      display: ["Nunito", "sans-serif"],
      body: ["Nunito", "sans-serif"],
      // sans: ["Montserrat", "Nunito", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
