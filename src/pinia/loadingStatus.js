import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoadingStatus = defineStore('loadingStatus', () => {
  const loading = ref(false)
  const toggleLoading = () => {
    loading.value = !loading.value
  }
  return { loading, toggleLoading }
})