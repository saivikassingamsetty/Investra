<template>
  <div class="flex flex-row h-screen">
    <!-- Sidebar -->
    <Sidebar class="transition-all duration-500" />
    <!-- Right section with Toolbar and Dashboard Content -->
    <section class="flex-1 flex flex-col transition-all duration-500 overflow-hidden">
      <Toolbar />
      <DashboardContent />
    </section>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '../components/dashboard/Sidebar.vue'
import DashboardContent from '../components/dashboard/DashboardContent.vue'
import Toolbar from '../components/dashboard/Toolbar.vue'
</script>
