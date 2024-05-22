<script setup>
import SvgCross from '@/components/UI/svg/SvgCross.vue'

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class=" flex items-center border border-slate-200 p-4 rounded-xl  gap-4 mt-4">
    <img class="w-16 h-16" :src="item.image" alt="item" />
    <div class="flex flex-col flex-1">
      <p class="text-slate-600 text-sm line-clamp-1 text-ellipsis overflow-hidden mb-2">{{ item.title }}</p>
      <div class="flex justify-between mt-2">
        <b class="flex-1">{{ item.price }}</b>
        <div class="flex gap-2 items-center text-slate-600 text-sm mr-6">
          <span class="text-slate-500"> Количество:</span>
          <b>{{ item.quantityWTB }}</b>
        </div>
        <svg-cross class=" hover:opacity-100 cursor-pointer transition w-4 h-4" />
      </div>
    </div>
  </div>
</template>