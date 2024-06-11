<script setup>

import AppProductsList from '@/components/items/AppProductsList.vue'
import AppLoader from '@/components/UI/AppPreloader.vue'
import AppSort from '@/components/items/AppSort.vue'
import AppSearch from '@/components/items/AppSearch.vue'
import { computed, onMounted, ref, watch } from 'vue'
import debounce from 'lodash.debounce'
import { useLoadItems } from '@/pinia/getItems/loadedItems.js'
import { useSearch } from '@/pinia/getItems/search.js'
import { useSortBy } from '@/pinia/getItems/sortBy.js'
import { useParams } from '@/pinia/getItems/params.js'
import { useCartStore } from '@/pinia/cart/cart.js'

defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})

const itemsStore = useLoadItems()
const cartStore = useCartStore()
const searchStore = useSearch()
const sortByStore = useSortBy()
const paramsStore = useParams()

const items = computed(() => {
  return itemsStore.itemsList
})

const searchValue = computed(() => {
  return searchStore.searchValue
})

const sortByValue = computed(() => {
  return sortByStore.sortByValue
})

const itemIds123 = computed(() => {
  return cartStore.idsInCart
})

const findItems = debounce((value) => {
  searchStore.searchValue = value
}, 500)

const changeSortBy = (value) => {
  sortByStore.sortByValue = value
}

const params = ref({
  id: itemIds123,
  _select: 'id,title,price,image'
})

const fetchItems = async () => {
  await itemsStore.fetchItems('https://6f8022cf47b3f024.mokky.dev/items', itemsStore.itemsList, paramsStore.params)
}

const fetchCartItems = async () => {
  await itemsStore.fetchItems('https://6f8022cf47b3f024.mokky.dev/items', cartStore.cartItemsList, params.value)
}

onMounted(() => {
  fetchItems()
})

watch([sortByValue, searchValue], fetchItems)
watch([itemIds123], fetchCartItems)

</script>

<template>
  <div
    class="flex justify-between itemsList-center">
    <h2 class="text-3xl font-bold">Товары</h2>

    <div class="flex gap-4">
      <app-sort @change-sort-by="changeSortBy" :filters="sortByStore.filters" :sortBy="sortByStore.sortByValue" />

      <app-search @on-change-search-input="findItems" />
    </div>
  </div>

  <div class="mt-10">
    <div class="min-h-screen">
      <app-products-list :items="items" />
    </div>

    <app-loader v-if="loading" />

  </div>
</template>

<style scoped></style>
