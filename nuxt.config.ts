// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "albertoalejandrodev",
      meta: [
        {
          name: "Portfolio",
          content:
            "My web developer portfolio. I'm open to work and ready to collaborate.",
        },
      ],
      link: [{ rel: "icon", href: "/favicon.svg" }],
    },
  },
  modules: [
    "nuxt-simple-sitemap",
    "@nuxtjs/tailwindcss",
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        bridge: true,
        apiOptions: {
          region: "us",
        },
      },
    ],
  ],
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || "https://albertoalejandro.dev",
    },
  },
})
