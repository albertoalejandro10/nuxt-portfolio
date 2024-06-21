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
  <a class="font-medium" :href="blok.link.cached_url">{{ blok.text }} </a>
</template>
