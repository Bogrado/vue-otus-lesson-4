<script setup>

import TheHeader from '@/components/TheHeader.vue'
import TheHome from '@/Page/TheHome.vue'
import AppDrawer from '@/components/AppDrawer.vue'
import { index }  from '@/store'
import { computed } from 'vue'
import { onMounted } from 'vue'

const isDrawerOpen = computed(() => index.getters.isOpen)

const loadingStatus = computed(() => index.getters.getLoading)

const changeVisibility = () => {
  index.commit('changeVisibility')
}

const fetchItems = async () => {
  await index.dispatch('fetchItems')
}

onMounted(() => {
  fetchItems()
})

</script>

<template>

  <app-drawer
    v-if="isDrawerOpen"
  />

  <div class="w-4/5 m-auto bg-white rounded-xl shadow-2xl mt-14">

    <TheHeader
      @open-drawer="changeVisibility"
      :is-drawer-open="isDrawerOpen"
    />

    <div class="p-10">
      <the-home :loadingStatus="loadingStatus"/>
    </div>

  </div>

</template>

