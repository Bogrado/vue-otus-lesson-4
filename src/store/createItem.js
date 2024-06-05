import axios from 'axios'

export default {
  state() {
    return {
      id: 0,
      item: {
        title: '',
        price: 0,
        description: '',
        category: '',
        image: ''
      }
    }
  },
  getters: {
    getItemBeingCreated(state) {
      return state.item
    }
  },
  mutations: {
    setItemKey(state, { key, value }) {
      state.item[key] = value
    },
    setId(state, value) {
      state.item.id = value
    },



    clearKeys(state) {
      if (state.item.id)
        this.commit('setId', 0)
      for (let key in state.item) {
        if (key === 'price')
          this.commit('setItemKey', { key, value: 0 })
        this.commit('setItemKey', { key, value: '' })
      }
    }
  },
  actions: {
    async postItem({ commit }, item) {
      commit('setId', Date.now())
      try {
        await axios.post('https://6452649f4b080307.mokky.dev/items', {
          ...item,
          id: item.id,
          rating: { rate: 0, count: 0 }
        })
        commit('clearKeys')

      } catch (error) {
        console.log(error)
      }
    }
  }
}