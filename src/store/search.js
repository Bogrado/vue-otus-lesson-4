export default {
  state() {
    return {
      searchValue: '',
      placeholder: 'Поиск...'
    }
  },
  getters: {
    getSearchValue(state) {
      return state.searchValue
    },
    getPlaceholder(state) {
      return state.placeholder
    }
  },
  mutations: {
    setSearchValue(state, searchValue) {
      state.searchValue = searchValue
    }
  },
  actions: {
    setSearchValue({ commit }, searchValue) {
      commit('setSearchValue', searchValue)
    }
  }
}
