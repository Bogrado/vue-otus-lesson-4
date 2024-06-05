<script setup>

import { computed, onMounted } from 'vue'
import { index } from '@/store'
import AppMainHeader from '@/components/UI/base/AppMainHeader.vue'
import AppPreloader from '@/components/UI/AppPreloader.vue'

const { id, price } = defineProps({
  loadingStatus: {
    type: Boolean,
    required: false
  },
  id: {
    type: String,
    required: false
  },
  price: {
    type: String,
    required: false
  }
})

onMounted(() => {
  index.dispatch('searchProduct', { id, price })
})

const product = computed(() => index.getters.getSearchedProduct)

</script>

<template>
  <div v-if="loadingStatus">
    <app-preloader />
  </div>
  <div v-else>
    <app-main-header>{{ product.title }}</app-main-header>
    <div>
      {{ product }}
    </div>
  </div>
</template>

<style scoped>
</style>