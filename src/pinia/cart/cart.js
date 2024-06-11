import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {

  const cartState = reactive({
    inCart: {}
  })

  const cartItemsList = reactive([])


  const addToCart = (id, count) => {
    const item = cartState.inCart[id]

    if (!item) {
      cartState.inCart[id] = count
    } else {
      cartState.inCart[id] += count
    }
  }

  const idsInCart = computed(() => {
    return Object.keys(cartState.inCart)
  })

  // const removeFromCart = (item) => {
  //   cartItems.splice(cartItems.indexOf(item), 1)
  // }

  return { addToCart, idsInCart, cartState, cartItemsList }
})