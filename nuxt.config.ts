// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      "Hanken Grotesk": [500, 700, 800],
    },
  },
  css: ["~/assets/css/globals.scss"],
  // modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-icon", "@nuxt/ui"],
  modules: ["@nuxtjs/google-fonts", "@nuxt/ui"],
});