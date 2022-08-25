import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import authReducer from '../modules/Auth/authSlice';
import userReducer from '../modules/User/userSlice';
import adminReducer from '../modules/Admin/adminSlice';
import employeeReducer from '../modules/Employee/employeeSlice'

export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    admin: adminReducer,
    employee: employeeReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
