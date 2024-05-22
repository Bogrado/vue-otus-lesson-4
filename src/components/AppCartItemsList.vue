<script setup>
import AppCartItem from '@/components/AppCartItem.vue'
import { computed } from 'vue'
import { index } from '@/store'

const cartItems = computed(() => index.getters.getCartItemsList)
</script>

<template>
  <div class="flex flex-col gap-4 justify-between" v-auto-animate>
    <app-cart-item v-for="item in cartItems" :key="item.id" :item="item" />
  </div>
</template>