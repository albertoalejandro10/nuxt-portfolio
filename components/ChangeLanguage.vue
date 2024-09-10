<script setup>
import EnglishIcon from './icons/EnglishIcon.vue'
import SpanishIcon from './icons/SpanishIcon.vue'

const { locale, setLocale, t } = useI18n()

const switchLanguage = (lang) => {
  setLocale(lang)
}

const getLanguageButtonClasses = (lang) => {
  const baseClasses =
    'inline-flex items-center px-2 py-2 text-xs font-medium text-center text-white focus:outline-none hover:bg-green-800 focus:ring-0 first:rounded-l-md first:rounded-r-none last:rounded-r-md last:rounded-l-none'
  return locale.value === lang ? `${baseClasses} active` : baseClasses
}

const english = computed(() => t('ChangeLanguague.english'))
const spanish = computed(() => t('ChangeLanguague.spanish'))
</script>

<template>
  <div class="inline-flex">
    <button
      aria-label="Switch to English"
      type="button"
      :class="getLanguageButtonClasses('en')"
      @click="switchLanguage('en')"
    >
      <EnglishIcon />
      <span class="hidden ml-1 xs:block">{{ english }}</span>
    </button>
    <button
      aria-label="Switch to Spanish"
      type="button"
      :class="getLanguageButtonClasses('es')"
      @click="switchLanguage('es')"
    >
      <SpanishIcon />
      <span class="hidden ml-1 xs:block">{{ spanish }}</span>
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
