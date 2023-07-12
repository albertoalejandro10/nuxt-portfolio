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
    <!-- Hero -->
    <div class="flex flex-col gap-8">
      <h1
        class="text-xl leading-loose sm:text-4xl md:text-5xl xl:text-7xl text-head_text"
      >
        {{ blok.title }}<span class="text-link_text_hover">.</span>
      </h1>
      <p class="text-sm leading-relaxed md:text-xl">
        {{ blok.subtitle }}
      </p>
      <p class="text-sm text-justify leading-relaxed md:text-base">
        {{ blok.text }}
      </p>
    </div>
  </div>
  <!-- Contact and Social -->
  <div class="flex items-center justify-between mt-6">
    <div class="flex gap-1" v-if="blok.icons.length">
      <component
        :is="icon.component"
        v-for="icon in blok.icons"
        :key="icon._uid"
        :blok="icon"
        class="w-8 p-1 mr-1 transition-all bg-white rounded-md hover:bg-gray-600"
      >
      </component>
    </div>
    <div v-if="blok.buttons.length">
      <component
        :is="button.component"
        v-for="button in blok.buttons"
        :key="button._uid"
        :blok="button"
        class="bg-btn_back border-[1px] border-link_border px-2 py-2 rounded-md text-btn_text text-sm hover:bg-border_sm transition-colors md:px-4 w-fit"
      ></component>
    </div>
  </div>
</template>
