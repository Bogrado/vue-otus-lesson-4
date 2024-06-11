<script setup>
import AppCard from '@/components/items/AppCard.vue'

defineProps({
  items: {
    type: Array,
    required: false
  }
})

</script>

<template>
  <div class="grid grid-cols-4 gap-4 mt-10" v-auto-animate="{duration: 500}">
    <AppCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<style scoped></style>