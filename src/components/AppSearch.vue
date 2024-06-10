<script setup>
import SvgSearch from '@/components/UI/svg/SvgSearch.vue'
import SvgCross from '@/components/UI/svg/SvgCross.vue'
import AppButton from '@/components/UI/base/AppButton.vue'
import { ref } from 'vue'

const emit = defineEmits(['onChangeSearchInput'])

const searchValue = ref('')

const onCrossHandler = () => {
  searchValue.value = ''
  emit('onChangeSearchInput', searchValue.value)
}

const onInputHandler = (e) => {
  emit('onChangeSearchInput', e.target.value)
}

</script>

<template>
  <div class="relative">
    <svg-search class="absolute left-4 top-3" />
    <input
      v-model="searchValue"
      @input="onInputHandler"
      class="border border-gray-200 rounded-md py-1.5 pl-12 pr-4 outline-none focus:border-gray-400"
      type="text"
      placeholder="Поиск..."
    />
    <app-button @click="onCrossHandler">
      <svg-cross class="absolute right-4 top-3 cursor-pointer w-4 h-4 hover:fill-gray-800" />
    </app-button>
  </div>
</template>

<style scoped></style>
