export const updateLocalStorage = (cart) =>
  localStorage.setItem('cart', JSON.stringify(cart))