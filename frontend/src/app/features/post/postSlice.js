import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const postSlice = createSlice({
  name:"post",
  initialState,
  reducers:{
    getDataPost:(state,action)=>{
      state.value = action.payload
    },
  }
})

export const { getDataPost } = postSlice.actions
const postReducer = postSlice.reducer;
export default postReducer;
