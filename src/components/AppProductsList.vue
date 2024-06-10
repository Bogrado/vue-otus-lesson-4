<script setup>
import AppCard from '@/components/AppCard.vue'
import { useLoadItems } from '@/pinia/getItems/loadItems.js'

const itemsList = useLoadItems().itemsList

// console.log(items)
</script>

<template>
  <div
    class="grid grid-cols-4 gap-4 mt-10" v-auto-animate="{duration: 500}">
      <AppCard v-for="item in itemsList" :key="item.id" :item="item" />
  </div>
</template>

<style scoped></style>