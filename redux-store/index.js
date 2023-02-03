import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cart-slice'
import authReducer from './auth-slice'
import checkoutReducer from './checkout-slice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    checkout: checkoutReducer,
  },
})

export default store
