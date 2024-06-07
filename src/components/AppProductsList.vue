<script setup>
import AppCard from '@/components/AppCard.vue'
import { computed } from 'vue'
import { index } from '@/store'
import { onAction } from '@/composables/cartInteracting'

const ItemsList = computed(() => index.getters.getItemsList)

</script>

<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">

      <app-card
        v-for="item in ItemsList"
        :key="item.id" :item="item"
        @on-click-add="onAction(item, 'addToCart')"
        @on-click-remove="onAction(item, 'removeFromCart')"
        @on-click-decrease="onAction(item, 'decreaseQuantity')"
      />
  </div>
</template>

<style scoped></style>