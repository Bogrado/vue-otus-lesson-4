<script setup>
import SvgStar from '@/components/UI/svg/SvgStar.vue'

defineProps({
  rating: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="mt-2 bg-gray-700 p-2 rounded-xl border-2 border-slate-100"
  >
    <div class="flex">
      <div class="text-slate-400 text-xs flex items-center">
        <svg-star class="mr-1 w-3 h-3" />

        <div>
          <span>{{ rating.rate }}</span>
          <span class="ml-2">({{ rating.count }})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>