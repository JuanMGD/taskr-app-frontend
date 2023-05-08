import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import { apiSlice } from "../api/apiSlice";
import themeReducer from '../features/themes/themeSlice'
import authReducer from '../features/auth/authSlice'
// import

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    themes: themeReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(pokemonApi.middleware),
});

// setupListeners(store.dispatch)
