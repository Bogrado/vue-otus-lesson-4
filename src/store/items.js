import axios from 'axios'

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
    fetchItems({ commit }) {
      const baseUrl = 'https://6645e2c9b8925626f8939a7f.mockapi.io/items'
      axios
        .get(baseUrl)
        .then(response => {
          console.log(response.data)
          commit('setItems', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mutations: {
    setItems(state, items) {
      state.items = items.map(item => {
        return {
          ...item
        }
      })
    }
  }
}