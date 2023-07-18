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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-home hidden md:block"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
            Home
          </span>
        </NuxtLink>
        <NuxtLink to="/projects">
          <span
            class="flex items-center text-xs px-3 transition-all rounded-md hover:bg-action-back hover:text-green-600 sm:px-6 sm:py-2 md:font-semibold md:text-base lg:text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-checklist hidden md:block"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"
              />
              <path d="M14 19l2 2l4 -4" />
              <path d="M9 8h4" />
              <path d="M9 12h2" />
            </svg>
            Projects
          </span>
        </NuxtLink>
        <NuxtLink to="/about">
          <span
            class="flex items-center text-xs px-3 transition-all rounded-md hover:bg-action-back hover:text-green-600 sm:px-6 sm:py-2 md:font-semibold md:text-base lg:text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-user-question hidden md:block"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
              <path d="M19 22v.01" />
              <path
                d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"
              />
            </svg>
            About
          </span>
        </NuxtLink>
      </div>
    </nav>
  </Teleport>
</template>

<style scoped>
.router-link-active.router-link-exact-active {
  color: rgb(22 163 74);
}
</style>
