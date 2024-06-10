import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useLoadingStatus } from '@/pinia/loadingStatus.js'
import axios from 'axios'

export const useLoadItems = defineStore('loadItems', () => {

  const itemsList = reactive([])
  const searchValue = ref('')
  const sortBy = ref('')

  const filters = [
    { name: 'default', label: 'По умолчанию', value: '' },
    { name: 'title', label: 'По названию', value: 'title' },
    { name: 'price', label: 'По цене (Сначала недорогие)', value: 'price' },
    { name: '-price', label: 'По цене (Подороже)', value: '-price' },
    { name: 'category', label: 'По категории', value: 'category' }
  ]

  const queryParams = {
    sortBy: null,
    title: null,
    id: null,
    _select: null
  }
  const checkQuery = (select) => {
    if (searchValue.value) {
      queryParams.title = `*${searchValue.value}*`
    }
    if (select) {
      queryParams._select = select
    }
    if (sortBy.value) {
      queryParams.sortBy = sortBy.value
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
      setTimeout(() => {
        useLoadingStatus().toggleLoading()
      }, 500)
      queryParams.sortBy = null
      queryParams.title = null
    }
  }

  return { fetchItems, itemsList, queryParams, searchValue, filters, sortBy }
})