<script setup>
const { locale } = useI18n()
const story = await useAsyncStoryblok("home", {
  version: "draft",
  language: locale.value,
  resolve_relations: ["featured-projects.projects"],
})
useHead({
  title: story.value.name,
  meta: [
    { name: "Home", content: "Alberto Alejandro portfolio, projects and info" },
  ],
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
