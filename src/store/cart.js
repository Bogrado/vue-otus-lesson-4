function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

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
    },
    decreaseQuantity({ commit }, item) {
      commit('decreaseQuantity', item)
    },
    checkLocalStorage({ commit }) {
      if (localStorage.getItem('cart')) {
        commit('setCartItemsList', JSON.parse(localStorage.getItem('cart')))
      }
    }
  },
  mutations: {
    addItem(state, item) {
      item.isAdded = true
      const element = state.cartItems.find((el) => el.id === item.id)
      if (element) {
        this.commit('increaseQuantity', state.cartItems.indexOf(element))// а как каркать, куда я жмав, ну вроде работает, надо проверить всё
        updateLocalStorage(state.cartItems)
        return
      }
      state.cartItems.push({ ...item, quantityWTB: 1 })
      updateLocalStorage(state.cartItems)
    },
    increaseQuantity(state, index) {
      state.cartItems[index].quantityWTB++
      updateLocalStorage(state.cartItems)
    },
    decreaseQuantity(state, item) {
      const element = state.cartItems.find((el) => el.id === item.id)
      if (element.quantityWTB > 1) {
        element.quantityWTB--
        updateLocalStorage(state.cartItems)
      }
      else {
        this.commit('removeItem', item)
        state.cartItems = state.cartItems.filter((el) => el.id !== item.id)
        updateLocalStorage(state.cartItems)
      }
    },
    removeItem(state, item) {
      this.commit('unmarkAsAdded', item)
      state.cartItems = state.cartItems.filter((el) => el.id !== item.id)
      updateLocalStorage(state.cartItems)

    },

    clearCart(state) {
      state.cartItems.forEach((el) => {
        this.commit('removeItem', el)
      })
      updateLocalStorage(state.cartItems)
    },
    setCartItemsList(state, data) {
      state.cartItems = data
      console.log(data)
    },
    unmarkAsAdded(state, item) {
      const element = state.cartItems.find((el) => el.id === item.id)
      if (element) {
        element.isAdded = false
      }
    }
  },
}