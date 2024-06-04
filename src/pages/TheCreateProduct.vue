<script setup>
import AppMainHeader from '@/components/UI/base/AppMainHeader.vue'
import { index } from '@/store'
import { computed } from 'vue'
import AppCard from '@/components/AppCard.vue'
import AppCreateProductForm from '@/components/UI/AppCreateProductForm.vue'
import AppButton from '@/components/UI/base/AppButton.vue'

defineProps({
  loadingStatus: {
    type: Boolean,
    default: false
  }
})

const item = computed(() => index.getters.getItemBeingCreated)

const createItemKey = (key, val) => {
  index.commit('setItemKey', { key: key, value: val })
}

const createItem = () => {
  index.dispatch('postItem', index.getters.getItemBeingCreated)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <app-main-header
      class=""
    >Создать товар
    </app-main-header>

    <div class="flex gap-4 mt-10 flex-col md:flex-row md:justify-evenly w-3/4 mx-auto">
      <app-create-product-form
        class="flex-grow "
        :item="item"
        @on-submit="createItemKey"
      />
      <div class="flex flex-col preview p-5 border-gray-200 rounded-3xl border shadow items-center justify-center">
        <app-main-header
          class="text-center text-xl font-medium text-gray-900 mb-4"
        >Превью
        </app-main-header>
        <app-card
          class="max-w-80"
          :item="item" />
        <app-button
          class=" w-1/2 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-slate-300 disabled:cursor-not-allowed"
          @click="createItem">
          Запостить товар
        </app-button>
      </div>


    </div>
  </div>
</template>

<style scoped>

</style>