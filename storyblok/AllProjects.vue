<script setup>
import { ref } from 'vue'

const { locale } = useI18n()

const projects = ref(null)
const storyblokApi = useStoryblokApi()

const {
  data: { stories },
} = await storyblokApi.get('cdn/stories', {
  language: locale.value,
  version: 'draft',
  starts_with: 'projects',
})
projects.value = stories.filter((story) => story.is_startpage !== true)
</script>

<template>
  <div v-editable="projects" class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <component
      :is="project.content.component"
      v-for="project in projects"
      :key="project.uuid"
      :blok="project.content"
    />
  </div>
</template>
