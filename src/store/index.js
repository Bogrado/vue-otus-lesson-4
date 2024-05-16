import { createStore } from 'vuex'
import drawer from '@/store/drawer'
import items from '@/store/items'
import loading from '@/store/loading.js'

export const index = createStore({
  modules: {
    drawer,
    items,
    loading
  }
})