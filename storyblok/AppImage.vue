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
      :src="blok.image.filename"
      :class="[cssClasses, 'h-48']"
      :alt="blok.image.alt"
    />
  </div>
</template>
