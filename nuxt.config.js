// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
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
        { rel: "icon", href: "/icon-logo.svg" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
      ],
    },
  },

  experimental: {
    suspense: false,
  },

  modules: [
    "nuxt-gtag",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    ["@nuxtjs/device", {
      refreshOnResize: true,
    }],
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
        file: "en.json",
      },
      {
        code: "es",
        name: "Español",
        file: "es.json",
      },
    ],
    lazy: true,
    langDir: "locales/",
    defaultLocale: "en",
    strategy: "prefix_and_default",
    detectBrowserLanguage: {
      useCookie: false,
      alwaysRedirect: false,
      fallbackLocale: "en",
      redirectOn: "root",
    },
  },

  gtag: {
    enabled: false,
    id: process.env.NUXT_PUBLIC_GTAG_ID,
  },

  image: {
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
  },

  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL ||
        "https://albertoalejandro10.netlify.app",
      name: 'Alberto Alejandro'
    },
  },

  compatibilityDate: "2024-08-27",
})