import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import { HStack, Center, VStack, Box } from "native-base";

import StatisticsCard from "../components/StatisticsCard";
import OverviewCard from "../components/OverviewCard";
import TaskItem from "../components/TaskItem";
import GradientButton from "../components/GradientButton";
import AddButton from "../components/AddButton";
import TeamForm from "../components/forms/TeamForm";
import Details from "./Details";

const HomeScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // transparentCard: true,
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Details" component={Details} /> */}
    </Stack.Navigator>
  );
};

function Home({ navigation }) {
  const theme = useSelector((state) => state.themes);

  const data = ["1", "2", "3", "4", "5", "6", "7"];

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.background}
        barStyle={theme.type == "light" ? "dark-content" : "light-content"}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", padding: 10 }}
        style={{
          backgroundColor: theme.colors.background,
        }} /* alignItems="center" flex={1} bg={theme.colors.background} */
      >
        <VStack space={4}>
          <Text
            style={{
              fontSize: 18,
              marginTop: 10,
              color: theme.colors.foreground,
              fontWeight: 500,
            }}
          >
            Estadísticas de proyectos
          </Text>
          <HStack space={5} mb={6}>
            <StatisticsCard
              iconName={"settings"}
              amount={12}
              title={"Proyectos en progreso"}
              bgColor={theme.colors.primary}
            />
            <StatisticsCard
              iconName={"check"}
              amount={52}
              title={"Proyectos completados"}
              bgColor={theme.colors.tertiary}
            />
          </HStack>
          <VStack space={4}>
            <Text
              style={{
                fontSize: 18,
                color: theme.colors.foreground,
                fontWeight: 500,
              }}
            >
              Proyectos recientes
            </Text>
            {data.map((item) => (
              <OverviewCard
                title="Proyecto 1"
                progress={90}
                onPress={() => navigation.navigate("Details")}
                // description={
                //   "Unlock powerfull time-saving tools for creating email delivery and collecting marketing data"
                // }
              />
            ))}
          </VStack>
          {/* <TaskItem showDate={true} showAssignedTo={true} />
          <TaskItem showDescription={true} />
          <GradientButton /> */}
        </VStack>
      </ScrollView>
      {/* <AddButton>
        <TeamForm />
      </AddButton> */}
    </>
  );
}

// const

export default HomeScreen;
