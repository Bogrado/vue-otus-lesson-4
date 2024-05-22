<script setup>
import SvgLikeIt from '@/components/UI/svg/SvgLikeIt.vue'
import SvgStar from '@/components/UI/svg/SvgStar.vue'
import SvgAdd from '@/components/UI/svg/SvgAdd.vue'

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="h-full relative bg-white border border-slate-200 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition"
  >
    <div class="min-h-full flex flex-col">
      <div class="flex-auto">
        <SvgLikeIt
          class="absolute mt-2 top-4 left-4 border-2 fill-slate-200 border-slate-200 rounded-md hover:fill-gray-600 hover:border-gray-600"
        />

        <div
          class="mt-2 absolute top-4 right-4 bg-gray-700 p-2 rounded-xl border-2 border-slate-100"
        >
          <div class="flex">
            <div class="text-slate-400 text-xs flex items-center">
              <svg-star class="mr-1 w-3 h-3" />

              <div>
                <span>{{ item.rating.rate }}</span>
                <span class="ml-2">({{ item.rating.count }})</span>
              </div>
            </div>
          </div>
        </div>

        <img class="flex flex-grow flex-col" :src="item.image" alt="item" />
      </div>

      <div class="footer">
        <p>{{ item.title }}</p>

        <div
          class="flex justify-between items-center mt-5 bg-gray-700 p-4 rounded-md cursor-default"
        >
          <div class="flex flex-col">
            <span class="text-slate-400">Цена: </span>
            <b class="mt-2 text-white">{{ item.price }} Руб.</b>
          </div>

          <svg-add class="cursor-pointer hover:stroke-slate-400"/>
        </div>
      </div>
    </div>
  </div>
</template>
