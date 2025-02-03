<template>
  <div class="flex flex-row">
    <Sidebar :is-open="isSidebarOpen" class="transition-all duration-500" />
    <DashboardContent class="flex-1 transition-all duration-500" />
  </div>
</template>

<script setup lang="ts">
import Sidebar from '../components/dashboard/Sidebar.vue'
import DashboardContent from '../components/dashboard/DashboardContent.vue'
import { useDashboardStore } from '@/stores/dashboard/dashboardStore'
import { storeToRefs } from 'pinia'

const dashboardStore = useDashboardStore()
const { isSidebarOpen } = storeToRefs(dashboardStore)
</script>
