<script setup>

import AppProductsList from '@/components/AppProductsList.vue'
import AppLoader from '@/components/UI/AppPreloader.vue'
import AppSort from '@/components/AppSort.vue'
import AppSearch from '@/components/AppSearch.vue'
import { computed, onMounted, watch } from 'vue'
import debounce from 'lodash.debounce'
import { useLoadItems } from '@/pinia/loadItems.js'

defineProps({
  loadingStatus: {
    type: Boolean,
    default: false
  }
})

const searchValue = computed(() => {
  return useLoadItems().searchValue
})

const findItems = debounce((value) => {
  useLoadItems().searchValue = value
}, 500)

const changeSortBy = (value) => {
  useLoadItems().sortBy = value
}


const fetchItems = async () => {
  await useLoadItems().fetchItems('https://6452649f4b080307.mokky.dev/items', useLoadItems().itemsList, 'id,title,price,category,image,rating')
}

onMounted(() => {
  fetchItems()
})

watch([computed(() => useLoadItems().sortBy), searchValue], fetchItems)

</script>

<template>
  <div
    class="flex justify-between itemsList-center">
    <h2 class="text-3xl font-bold">Товары</h2>

    <div class="flex gap-4">
      <app-sort @change-sort-by="changeSortBy" :filters="useLoadItems().filters" :sortBy="useLoadItems().sortBy" />

      <app-search @on-change-search-input="findItems" />
    </div>
  </div>

  <div class="mt-10">
    <div class="min-h-screen">
      <app-products-list/>
    </div>

    <app-loader v-if="loadingStatus" />

  </div>
</template>

<style scoped></style>
