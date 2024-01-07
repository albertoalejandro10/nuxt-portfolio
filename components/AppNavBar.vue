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
        class="text-3xl font-normal select-none router-link-active router-link-exact-active lg:text-4xl"
      >
        <img src="../assets/images/logo.svg" alt="logo" />
      </a>
      <div class="flex items-center gap-1 text-sm sm:gap-2">
        <NuxtLink to="/">
          <span
            class="flex items-center text-xs px-3 transition-all rounded-md hover:bg-action-back hover:text-green-600 sm:px-6 sm:py-2 md:font-semibold md:text-base lg:text-sm"
          >
            <HomeIcon />
            Home
          </span>
        </NuxtLink>
        <NuxtLink to="/projects">
          <span
            class="flex items-center text-xs px-3 transition-all rounded-md hover:bg-action-back hover:text-green-600 sm:px-6 sm:py-2 md:font-semibold md:text-base lg:text-sm"
          >
            <ProjectsIcon />
            Projects
          </span>
        </NuxtLink>
        <NuxtLink to="/about">
          <span
            class="flex items-center text-xs px-3 transition-all rounded-md hover:bg-action-back hover:text-green-600 sm:px-6 sm:py-2 md:font-semibold md:text-base lg:text-sm"
          >
            <AboutIcon />
            About
          </span>
        </NuxtLink>
        <ChangeLanguage />
      </div>
    </nav>
  </Teleport>
</template>

<script>
import HomeIcon from "./icons/HomeIcon.vue"
import ProjectsIcon from "./icons/ProjectsIcon.vue"
import AboutIcon from "./icons/AboutIcon.vue"
import ChangeLanguage from "./ChangeLanguage.vue"

export default {
  components: {
    HomeIcon,
    ProjectsIcon,
    AboutIcon,
    ChangeLanguage,
  },
}
</script>

<style scoped>
.router-link-active.router-link-exact-active {
  color: rgb(22 163 74);
}
</style>
