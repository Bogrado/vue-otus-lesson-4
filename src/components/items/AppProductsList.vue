<script setup>
import AppCard from '@/components/items/AppCard.vue'
import { useCartStore } from '@/pinia/cart/cart.js'
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    required: false
  }
})
const count = ref(1)
const cartStore = useCartStore()

const add = (id) => {
  cartStore.addToCart(id, +count.value)
  count.value = 1
}

</script>

<template>
  <div class="grid grid-cols-4 gap-4 mt-10" v-auto-animate="{duration: 500}">
    <AppCard v-for="item in items" :key="item.id" :item="item" @on-click-add="add" />
  </div>
</template>

<style scoped></style>