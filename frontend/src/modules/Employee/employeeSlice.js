import { createSlice } from '@reduxjs/toolkit'

//initial
const initialState = {
  value: 0,
}

export const employeeSlice = createSlice({
  name: 'employee',
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
export const employeeActions = employeeSlice.actions;

// Selectors
export const selectorIsLogin = (state) => state.employee.value;

// Reducer
const employeeReducer = employeeSlice.reducer;
export default employeeReducer;