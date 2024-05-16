<script setup>

</script>

<template>
  <div
    class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition">

    <div class="">
      <img
        src="../assets/like-1.svg"
        alt="like 1"
        class="absolute top-10 left-10"
      />
      <img src="https://placehold.co/600x400" alt="item" />
      <p>Название</p>

      <div class="flex justify-between mt-5">
        <div class="flex flex-col">
          <span class="text-slate-400">Цена:</span>
          <b class="mt-2">2000</b>
        </div>

        <img
          src="../assets/plus.svg" alt="Plus"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>