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
    <StoryblokComponent
      v-for="AloneBlok in blok.body"
      :key="AloneBlok._uid"
      :blok="AloneBlok"
    />
  </div>
</template>
