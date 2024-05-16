<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div
    class="h-full relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition">

    <div class="min-h-full flex flex-col ">

      <div class="flex-auto">

        <img
          src="../assets/like-1.svg"
          alt="like 1"
          class="absolute top-4 left-4"
        />
        <img
          class="flex flex-grow flex-col "
          :src="item.image" alt="item" />

      </div>

      <div class="footer">
        <p>{{ item.title }}</p>

        <div class="flex justify-between mt-5 ">
          <div class="flex flex-col">
            <span class="text-slate-400">Цена: </span>
            <b class="mt-2">{{ item.price }}</b>
          </div>

          <img
            src="../assets/plus.svg" alt="Plus"
          />
        </div>

        <div class="mt-2">
          <div class="flex ">
            <div class="text-slate-400 text-xs flex items-center">
              <img
                src="../assets/star-svgrepo-com.svg"
                alt="star"
                class="mr-1 w-3 h-3"
              />
              <div>
                <span>{{ item.rating.rate }}</span>
                <span class="ml-2">оценили {{ item.rating.count }} раз</span>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>

</style>