export default {
  state() {
    return {
      cartItems: [],
      tax: 0.05
    }
  },
  getters: {
    getCartItemsList(state) {
      return state.cartItems
    },
    getTotalPrice(state) {
      return Number((state.cartItems.reduce((acc, el) => acc + el.price * el.quantityWTB, 0)).toFixed(2))
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
      const element = state.cartItems.find((el) => el.id === item.id)
      if (element) {
        this.commit('increaseQuantity', state.cartItems.indexOf(element)) // а как каркать, куда я жмав, ну вроде работает, надо проверить всё
        return
      }
      state.cartItems.push({ ...item, quantityWTB: 1 })
    },
    increaseQuantity(state, index) {
      state.cartItems[index].quantityWTB++
    },
    decreaseQuantity(state, index) {
      if (state.cartItems[index].quantityWTB === 1) {
        this.commit('removeItem', state.cartItems[index])
        return
      }
      state.cartItems[index].quantityWTB--
    },
    removeItem(state, item) {
      // item.isAdded = false
      this.commit('unmarkAsAdded', item)
      state.cartItems = state.cartItems.filter((el) => el.id !== item.id)
    },

    clearCart(state) {
      state.cartItems.length = 0
    },


  }
}