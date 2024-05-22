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
</script>

<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <AppCard
      v-for="item in ItemsList" :key="item.id" :item="item"
      @on-click-add="addToCart"
      @on-click-remove="removeFromCart"
    />
  </div>
</template>

<style scoped></style>