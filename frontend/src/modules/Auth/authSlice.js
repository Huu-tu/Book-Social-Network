import { createSlice } from '@reduxjs/toolkit'

//initial
const initialState = {
  login: false,
  isLogin: false,
  currentUser: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.login = true;
    },
    loginSuccess: (state) =>{
      state.isLogin = true;
      state.login = false;
    },
    loginFailed: (state) =>{
      state.login = false;
    },
    logOut: (state)  =>{
      state.isLogin = false;
      state.currentUser = undefined;
    },
  },
})

// Action
export const authActions = authSlice.actions;

// Selectors
export const selectorIsLogin = (state) => state.auth.isLogin;
export const selectorLogin = (state) => state.auth.login;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;