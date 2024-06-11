import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {

  const cartStore = useCartStore()

  const queryParams = computed(() => cartStore.idsInCart)

  const cartParams = ref({
    id: queryParams
  })

  return { cartParams, queryParams }
})
