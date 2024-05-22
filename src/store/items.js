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

        if (this.getters.getSearchValue) {
          params.title = `*${this.getters.getSearchValue}*`
        }

        const { data } = await axios.get('https://6452649f4b080307.mokky.dev/items', { params })

        commit('setItems', data)
      } catch (error) {
        console.log(error)
      } finally {
        commit('setLoading', false)
      }
    },
  },
  mutations: {
    setItems(state, items) {
      state.items = items.map((item) => {
        return {
          ...item,
          isFavorite: false,
          favoriteId: null,
          isAdded: false,
          quantityWTB: 0 // for cart quantity want to buy
        }
      })
    }
  }
}