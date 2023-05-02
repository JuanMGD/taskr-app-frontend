import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Teams from "./Teams";
import Projects from "./Projects";
import DailyTasks from "./DailyTasks";
import Details from "./Details";
import TabBar from "../components/TabBar";
import LogoTitle from "../components/LogoTitle";
import UserTag from "../components/UserTag";
import { Button } from "react-native";
import Header from "../components/Header";
import Feather from "@expo/vector-icons/Feather";
// import Feat

const Tab = createBottomTabNavigator();

const Main = () => {
  const theme = useSelector((state) => state.themes);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarActiveTintColor: "#079DC7",
        // tabBarInactiveTintColor: "#F5F9FC",
        tabBarStyle: {
          // padding: 16,
          // backgroundColor: "#2D173E",
          // alignItems: 'center'
          //   borderTopColor: "#472662",
          //   borderTopWidth: 1,
          //   height: 55,
        },
        // tabBarItemStyle: {
        // alignSelf: 'center'
        // },
        // navigation
        // tabBarBackground: '#F5F9FC'
        // headerShown: false
        // transparentCard: true,
        headerStyle: {
          backgroundColor: theme.colors.background,
          borderBottomColor: theme.colors.secondary,
          borderBottomWidth: 1,
        },
        // headerTitle: (props) => <LogoTitle  {...props} />,
        // headerRight: () => <UserTag size="sm" imageFirst={false} mr='20'/>,
        header: (navigationProps) => <Header {...navigationProps} />,
      })}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="grid" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Equipos"
        component={Teams}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Proyectos"
        component={Projects}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="clipboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tareas"
        component={DailyTasks}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="check-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
