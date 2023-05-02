import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { HStack, VStack } from "native-base";
import { View, StatusBar, Text, ScrollView } from "react-native";
import OverviewCard from "../components/OverviewCard";
import AddButton from "../components/AddButton";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/forms/TaskForm";

const DailyTasksScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // transparentCard: true,
      })}
    >
      <Stack.Screen name="DailyTasks" component={DailyTasks} />
      {/* <Stack.Screen name="Details" component={Details} /> */}
    </Stack.Navigator>
  );
};

function DailyTasks({ navigation }) {
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
        contentContainerStyle={{ alignItems: "center", padding: 10, }}
        style={{
          backgroundColor: theme.colors.background,
        }} /* alignItems="center" flex={1} bg={theme.colors.background} */
      >
        {/* <VStack space={4}> */}

        <VStack space={4}>
          <Text
            style={{
              fontSize: 18,
              color: theme.colors.foreground,
              fontWeight: 500,
            }}
          >
            Mis tareas para hoy
          </Text>
          {data.map((item) => (
            <VStack
            //   p={1}
              space={2}
              borderColor={theme.colors.secondary}
              borderWidth={1}
              borderRadius={12}
            >
              <Text style={{ color: theme.colors.foreground, fontSize: 20, marginTop: 10, marginLeft: 10 }}>
                Proyecto 1
              </Text>
              <TaskItem showDescription={true} />
              <TaskItem showDescription={true} />
              <TaskItem showDescription={true} />
            </VStack>
          ))}
        </VStack>
        {/* <TaskItem showDate={true} showAssignedTo={true} />
          <TaskItem showDescription={true} />
          <GradientButton /> */}
        {/* </VStack> */}
      </ScrollView>
      <AddButton>
        <TaskForm />
      </AddButton>
    </>
  );
}

export default DailyTasksScreen;
