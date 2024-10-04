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
    <button
      class="flex items-center bg-btn_back border-[1px] border-link_border px-2 py-2 rounded-md font-theme_bold text-btn_text text-xs md:text-sm hover:bg-border_sm transition-colors w-fit"
    >
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
    </button>
  </div>
</template>
