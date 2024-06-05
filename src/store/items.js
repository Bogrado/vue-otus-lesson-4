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
    },
    getItemById(state) {
      return (id) => state.items.find((el) => el.id === id)
    }
  },
  actions: {
    async fetchItems({ commit }) {
      commit('setLoading', true)

      try {
        const params = {
          sortBy: this.getters.getSortBy,
          title: null
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
    }
  },
  mutations: {

    setItems(state, data) {
      state.items = data.map((item) => {
        if (this.getters.getCartItemsList && this.getters.getCartItemsList.find((el) => el.id === item.id)) {
          return {
            ...item,
            isAdded: true,
            quantityWTB: this.getters.getCartItemsList.find((el) => el.id === item.id).quantityWTB
          }
        }
        return {
          ...item,
          isFavorite: false,
          favoriteId: null,
          isAdded: false,
          quantityWTB: 0 // for cart quantity want to buy
        }
      })
    },


    unmarkAsAdded(state, item) {
      const element = state.items.find((el) => el.id === item.id)
      if (element) {
        element.isAdded = false
      }
    },
  }
}