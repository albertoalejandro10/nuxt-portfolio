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
  <div v-editable="blok" class="flex items-center">
    <a class="font-medium" :href="blok.link.cached_url">{{ blok.text }}</a>
    <span v-if="blok.icons?.length">
      <component
        :is="icon.component"
        v-for="icon in blok.icons"
        :key="icon._uid"
        :blok="icon"
        class="ml-1 text-xs"
      />
    </span>
  </div>
</template>
