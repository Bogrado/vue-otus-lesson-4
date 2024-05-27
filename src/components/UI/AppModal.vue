<script setup>
import SvgCross from '@/components/UI/svg/SvgCross.vue'
import AppButton from '@/components/UI/base/AppButton.vue'
import { ref } from 'vue'

const isOpen = ref(false)

</script>

<template>

  <app-button @click="isOpen = true">открыть модалку</app-button>
  <div
    v-if="isOpen"
    class="modal__wrapper flex justify-center items-center fixed inset-0 z-998 bg-black bg-opacity-70"
    @click="isOpen = false">
    <div
      class="modal-content relative p-5 max-w-xl bg-[#fff] border border-gray-200 rounded-lg shadow z-999 overflow-hidden"
      @click.stop="">
      <div class="modal-header flex justify-between pb-5">
        <span class="modal-title text-xl font-bold"> Тайтл </span>
        <app-button @click="isOpen = false">
          <svg-cross />
        </app-button>
      </div>
      <div class="modal-body">
        <slot name="body">
          <form class="max-w-sm mx-auto bg-[#1F2937] p-5 rounded-b-lg">
            <div class="mb-5 flex">
              <div class="m-2.5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                  email</label>
                <input type="email" id="email"
                       class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                       placeholder="name@flowbite.com" required />
              </div>
              <div class="m-2.5">
                <label for="telephone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                  phone number</label>
                <input type="tel" id="telephone"
                       class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                       placeholder="88005553535"
                       required />
              </div>
            </div>
            <div class="mb-5 flex">
              <div class="m-2.5">
                <label for="firstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                  Name</label>
                <input type="text" id="firstName"
                       class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                       placeholder="Ivan" required />
              </div>
              <div class="m-2.5">
                <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                  Name</label>
                <input type="text" id="lastName"
                       class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                       placeholder="Fakov"
                       required />
              </div>
            </div>
            <div class="m-2.5">
              <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your
                country</label>
              <select id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
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
              <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a
                href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms
                and conditions</a></label>
            </div>
            <button type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Register new account
            </button>
          </form>
        </slot>
      </div>
    </div>
  </div>
</template>
