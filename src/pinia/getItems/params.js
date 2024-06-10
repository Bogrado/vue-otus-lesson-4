import { defineStore } from 'pinia'
import { useSearch } from '@/pinia/getItems/search.js'
import { useSortBy } from '@/pinia/getItems/sortBy.js'
import { ref } from 'vue'

export const useParams = defineStore('params', () => {
  const params = ref({
    sortBy: null,
    title: null,
    id: null,
    _select: null
  })

  const checkQuery = (select) => {
    if (useSearch().searchValue) {
      params.value.title = `*${useSearch().searchValue}*`
    }
    if (select) {
      params.value._select = select
    }
    if (useSortBy().sortByValue) {
      params.value.sortBy = useSortBy().sortByValue
    }
  }
  const clearParams = (object) => {
    for (let key in object) {
      object[key] = null
    }
  }
  return { params, checkQuery, clearParams }
})