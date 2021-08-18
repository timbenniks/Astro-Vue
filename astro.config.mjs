export default {
  buildOptions: {
    sitemap: true,
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  renderers: ["@astrojs/renderer-vue", "@astrojs/renderer-react"],
};
