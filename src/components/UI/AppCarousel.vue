<script setup>

import { index } from '@/store/index.js'
import { onAction } from '@/composables/cartInteracting.js'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { defineComponent } from 'vue'

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

defineComponent({
  name: 'AppProduct',
  components: {
    // Pagination,
    Carousel,
    Slide,
    Navigation
  }
})
</script>

<template>
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
</template>

<style scoped>

</style>