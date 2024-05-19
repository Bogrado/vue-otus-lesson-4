<script setup>
import AppCard from '@/components/AppCard.vue'
import { computed } from 'vue'
import { index } from '@/store'

const getItemsList = computed(() => index.getters.getItemsList)
</script>

<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <AppCard v-for="item in getItemsList" :key="item.id" :item="item" />
  </div>
</template>

<style scoped></style>
