<script setup>
const { locale } = useI18n()
const story = await useAsyncStoryblok("about", {
  language: locale.value,
  version: "draft",
})
useHead({
  title: story.value.name,
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
