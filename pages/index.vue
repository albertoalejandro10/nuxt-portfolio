<script setup>
const { locale } = useI18n()
const story = await useAsyncStoryblok("home", {
  version: "draft",
  language: locale.value,
  resolve_relations: ["featured-projects.projects"],
})
useHead({
  title: story.value.name,
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
