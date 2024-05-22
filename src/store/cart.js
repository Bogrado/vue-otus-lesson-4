export default {
  state() {
    return {
      items: []
    }
  },
  getters: {
    getCartItemsList(state) {
      return state.items
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit('addItem', item)
    },
    // removeFromCart({ commit }, index) {
    //   commit('removeItem', index)
    // }
  },
  mutations: {
    addItem(state, item) {
      item.isAdded = true
      const element = state.items.find((el) => el.id === item.id)
      if (element) {
        this.commit('increaseQuantity', state.items.indexOf(element)) // а как каркать, куда я жмав, ну вроде работает, надо проверить всё
        return
      }
      state.items.push({ ...item, quantityWTB: 1 })
    },
    increaseQuantity(state, index) {
      state.items[index].quantityWTB++
    },
    // removeItem(state, index) {
    //   state.items.splice(index, 1)
    // }
  }
}