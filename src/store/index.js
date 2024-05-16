import { createStore } from 'vuex'
import drawer from '@/store/drawer'

export const index = createStore({
  modules: {
    drawer
  }
})