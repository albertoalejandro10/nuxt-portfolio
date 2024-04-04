<script setup>
import { ref, computed, onMounted } from "vue"
import AcceptIcon from "./icons/AcceptIcon.vue"
import RejectIcon from "./icons/RejectIcon.vue"

const { t } = useI18n()
const description = computed(() => t("AppConsentGranted.consentMessage"))
const acceptButton = computed(() => t("AppConsentGranted.acceptButton"))
const rejectButton = computed(() => t("AppConsentGranted.rejectButton"))

const show = ref(false)
const reject = () => {
  show.value = false
  localStorage.setItem("userConsent", "rejected")
}

const { initialize } = useGtag()
const acceptTracking = () => {
  show.value = false
  initialize(process.env.NUXT_PUBLIC_GTAG_ID)
  localStorage.setItem("userConsent", "accepted")
}

onMounted(() => {
  show.value = true
  const userConsent = localStorage.getItem("userConsent")
  if (userConsent === "accepted" || userConsent === "rejected") {
    show.value = false
  }
})
</script>

<template>
  <div
    v-if="show"
    class="bg-background rounded shadow-sm drop-shadow z-50 border-t-4 border-green-500 fixed inset-x-0 bottom-4 p-3 w-5/6 m-auto md:w-2/4 lg:w-1/3 xl:w-96 xl:right-4 xl:left-auto"
  >
    <div class="flex items-center justify-center gap-2 xl:gap-4">
      <NuxtImg
        src="/google-analytics.png"
        alt="google-analytics-logo"
        class="flex-none self-center w-14 md:w-24"
      />
      <div class="flex-1">
        <p
          class="text-xs text-p_text leading-2 tracking-tight xl:leading-5 xl:tracking-wide"
        >
          {{ description }}
        </p>
        <div class="flex justify-center mt-2 md:justify-end">
          <button
            class="bg-blue-500 hover:bg-blue-700 flex items-center text-btn_text px-3 py-1 text-sm font-medium rounded-l-md"
            aria-label="Accept Tracking"
            @click="acceptTracking()"
          >
            <AcceptIcon class="mr-1" /> {{ acceptButton }}
          </button>
          <button
            class="bg-red-500 hover:bg-red-700 flex items-center text-btn_text px-3 py-1 text-sm font-medium rounded-r-md"
            aria-label="Reject"
            @click="reject"
          >
            <RejectIcon class="mr-1" /> {{ rejectButton }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
