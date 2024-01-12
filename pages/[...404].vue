<template>
  <div class="flex flex-col items-center gap-4 mt-40">
    <h1
      class="text-xl leading-loose tracking-wider md:text-2xl xl:text-4xl text-head_text"
    >
      There's nothing here<span class="text-link_text_hover">.</span>
    </h1>
    <p class="text-sm leading-relaxed md:text-xl">Error 404 - Page not found</p>
    <button
      class="bg-btn_back border-[1px] border-link_border px-2 py-2 rounded-md font-theme_bold text-btn_text text-sm hover:bg-border_sm transition-colors md:px-4 slg:text-base slg:px-6 slg:py-3 w-fit"
      @click="redirectToHome"
    >
      Go Home
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

// Methods are just functions
const router = useRouter()
const { locale } = useI18n()
const language = locale.value !== "en" ? "es" : ""
const redirectToHome = () => {
  router.push(`/${language}`)
}
</script>
