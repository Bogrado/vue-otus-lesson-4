<script setup>
import AppDrawerHead from '@/components/cart/AppDrawerHead.vue'
import { useDrawerStore } from '@/pinia/drawer.js'
import AppCartProductsList from '@/components/cart/AppCartProductsList.vue'


const drawerStore = useDrawerStore()
const closeDrawer = () => {
  drawerStore.toggleDrawer()
}
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70" @click="closeDrawer"></div>
  <div class="bg-gray-100 w-96 h-full fixed right-0 top-0 z-20 p-10">
    <app-drawer-head @close-drawer="closeDrawer" />

    <app-cart-products-list />

    <div class="flex flex-col gap-4 mt-7">
      <div class="flex gap-2">
        <span>Итого:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>20000 руб.</b>
      </div>
      <div class="flex gap-2">
        <span>На пиво 5%:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>процент руб.</b>
      </div>

      <button
        class="mt-4 bg-gray-800 w-full rounded-2xl py-3 text-white hover:bg-gray-600 transition active:bg-lime-700 disabled:bg-slate-300 cursor-pointer"
      >
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<style scoped></style>
