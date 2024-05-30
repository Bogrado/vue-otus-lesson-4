<script setup>
import SvgCross from '@/components/UI/svg/SvgCross.vue'
import AppButton from '@/components/UI/base/AppButton.vue'
import { computed } from 'vue'
import AppPreloader from '@/components/UI/AppPreloader.vue'
import { index } from '@/store'

const isOpen = computed(() => index.getters.getFormIsOpen)

const changeFormVisibility = (bool) => {
  index.dispatch('changeFormVisibility', bool)
}

</script>

<template>

<!--  <app-button @click="changeFormVisibility(true)">открыть модалку</app-button>-->
  <div
    v-if="isOpen"
    class="modal__wrapper flex justify-center items-center fixed inset-0 z-998 bg-black bg-opacity-70"
    @click="changeFormVisibility(false)">
    <div
      class="modal-content relative p-5 max-w-xl bg-[#fff] border border-gray-200 rounded-lg shadow z-999 overflow-hidden"
      @click.stop="">
      <div class="modal-header flex justify-between pb-5">
        <span class="modal-title text-xl font-bold">
          <slot name="modalTitle">
            Title
          </slot>
        </span>
        <app-button @click="changeFormVisibility(false)">
          <svg-cross />
        </app-button>
      </div>
      <div class="modal-body">
        <slot name="body">
          default
          <app-preloader/>
        </slot>
      </div>
    </div>
  </div>
</template>
