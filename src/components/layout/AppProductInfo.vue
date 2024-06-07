<script setup>
import SvgStar from '@/components/UI/svg/SvgStar.vue'
import AppSelectQty from '@/components/AppSelectQty.vue'
import SvgAdd from '@/components/UI/svg/SvgAdd.vue'

defineProps({
  item: {
    type: Object,
    required: true
  }
})

defineEmits(['onClickAdd', 'onClickRemove', 'onClickDecrease'])
</script>

<template>
  <div class="flex flex-col gap-5 border-slate-700 shadow-xl shadow-slate-200 rounded-xl p-4 h-1/4">
    <div class="flex gap-2">
      <span class="font-bold">Цена: </span>
      <span>{{ item.price }}</span>
      <span>₽</span>
    </div>
    <div class="flex gap-2 items-center">
      <span class="font-bold">Рейтинг: </span>
      <span>{{ item.rating ? item.rating.rate : 0 }}</span>
      <span><svg-star class="w-4 h-4" /></span>
    </div>
    <div class="flex gap-2 items-center">
      <span class="font-bold">Оценили: </span>
      <span>{{ item.rating ? item.rating.count : 0 }}</span>
      <span>раз</span>
    </div>
    <div
      v-auto-animate
    >
      <svg-add
        v-if="!item.isAdded"
        class="cursor-pointer hover:stroke-current-white"
        @click.prevent.stop="$emit('onClickAdd', item)"
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
</template>

<style scoped>

</style>