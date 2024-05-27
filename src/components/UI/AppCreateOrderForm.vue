<script setup>

</script>

<template>
  <form class="max-w-md mx-auto bg-[#1F2937] p-5 rounded-b-lg">
    <div class=" flex">
      <div class="m-2.5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Электронная почта
        </label>
        <input
          type="email"
          id="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div class="m-2.5">
        <label
          for="telephone"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Номер телефона
        </label>
        <input
          type="tel"
          id="telephone"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="88005553535"
          required
        />
      </div>
    </div>
    <div class=" flex">
      <div class="m-2.5">
        <label for="lastName"
               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Фамилия
        </label>
        <input type="text" id="lastName"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
               placeholder="Fakov"
               required />
      </div>
      <div class="m-2.5">
        <label
          for="firstName"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Имя
        </label>
        <input
          type="text"
          id="firstName"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Ivan"
          required
        />
      </div>
    </div>
    <div class="">
      <div class="m-2.5">
        <label
          for="city"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Выберите ваш город
        </label>
        <select
          id="city"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

          <option>Москва</option>
          <option>Казань</option>
          <option>Омск</option>
          <option>Красноярск</option>
        </select>
      </div>
    </div>

    <!--            <div class="m-2.5">-->
    <!--              <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat-->
    <!--                password</label>-->
    <!--              <input type="password" id="repeat-password"-->
    <!--                     class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"-->
    <!--                     required />-->
    <!--            </div>-->
    <div class="flex items-start mb-5">
      <div class="flex items-center h-5">
        <input id="terms" type="checkbox" value=""
               class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
               required />
      </div>
      <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Я согласен с условиями <a
        href="#" class="text-blue-600 hover:underline dark:text-blue-500">Условия и политика
        конфиденциальности</a></label>
    </div>
    <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Оформить заказ
    </button>
  </form>
</template>

<style scoped>

</style>