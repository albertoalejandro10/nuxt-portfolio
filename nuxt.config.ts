// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport:
        "initial-scale=1, user-scalable=no, width=device-width, height=device-height, viewport-fit=cover' ",
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
    "@nuxtjs/i18n",
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
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "es",
        name: "Español",
      },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
  },
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || "https://albertoalejandro.dev",
    },
  },
})
