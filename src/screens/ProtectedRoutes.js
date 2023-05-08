import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Main";
import ProjectDetails from "./ProjectDetails";
import TeamDetails from "./TeamDetails";
import TaskDetails from "./TaskDetails";
import Settings from "./Settings";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Stack = createStackNavigator();

const ProtectedRoutes = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Stack.Navigator
    // screenOptions={({ route }) => ({
    // headerShown: false,
    // transparentCard: true,
    // })}
    >
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="Main"
            component={Main}
            options={({ route }) => ({
              headerShown: false,
              // transparentCard: true,
            })}
          />
          <Stack.Screen
            name="ProjectDetails"
            component={ProjectDetails}
            options={{
              // header: (navigationProps) => (
              //   <Header stackHeader={true} {...navigationProps} />
              // ),
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TeamDetails"
            component={TeamDetails}
            options={{
              // header: (navigationProps) => (
              //   <Header stackHeader={true} {...navigationProps} />
              // ),
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TaskDetails"
            component={TaskDetails}
            options={{
              // header: (navigationProps) => (
              //   <Header stackHeader={true} {...navigationProps} />
              // ),
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={({ route }) => ({
              // header: (navigationProps) => (
              //   <Header stackHeader={true} {...navigationProps} />
              // ),
              headerShown: false,
            })}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={({ route }) => ({
              headerShown: false,
            })}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ProtectedRoutes;
