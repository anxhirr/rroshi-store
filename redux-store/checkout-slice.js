import { createSlice } from '@reduxjs/toolkit'

const initialCheckoutState = {
  isCheckingOut: false,
  phone: '',
  address: '',
  city: '',
  zip: '',
  shënime: '',
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: initialCheckoutState,
  reducers: {
    setIsCheckingOut(state, action) {
      state.isCheckingOut = action.payload
    },
    setPhone(state, action) {
      state.phone = action.payload
    },
    setAddress(state, action) {
      state.address = action.payload
    },
    setCity(state, action) {
      state.city = action.payload
    },
    setZip(state, action) {
      state.zip = action.payload
    },
    setShënime(state, action) {
      state.shënime = action.payload
    },
  },
})

export const checkoutActions = checkoutSlice.actions
export default checkoutSlice.reducer
