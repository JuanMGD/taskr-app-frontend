import { useSelector } from "react-redux";
import { useGetProjectsQuery } from "../api/apiSlice";
import { StatusBar, Text, ScrollView } from "react-native";
import { HStack, VStack, Box, Menu, Pressable } from "native-base";

import StatisticsCard from "../components/StatisticsCard";
import OverviewCard from "../components/OverviewCard";
import Header from "../components/Header";
// import TaskItem from "../components/TaskItem";
// import GradientButton from "../components/GradientButton";
// import AddButton from "../components/AddButton";
// import TeamForm from "../components/forms/TeamForm";

function Home({ navigation }) {
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
            {isSuccess &&
              projects.map((project) => (
                <OverviewCard
                  key={`project-${project.id}`}
                  title={project.name}
                  progress={project.progress}
                  members={project.members}
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
        </VStack>
      </ScrollView>
      {/* <AddButton>
        <TeamForm />
      </AddButton> */}
    </>
  );
}

// const

export default Home;
