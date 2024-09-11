<script setup>
import BackendProjectCard from '@/components/BackendProjectCard.vue'

defineProps({
  blok: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})
</script>

<template>
  <div v-editable="blok">
    <BackendProjectCard :blok="blok" />
  </div>

  <!-- Non-Frontend Projects Section -->
  <!-- <section>
    <h2 class="text-2xl font-semibold mb-6">Other Projects</h2>
    <div class="space-y-6">
      <BackendProjectCard
        v-for="project in nonFrontendProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section> -->
</template>
