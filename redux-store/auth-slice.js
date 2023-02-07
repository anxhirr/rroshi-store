import { createSlice } from '@reduxjs/toolkit'
import cookie from 'js-cookie'

const loadUserUID = () => {
  const userUID = cookie.get('userUID')
  return userUID ? userUID : null
}

const initalAuthState = {
  userUID: loadUserUID(),
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initalAuthState,
  reducers: {
    setUserUID(state, action) {
      state.userUID = action.payload
    },
  },
})

export const authActions = authSlice.actions

export default authSlice.reducer
