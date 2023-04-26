import { createSlice } from "@reduxjs/toolkit";
import themes from "../../themes";

const initialState = themes.dark

export const themeSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    // addTask: (state, action) => {
    //     state.push(action.payload)
    //     // return [...state, action.payload]
    // },
    changeTheme: (state, action) => {
      // const { id, title, description } = action.payload

      state = action.payload;
      // const foundTask = state.find(task => task.id === id)
      // if (foundTask) {
      //     foundTask.title = title;
      //     foundTask.description = description;
      // }

      // return state.map(task => task.id !== id ? task : {...task, title, description})
    },
    // deleteTask: (state, action) => {
    //     const taskFoundIndex = state.findIndex(task => task.id === action.payload)
    //     if (taskFoundIndex !== -1)
    //         state.splice(taskFoundIndex, 1)

    //     // return state.filter(task => task.id !== action.payload)
    // },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
