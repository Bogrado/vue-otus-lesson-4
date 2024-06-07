<script setup>

import {  defineComponent, ref } from 'vue'
import { index } from '@/store'
import AppMainHeader from '@/components/UI/base/AppMainHeader.vue'
import AppPreloader from '@/components/UI/AppPreloader.vue'
import AppNav from '@/components/layout/AppNav.vue'
import AppProductRatings from '@/components/layout/AppProductRatings.vue'
import AppProductInfo from '@/components/layout/AppProductInfo.vue'
import { onAction } from '@/composables/cartInteracting'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import AppCard from '@/components/AppCard.vue'

defineComponent({
  name: 'AppProduct',
  components: {
    // Pagination,
    Carousel,
    Slide,
    Navigation
  }
})

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
const category = ref('')
const product = ref({})

const settings = {
  itemsToShow: 1,
  snapAlign: 'center'
}

const breakpoints = {
  700: {
    itemsToShow: 2,
    snapAlign: 'center'
  },
  1024: {
    itemsToShow: 3,
    snapAlign: 'start'
  }
}
const setProduct = () => {
  product.value = index.getters.getItem[0]
  category.value = index.getters.getItem[0].category
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
          @on-click-add="onAction(product, 'addToCart')"
          @on-click-remove="onAction(product, 'removeFromCart')"
          @on-click-decrease="onAction(product, 'decreaseQuantity')"
        />
      </div>
      <div class="mt-10">

        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide
            v-for="item in index.getters.getItemsList.filter(el => el.category === category)"
            :key="item.id"
            class="max-w-64"
          >
            <app-card
              :item="item" @on-click-add="onAction(item, 'addToCart')"
              @on-click-remove="onAction(item, 'removeFromCart')"
              @on-click-decrease="onAction(item, 'decreaseQuantity')"
            />
          </Slide>

          <template #addons>
            <Navigation />
          </template>

        </Carousel>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>