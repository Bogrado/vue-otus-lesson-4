<script setup>
import { useCartStore } from '@/pinia/cart/cart.js'
import SvgCross from '@/components/UI/svg/SvgCross.vue'
import { useLoadingStatus } from '@/pinia/getItems/loadingStatus.js'

const props = defineProps({
  itemId:{
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
})

const cartStore = useCartStore()
const item = cartStore.cartItemsList.find((item) => item.id === +props.itemId)
</script>

<template>
  <div
    v-if="!useLoadingStatus().loading"
    class=" flex items-center border border-slate-200 p-4 rounded-xl  gap-4 mt-4 hover:-translate-y-2 hover:shadow-xl transition">
    <img class="w-16 h-16" :src="item.image" alt="image" />
    <div class="flex flex-col flex-1">
      <p class="text-slate-600 text-sm line-clamp-1 text-ellipsis overflow-hidden mb-2">{{ item.title }}</p>
      <div class="flex justify-between mt-2 items-end">
        <div class="flex flex-col">
          <div class="flex gap-2 items-center text-slate-600 text-sm mr-6">
            <span class="text-slate-500"> Цена:</span>
            <b>{{ item.price }}</b>
          </div>
        </div>
        <div class="flex flex-col items-end gap-2">
          <svg-cross

            class="mb-1 mr-1 cursor-pointer hover:text-red-700 w-4 h-4"
            @click="$emit('onClickRemove', item)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>