<script setup>
import AppCartItem from '@/components/cart/AppCartItem.vue'
import { computed } from 'vue'
import { index } from '@/store/index.js'
import { onAction } from '@/composables/cartInteracting.js'

const cartItems = computed(() => index.getters.getCartItemsList)

</script>

<template>
  <div class="flex flex-col gap-4 justify-between">
    <app-cart-item
      v-for="item in cartItems"
      :key="item.id"
      :item="item"
      @on-click-remove="onAction(item, 'removeFromCart')"
      @on-click-decrease="onAction(item, 'decreaseQuantity')"
      @onClickAdd="onAction(item, 'addToCart')"
      v-auto-animate
    />
  </div>
</template>