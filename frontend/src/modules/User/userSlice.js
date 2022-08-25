import { createSlice } from '@reduxjs/toolkit'

//initial
const initialState = {
  value: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action
export const userActions = userSlice.actions;

// Selectors
export const selectorIsLogin = (state) => state.user.value;

// Reducer
const userReducer = userSlice.reducer;
export default userReducer;