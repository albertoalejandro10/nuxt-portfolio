<script setup>
const { locale } = useI18n()
const story = await useAsyncStoryblok("projects", {
  language: locale.value,
  version: "draft",
})
useHead({
  title: story.value.name,
  meta: [{ name: "Projects", content: "Alberto Alejandro Projects" }],
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
