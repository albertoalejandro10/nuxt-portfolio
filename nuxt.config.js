// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  app: {
    head: {
      charset: "utf-16",
      viewport: "initial-scale=1, maximum-scale=5, width=device-width",
      title: "albertoalejandrodev",
      meta: [
        {
          name: "Portfolio",
          content:
            "My web developer portfolio. I'm open to work and ready to collaborate.",
        },
      ],
      link: [
        { rel: "icon", href: "/favicon.svg" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
      ],
    },
  },
  buildModules: ["@nuxtjs/google-analytics"],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  modules: [
    "@nuxt/image",
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
        process.env.NUXT_PUBLIC_SITE_URL ||
        "https://albertoalejandro10.netlify.app",
    },
  },
})
