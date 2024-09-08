<template>
  <div
    class="bg-background/90 rounded-md overflow-hidden shadow-md p-6 transition-transform hover:scale-105"
  >
    <div class="flex flex-col justify-between">
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
        <NuxtLink
          to="#"
          class="flex items-center border-[1px] border-link_border px-1 py-1 rounded text-btn_text text-sm hover:bg-border_sm transition-colors md:px-2 w-fit"
        >
          View code on <GitHubIcon class="ml-1 w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GitHubIcon from '@/components/icons/GitHubIcon.vue'

defineProps<{
  project: {
    title: string
    description: string
    technologies: string[]
    link: string
  }
}>()
</script>
