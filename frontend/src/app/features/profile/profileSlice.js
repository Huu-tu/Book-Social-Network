import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const profileSlice = createSlice({
  name:"profile",
  initialState,
  reducers:{
    getDataUser:(state,action)=>{
      state.value = action.payload
    },
  }
})

export const { getDataUser } = profileSlice.actions
const profileReducer = profileSlice.reducer;
export default profileReducer;
