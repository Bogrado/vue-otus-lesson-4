export default {
  state() {
    return {
      isOpen: false
    }
  },
  actions: {
    changeVisibility({ commit }) {
      commit('changeVisibility')
    }
  },
  mutations: {
    changeVisibility(state) {
      state.isOpen = !state.isOpen
    }
  },
  getters: {
    isOpen(state) {
      return state.isOpen
    }
  }
}