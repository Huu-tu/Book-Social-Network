import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const socketSlice = createSlice({
  name:"socket",
  initialState,
  reducers:{
    getDataSocket:(state,action) =>{
      state.value = action.payload
    }
  }
})

export const { getDataSocket } = socketSlice.actions
const socketReducer = socketSlice.reducer
export default socketReducer;
