<script setup>
import SvgCross from '@/components/UI/svg/SvgCross.vue'
import AppButton from '@/components/UI/base/AppButton.vue'
import { ref } from 'vue'

const isOpen = ref(false)

</script>

<template>

  <app-button @click="isOpen = true">открыть модалку</app-button>
  <div
    v-if="isOpen"
    class="modal__wrapper flex justify-center items-center fixed inset-0 z-998 bg-black bg-opacity-70"
    @click="isOpen = false">
    <div
      class="modal-content relative p-5 max-w-xl bg-[#fff] border border-gray-200 rounded-lg shadow z-999 overflow-hidden"
      @click.stop="">
      <div class="modal-header flex justify-between pb-5">
        <span class="modal-title text-xl font-bold"> Тайтл </span>
        <app-button @click="isOpen = false">
          <svg-cross />
        </app-button>
      </div>
      <div class="modal-body">
        <slot name="body">
          default
        </slot>
      </div>
    </div>
  </div>
</template>
