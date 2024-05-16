<script setup>


import TheHeader from '@/components/TheHeader.vue'
import TheHome from '@/Page/TheHome.vue'
import AppDrawer from '@/components/AppDrawer.vue'
</script>

<template>

<!--  <app-drawer />-->

  <div class="w-4/5 m-auto bg-white rounded-xl shadow-2xl mt-14">

    <TheHeader />

    <div class="p-10">
      <the-home/>
    </div>
  </div>
</template>

