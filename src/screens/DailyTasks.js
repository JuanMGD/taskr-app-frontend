import { useSelector } from "react-redux";
import { useGetTasksQuery } from "../api/apiSlice";
import { HStack, VStack } from "native-base";
import { View, StatusBar, Text, ScrollView } from "react-native";
import AddButton from "../components/AddButton";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/forms/TaskForm";
import Header from "../components/Header";
// import { useEffect } from "react";
// import OverviewCard from "../components/OverviewCard";

function DailyTasks({ navigation }) {
  const theme = useSelector((state) => state.themes);
  const projects = useSelector((state) => state.projects);
  // const tasks = useSelector((state) => state.tasks);
  const {
    data: tasks,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetTasksQuery();
  // let groupedDailyTasks = [];


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
          {isSuccess &&
            Object.entries(
              tasks.reduce((projects, task) => {
                (projects[task.project_id] =
                  projects[task.project_id] || []).push(task);
                return projects;
              }, {})
            ).map(([projectId, projectTasks]) => (
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
                    fontSize: 20,
                  }}
                >
                  {
                    projects.find(
                      (project) => project.id === parseInt(projectId)
                    ).name
                  }
                </Text>
                {projectTasks.map((task) => (
                  <TaskItem
                    task={task}
                    onPress={() => navigation.navigate("TaskDetails", { task })}
                    showDescription={true}
                  />
                ))}
              </VStack>
            ))}
        </VStack>
      </ScrollView>
      <AddButton>
        <TaskForm />
      </AddButton>
    </>
  );
}

export default DailyTasks;
