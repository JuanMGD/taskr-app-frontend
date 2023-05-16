import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import taskReducer from "../features/tasks/taskSlice";
import projectReducer from "../features/projects/projectSlice";
import teamReducer from "../features/teams/teamSlice";
import themeReducer from "../features/themes/themeSlice";
import authReducer from "../features/auth/authSlice";
// import

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    projects: projectReducer,
    teams: teamReducer,
    themes: themeReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// setupListeners(store.dispatch)
