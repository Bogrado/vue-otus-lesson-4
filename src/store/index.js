import { createStore } from 'vuex'
import sorting from '@/store/sorting.js'
import search from '@/store/search.js'

export const index = createStore({
  modules: {
    search,
    sorting,

  }
})
