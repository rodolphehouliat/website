import preprocess from "svelte-preprocess";
import node from "@sveltejs/adapter-node";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: node(),
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    vite: () => ({
      resolve: {
        alias: {
          stores: ["/src/stores"],
          src: ["/src"],
        },
      },
    }),
  },
};

export default config;
