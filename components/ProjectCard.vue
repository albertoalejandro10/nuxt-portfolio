<template>
  <div
    class="bg-background/90 flex flex-col justify-between gap-1 overflow-hidden rounded-md h-full hover:scale-105 hover:shadow-lg transition-transform"
  >
    <img
      :src="project.image"
      :alt="project.title"
      class="w-full h-48 object-fill"
    />
    <div class="p-5">
      <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
      <p class="text-gray-400 mb-4">{{ project.description }}</p>
      <div class="flex items-center justify-between">
        <div class="flex space-x-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="text-sm bg-green-900 text-gray-200 rounded-full px-3 py-1"
          >
            {{ tech }}
          </span>
        </div>
        <div class="flex gap-x-1">
          <NuxtLink
            to="#"
            class="flex items-center border-[1px] border-link_border px-1 py-1 rounded text-btn_text text-sm hover:bg-border_sm transition-colors md:px-2 w-fit"
          >
            <InternetIcon class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink
            to="#"
            class="flex items-center border-[1px] border-link_border px-1 py-1 rounded text-btn_text text-sm hover:bg-border_sm transition-colors md:px-2 w-fit"
          >
            <GitHubIcon class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GitHubIcon from './icons/GitHubIcon.vue'
import InternetIcon from './icons/InternetIcon.vue'

defineProps<{
  project: {
    title: string
    description: string
    image: string
    technologies: string[]
    link: string
  }
}>()
</script>
