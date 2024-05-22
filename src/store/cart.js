export default {
  state() {
    return {
      items: [],
      tax: 0.05
    }
  },
  getters: {
    getCartItemsList(state) {
      return state.items
    },
    getTotalPrice(state) {
      return Number((state.items.reduce((acc, el) => acc + el.price * el.quantityWTB, 0)).toFixed(2))
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit('addItem', item)
    },
    removeFromCart({ commit }, item) {
      commit('removeItem', item)
    }
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
    decreaseQuantity(state, index) {
      if (state.items[index].quantityWTB === 1) {
        this.commit('removeItem', state.items[index])
        return
      }
      state.items[index].quantityWTB--
    },
    removeItem(state, item) {
      // item.isAdded = false
      this.commit('unmarkAsAdded', item)
      state.items = state.items.filter((el) => el.id !== item.id)
    },


  }
}