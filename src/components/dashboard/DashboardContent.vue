<template>
  <div class="m-5">
    <button @click="toggleSidebar"><font-awesome-icon :icon="['fas', 'bars']" /></button>
  </div>
  <div class="h-lvh flex justify-center items-center text-3xl font-extrabold italic">
    Welcome To Your Dashboard
  </div>
</template>

<script setup lang="ts">
import { useDashboardStore } from '@/stores/dashboard/dashboardStore'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { storeToRefs } from 'pinia'

const dashboardStore = useDashboardStore()
const { isSidebarOpen } = storeToRefs(dashboardStore)

const toggleSidebar = () => {
  dashboardStore.toggleSidebar()
}
</script>
