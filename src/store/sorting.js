export default {
  state() {
    return {
      sortBy: 'default',

      filters: [
        { value: 'default', label: 'По умолчанию' },
        { value: 'title', label: 'По названию' },
        { value: 'price', label: 'По цене (Сначала недорогие)' },
        { value: '-price', label: 'По цене (Подороже)' },
        { value: 'category', label: 'По категории' }
      ]
    }
  },
  getters: {
    getSortBy(state) {
      return state.sortBy
    },
    getFilters(state) {
      return state.filters
    }
  },
  mutations: {
    changeSortBy(state, sortBy) {
      state.sortBy = sortBy
    }
  },
  actions: {
    changeSortBy({ commit }, sortBy) {
      commit('changeSortBy', sortBy)
    }
  }
}
