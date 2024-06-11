<script setup>
import AppCartItem from '@/components/cart/AppCartItem.vue'
import { useCartStore } from '@/pinia/cart/cart.js'

const cartStore = useCartStore()

</script>


<template>
  <div class="flex flex-col gap-4 justify-between">
    <app-cart-item
      v-for="itemId in cartStore.idsInCart"
      :key="itemId"
      :itemId="itemId"
      :quantity="cartStore.cartState.inCart[itemId]" />
  </div>
</template>

<!--v-for="item in cartItems"-->
<!--:key="item.id"-->
<!--:item="item"-->
<!--@on-click-remove="onAction(item, 'removeFromCart')"-->
<!--@on-click-decrease="onAction(item, 'decreaseQuantity')"-->
<!--@onClickAdd="onAction(item, 'addToCart')"-->
<!--v-auto-animate-->