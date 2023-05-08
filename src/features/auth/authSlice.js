import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      return {
        isLoggedIn: true,
      };
    },
    signOut: (state, action) => {
      return {
        isLoggedIn: false,
      };
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
