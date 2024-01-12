<script setup>
import ChangeLanguage from "./ChangeLanguage.vue"
const localePath = useLocalePath()
</script>

<template>
  <Teleport to="body">
    <!-- Navbar -->
    <nav
      class="bottom-0 z-20 px-3 py-3 flex justify-evenly items-center border-b-[1px] border-border_sm fixed w-full bg-navbar_back backdrop-blur-sm sm:top-0 sm:bottom-auto sm:px-6 lg:py-4"
    >
      <div class="h-[1px] top-0 absolute left-0 w-full bg-topbar lg:h-1"></div>
      <a
        aria-current="page"
        href="/"
        class="hidden text-3xl font-normal select-none router-link-active router-link-exact-active sm:block lg:text-4xl"
      >
        <NuxtImg src="../public/logo.svg" alt="logo" width="170" height="40" />
      </a>
      <div class="flex items-center gap-1 text-sm sm:gap-2">
        <NuxtLink :to="localePath('/')">
          <span
            class="flex items-center text-xs px-3 transition-all rounded-md hover:bg-action-back hover:text-green-600 sm:px-6 sm:py-2 md:font-semibold md:text-base lg:text-sm"
          >
            Home
          </span>
        </NuxtLink>
        <NuxtLink :to="localePath('/projects')">
          <span
            class="flex items-center text-xs px-3 transition-all rounded-md hover:bg-action-back hover:text-green-600 sm:px-6 sm:py-2 md:font-semibold md:text-base lg:text-sm"
          >
            Projects
          </span>
        </NuxtLink>
        <NuxtLink :to="localePath('/about')">
          <span
            class="flex items-center text-xs px-3 transition-all rounded-md hover:bg-action-back hover:text-green-600 sm:px-6 sm:py-2 md:font-semibold md:text-base lg:text-sm"
          >
            About
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
