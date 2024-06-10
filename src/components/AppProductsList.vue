<script setup>
import AppCard from '@/components/AppCard.vue'
import { useLoadItems } from '@/pinia/loadItems.js'

const catalog = useLoadItems()

// console.log(items)
</script>

<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <AppCard v-for="item in catalog.itemsList" :key="item.id" :item="item"/>
  </div>
</template>

<style scoped></style>