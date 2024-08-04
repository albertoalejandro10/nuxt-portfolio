<script setup>
const { t } = useI18n()
const credits = computed(() => t("AppFooter.credits"))
const madeWith = computed(() => t("AppFooter.madeWith"))
</script>

<template>
  <!-- Attribution -->
  <div
    class="w-full text-center max-w-screen-xl px-8 py-6 pb-24 mx-auto mt-14 sm:px-16 lg:px-24 lg:mt-20"
  >
    {{ credits }}
    <a
      class="hover:text-link_text_hover tracking-wider"
      href="https://github.com/aniketkotal"
      target="_blank"
    >
      Aniket Kotal</a
    >
    <br />
    {{ madeWith }}
    <a
      class="hover:text-link_text_hover tracking-wider"
      href="https://github.com/albertoalejandro10"
      target="_blank"
    >
      AlbertoAlejandro</a
    >
  </div>
</template>
