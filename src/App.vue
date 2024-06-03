<script setup>
import TheHeader from '@/components/TheHeader.vue'
import AppDrawer from '@/components/AppDrawer.vue'
import { index } from '@/store'
import { computed } from 'vue'
import { vAutoAnimate } from '@formkit/auto-animate'

const isDrawerOpen = computed(() => index.getters.isOpen)
const loadingStatus = computed(() => index.getters.getLoading)
const totalPrice = computed(() => index.getters.getTotalPrice)
const cartIsEmpty = computed(() => index.getters.getCartItemsList.length === 0)

const changeVisibility = () => {
  index.dispatch('changeVisibility')
}

</script>

<template>
  <div v-auto-animate>
    <app-drawer
      v-if="isDrawerOpen"
      :totalPrice="totalPrice"
      :cartIsEmpty="cartIsEmpty"
    />

    <div class="w-4/5 m-auto bg-white rounded-xl shadow-2xl mt-14">
      <TheHeader

        @open-drawer="changeVisibility"
        :is-drawer-open="isDrawerOpen"
        :totalPrice="totalPrice"
      />

      <div class="p-10">
        <div v-auto-animate>
          <router-view
            v-slot="{ Component }"
            :loadingStatus="loadingStatus">
            <component
              :is="Component" />
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>