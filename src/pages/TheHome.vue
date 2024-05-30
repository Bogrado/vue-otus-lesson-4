<script setup>

import AppProductsList from '@/components/AppProductsList.vue'
import AppLoader from '@/components/UI/AppPreloader.vue'
import AppSort from '@/components/AppSort.vue'
import AppSearch from '@/components/AppSearch.vue'
import { computed, onMounted, watch } from 'vue'
import { index } from '@/store'
import debounce from 'lodash.debounce'
import AppMainHeader from '@/components/UI/base/AppMainHeader.vue'
import {vAutoAnimate} from '@formkit/auto-animate'

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
    <app-main-header>Товары</app-main-header>

    <div class="flex gap-4">
      <app-sort @change-sort-by="changeSortBy" :filters="filters" :sortBy="sortBy" />

      <app-search :searchPlaceholder="searchPlaceholder" @onChangeSearchInput="searchItem" />
    </div>
  </div>

  <div class="mt-10">
    <app-products-list v-auto-animate />

    <app-loader v-if="loadingStatus" />
  </div>
</template>

<style scoped></style>
