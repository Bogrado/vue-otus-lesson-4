import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useLoadingStatus } from '@/pinia/loadingStatus.js'
import axios from 'axios'

export const useLoadItems = defineStore('loadItems', () => {

  const itemsList = reactive([])

  const fetchItems = async (place) => {
    useLoadingStatus().toggleLoading()

    try {
      const { data } = await axios.get('https://6452649f4b080307.mokky.dev/items')

      setItems(data, place)

    } catch (error) {
      console.log(error)
    } finally {
      useLoadingStatus().toggleLoading()
    }

  }

  const setItems = (data, place) => {
    place.value = data.map(item => {
      return {
        ...item
      }
    })
  }

  return { fetchItems, itemsList }
})