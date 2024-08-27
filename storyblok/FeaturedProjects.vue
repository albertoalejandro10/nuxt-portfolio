<script setup>
import { format } from "@formkit/tempo"

import GitHubIcon from "@/components/icons/GitHubIcon.vue"
import InternetIcon from "@/components/icons/InternetIcon.vue"
import ArrowRightIcon from "@/components/icons/ArrowRightIcon.vue"

defineProps({
  blok: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const { t, locale } = useI18n()
const formatDate = (date) => {
  // Formatear la fecha en función del idioma actual
  const localeMapping = {
    en: "en-US",
    es: "es-ES",
  }

  const currentLocale = localeMapping[locale.value] || "en-US"
  return format(date, "MMMM D, YYYY", currentLocale)
}

const description = computed(() => t("FeaturedProjects.description"))
</script>

<template>
  <div v-editable="blok">
    <!-- Featured projects -->
    <div class="flex flex-col gap-2 lg:gap-2">
      <h2 class="text-xl md:text-2xl lg:text-4xl text-head_text">
        {{ blok.title }}
      </h2>
      <p>{{ blok.subtitle }}</p>
      <div
        v-if="blok.projects?.length"
        class="grid grid-cols-1 pt-8 mx-auto lg:grid-cols-2 gap-7 sm:gap-4 sm:w-5/6 lg:w-full"
      >
        <div
          v-for="{ uuid, content } in blok.projects"
          :key="uuid"
          class="flex flex-col justify-between gap-4 lg:gap-5 overflow-hidden p-4 sm:p-6 lg:p-8 [background:linear-gradient(#161616,#161616)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.green.900/.48)_80%,_theme(colors.green.800)_86%,_theme(colors.green.700)_90%,_theme(colors.green.800)_94%,_theme(colors.green.900/.48))_border-box] rounded-md border border-transparent animate-border"
        >
          <div class="flex flex-col gap-1">
            <h2 class="text-base text-head_text lg:text-lg">
              {{ content.name }}
            </h2>
            <div class="flex flex-row flex-wrap gap-y-2 gap-x-1">
              <NuxtPicture
                v-for="{ alt, filename } in content.icons"
                :key="filename"
                provider="storyblok"
                width="24"
                height="24"
                :src="filename"
                :alt="alt"
              />
            </div>
          </div>
          <div
            class="flex flex-col gap-2 xs:flex-row xs:justify-between xs:gap-4 lg:gap-5"
          >
            <dl class="flex">
              <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium">{{ content.isPublished }}</dt>
                <dd class="text-xs text-gray-500 date">
                  {{ formatDate(content.publishedDate) }}
                </dd>
              </div>
            </dl>
            <div class="flex gap-x-1">
              <a
                :href="content.buttons[0].link.cached_url"
                class="flex items-center border-[1px] border-link_border px-1 py-1 rounded text-btn_text text-sm hover:bg-border_sm transition-colors md:px-2 w-fit"
              >
                <GitHubIcon class="w-5 h-5" />
              </a>
              <a
                v-if="content.buttons[1]"
                :href="content.buttons[1].link.cached_url"
                class="flex items-center border-[1px] border-link_border px-1 py-1 rounded text-btn_text text-sm hover:bg-border_sm transition-colors md:px-2 w-fit"
              >
                <InternetIcon class="w-5 h-5" />
              </a>
              <NuxtLink
                :to="localePath('/projects')"
                class="flex items-center border-[1px] border-link_border px-1 py-1 rounded text-btn_text text-sm hover:bg-border_sm transition-colors md:px-2 w-fit"
              >
                {{ description }} <ArrowRightIcon class="ml-[0.5px] w-5 h-5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.date {
  text-transform: capitalize;
}

@property --border-angle {
  inherits: false;
  initial-value: 0deg;
  syntax: "<angle>";
}
</style>
