import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  name: "",
  email: "",
  id: "",
};

// const EXAMPLE_ENDPOINT = "http://192.168.1.73:3000/tasks";

// _fetchExampleAsync = async () => {
//   console.log('Entró a la función');
//   console.log(EXAMPLE_ENDPOINT);
//   try {
//     let response = await fetch(EXAMPLE_ENDPOINT);
//     let result = await response.json();
//     console.log({result});
//   } catch(e) {
//     console.log({result: e});
//   }
// };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      // console.log('Haciendo petición...');
      // _fetchExampleAsync();
      // // console.log('Terminó de hacer la petición');
      // // fetch("http://192.168.1.73:3000/tasks")
      // //   .then((response) => response.json())
      // //   .then((data) => console.log(data));
      return {
        name: action.payload.name,
        email: action.payload.email,
        id: action.payload.id,
        isLoggedIn: true,
      };
    },
    signOut: (state, action) => {
      return {
        name: "",
        email: "",
        id: "",
        isLoggedIn: false,
      };
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
