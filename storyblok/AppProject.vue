<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const processName = (name) => {
  return name.replaceAll(' ', '-')
}
</script>

<template>
  <div v-editable="blok" :id="processName(blok.name)">
    <div class="flex flex-col items-center gap-4 lg:gap-6">
      <div class="flex flex-col items-center gap-2">
        <img
          :alt="blok.image.alt"
          :src="blok.image.filename"
          class="w-full rounded-lg"
          provider="storyblok"
        />
        <div
          class="flex flex-row items-center flex-wrap gap-y-2 gap-x-1 sm:gap-x-2"
        >
          <strong class="text-xs lg:text-sm text-gray-400">Stack:</strong>
          <NuxtPicture
            v-for="{ alt, filename } in blok.icons"
            :key="filename"
            provider="storyblok"
            class="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
            :src="filename"
            :alt="alt"
          />
        </div>
      </div>
      <div class="flex flex-col gap-4 md:w-5/6 items-left">
        <span class="text-2xl font-theme_bold text-head_text">{{
          blok.name
        }}</span>
        <p class="text-sm lg:text-lg">
          {{ blok.description }}
        </p>
        <div v-if="blok.buttons.length" class="flex gap-x-1 sm:gap-x-2">
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
  </div>
</template>
