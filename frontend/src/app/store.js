import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import adminReducer from '../modules/Admin/adminSlice';
import profileReducer from '../app/features/profile/profileSlice';
import socketReducer from '../app/features/socket/socketSlice'

export const rootReducer = combineReducers({
    admin: adminReducer,
    profile: profileReducer,
    socket: socketReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
          serializableCheck: false,
      }),
});
