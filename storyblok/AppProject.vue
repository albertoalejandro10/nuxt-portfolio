<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
// import NonFrontendProjectCard from '@/components/NonFrontendProjectCard.vue'

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
    <!-- Frontend Projects Section -->
    <ProjectCard :blok="blok" />
  </div>

  <!-- Non-Frontend Projects Section -->
  <!-- <section>
      <h2 class="text-2xl font-semibold mb-6">Other Projects</h2>
      <div class="space-y-6">
        <NonFrontendProjectCard
          v-for="project in nonFrontendProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </section> -->
</template>
