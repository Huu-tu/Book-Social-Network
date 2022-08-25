import { createSlice } from '@reduxjs/toolkit'

//initial
const initialState = {
  value: 0,
}

export const adminSlice = createSlice({
  name: 'admin',
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
export const adminActions = adminSlice.actions;

// Selectors
export const selectorIsLogin = (state) => state.admin.value;

// Reducer
const adminReducer = adminSlice.reducer;
export default adminReducer;