import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSortBy = defineStore('sortBy', () => {
  const sortByValue = ref('')
  const filters = [
    { name: 'default', label: 'По умолчанию', value: '' },
    { name: 'title', label: 'По названию', value: 'title' },
    { name: 'price', label: 'По цене (Сначала недорогие)', value: 'price' },
    { name: '-price', label: 'По цене (Подороже)', value: '-price' },
    { name: 'category', label: 'По категории', value: 'category' }
  ]
  return { sortByValue, filters }
})