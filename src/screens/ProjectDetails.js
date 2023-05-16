import { useSelector } from "react-redux";
import { StatusBar, Text, ScrollView } from "react-native";
import { HStack, Center, VStack, Box, Spacer } from "native-base";
import TaskForm from "../components/forms/TaskForm";
import AddButton from "../components/AddButton";
import Members from "../components/Members";
import UserTag from "../components/UserTag";
import ProgressBlock from "../components/ProgressBlock";
import TaskItem from "../components/TaskItem";
import Header from "../components/Header";

const ProjectDetails = ({ route, navigation }) => {
  const { project } = route.params;
  const theme = useSelector((state) => state.themes);
  const tasks = useSelector((state) => state.tasks);
  const projectTasks = tasks.filter(task => task.project_id === project.id ).reduce((groups, task) => {
    const status = task.completed ? "completed" : "uncompleted";
    (groups[status] = groups[status] || []).push(task);
    return groups;
  }, {});
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.background}
        barStyle={theme.type == "light" ? "dark-content" : "light-content"}
      />

      <Header stackHeader={true} navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", padding: 10 }}
        style={{
          marginTop: 75,
          backgroundColor: theme.colors.background,
        }}
      >
        <VStack space={4}>
          <Text
            style={{
              // marginTop: 10,
              // fontWeight: 500,
              fontSize: 28,
              color: theme.colors.foreground,
            }}
          >
            {project.name}
          </Text>
          <HStack w={96} space={5}>
            <Members members={project.members} />
            <Spacer />
            <VStack space={2}>
              <Text style={{ color: theme.colors.supportText }}>
                Líder del proyecto
              </Text>
              <UserTag name={project.leader.name} size="md" />
            </VStack>
          </HStack>
          <Box w={96}>
            <ProgressBlock percentage={project.progress} />
          </Box>
          <VStack w={96} space={2}>
            <Text style={{ color: theme.colors.supportText }}>Descripción</Text>
            <Text
              style={{
                color: theme.colors.foreground,
                fontSize: 16,
                textAlign: "justify",
              }}
            >
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              saepe, impedit accusamus delectus vero architecto excepturi
              blanditiis corrupti nesciunt nih rutrum mollis libero, at aliquam
              mauris laoreet quis. Phasellus eget enim. */}
              {project.description}
            </Text>
          </VStack>
          <VStack space={4} mt={6}>
            <Text
              style={{
                fontSize: 18,
                color: theme.colors.foreground,
                fontWeight: 500,
              }}
            >
              Tareas
            </Text>
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
                Pendientes
              </Text>
              {projectTasks.uncompleted.map((task) => (
                <TaskItem
                  task={task}
                  onPress={() => navigation.navigate("TaskDetails", {task})}
                  showAssignedTo={true}
                  showDate={true}
                />
              ))}
              {/* <TaskItem
                onPress={() => navigation.navigate("TaskDetails")}
                showAssignedTo={true}
                showDate={true}
              />
              <TaskItem
                onPress={() => navigation.navigate("TaskDetails")}
                showAssignedTo={true}
                showDate={true}
              />
              <TaskItem
                onPress={() => navigation.navigate("TaskDetails")}
                showAssignedTo={true}
                showDate={true}
              /> */}
            </VStack>
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
                Completadas
              </Text>
              {projectTasks.completed.map((task) => (
                <TaskItem
                  task={task}
                  onPress={() => navigation.navigate("TaskDetails", {task})}
                  showAssignedTo={true}
                  showDate={true}
                />
              ))}
              {/* <TaskItem
                onPress={() => navigation.navigate("TaskDetails")}
                completed={true}
                showAssignedTo={true}
                showDate={true}
              />
              <TaskItem
                onPress={() => navigation.navigate("TaskDetails")}
                completed={true}
                showAssignedTo={true}
                showDate={true}
              />
              <TaskItem
                onPress={() => navigation.navigate("TaskDetails")}
                completed={true}
                showAssignedTo={true}
                showDate={true}
              /> */}
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>
      <AddButton>
        <TaskForm />
      </AddButton>
    </>
  );
};

export default ProjectDetails;
