<script setup>
defineProps({
  filters: {
    type: Array,
    required: true
  },
  sortBy: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['change-sort-by'])
</script>

<template>
  <div class="flex gap-4">
    <select
      @change="emit('change-sort-by', $event.target.value)"
      class="py-1.5 px-3 border border-gray-200 rounded-md outline-none focus:border-gray-400"
    >
      <option
        v-for="filter in filters"
        :key="filter.value"
        :value="filter.value"
        :selected="filter.value === sortBy"
      >
        {{ filter.label }}
      </option>
    </select>
  </div>
</template>
