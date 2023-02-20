import { createSlice } from '@reduxjs/toolkit'

const initialCheckoutState = {
  phone: '',
  address: '',
  city: '',
  zip: '',
}

const checkoutSlice = createSlice({
  name: 'order',
  initialState: initialCheckoutState,
  reducers: {
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
  },
})

export const { setPhone, setAddress, setCity, setZip } = checkoutSlice.actions

export default checkoutSlice.reducer
