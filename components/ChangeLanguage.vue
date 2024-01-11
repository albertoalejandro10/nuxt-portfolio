<script setup>
import EnglishIcon from "./icons/EnglishIcon.vue"
import SpanishIcon from "./icons/SpanishIcon.vue"

const { locale, setLocale } = useI18n()

const switchLanguage = (lang) => {
  setLocale(lang)
}

const getLanguageButtonClasses = (lang) => {
  const baseClasses =
    "inline-flex items-center px-2 py-2 text-xs font-medium text-center text-white focus:ring-2 focus:outline-none hover:bg-green-800 focus:ring-green-800 first:rounded-l-lg first:rounded-r-none last:rounded-r-lg last:rounded-l-none"
  return locale.value === lang ? `${baseClasses} active` : baseClasses
}
</script>

<template>
  <div class="inline-flex">
    <button
      aria-label="Switch to English"
      @click="switchLanguage('en')"
      :class="getLanguageButtonClasses('en')"
    >
      <EnglishIcon class="mr-1" />
      <span>English</span>
    </button>
    <button
      aria-label="Switch to Spanish"
      @click="switchLanguage('es')"
      :class="getLanguageButtonClasses('es')"
    >
      <SpanishIcon class="mr-1" />
      <span>Spanish</span>
    </button>
  </div>
</template>

<style scoped>
.active {
  background-color: rgb(21 128 61 / var(--tw-bg-opacity));
}

.inline-flex button:hover {
  background-color: rgb(22 101 52 / var(--tw-bg-opacity));
}

.inline-flex button:not(.active) {
  background-color: rgb(46 46 46 / var(--tw-bg-opacity));
}

.inline-flex button:not(.active):hover {
  background-color: rgb(22 101 52 / var(--tw-bg-opacity));
}
</style>
