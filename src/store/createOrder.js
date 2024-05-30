import axios from 'axios'

export default {
  state() {
    return {
      formIsOpen: false,
      order: {
        orderId: null,
        orderStatus: null,
        orderDate: null,
        customer: {},
        items: [],
        total: 0
      }
    }
  },
  getters: {
    getFormIsOpen(state) {
      return state.formIsOpen
    },
    getOrder(state) {
      return state.order
    }
  },
  mutations: {
    changeFormVisibility(state, payload) {
      state.formIsOpen = payload
    },
    setOrder(state, payload) {
      state.order = payload
    }
  },
  actions: {
    changeFormVisibility({ commit }, payload) {
      commit('changeFormVisibility', payload)
    },
    setOrder({ commit }, customer) {
      const items = this.getters.getCartItemsList.map ((item) => {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          quantityWTB: item.quantityWTB
        }
      })
      const total = this.getters.getTotalPrice
      const payload = {
        orderId: Date.now(),
        orderStatus: 'created',
        orderDate: new Date().toLocaleString(),
        customer,
        items,
        total
      }
      commit('setOrder', payload)
    },
    async createOrder({ commit }) {
      try {
        await axios.post('https://6452649f4b080307.mokky.dev/orders', this.getters.getOrder)
        commit('clearCart')
        commit('changeFormVisibility', false)
        commit('setOrder', null)
        console.log(this.state.order)
      } catch (error) {
        console.log(error)
      }
    }
  }
}