export default {
  state() {
    return {
      items: [{
        id: 1,
        title: 'Молоко',
        price: 123,
        description: 'Очень вкусное молоко',
        category: 'Молочные продукты',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: {
          rate: 3.9,
          count: 120
        }
      },
        {
          id: 2,
          title: 'Молоко',
          price: 10200,
          description: 'Очень вкусное молоко',
          category: 'Молочные продукты',
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          rating: {
            rate: 3.9,
            count: 120
          }
        },
        {
          id: 3,
          title: 'Молоко',
          price: 100,
          description: 'Очень вкусное молоко',
          category: 'Молочные продукты',
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          rating: {
            rate: 3.9,
            count: 120
          }
        },
        {
          id: 4,
          title: 'Молоко',
          price: 5000,
          description: 'Очень вкусное молоко',
          category: 'Молочные продукты',
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          rating: {
            rate: 3.9,
            count: 120
          }
        }
      ]
    }
  },
  getters: {
    getItemsList(state) {
      return state.items
    }
  }
}