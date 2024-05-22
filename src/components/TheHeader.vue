<script setup>
import SvgCart from '@/components/UI/svg/SvgCart.vue'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  }
})

const emits = defineEmits(['openDrawer'])

const OpenDrawer = () => {
  if (!props.isDrawerOpen) emits('openDrawer')
}
</script>

<template>
  <header
    class="px-10 py-8 top-0 z-20 flex items-center justify-between p-3 border-b bg-gray-800 border-gray-200 rounded-t-xl"
  >
    <div class="flex items-center gap-4 text-white">
      <img src="../assets/logo.png" alt="Logo" class="w-10" />
      <div>
        <h2 class="text-xl font-bold uppercase">Otus Shop</h2>
        <p class="text-slate-400">Магазин чего-то</p>
      </div>
    </div>

    <ul class="flex items-center gap-10">
      <li
        class="flex items-center gap-3 text-slate-500 cursor-pointer hover:text-white"
        @click="OpenDrawer"
      >
        <svg-cart />

        <b>{{ totalPrice }}</b>
      </li>
    </ul>
  </header>
</template>

<style scoped></style>
