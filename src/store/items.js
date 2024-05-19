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
    async fetchItems({ commit }) {
      commit('setLoading', true)

      try {
        const params = {
          sortBy: this.getters.getSortBy
        }
        if (params.sortBy === 'default') {
          params.sortBy = ''
        }

        const { data } = await axios.get('https://6452649f4b080307.mokky.dev/items', { params })

        commit('setItems', data)

      } catch (error) {
        console.log(error)
      } finally {
        commit('setLoading', false)
      }







      // axios
      //   .get(url)
      //   .then(response => {
      //     commit('setItems', response.data)
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
      //   .finally(() => {
      //     commit('setLoading', false)
      //   })

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