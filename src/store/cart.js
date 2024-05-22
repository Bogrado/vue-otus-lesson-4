export default {
  state() {
    return {
      items: []
    }
  },
  getters: {
    getItemsList(state) {
      return state.items
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit('addItem', item)
    },
    removeFromCart({ commit }, index) {
      commit('removeItem', index)
    }
  },
  mutations: {
    addItem(state, item) {
      item.isAdded = true
      state.items.push(item)
    },
    removeItem(state, index) {
      state.items.splice(index, 1)
    }
  }
}