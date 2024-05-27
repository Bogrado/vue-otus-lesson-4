<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric } from '@vuelidate/validators'
import { reactive, ref } from 'vue'


const user = reactive({
  email: '',
  phone: ''
})

const rules = {
  email: { required, email },
  phone: { required, numeric, length: (value) => value.length === 11 }
}

const v$ = useVuelidate(rules, user)

const showError = ref(false)

const onSubmit = async () => {
  v$.value.$touch()
  const result = await v$.value.$validate()
  if (result) {
    console.log(user)
    showError.value = false
    return
  }
    console.log(result)
    showError.value = true

}

</script>

<template>
  <form class="max-w-md mx-auto bg-[#1F2937] p-5 rounded-b-lg">
    <div class="form-item flex">
      <div class="m-2.5" :class="{ errorInput: v$.email.$error }">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Электронная почта
        </label>
        <input
          v-model="user.email"
          :class="{ 'dark:border-red-600': v$.email.$error }"
          @change="v$.email.$touch()"
          type="email"
          id="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div class="m-2.5">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Номер телефона
        </label>
        <input
          v-model="user.phone"
          :class="{ 'dark:border-red-600': v$.phone.$error }"
          @change="v$.phone.$touch()"
          id="telephone"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="88005553535"
          required
        />
      </div>
    </div>
    <!--    <div class=" flex">-->
    <!--      <div class="m-2.5">-->
    <!--        <label for="lastName"-->
    <!--               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"-->
    <!--        >-->
    <!--          Фамилия-->
    <!--        </label>-->
    <!--        <input-->
    <!--          v-model="user.lastName"-->
    <!--          type="text"-->
    <!--          id="lastName"-->
    <!--          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"-->
    <!--          placeholder="Fakov"-->
    <!--          required-->
    <!--        />-->
    <!--      </div>-->
    <!--      <div class="m-2.5">-->
    <!--        <label-->
    <!--          for="firstName"-->
    <!--          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"-->
    <!--        >-->
    <!--          Имя-->
    <!--        </label>-->
    <!--        <input-->
    <!--          v-model="user.firstName"-->
    <!--          type="text"-->
    <!--          id="firstName"-->
    <!--          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"-->
    <!--          placeholder="Ivan"-->
    <!--          required-->
    <!--        />-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="">-->
    <!--      <div class="m-2.5">-->
    <!--        <label-->
    <!--          for="city"-->
    <!--          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">-->
    <!--          Выберите ваш город-->
    <!--        </label>-->
    <!--        <select-->
    <!--          v-model="user.city"-->
    <!--          id="city"-->
    <!--          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">-->

    <!--          <option>Москва</option>-->
    <!--          <option>Казань</option>-->
    <!--          <option>Омск</option>-->
    <!--          <option>Красноярск</option>-->
    <!--        </select>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="flex items-start mb-5">
      <div class="flex items-center h-5">
        <input
          v-model="user.isAgreed"
          id="terms"
          type="checkbox"
          value=""
          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          required
        />
      </div>
      <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Я согласен с условиями <a
        href="#" class="text-blue-600 hover:underline dark:text-blue-500">Условия и политика
        конфиденциальности</a></label>
    </div>
    <div class="flex items-center justify-between">
      <button
        @click.prevent="onSubmit"
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Оформить заказ
      </button>
      <div class="">
        <span
          v-if="showError"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-red-600"
        >Неверно заполнены поля</span>
      </div>
    </div>
  </form>
</template>
