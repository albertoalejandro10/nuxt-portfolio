<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})
</script>

<template>
  <div v-editable="blok">
    <div class="flex flex-col gap-5">
      <h3
        class="text-base font-theme_bold md:text-xl lg:text-2xl text-head_text"
      >
        {{ blok.title }}
      </h3>
      <img :src="blok.technologies.cached_url" alt="skillicons" />
    </div>
  </div>
</template>

<style scoped>
img {
  pointer-events: none;
}
</style>
