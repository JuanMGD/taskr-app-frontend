import { useSelector } from "react-redux";
import { useGetProjectsQuery } from "../api/apiSlice";
import { HStack, VStack } from "native-base";
import { View, StatusBar, Text, ScrollView } from "react-native";
import OverviewCard from "../components/OverviewCard";
import AddButton from "../components/AddButton";
import ProjectForm from "../components/forms/ProjectForm";
import Header from "../components/Header";

function Projects({ navigation }) {
  const theme = useSelector((state) => state.themes);
  // const projects = useSelector((state) => state.projects);
  const { data: projects, isSuccess } = useGetProjectsQuery();

  // const data = ["1", "2", "3", "4", "5", "6", "7"];

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
            Todos los proyectos
          </Text>
          {isSuccess &&
            projects.map((project) => (
              <OverviewCard
                progress={project.progress}
                title={project.name}
                members={project.members}
                description={project.description}
                onPress={() =>
                  navigation.navigate("ProjectDetails", { project })
                }
                // description={
                //   "Unlock powerfull time-saving tools for creating email delivery and collecting marketing data"
                // }
              />
            ))}
        </VStack>
        {/* <TaskItem showDate={true} showAssignedTo={true} />
          <TaskItem showDescription={true} />
          <GradientButton /> */}
        {/* </VStack> */}
      </ScrollView>
      <AddButton>
        <ProjectForm />
      </AddButton>
    </>
  );
}

export default Projects;
