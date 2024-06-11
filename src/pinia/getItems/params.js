import { defineStore } from 'pinia'
import { useSearch } from '@/pinia/getItems/search.js'
import { useSortBy } from '@/pinia/getItems/sortBy.js'
import { computed, ref } from 'vue'

export const useParams = defineStore('params', () => {

  const searchStore = useSearch()
  const searchValue = computed(()=> searchStore.searchValue ? `*${searchStore.searchValue}*` : null)

  const sortByStore = useSortBy()
  const sortByValue = computed(()=> sortByStore.sortByValue)


  const params = ref({
    sortBy: sortByValue,
    title: searchValue,
    _select: 'id,title,price,category,image,rating'
  })
  return { params }
})