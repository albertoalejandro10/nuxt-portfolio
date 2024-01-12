<script setup>
const { locale } = useI18n()
const story = await useAsyncStoryblok("about", {
  language: locale.value,
  version: "draft",
})
useHead({
  title: story.value.name,
  meta: [{ name: "About", content: "About and goals of Alberto Alejandro" }],
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
