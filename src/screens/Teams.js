import { useSelector } from "react-redux";
import { HStack, VStack } from "native-base";
import { View, StatusBar, Text, ScrollView } from "react-native";
import OverviewCard from "../components/OverviewCard";
import AddButton from "../components/AddButton";
import TeamForm from "../components/forms/TeamForm";
import Header from "../components/Header";


function Teams({ navigation }) {
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
              Mis equipos
            </Text>
            {data.map((item) => (
              <OverviewCard
                // progress={90}
                title="Equipo A"
                onPress={() => navigation.navigate("TeamDetails")}
                description={
                  "Unlock powerfull time-saving tools for creating email delivery and collecting marketing data"
                }
              />
            ))}
          </VStack>
          {/* <TaskItem showDate={true} showAssignedTo={true} />
          <TaskItem showDescription={true} />
          <GradientButton /> */}
        {/* </VStack> */}
      </ScrollView>
      <AddButton>
        <TeamForm />
      </AddButton>
    </>
  );
}

export default Teams;