<script setup>
import AppMainHeader from '@/components/UI/base/AppMainHeader.vue'
import AppButton from '@/components/UI/base/AppButton.vue'

defineProps({
  loadingStatus: {
    type: Boolean,
    required: false
  }
})
</script>

<template>
  <app-main-header>Ошибка 404. Страница не найдена</app-main-header>
  <router-link :to="{ name: 'home' }">
    <div class="flex justify-center">
      <app-button
        class="mt-10 bg-gray-800 w-2/5 rounded-2xl py-3 text-white hover:bg-gray-600 transition active:bg-gray-700 disabled:bg-slate-300 cursor-pointer">
        Вернуться на главную страницу
      </app-button>
    </div>
  </router-link>
</template>

<style scoped>

</style>