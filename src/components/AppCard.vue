<script setup>

import SvgLikeIt from '@/components/UI/svg/SvgLikeIt.vue'

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

    <div class="min-h-full flex flex-col ">

      <div class="flex-auto">

        <img
          src="../assets/like-1.svg"
          alt="like 1"
          class="absolute top-4 left-4"
        />

        <div class="mt-2 absolute top-4 right-4 bg-gray-700 p-2 rounded-xl border-2 border-slate-100">
          <div class="flex ">
            <div class="text-slate-400 text-xs flex items-center">
              <img
                src="../assets/star-svgrepo-com.svg"
                alt="star"
                class="mr-1 w-3 h-3"
              />
              <div>
                <span>{{ item.rating.rate }}</span>
                <span class="ml-2">({{ item.rating.count }})</span>
              </div>

            </div>
          </div>
        </div>

        <img
          class="flex flex-grow flex-col "
          :src="item.image" alt="item" />

      </div>

      <div class="footer">

        <p>{{ item.title }}</p>

        <div class="flex justify-between mt-5 bg-gray-700 p-4 rounded-3xl">
          <div class="flex flex-col">
            <span class="text-slate-400">Цена: </span>
            <b class="mt-2 text-white">{{ item.price }} Руб.</b>
          </div>

          <img
            src="../assets/plus.svg" alt="Plus"
          />
        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>

</style>