<script setup>

import { onBeforeMount, onMounted, ref } from 'vue'
import { index } from '@/store'
import AppMainHeader from '@/components/UI/base/AppMainHeader.vue'
import AppPreloader from '@/components/UI/AppPreloader.vue'
import AppProductBody from '@/components/layout/AppProductBody.vue'

const { id } = defineProps({
  loadingStatus: {
    type: Boolean,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  // price: {
  //   type: String,
  //   required: true
  // }
})

const product = ref({})
const setProduct = () => {
  product.value = index.getters.getItemsList[0]
}
const fetchItem = async () => {
  await index.dispatch('fetchItems', { url: `https://6452649f4b080307.mokky.dev/items/`, itemId: id } )
  await setProduct()
}

(async () => {
  console.log(1)
  await fetchItem()
  await setProduct()
})()
</script>

<template>
  <div v-if="loadingStatus">
    <app-preloader />
  </div>
  <div v-if="!loadingStatus">
    <app-main-header>{{ product.title }}</app-main-header>
    <!--    <app-product-body :product="product" v-if="!loadingStatus" />-->
    <h1>hello</h1>
  </div>
</template>

<style scoped>
</style>