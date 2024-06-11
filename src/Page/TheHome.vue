<script setup>

import AppProductsList from '@/components/items/AppProductsList.vue'
import AppLoader from '@/components/UI/AppPreloader.vue'
import AppSort from '@/components/items/AppSort.vue'
import AppSearch from '@/components/items/AppSearch.vue'
import { computed, onMounted, watch } from 'vue'
import debounce from 'lodash.debounce'
import { useLoadItems } from '@/pinia/getItems/loadedItems.js'
import { useSearch } from '@/pinia/getItems/search.js'
import { useSortBy } from '@/pinia/getItems/sortBy.js'

defineProps({
  loadingStatus: {
    type: Boolean,
    default: false
  }
})

const items = computed(() => {
  return useLoadItems().itemsList
})

const searchValue = computed(() => {
  return useSearch().searchValue
})

const findItems = debounce((value) => {
  useSearch().searchValue = value
}, 500)

const changeSortBy = (value) => {
  useSortBy().sortByValue = value
}


const fetchItems = async () => {
  await useLoadItems().fetchItems('https://6f8022cf47b3f024.mokky.dev/items', useLoadItems().itemsList, 'id,title,price,category,image,rating')
}

onMounted(() => {
  fetchItems()
})

watch([computed(() => useSortBy().sortByValue), searchValue], fetchItems)

</script>

<template>
  <div
    class="flex justify-between itemsList-center">
    <h2 class="text-3xl font-bold">Товары</h2>

    <div class="flex gap-4">
      <app-sort @change-sort-by="changeSortBy" :filters="useSortBy().filters" :sortBy="useSortBy().sortByValue" />

      <app-search @on-change-search-input="findItems" />
    </div>
  </div>

  <div class="mt-10">
    <div class="min-h-screen">
      <app-products-list
        class="grid grid-cols-4 gap-4 mt-10"
        :items="items"
      />
    </div>

    <app-loader v-if="loadingStatus" />

  </div>
</template>

<style scoped></style>
