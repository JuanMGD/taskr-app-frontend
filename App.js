// import React from "react";

import { Platform } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "./src/screens/Home";
// import Details from "./src/screens/Details";
// import TabBar from "./src/components/TabBar";
import { NativeBaseProvider, extendTheme } from "native-base";
import ProtectedRoutes from "./src/screens/ProtectedRoutes";

const theme = extendTheme({
  components: {
    Avatar: {
      sizes: {
        md: {
          width: 10,
          height: 10,
          _text: {
            fontSize: "xs",
          },
        },
      },
    },
  },
});

export default function App() {
  enableScreens();
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <ProtectedRoutes/>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
