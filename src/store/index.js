import { createStore } from 'vuex'
import drawer from '@/store/drawer'
import items from '@/store/items'

export const index = createStore({
  modules: {
    drawer,
    items
  }
})