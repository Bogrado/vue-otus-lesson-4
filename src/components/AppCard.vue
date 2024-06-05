<script setup>
import SvgLikeIt from '@/components/UI/svg/SvgLikeIt.vue'
import SvgStar from '@/components/UI/svg/SvgStar.vue'
import SvgAdd from '@/components/UI/svg/SvgAdd.vue'
import AppButton from '@/components/UI/base/AppButton.vue'
import { index } from '@/store/'
import SvgMinus from '@/components/UI/svg/SvgMinus.vue'
import AppSelectQty from '@/components/AppSelectQty.vue'

defineProps({
  item: {
    type: Object,
    required: true
  }
})

defineEmits(['onClickAdd', 'onClickRemove', 'onClickDecrease'])

const findItemQty = (item) => {
  return index.getters.getCartItemsList.find((el) => el.id === item.id).quantityWTB
}

</script>

<template>
  <div
    class="h-full relative bg-white border border-slate-200 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition"
  >
    <div class="min-h-full flex flex-col">
      <div class="flex-auto">
        <svg-like-it
          class="absolute mt-2 top-4 left-4 border-2 fill-slate-200 border-slate-200 rounded-md hover:fill-gray-600 hover:border-gray-600"
        />
        <div
          class="mt-2 absolute top-4 right-4 bg-gray-700 p-2 rounded-xl border-2 border-slate-100"
        >
          <div class="flex">
            <div class="text-slate-400 text-xs flex items-center">
              <svg-star class="mr-1 w-3 h-3" />

              <div>
                <span>{{ item.rating ? item.rating.rate : 0 }}</span>
                <span class="ml-2">({{ item.rating ? item.rating.count : 0 }})</span>
              </div>
            </div>
          </div>
        </div>

        <img class="flex flex-grow flex-col" :src="item.image ? item.image : 'https://placehold.co/230x310'"
             alt="item" />
      </div>

        <div class="footer mt-2">
          <p class="line-clamp-1 text-ellipsis overflow-hidden">{{ item.title }}</p>

        <div
          class="flex justify-between items-center mt-5 bg-gray-700 p-4 rounded-md cursor-default"
        >
          <div class="flex flex-col">
            <span class="text-slate-400 text-sm">Цена: </span>
            <b class="mt-2 text-white text-sm">{{ item.price }} ₽</b>
          </div>
          <div
            v-auto-animate
          >
            <svg-add
              v-if="!item.isAdded"
              class="cursor-pointer hover:stroke-current-white"
              @click="$emit('onClickAdd', item)"
            />
            <div
              v-if="item.isAdded"
              class="flex flex-row gap-2  items-center "
            >
              <app-select-qty
                :item="item"
                @onClickAdd="$emit('onClickAdd', item)"
                @onClickRemove="$emit('onClickRemove', item)"
                @onClickDecrease="$emit('onClickDecrease', item)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
