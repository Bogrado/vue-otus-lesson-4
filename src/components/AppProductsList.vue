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
  index.dispatch('removeFromCart', item)
  if (index.getters.getCartItemsList.find((el) => el.id === item.id).quantityWTB === 0) {
    item.isAdded = false
  }
}
const decreaseQuantity = (item) => {
  index.dispatch('decreaseQuantity', item)
}
</script>

<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
    <router-link
      v-for="item in ItemsList"
      :key="item.id"
      :to="{
        name: 'product',
        params: {
          id: item.id,
        }
      }"
    >
      <app-card
        :key="item.id" :item="item"
        @on-click-add="addToCart"
        @on-click-remove="removeFromCart"
        @on-click-decrease="decreaseQuantity"
      />
    </router-link>
  </div>
</template>

<style scoped></style>