<script setup>
import AppMainHeader from '@/components/UI/base/AppMainHeader.vue'
import AppButton from '@/components/UI/base/AppButton.vue'
import { index } from '@/store'

defineProps({
  cartButtonDisabled: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['closeDrawer', 'onClear'])
</script>

<template>
  <div class="flex items-center gap-5 mb-8">
    <svg
      @click="emit('closeDrawer')"
      class="opacity-30 cursor-pointer rotate-180 hover:opacity-100 transition hover:-translate-x-1"
      fill="none"
      height="14"
      viewBox="0 0 16 14"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7H14.7143"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.71436 1L14.7144 7L8.71436 13"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <div class="flex flex-1 justify-between items-baseline">
      <app-main-header class="text-2xl font-bold">Корзина</app-main-header>
      <app-button
        :disabled="cartButtonDisabled"
        @click="emit('onClear')"
        class="bg-gray-800 w-1/3  rounded-lg text-white hover:bg-gray-600 transition active:bg-red-900 disabled:bg-slate-300 disabled:cursor-default cursor-pointer"
      >
        Очистить
      </app-button>
    </div>
  </div>
</template>

<style scoped></style>
