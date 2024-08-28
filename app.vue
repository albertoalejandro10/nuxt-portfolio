<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - albertoalejandrodev`
      : 'albertoalejandrodev'
  },
  meta: [
    {
      name: 'Portfolio',
      content:
        'Alberto Alejandro info, about, projects, goals, studies and jobs.',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: translateY(1rem);
  transition: all 0.3s;
}
</style>
