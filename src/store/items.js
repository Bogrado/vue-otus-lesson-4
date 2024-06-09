import axios from 'axios'

export default {
  state() {
    return {
      items: [],
      item: [],
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
    getQueryParams(state) {
      return state.queryParams
    },
    getItem(state) {
      return state.item
    }
  },
  actions: {
    async fetchItems({ commit }, { url, querySelect, itemId }) {

      commit('setLoading', true)
      try {

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

        const { data } = await axios.get(url, { params: this.getters.getQueryParams })

        // itemId
        //   ? commit('setItems', { data, place: 'item' })
        //   :
        commit('setItems', { data, place: 'items' })

        for (const param in this.getters.getQueryParams) {
          commit('setQueryParams', { key: param, value: null })
        }

      } catch (error) {
        console.log('(╮°-°)╮┳━━┳ ( ╯°□°)╯ ┻━━┻')
        console.log(error)
      } finally {
        commit('setLoading', false)
      }
    }
  },
  mutations: {

    setQueryParams(state, { key, value }) {
      state.queryParams[key] = value
    },

    setItems(state, { data, place }) {
      state[place] = data.map((item) => {
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
    }
  }
}