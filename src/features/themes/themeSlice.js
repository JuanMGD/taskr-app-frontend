import { createSlice } from "@reduxjs/toolkit";
import themes from "../../themes";

const initialState = themes.dark

export const themeSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
