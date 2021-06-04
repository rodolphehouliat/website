module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      display: ["Inter", "sans-serif"],
      body: ["Inter", "sans-serif"],
      // sans: ["Montserrat", "Nunito", "sans-serif"],
    },
    screens: {
      sm: { max: "640px" },
    },
    extend: {
      colors: {
        primary: "#fa6400",
        secondary: "#142450",
        orange: "#f9a826",
        beige: "#e2dbd2",
        gray: "#535461",
        black: "black",
        white: "white",
      },
    },
  },
  plugins: [],
};
