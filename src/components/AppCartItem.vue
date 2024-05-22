<script setup>
import SvgCross from '@/components/UI/svg/SvgCross.vue'
</script>

<template>
  <div class=" flex items-center border border-slate-200 p-4 rounded-xl  gap-4 mt-4">
    <img class="w-16 h-16" src="https://placehold.co/600x400" alt="item" />
    <div class="flex flex-col flex-1">
      <p>title</p>
      <div class="flex justify-between mt-2">
        <b class="flex-1">10000 руб.</b>
        <svg-cross class="opacity-40 hover:opacity-100 cursor-pointer transition w-4 h-4" />
      </div>
    </div>
  </div>
</template>