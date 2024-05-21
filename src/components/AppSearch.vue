<script setup>
import { ref } from 'vue'
import SvgSearch from '@/components/UI/svg/SvgSearch.vue'

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
    <svg-search class="absolute left-4 top-3" />
    <input
      @input="$emit('onChangeSearchInput', searchQuery)"
      v-model.trim="searchQuery"
      class="border border-gray-200 rounded-md py-1.5 pl-12 pr-4 outline-none focus:border-gray-400"
      type="text"
      :placeholder="searchPlaceholder"
    />
  </div>
</template>

<style scoped></style>
