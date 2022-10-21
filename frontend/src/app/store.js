import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import authReducer from '../modules/Auth/authSlice';
import userReducer from '../modules/User/userSlice';
import adminReducer from '../modules/Admin/adminSlice';

export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    admin: adminReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
