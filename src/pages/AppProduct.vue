<script setup>

import { ref } from 'vue'
import { index } from '@/store'
import AppMainHeader from '@/components/UI/base/AppMainHeader.vue'
import AppPreloader from '@/components/UI/AppPreloader.vue'
import AppNav from '@/components/layout/AppNav.vue'
import AppProductRatings from '@/components/layout/AppProductRatings.vue'
import AppProductInfo from '@/components/layout/AppProductInfo.vue'

const { id } = defineProps({
  loadingStatus: {
    type: Boolean,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})

const product = ref({})
const setProduct = () => {
  product.value = index.getters.getItemsList[0]
}
const fetchItem = async () => {
  await index.dispatch('fetchItems', { url: `https://6452649f4b080307.mokky.dev/items/`, itemId: id })
  await setProduct()
}

(async () => {
  await fetchItem()
  await setProduct()
  await console.log(product.value)
})()

const addToCart = (item) => {
  item.isAdded = true
  index.dispatch('addToCart', item)
}
const removeFromCart = (item) => {
  index.dispatch('removeFromCart', item)
  if (index.getters.getCartItemsList.find((el) => el.id === item.id).quantityWTB === 0) {
    item.isAdded = false
  }
}
const decreaseQuantity = (item) => {
  index.dispatch('decreaseQuantity', item)
}

</script>

<template>
  <div>
    <div v-if="loadingStatus">
      <app-preloader />
    </div>
    <div v-if="!loadingStatus">
      <app-nav />
      <!--    <app-product-body :product="product" v-if="!loadingStatus" />-->
      <div class="flex justify-between mt-10 gap-5">
        <div class="flex justify-items-stretch gap-5">
          <div
            class="border border-slate-700 shadow-xl shadow-slate-200 rounded-xl w-1/2 max-w-96 min-w-64 p-4 relative">
            <img :src="product.image" alt="product"
                 class="">
            <app-product-ratings
              class="absolute top-4 right-4"
              :rating="{ rate: product.rating ? product.rating.rate : 0, count: product.rating ? product.rating.count : 0}" />
          </div>

          <div class="flex flex-col gap-2 w-1/2">
            <app-main-header class="text-xl">{{ product.title }}</app-main-header>
            <div class="text-sm flex gap-2">
              <span class="text-slate-400 text-sm"> Категория:</span>
              <span>{{ product.category }}</span>
            </div>
            <span>{{ product.description }}</span>
          </div>
        </div>
        <app-product-info
          :item="product"
          @on-click-add="addToCart"
          @on-click-remove="removeFromCart"
          @on-click-decrease="decreaseQuantity"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>