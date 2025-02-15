<template>
  <div class="m-5">
    <button @click="toggleSidebar"><font-awesome-icon :icon="['fas', 'bars']" /></button>
  </div>
  <div class="h-lvh w-full flex justify-center items-center text-3xl font-extrabold italic">
    Welcome To Your Dashboard
  </div>
</template>

<script setup lang="ts">
import { useDashboardStore } from '@/stores/dashboard/dashboardStore'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const dashboardStore = useDashboardStore()

const toggleSidebar = () => {
  dashboardStore.toggleSidebar()
}
</script>
