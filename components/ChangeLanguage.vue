<template>
  <div class="inline-flex">
    <button
      type="button"
      class="inline-flex items-center px-2 py-2 text-xs font-medium text-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 first:rounded-l-lg last:rounded-r-lg"
    >
      <EnglishIcon class="mr-1" /> EN
    </button>
    <button
      type="button"
      class="inline-flex items-center px-2 py-2 text-xs font-medium text-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 first:rounded-l-lg last:rounded-r-lg"
    >
      <SpanishIcon class="mr-1" /> ES
    </button>
  </div>
</template>

<script>
// import { ref } from "vue"
import EnglishIcon from "./icons/EnglishIcon.vue"
import SpanishIcon from "./icons/SpanishIcon.vue"

export default {
  components: {
    EnglishIcon,
    SpanishIcon,
  },
}
</script>
