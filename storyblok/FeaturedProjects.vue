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
    <!-- Featured projects -->
    <div class="flex flex-col gap-2 lg:gap-2">
      <h3 class="text-base md:text-2xl lg:text-4xl text-head_text">
        {{ blok.title }}
      </h3>
      <p>{{ blok.subtitle }}</p>
      <div
        v-if="blok.projects?.length"
        class="grid grid-cols-1 pt-8 mx-auto lg:grid-cols-2 gap-7 sm:gap-6 sm:w-5/6 lg:w-full"
      >
        <NuxtLink
          v-for="{ uuid, content } in blok.projects"
          :key="uuid"
          to="/projects"
          class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 items-center gap-8 rounded-md bg-item_back hover:bg-item_hover_back transition-colors border-[1px] border-border_sm"
        >
          <div class="overflow-hidden aspect-video rounded-xl relative group">
            <div
              class="rounded-xl z-10 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute from-black to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 flex items-end"
            >
              <div>
                <div
                  class="flex items-center p-4 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-6 transform transition duration-300 ease-in-out"
                >
                  <div class="text-head_text">Technologies used:</div>
                  <div
                    v-for="{ alt, filename } in content.icons"
                    :key="content.icons.id"
                  >
                    <!-- Icons -->
                    <img
                      class="mx-1"
                      width="34"
                      height="34"
                      :src="filename"
                      :alt="alt"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              :alt="content.image.alt"
              :src="content.image.filename"
              class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div class="flex flex-col justify-between gap-4 lg:gap-5">
            <span class="text-lg text-head_text lg:text-xl">{{
              content.name
            }}</span>
            <p class="text-sm md:text-base">{{ content.description }}</p>
          </div></NuxtLink
        >
      </div>
    </div>
  </div>
</template>
