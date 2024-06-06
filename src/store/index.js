import { createStore } from 'vuex'
import drawer from '@/store/drawer'
import items from '@/store/items'
import loading from '@/store/loading.js'
import sorting from '@/store/sorting.js'
import search from '@/store/search.js'
import cart from '@/store/cart.js'
import createOrder from '@/store/createOrder.js'
import createItem from '@/store/createItem.js'

export const index = createStore({
  modules: {
    drawer,
    items,
    loading,
    sorting,
    search,
    cart,
    createOrder,
    createItem,
  }
})
