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
  <div
    class="bg-background/90 flex flex-col justify-between gap-2 overflow-hidden rounded-md hover:scale-[1.01] hover:shadow hover:shadow-green-900 transition-transform duration-300"
  >
    <div class="p-5 flex flex-col lg:flex-row justify-between">
      <div class="w-full lg:w-2/3">
        <h3 class="text-lg font-semibold mb-2">{{ blok.name }}</h3>
        <p class="text-sm mb-2">{{ blok.description }}</p>
        <div class="flex flex-wrap items-center gap-1 mb-2">
          <div
            v-for="{ alt, filename } in blok.icons"
            :key="filename"
            class="flex items-center gap-x-1 text-xs bg-green-900 text-gray-200 rounded-md px-3 py-1"
          >
            <img :src="filename" :alt="alt" class="w-4 h-4" />
            {{ alt }}
          </div>
        </div>
      </div>
      <div v-if="blok.buttons.length" class="flex items-center">
        <component
          :is="button.component"
          v-for="button in blok.buttons"
          :key="button._uid"
          :blok="button"
        />
      </div>
    </div>
  </div>
</template>
