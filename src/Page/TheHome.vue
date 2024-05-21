<script setup>
import AppCardList from '@/components/AppCardList.vue'
import AppLoader from '@/components/UI/AppPreloader.vue'
import AppSort from '@/components/AppSort.vue'
import { computed, onMounted, watch } from 'vue'
import { index } from '@/store/index.js'
import AppSearch from '@/components/AppSearch.vue'
import debounce from 'lodash.debounce'

defineProps({
  loadingStatus: {
    type: Boolean,
    default: false
  }
})

const sortBy = computed(() => index.getters.getSortBy)
const filters = computed(() => index.getters.getFilters)
const searchPlaceholder = computed(() => index.getters.getPlaceholder)
const searchValue = computed(() => index.getters.getSearchValue)

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

const searchItem = debounce((searchValue) => {
  index.dispatch('setSearchValue', searchValue)
}, 500)

watch([sortBy, searchValue], fetchItems)
</script>

<template>
  <div class="flex justify-between items-center">
    <h2 class="text-3xl font-bold">Товары</h2>

    <div class="flex gap-4">
      <app-sort @change-sort-by="changeSortBy" :filters="filters" :sortBy="sortBy" />

      <app-search :searchPlaceholder="searchPlaceholder" @onChangeSearchInput="searchItem" />
    </div>
  </div>

  <div class="mt-10">
    <app-card-list v-auto-animate />

    <app-loader v-if="loadingStatus" />
  </div>
</template>

<style scoped></style>
