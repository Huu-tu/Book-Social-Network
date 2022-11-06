import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import profileReducer from '../app/features/profile/profileSlice';
import socketReducer from '../app/features/socket/socketSlice'
import postReducer from "./features/post/postSlice";

export const rootReducer = combineReducers({
    profile: profileReducer,
    socket: socketReducer,
    post: postReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
          serializableCheck: false,
      }),
});
