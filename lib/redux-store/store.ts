import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart-slice'
import checkoutReducer from './checkout-slice'

import { persistReducer } from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  cart: cartReducer,
  checkout: checkoutReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

type CartItem = {
  _id: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface RootState {
  cart: {
    showCart: boolean
    cartItems: CartItem[]
    totalQuantity: number
    subTotal: number
    quantity: number
    isCheckingOut: boolean
  }
  checkout: {
    phone: string
    address: string
    city: string
    zip: string
  }
}
