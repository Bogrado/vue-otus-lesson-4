<script setup>
import AppCard from '@/components/AppCard.vue'
import { useLoadItems } from '@/pinia/loadItems.js'
import { computed } from 'vue'

const items = computed(() => useLoadItems().itemsList.value)

console.log(items)
</script>

<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <AppCard v-for="item in items" :key="item.id" :item="item"/>
  </div>
</template>

<style scoped></style>