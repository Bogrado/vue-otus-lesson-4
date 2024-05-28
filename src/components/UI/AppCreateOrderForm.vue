<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric } from '@vuelidate/validators'
import { reactive, ref } from 'vue'


const user = reactive({
  isAgreed: false,
  firstName: '',
  lastName: '',
  contacts: {
    email: '',
    phone: ''
  },
  address: {
    city: '',
    street: '',
    house: '',
    flat: ''
  }
})

const rules = {
  contacts: {
    email: { required, email },
    phone: { required, numeric, length: (value) => value.length === 11 }
  },
  firstName: { required, length: (value) => value.length >= 3 || value === ('ян' || 'Ян') },
  lastName: { required, length: (value) => value.length >= 3 },
  address: {
    city: { required },
    street: { required, length: (value) => value.length >= 3 },
    house: { required },
    flat: { required, numeric }
  },
  isAgreed: { required: (value) => !!value }
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
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 ">
      <div>
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Имя
        </label>
        <input
          v-model="user.firstName"
          :class="{ 'dark:border-red-600': v$.firstName.$error }"
          @change="v$.firstName.$touch()"
          type="text"
          id="firstName"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Иван"
          required
        />
      </div>
      <div>
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Фамилия
        </label>
        <input
          v-model="user.lastName"
          :class="{ 'dark:border-red-600': v$.lastName.$error }"
          @change="v$.lastName.$touch()"
          type="text"
          id="lastName"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Иванов"
          required
        />
      </div>
      <div>
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Номер телефона
        </label>
        <input
          v-model="user.contacts.phone"
          :class="{ 'dark:border-red-600': v$.contacts.phone.$error }"
          @change="v$.contacts.phone.$touch()"
          id="telephone"
          type="tel"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="88005553535"
          required
        />
      </div>
      <div>
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Емейл
        </label>
        <input
          v-model="user.contacts.email"
          :class="{ 'dark:border-red-600': v$.contacts.email.$error }"
          @change="v$.contacts.email.$touch()"
          id="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="gTn9x@example.com"
          required
        />
      </div>
    </div>
    <div>
      <label
        for="city"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Выберите ваш город
      </label>
      <select
        v-model="user.address.city"
        :class="{ 'dark:border-red-600': v$.address.city.$error }"
        @change="v$.address.city.$touch()"
        id="city"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected disabled>Выберите город</option>
        <option>Москва</option>
        <option>Казань</option>
        <option>Омск</option>
        <option>Красноярск</option>
      </select>
    </div>
    <div class="flex justify-between">
      <div>
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Улица
        </label>
        <input
          v-model="user.address.street"
          :class="{ 'dark:border-red-600': v$.address.street.$error }"
          @change="v$.address.street.$touch()"
          id="street"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Пушкина"
          required
        />
      </div>
      <div class="w-1/6">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Дом
        </label>
        <input
          v-model="user.address.house"
          :class="{ 'dark:border-red-600': v$.address.house.$error }"
          @change="v$.address.house.$touch()"
          id="house"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <div class="w-1/6">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Квартира
        </label>
        <input
          v-model="user.address.flat"
          :class="{ 'dark:border-red-600': v$.address.flat.$error }"
          @change="v$.address.flat.$touch()"
          id="flat"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
    </div>
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
        :class="{ 'cursor-not-allowed opacity-50 dark:focus:ring-0 dark:focus:ring-offset-0 dark:hover:bg-slate-600': !user.isAgreed }"
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
