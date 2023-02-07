import { createSlice } from '@reduxjs/toolkit'

const initalAuthState = {
  isAuthenticated: false,
  userUID: null,
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initalAuthState,
  reducers: {
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload
    },
    setUserUID(state, action) {
      state.userUID = action.payload
    },
  },
})

export const authActions = authSlice.actions

export default authSlice.reducer
