import { useSelector } from "react-redux";
import { HStack, VStack } from "native-base";
import { View, StatusBar, Text, ScrollView } from "react-native";
import OverviewCard from "../components/OverviewCard";
import AddButton from "../components/AddButton";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/forms/TaskForm";
import Header from "../components/Header";

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

      <Header navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", padding: 10 }}
        style={{
          marginTop: 75,
          backgroundColor: theme.colors.background,
        }} /* alignItems="center" flex={1} bg={theme.colors.background} */
      >
        {/* <VStack space={4}> */}

        <VStack space={4}>
          <Text
            style={{
              fontSize: 18,
              marginTop: 10,
              color: theme.colors.foreground,
              fontWeight: 500,
            }}
          >
            Mis tareas para hoy
          </Text>
          {data.map((item) => (
            <VStack
              py={3}
              px={5}
              space={2}
              borderColor={theme.colors.secondary}
              borderWidth={1}
              borderRadius={12}
            >
              <Text
                style={{
                  color: theme.colors.foreground,
                  fontSize: 20 /* marginTop: 10, marginLeft: 10 */,
                }}
              >
                Proyecto 1
              </Text>
              <TaskItem
                onPress={() => navigation.navigate("TaskDetails")}
                showDescription={true}
              />
              <TaskItem
                onPress={() => navigation.navigate("TaskDetails")}
                showDescription={true}
              />
              <TaskItem
                onPress={() => navigation.navigate("TaskDetails")}
                showDescription={true}
              />
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

export default DailyTasks;
