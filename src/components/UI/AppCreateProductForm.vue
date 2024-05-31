<script setup>
import AppButton from '@/components/UI/base/AppButton.vue'
import { computed, ref } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['on-submit'])

const contentType = ref('')
const contentValue = ref('')
const checkValueLength = computed(() => contentValue.value.length > 0)

const onSubmitHandler = () => {
  if (!checkValueLength.value) return
  emit('on-submit', contentType.value, contentValue.value)
  contentType.value = ''
  contentValue.value = ''
}

</script>

<template>
  <form
    @submit.prevent="onSubmitHandler"
    class="bg-[#1F2937] p-5 rounded-3xl max-w-80">
    <div class="flex gap-4 mb-4">
      <div class="flex flex-row gap-4 w-full items-center">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          for="type">Свойство</label>
        <select
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="contentType"
          id="type">
          <option selected disabled value="default">Выберите тип</option>
          <option
            v-for="key of Object.keys(props.item)"
            :key="key"
            :value="key"
          >
            {{ key }}
          </option>
        </select>
      </div>
    </div>

    <div class="flex flex-col gap-4 mb-4">
      <div class="h-auto">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          for="value">Значение</label>
        <textarea
          v-model="contentValue"
          class=" resize-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          id="value" rows="3"></textarea>
      </div>
      <app-button
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-slate-300 disabled:cursor-not-allowed"
        :disabled="!checkValueLength">Добавить ключ
      </app-button>
    </div>
  </form>
</template>

<style scoped>

</style>