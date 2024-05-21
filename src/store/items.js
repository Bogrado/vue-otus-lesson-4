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
      commit('setLoading', true)

      axios
        .get(baseUrl)
        .then(response => {
          commit('setItems', response.data)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          commit('setLoading', false)
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