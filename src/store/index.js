import { createStore } from 'vuex'
import drawer from '@/store/drawer.js'
import items from '@/store/items.js'

export default createStore({
  modules: {
    drawer,
    items
  }
})