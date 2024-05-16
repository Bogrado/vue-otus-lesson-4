<script setup>

import AppCardList from '@/components/AppCardList.vue'
</script>

<template>
  <div class="flex justify-between items-center">

    <h2 class="text-3xl font-bold">Товары</h2>

    <div class="flex gap-4">
      <select
        class="py-1.5 px-3 border border-gray-200 rounded-md outline-none focus:border-gray-400">
        <option value="name">По названию</option>
        <option value="price">По цене (Сначала недорогие)</option>
        <option value="-price">По цене (Подороже)</option>
      </select>

      <div class="relative">
        <img class="absolute left-4 top-3" src="../assets/search.svg" alt="search">
        <input
          class="border border-gray-200 rounded-md py-1.5 pl-12 pr-4 outline-none focus:border-gray-400"
          type="text" placeholder="Поиск...">
      </div>
    </div>

  </div>

  <div class="mt-10">
    <app-card-list v-auto-animate/>
  </div>
</template>

<style scoped>

</style>