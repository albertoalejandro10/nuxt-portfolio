<script setup>
import { useAttrs, computed } from "vue"
defineProps({
  blok: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const defaultCSSClasses = "object-cover w-full h-auto rounded-xl mb-10"
const attrs = useAttrs()
const cssClasses = computed(() => attrs.class || defaultCSSClasses)
</script>

<template>
  <div v-editable="blok">
    <img
      provider="storyblok"
      :src="blok.image.filename"
      :alt="blok.image.alt"
      :class="[cssClasses, 'h-48']"
    />
  </div>
</template>
