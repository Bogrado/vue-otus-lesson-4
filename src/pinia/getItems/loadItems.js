import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useLoadingStatus } from '@/pinia/getItems/loadingStatus.js'
import axios from 'axios'
import { useParams } from '@/pinia/getItems/params.js'

export const useLoadItems = defineStore('loadItems', () => {

  const itemsList = reactive([])

  const queryParams = {
    sortBy: null,
    title: null,
    id: null,
    _select: null
  }

  const deleteItems = (place) => {
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

      useParams().checkQuery(select)
      deleteItems(place)

      const { data } = await axios.get(url, { params: useParams().params })

      setItems(data, place)

    } catch (error) {
      console.log(error)
    } finally {
      useLoadingStatus().toggleLoading()
      useParams().clearParams(useParams().params)
    }
  }

  return { fetchItems, itemsList, queryParams }
})