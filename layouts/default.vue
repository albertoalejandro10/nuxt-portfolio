<template>
  <div class="w-full">
    <AppNavBar />
    <div
      class="max-w-screen-lg w-full mt-10 mb-20 px-8 mx-auto pb-24 sm:mt-28 sm:px-16 slg:px-24 lg:mt-48"
    >
      <slot />
    </div>
    <AppFooter v-if="showFooter" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFooter: true,
    }
  },
  methods: {
    toggleFooter() {
      this.showFooter = !this.showFooter
      this.$emit("toggle-footer", this.showFooter)
    },
  },
}
</script>
