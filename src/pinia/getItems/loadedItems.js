import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useLoadingStatus } from '@/pinia/getItems/loadingStatus.js'
import axios from 'axios'

export const useLoadItems = defineStore('loadItems', () => {

  const itemsList = reactive([])


  const deleteItems = (state) => {
    if (state.length > 0) {
      state.length = 0
    }
  }
  const setItems = (data, state) => {
    data.forEach(item => state.push(item))
  }
  const fetchItems = async (url, state, params) => {

    useLoadingStatus().toggleLoading()

    try {

      deleteItems(state)

      const { data } = await axios.get(url, { params: params })

      setItems(data, state)

    } catch (error) {

      console.log(error)

    } finally {
      useLoadingStatus().toggleLoading()
    }
  }

  return { fetchItems, itemsList }
})