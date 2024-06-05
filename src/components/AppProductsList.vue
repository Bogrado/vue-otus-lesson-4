<script setup>
import AppCard from '@/components/AppCard.vue'
import { computed } from 'vue'
import { index } from '@/store'

const ItemsList = computed(() => index.getters.getItemsList)

const addToCart = (item) => {
  item.isAdded = true
  index.dispatch('addToCart', item)
}
const removeFromCart = (item) => {
  item.isAdded = false
  index.dispatch('removeFromCart', item)
}

const searchProduct = (item) => {
  index.dispatch('searchProduct', item)
}
</script>

<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <router-link
      @click="searchProduct(item)"
      :to=" { name: 'product', params: { id: item.id, price: item.price } }"
      v-for="item in ItemsList" :key="item.id" :item="item"
    >
      <app-card
        :key="item.id" :item="item"
        @on-click-add="addToCart"
        @on-click-remove="removeFromCart"
      ></app-card>
    </router-link>
  </div>
</template>

<style scoped></style>