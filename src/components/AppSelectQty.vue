<script setup>

import AppButton from '@/components/UI/base/AppButton.vue'
import SvgAdd from '@/components/UI/svg/SvgAdd.vue'
import SvgMinus from '@/components/UI/svg/SvgMinus.vue'
import { index } from '@/store/index.js'

defineProps({
  item: {
    type: Object,
    required: true
  },
  classes: {
    type: String,
    required: false
  }
})

defineEmits(['onClickAdd', 'onClickRemove', 'onClickDecrease'])

const findItemQty = (item) => index.getters.getCartItemsList.find((el) => el.id === item.id).quantityWTB

</script>

<template>
  <div class="flex bg-[#374151] rounded-lg justify-evenly gap-2">
    <app-button
      @click="$emit('onClickDecrease', item)">
      <svg-minus :class="classes" />
    </app-button>
    <span class="text-white">{{ findItemQty(item) < 10 ? '0' + findItemQty(item) : findItemQty(item)
      }}</span>
    <app-button
      @click="$emit('onClickAdd', item)">
      <svg-add :class="classes" />
    </app-button>
  </div>
</template>

<style scoped>

</style>