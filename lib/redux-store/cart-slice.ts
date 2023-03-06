import { createSlice } from '@reduxjs/toolkit'

import { toast } from 'react-hot-toast'

const initialCartState = {
  showCart: false,
  cartItems: [],
  subTotal: 0,
  totalQuantity: 0,
  isCheckingOut: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart
    },
    incCartItemQuantity(state, action) {
      const id = action.payload
      const foundItemIndex = state.cartItems.findIndex(
        (item) => item._id === id
      )
      state.cartItems[foundItemIndex].quantity++
      state.totalQuantity++
      state.subTotal += state.cartItems[foundItemIndex].price
    },
    decCartItemQuantity(state, action) {
      const id = action.payload
      const foundItemIndex = state.cartItems.findIndex(
        (item) => item._id === id
      )

      if (state.cartItems[foundItemIndex].quantity === 1) return
      state.cartItems[foundItemIndex].quantity--
      state.totalQuantity--
      state.subTotal -= state.cartItems[foundItemIndex].price
    },

    addItemToCart(state, action) {
      const newItem = action.payload

      state.totalQuantity += newItem.quantity
      state.subTotal += newItem.price * newItem.quantity

      const existingItemIndex = state.cartItems.findIndex(
        (item) => item._id === newItem._id
      )
      if (existingItemIndex > -1) {
        state.cartItems[existingItemIndex].quantity += newItem.quantity
      }
      if (existingItemIndex === -1) {
        state.cartItems.push(newItem)
      }

      toast.success(`${newItem.quantity} ${newItem.name} added to the cart.`)
    },
    removeItemFromCart(state, action) {
      const id = action.payload
      const foundItem = state.cartItems.find((item) => item._id === id)

      state.totalQuantity -= foundItem.quantity
      state.subTotal -= foundItem.price * foundItem.quantity

      state.cartItems = state.cartItems.filter((item) => item._id !== id)

      toast.success(`${foundItem.name} removed from the cart.`)
    },
    setIsCheckingOut(state, action) {
      state.isCheckingOut = action.payload
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
