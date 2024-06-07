import { index } from '@/store'
import { updateLocalStorage } from '@/composables/updateStorage'

export const onAction = (item, action) => index.dispatch(action, item).then(() => updateLocalStorage(index.getters.getCartItemsList))

