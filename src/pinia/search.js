import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearch = defineStore('search', () => {
  const searchQuery = ref('')
  return { searchQuery }
})