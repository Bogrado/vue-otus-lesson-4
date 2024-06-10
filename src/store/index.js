import { createStore } from 'vuex'
import items from '@/store/items'
import sorting from '@/store/sorting.js'
import search from '@/store/search.js'

export const index = createStore({
  modules: {
    items,
    search,
    sorting,

  }
})
