<template>
  <h1 class="text-4xl font-bold mb-8">Projects</h1>

  <!-- Frontend Projects Section -->
  <section class="mb-16">
    <h2 class="text-2xl font-semibold mb-6">Frontend Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectCard
        v-for="project in frontendProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>

  <!-- Non-Frontend Projects Section -->
  <section>
    <h2 class="text-2xl font-semibold mb-6">Other Projects</h2>
    <div class="space-y-6">
      <NonFrontendProjectCard
        v-for="project in nonFrontendProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import NonFrontendProjectCard from '@/components/NonFrontendProjectCard.vue'

const frontendProjects = ref([
  {
    id: 1,
    title: 'ERP System',
    description:
      'A modern and responsive web application that adapts to any device. The minimalist and well-organized interface enables users to quickly find the information they need, enhancing productivity.',
    image:
      'https://a-us.storyblok.com/f/1005158/1919x825/54f1070048/example-softsystems-form.png',
    technologies: ['vue', 'tailwind', 'typescript'],
    link: '#',
  },
  {
    id: 2,
    title: 'Crypto Exchange App',
    description:
      'A cutting-edge web application built with Vue 3 and TypeScript. Features real-time data updates and an intuitive interface for monitoring market trends.',
    image:
      'https://a-us.storyblok.com/f/1005158/1755x849/0ef78b9046/crypto-exchange.jpeg',
    technologies: ['vue', 'typescript', 'chart.js'],
    link: '#',
  },
  {
    id: 3,
    title: 'Crypto Exchange App',
    description:
      'A cutting-edge web application built with Vue 3 and TypeScript. Features real-time data updates and an intuitive interface for monitoring market trends.',
    image:
      'https://a-us.storyblok.com/f/1005158/1755x849/0ef78b9046/crypto-exchange.jpeg',
    technologies: ['vue', 'typescript', 'chart.js'],
    link: '#',
  },
  // Add more frontend projects here
])

const nonFrontendProjects = ref([
  {
    id: 1,
    title: 'Data Scraper',
    description:
      'A Python-based web scraper that extracts and processes data from various sources, providing valuable insights for business intelligence.',
    technologies: ['python', 'beautifulsoup', 'pandas'],
    link: '#',
  },
  {
    id: 2,
    title: 'RESTful API',
    description:
      'A robust and scalable API built with Node.js and Express, featuring authentication, rate limiting, and comprehensive documentation.',
    technologies: ['nodejs', 'express', 'mongodb'],
    link: '#',
  },
  // Add more non-frontend projects here
])
</script>
