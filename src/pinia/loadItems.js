import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useLoadingStatus } from '@/pinia/loadingStatus.js'
import axios from 'axios'
import { useSearch } from '@/pinia/search.js'
import { useSortBy } from '@/pinia/sortBy.js'

export const useLoadItems = defineStore('loadItems', () => {

  const itemsList = reactive([])

  const queryParams = {
    sortBy: null,
    title: null,
    id: null,
    _select: null
  }
  const checkQuery = (select) => {
    if (useSearch().searchValue) {
      console.log(useSearch().searchValue)
      queryParams.title = `*${useSearch().searchValue}*`
    }
    if (select) {
      queryParams._select = select
    }
    if (useSortBy().sortByValue) {
      queryParams.sortBy = useSortBy().sortByValue
    }
  }

  const checkLength = (place) => {
    if (place.length > 0) {
      place.length = 0
    }
  }
  const setItems = (data, place) => {
    data.forEach(item => place.push(item))
  }
  const fetchItems = async (url, place, select) => {

    useLoadingStatus().toggleLoading()

    try {
      checkQuery(select)
      checkLength(place)

      const { data } = await axios.get(url, { params: queryParams })

      setItems(data, place)

    } catch (error) {
      console.log(error)
    } finally {
      useLoadingStatus().toggleLoading()
      queryParams.sortBy = null
      queryParams.title = null
    }
  }

  return { fetchItems, itemsList, queryParams }
})