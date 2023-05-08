import { useSelector } from "react-redux";
import { StatusBar, Text, ScrollView } from "react-native";
import { HStack, VStack } from "native-base";

import StatisticsCard from "../components/StatisticsCard";
import OverviewCard from "../components/OverviewCard";
import Header from "../components/Header";
// import TaskItem from "../components/TaskItem";
// import GradientButton from "../components/GradientButton";
// import AddButton from "../components/AddButton";
// import TeamForm from "../components/forms/TeamForm";

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
            {data.map((item) => (
              <OverviewCard
                title="Proyecto 1"
                progress={90}
                onPress={() => navigation.navigate("ProjectDetails")}
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
