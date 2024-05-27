<script setup>
import TheHeader from '@/components/TheHeader.vue'
import AppDrawer from '@/components/AppDrawer.vue'
import { index } from '@/store'
import { computed } from 'vue'

const isDrawerOpen = computed(() => index.getters.isOpen)
const loadingStatus = computed(() => index.getters.getLoading)
const totalPrice = computed(() => index.getters.getTotalPrice)

const changeVisibility = () => {
  index.dispatch('changeVisibility')
}
</script>

<template>
  <app-drawer
    v-if="isDrawerOpen"
    :totalPrice="totalPrice"
  />

  <div class="w-4/5 m-auto bg-white rounded-xl shadow-2xl mt-14">
    <TheHeader
      @open-drawer="changeVisibility"
      :is-drawer-open="isDrawerOpen"
      :totalPrice="totalPrice"
    />

    <div class="p-10">
      <!--      <the-home :loadingStatus="loadingStatus" />-->
      <router-view :loadingStatus="loadingStatus"></router-view>
    </div>
  </div>
</template>
