<script setup>

import AppCardList from '@/components/AppCardList.vue'
import AppLoader from '@/components/UI/AppPreloader.vue'
import AppSort from '@/components/AppSort.vue'
import { computed, onMounted, watch } from 'vue'
import { index } from '@/store/index.js'

defineProps({
  loadingStatus: {
    type: Boolean,
    default: false
  }
})
const sortBy = computed(() => index.getters.getSortBy)
const filters = computed(() => index.getters.getFilters)

const changeSortBy = (sortBy) => {
  index.dispatch('changeSortBy', sortBy)
  console.log(index.getters.getSortBy)
}

const fetchItems = async () => {
  await index.dispatch('fetchItems')
}

onMounted(() => {
  fetchItems()
})

watch( sortBy ,fetchItems)

</script>

<template>

  <div class="flex justify-between items-center">

    <h2 class="text-3xl font-bold">Товары</h2>

    <div class="flex gap-4">

      <app-sort @change-sort-by="changeSortBy" :filters="filters" :sortBy="sortBy" />

      <div class="relative">
        <img class="absolute left-4 top-3" src="../assets/search.svg" alt="search">
        <input
          class="border border-gray-200 rounded-md py-1.5 pl-12 pr-4 outline-none focus:border-gray-400"
          type="text" placeholder="Поиск...">
      </div>
    </div>

  </div>

  <div class="mt-10">
    <app-card-list v-auto-animate />

    <app-loader v-if="loadingStatus" />
  </div>
</template>

<style scoped>

</style>