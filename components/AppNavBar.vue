<script setup>
import ChangeLanguage from './ChangeLanguage.vue'
const localePath = useLocalePath()

const { t } = useI18n()
const home = computed(() => t('AppNavBar.home'))
const about = computed(() => t('AppNavBar.about'))
const projects = computed(() => t('AppNavBar.projects'))
</script>

<template>
  <Teleport to="body">
    <!-- Navbar -->
    <nav
      class="fixed bottom-0 z-20 px-3 py-3 flex justify-evenly items-center border-b-[1px] border-border_sm w-full backdrop-blur-sm backdrop-filter sm:top-0 sm:bottom-auto sm:px-6 lg:py-4"
    >
      <div class="h-[1px] top-0 absolute left-0 w-full bg-topbar lg:h-1"></div>
      <NuxtLink
        :to="localePath('/')"
        class="hidden text-3xl font-normal select-none router-link-active router-link-exact-active sm:block lg:text-4xl"
      >
        <NuxtPicture src="/logo.svg" alt="logo" width="170" height="40" />
      </NuxtLink>
      <div class="flex items-center gap-1 text-sm sm:gap-2">
        <NuxtLink :to="localePath('/')">
          <span
            class="flex items-center text-xs px-2 transition-all rounded-md hover:bg-action-back hover:text-green-600 sm:px-6 sm:py-2 md:font-semibold md:text-base lg:text-sm"
          >
            {{ home }}
          </span>
        </NuxtLink>
        <NuxtLink :to="localePath('/about')">
          <span
            class="flex items-center text-xs px-2 transition-all rounded-md hover:bg-action-back hover:text-green-600 sm:px-6 sm:py-2 md:font-semibold md:text-base lg:text-sm"
          >
            {{ about }}
          </span>
        </NuxtLink>
        <NuxtLink :to="localePath('/projects')">
          <span
            class="flex items-center text-xs px-2 transition-all rounded-md hover:bg-action-back hover:text-green-600 sm:px-6 sm:py-2 md:font-semibold md:text-base lg:text-sm"
          >
            {{ projects }}
          </span>
        </NuxtLink>
        <ChangeLanguage />
      </div>
    </nav>
  </Teleport>
</template>

<style scoped>
.router-link-active.router-link-exact-active {
  color: rgb(29, 204, 93);
}
</style>
