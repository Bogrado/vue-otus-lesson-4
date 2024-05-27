<script setup>

import AppMainHeader from '@/components/UI/base/AppMainHeader.vue'
import AppModal from '@/components/UI/AppModal.vue'
import AppCreateOrderForm from '@/components/UI/AppCreateOrderForm.vue'
</script>

<template>
  <app-main-header>Форма</app-main-header>
  <app-modal>
    <template #body>
      <app-create-order-form />
    </template>
  </app-modal>
</template>

<style scoped>

</style>