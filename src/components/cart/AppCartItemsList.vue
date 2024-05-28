<script setup>
import AppCartItem from '@/components/cart/AppCartItem.vue'
import { computed } from 'vue'
import { index } from '@/store/index.js'

const cartItems = computed(() => index.getters.getCartItemsList)

const removeFromCart = (item) => {
  index.dispatch('removeFromCart', item)
  console.log(index.getters.getItemsList)
}
</script>

<template>
  <div class="flex flex-col gap-4 justify-between">
    <app-cart-item
      v-for="item in cartItems"
      :key="item.id"
      :item="item"
      @on-click-remove="removeFromCart"
      v-auto-animate
    />
  </div>
</template>