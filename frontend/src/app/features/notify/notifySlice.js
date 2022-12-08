import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
};

export const notifySlice = createSlice({
  name:"notify",
  initialState,
  reducers:{
    getDataNotify:(state,action)=>{
      return{
        ...state,
        data: [action.payload, ...state.data]
      }
      // state.value = action.payload
    },
  }
})

export const { getDataNotify } = notifySlice.actions
const notifyReducer = notifySlice.reducer;
export default notifyReducer;
