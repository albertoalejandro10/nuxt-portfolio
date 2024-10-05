<script setup>
import LogoIcon from '@/components/icons/LogoIcon.vue'

defineProps({
  blok: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const { isMobile, isDesktopOrTablet } = useDevice()
</script>

<template>
  <div class="flex justify-center" v-if="isMobile && !isDesktopOrTablet">
    <LogoIcon class="w-24 h-24 object-cover" />
  </div>
  <!-- Hero -->
  <div v-editable="blok">
    <div class="flex flex-col gap-7">
      <h1
        class="text-2xl leading-loose tracking-wider sm:text-4xl md:text-5xl xl:text-7xl animate-text-gradient bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-[200%_auto] bg-clip-text text-transparent"
      >
        {{ blok.title }}<span>,</span>
      </h1>
      <p class="text-base leading-relaxed md:text-xl">
        {{ blok.subtitle }}
      </p>
      <p class="text-sm leading-relaxed md:text-base">
        {{ blok.text }}
      </p>
    </div>
  </div>
  <!-- Contact and Social -->
  <div
    class="flex flex-col xs:flex-row xs:items-center gap-2 justify-between mt-6"
  >
    <div v-if="blok.icons.length" class="flex gap-x-1">
      <component
        :is="icon.component"
        v-for="icon in blok.icons"
        :key="icon._uid"
        :blok="icon"
        class="w-8 p-1 transition-all bg-white rounded-md hover:bg-gray-600"
      >
      </component>
    </div>
    <div v-if="blok.buttons.length" class="flex gap-x-1">
      <component
        :is="button.component"
        v-for="button in blok.buttons"
        :key="button._uid"
        :blok="button"
      ></component>
    </div>
  </div>
</template>
