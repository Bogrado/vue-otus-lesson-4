<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheHome from '@/Page/TheHome.vue'
import AppDrawer from '@/components/AppDrawer.vue'
import { useDrawerStore } from '@/pinia/drawer.js'
import { useLoadingStatus } from '@/pinia/loadingStatus.js'


const drawerStore = useDrawerStore()
const loadingStatus = useLoadingStatus()

// const loadingStatus = computed(() => index.getters.getLoading)

const toggleDrawer = () => {
  drawerStore.toggleDrawer()
}
</script>

<template>
  <app-drawer v-if="drawerStore.isOpen" />

  <div class="w-4/5 m-auto bg-white rounded-xl shadow-2xl mt-14">
    <TheHeader @open-drawer="toggleDrawer" :is-drawer-open="drawerStore.isOpen" />

    <div class="p-10">
      <the-home :loadingStatus="loadingStatus.loading" />
    </div>
  </div>
</template>
