// import React from "react";

import { Platform } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "./src/screens/Home";
// import Details from "./src/screens/Details";
// import TabBar from "./src/components/TabBar";
import { NativeBaseProvider, extendTheme } from "native-base";
import Main from "./src/screens/Main";

const Stack = createStackNavigator();

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
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              // transparentCard: true,
            })}
          >
            <Stack.Screen name="Main" component={Main} />
            {/* <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
