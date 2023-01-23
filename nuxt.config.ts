// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "ShitCoderz",
      link: [{ rel: "shortcut icon", href: "favicon.ico" }],
    },
  },
  pages: true,
  router: {
    options: {},
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
