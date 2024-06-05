import axios from 'axios'

export default {
  state() {
    return {
      searchedId: null,
      searchedPrice: 0,
      searchedProduct: {}
    }
  },
  getters: {
    getSearchedId(state) {
      return state.searchedId
    },
    getSearchedPrice(state) {
      return state.searchedPrice
    },
    getSearchedProduct(state) {
      return state.searchedProduct
    }
  },
  mutations: {
    setProductKey(state, { key, value }) {
      state[key] = value
    }
  },
  actions: {
    async searchProduct({ commit }, item) {
      commit('setProductKey', {
        key: 'searchedId',
        value: item.id
      })
      commit('setProductKey', {
        key: 'searchedPrice',
        value: item.price
      })
      commit('setLoading', true)

      const params = {
        id: `*${this.getters.getSearchedId}*`,
        price: `*${this.getters.getSearchedPrice}*`
      }
      try {
        const { data } = await axios.get('https://6452649f4b080307.mokky.dev/items/', { params })

        commit('setProductKey', {
          key: 'searchedProduct',
          value: data[0]
        })
      } catch (error) {
        console.log(error)
      } finally {
        commit('setLoading', false)
      }
    }
  }
}