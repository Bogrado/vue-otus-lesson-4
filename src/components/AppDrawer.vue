<script setup>
import AppDrawerHead from '@/components/AppDrawerHead.vue'
import { index } from '@/store/index.js'
import AppCartItemsList from '@/components/cart/AppCartItemsList.vue'
import { computed } from 'vue'
import AppButton from '@/components/UI/base/AppButton.vue'
import AppCartInfo from '@/components/cart/AppCartInfo.vue'
import AppCreateOrderForm from '@/components/UI/AppCreateOrderForm.vue'
import AppModal from '@/components/UI/AppModal.vue'
import { vAutoAnimate } from '@formkit/auto-animate'

const props = defineProps({
  totalPrice: {
    type: Number,
    required: true
  },
  cartIsEmpty: {
    type: Boolean,
    required: true
  }
})
const closeDrawer = () => {
  if (index.getters.isOpen) {
    index.dispatch('changeVisibility')
  }
}

const cartButtonDisabled = computed(() => props.cartIsEmpty)
const orderId = computed(() => index.getters.getOrderId
)

const placeAnOrder = () => {
  if (!props.cartIsEmpty)
    index.dispatch('changeFormVisibility', true)

}

const clearOrder = () => {
  index.commit('setOrder', {})
  closeDrawer()
  console.log(index.getters.getOrder)
}
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70" @click="closeDrawer"></div>
  <div class="bg-gray-100 w-96 h-full fixed right-0 top-0 z-20 p-10">
    <app-drawer-head @close-drawer="closeDrawer" />

    <template v-if="!cartIsEmpty">
      <div>
        <app-cart-items-list v-auto-animate />

        <div class="flex flex-col gap-4 mt-7">
          <div class="flex gap-2">
            <span>Итого:</span>
            <div class="flex-1 border-b border-dashed"></div>
            <b>{{ totalPrice }}</b>
          </div>

          <app-button
            @click="placeAnOrder"
            :disabled="cartButtonDisabled"
            class="mt-4 bg-gray-800 w-full rounded-2xl py-3 text-white hover:bg-gray-600 transition active:bg-lime-700 disabled:bg-slate-300 cursor-pointer">
            Создать заказ
          </app-button>

        </div>
        <app-modal>
          <template #modalTitle>
            Заполните форму
          </template>
          <template #body>
            <app-create-order-form />
          </template>
        </app-modal>
      </div>
    </template>

    <div
      v-if="!totalPrice"
      class="flex h-full items-center"
    >
      <div class="flex flex-col items-center" v-if="orderId">
        <app-cart-info
          v-if="orderId"
          title="Заказ оформлен"
          :description="`Ваш заказ #${orderId} скоро будет передан курьерской доставке`"
          image-url="/order-success-icon.png"
        />
        <app-button
          @click="clearOrder"
          class="mt-4 bg-gray-800 w-1/3 rounded-2xl py-3 text-white hover:bg-gray-600 transition active:bg-lime-700 disabled:bg-slate-300 cursor-pointer">
          OK
        </app-button>
      </div>
      <app-cart-info
        v-if="!totalPrice && !orderId"
        title="Empty"
        description="Корзина пуста, добавьте товары"
        image-url="/package-icon.png"
      />

    </div>
  </div>
</template>

<style scoped></style>
