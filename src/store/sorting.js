
export default {
  state() {
    return {
      sortBy: 'default',

      filters: [
        { name: 'default', label: 'По умолчанию', value: '' },
        { name: 'title', label: 'По названию', value: () => this.getters.getSearchValue },
        { name: 'price', label: 'По цене (Сначала недорогие)', value: 'price' },
        { name: '-price', label: 'По цене (Подороже)', value: '-price' },
        { name: 'category', label: 'По категории', value: 'category' }
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
