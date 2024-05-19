import { createStore } from 'vuex'
import drawer from '@/store/drawer'
import items from '@/store/items'
import loading from '@/store/loading.js'
import sorting from '@/store/sorting.js'
import search from '@/store/search.js'

export const index = createStore({
  modules: {
    drawer,
    items,
    loading,
    sorting,
    search
  }
})