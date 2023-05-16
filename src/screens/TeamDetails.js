import { useSelector } from "react-redux";
import { useGetTeamQuery, useDeleteTeamMutation, useGetUsersQuery } from "../api/apiSlice";
import { StatusBar, Text, ScrollView } from "react-native";
import { HStack, Center, VStack, Box, Spacer, Actionsheet, useDisclose } from "native-base";
import ProjectForm from "../components/forms/ProjectForm";
import AddButton from "../components/AddButton";
import Members from "../components/Members";
import UserTag from "../components/UserTag";
import OverviewCard from "../components/OverviewCard";
import Header from "../components/Header";
import TeamForm from "../components/forms/TeamForm";

const TeamDetails = ({ route, navigation }) => {
  const theme = useSelector((state) => state.themes);
  const currentUser = useSelector((state) => state.auth);
  const { isOpen, onOpen, onClose } = useDisclose();
  const { team_id } = route.params;
  const { data: team, isSuccess } = useGetTeamQuery(team_id);
  const { data: users, isSuccess: isSuccessUsers } = useGetUsersQuery()
  const [deleteTeam] = useDeleteTeamMutation();
  const projects = useSelector((state) => state.projects);
  const teamProjects = projects.filter(
    (project) => project.team_id === team_id
  );

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.background}
        barStyle={theme.type == "light" ? "dark-content" : "light-content"}
      />

      <Header showOptions={isSuccess && team.leader === currentUser.id} onPressEdit={onOpen} onDelete={() => deleteTeam(team_id)} stackHeader={true} navigation={navigation} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", padding: 10 }}
        style={{
          marginTop: 75,
          backgroundColor: theme.colors.background,
        }}
      >
        {isSuccess && (
          <VStack space={4}>
            <Text
              style={{
                // marginTop: 10,
                // fontWeight: 500,
                fontSize: 28,
                color: theme.colors.foreground,
              }}
            >
              {team.name}
            </Text>
            <HStack w={96} space={5}>
              <Members members={team.members.map(id => users.find(user => user.id === id))} />
              <Spacer />
              <VStack space={2}>
                <Text style={{ color: theme.colors.supportText }}>
                  Líder del equipo
                </Text>
                <UserTag name={users.find(user => user.id === team.leader).name} size="md" />
              </VStack>
            </HStack>
            <VStack w={96} space={2}>
              <Text style={{ color: theme.colors.supportText }}>
                Descripción
              </Text>
              <Text
                style={{
                  color: theme.colors.foreground,
                  fontSize: 16,
                  textAlign: "justify",
                }}
              >
                {team.description}
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
              {teamProjects.map((project) => (
                <OverviewCard
                  progress={project.progress}
                  title={project.name}
                  members={project.members}
                  description={project.description}
                  onPress={() =>
                    navigation.navigate("ProjectDetails", { project })
                  }
                />
              ))}
            </VStack>
          </VStack>
        )}
        <Actionsheet
          isOpen={isOpen}
          onClose={onClose}
          bg={
            theme.type == "light"
              ? "rgba(0, 0, 0, 0.35)"
              : "rgba(0, 0, 0, 0.45)"
          }
        >
          <Actionsheet.Content
            bg={theme.colors.background}
            _dragIndicator={{ bg: theme.colors.supportText }}
          >
            <TeamForm onClose={onClose} data={team} editMode={true}/>
          </Actionsheet.Content>
        </Actionsheet>
      </ScrollView>

      {/* <AddButton>
        <ProjectForm />
      </AddButton> */}
    </>
  );
};

export default TeamDetails;
