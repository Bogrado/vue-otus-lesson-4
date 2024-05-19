<script setup>

import { ref } from 'vue'

defineProps({
  searchPlaceholder: {
    type: String
  }
})

defineEmits(['onChangeSearchInput'])

const searchQuery = ref('')

</script>

<template>
  <div class="relative">
    <img class="absolute left-4 top-3" src="../assets/search.svg" alt="search">
    <input
      @input="$emit('onChangeSearchInput', searchQuery)"
      v-model.trim="searchQuery"
      class="border border-gray-200 rounded-md py-1.5 pl-12 pr-4 outline-none focus:border-gray-400"
      type="text" :placeholder="searchPlaceholder">
  </div>
</template>

<style scoped>

</style>