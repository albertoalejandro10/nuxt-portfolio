<template>
  <div
    class="bg-background/90 flex flex-col justify-between gap-1 overflow-hidden rounded-md h-full hover:scale-105 hover:shadow hover:shadow-green-900 transition-transform duration-300"
  >
    <img
      :src="blok.image.filename"
      :alt="blok.name"
      class="w-full h-48 object-fill"
      provider="storyblok"
    />
    <div class="p-5">
      <h3 class="text-lg font-semibold mb-2">{{ blok.name }}</h3>
      <p class="text-sm mb-2" :class="{ 'line-clamp-3': !isExpanded }">
        {{ blok.description }}
      </p>
      <button
        type="button"
        @click="toggleExpand"
        class="text-xs text-green-400 hover:text-green-300 focus:outline-none mb-2"
      >
        {{ isExpanded ? 'Show Less' : 'Show More' }}
      </button>
      <div class="flex flex-wrap items-center gap-1 mb-2">
        <div
          v-for="{ alt, filename } in blok.icons"
          :key="filename"
          class="flex gap-x-1 text-sm bg-green-900 text-gray-200 rounded-md px-3 py-1"
        >
          <img :src="filename" :alt="alt" width="16" height="16" />
          {{ alt }}
        </div>
      </div>
      <div
        v-if="blok.buttons.length"
        class="flex justify-between gap-x-1 sm:gap-x-2"
      >
        <component
          :is="button.component"
          v-for="button in blok.buttons"
          :key="button._uid"
          :blok="button"
          class="bg-btn_back border-[1px] border-link_border px-2 py-2 rounded-md font-theme_bold text-btn_text text-sm hover:bg-border_sm transition-colors md:px-4 slg:text-base slg:px-6 slg:py-3 w-fit"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const isExpanded = ref(false)
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}
</script>
