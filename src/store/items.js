import axios from 'axios'

export default {
  state() {
    return {
      items: [],
      queryParams: {
        sortBy: '',
        title: null,
        price: null,
        id: null,
        _select: null
      }
    }
  },
  getters: {
    getItemsList(state) {
      return state.items
    },
    getItemById(state) {
      return (id) => state.items.find((el) => el.id === id)
    },
    getQueryParams(state) {
      return state.queryParams
    }
  },
  actions: {
    async fetchItems({ commit }, { url, querySelect, itemId }) {
      commit('setLoading', true)

      // if (option) {
      //   commit('setOptions', option)
      // }

      try {
        // const params = this.getters.getQueryParams

        if (this.getters.getSortBy) {
          this.getters.getSortBy === 'default'
            ? commit('setQueryParams', { key: 'sortBy', value: '' })
            : commit('setQueryParams', { key: 'sortBy', value: this.getters.getSortBy })
        }
        if (this.getters.getSearchValue) {
          commit('setQueryParams', {
            key: 'title', value: `*${this.getters.getSearchValue}*`
          })
        }

        if (querySelect) {
          commit('setQueryParams', { key: '_select', value: querySelect })
        }

        if (itemId) {
          commit('setQueryParams', { key: 'id', value: itemId })
        }

        console.log(this.getters.getQueryParams)
        const { data } = await axios.get(url, { params: this.getters.getQueryParams })

        commit('setItems', data)

      } catch (error) {
        console.log(error)
      } finally {
        commit('setLoading', false)

        for (const param in this.getters.getQueryParams) {
          commit('setQueryParams', { key: param, value: null })
        }
      }
    }
  },
  mutations: {

    setQueryParams(state, { key, value }) {
      state.queryParams[key] = value
    },

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
    setOptions(state, data) {
      console.log(data.id)
      state.options = data
    },


    unmarkAsAdded(state, item) {
      const element = state.items.find((el) => el.id === item.id)
      if (element) {
        element.isAdded = false
      }
    }
  }
}