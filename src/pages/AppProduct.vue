<script setup>

import { computed } from 'vue'
import { index } from '@/store'
import AppMainHeader from '@/components/UI/base/AppMainHeader.vue'

const { id } = defineProps({
  loadingStatus: {
    type: Boolean,
    required: false
  },
  id: {
    type: String,
    required: false
  }
})

const product = computed(() => index.getters.getItemById(parseInt(id)))

</script>

<template>
  <app-main-header>{{ product.title }}</app-main-header>
<div>
  {{ product }}
</div>
</template>

<style scoped>
</style>