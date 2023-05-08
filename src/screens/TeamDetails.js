import { useSelector } from "react-redux";
import { StatusBar, Text, ScrollView } from "react-native";
import { HStack, Center, VStack, Box, Spacer } from "native-base";
import ProjectForm from "../components/forms/ProjectForm";
import AddButton from "../components/AddButton";
import Members from "../components/Members";
import UserTag from "../components/UserTag";
import OverviewCard from "../components/OverviewCard";
import Header from "../components/Header";

const TeamDetails = ({ navigation }) => {
  const theme = useSelector((state) => state.themes);

  const data = ["1", "2", "3", "4", "5", "6", "7"];

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
            Equipo A
          </Text>
          <HStack w={96} space={5}>
            <Members />
            <Spacer />
            <VStack space={2}>
              <Text style={{ color: theme.colors.supportText }}>
                Líder del equipo
              </Text>
              <UserTag size="md" />
            </VStack>
          </HStack>
          <VStack w={96} space={2}>
            <Text style={{ color: theme.colors.supportText }}>Descripción</Text>
            <Text style={{ color: theme.colors.foreground, fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              saepe, impedit accusamus delectus vero architecto excepturi
              blanditiis corrupti nesciunt nih rutrum mollis libero, at aliquam
              mauris laoreet quis. Phasellus eget enim.
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
              Proyectos
            </Text>
            {data.map((item) => (
              <OverviewCard
                progress={90}
                title="Proyecto 1"
                onPress={() => navigation.navigate("ProjectDetails")}
                description={
                  "Unlock powerfull time-saving tools for creating email delivery and collecting marketing data"
                }
              />
            ))}
          </VStack>
        </VStack>
      </ScrollView>
      <AddButton>
        <ProjectForm />
      </AddButton>
    </>
  );
};

export default TeamDetails;
