<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - albertoalejandrodev`
      : "albertoalejandrodev"
  },
  meta: [
    {
      name: "Portfolio",
      content:
        "Alberto Alejandro info, about, projects, goals, studies and jobs.",
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
