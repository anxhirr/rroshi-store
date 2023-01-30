import { createSlice } from '@reduxjs/toolkit'

const initalAuthState = {
  isAuthenticated: false,
  regUserName: '',
  regEmail: '',
  regPassword: '',
  email: '',
  password: '',
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initalAuthState,
  reducers: {
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload
    },
    setRegUserName(state, action) {
      state.regUserName = action.payload
    },
    setRegEmail(state, action) {
      state.regEmail = action.payload
    },
    setRegPassword(state, action) {
      state.regPassword = action.payload
    },
    setEmail(state, action) {
      state.email = action.payload
    },
    setPassword(state, action) {
      state.password = action.payload
    },
  },
})

export const authActions = authSlice.actions

export default authSlice.reducer
