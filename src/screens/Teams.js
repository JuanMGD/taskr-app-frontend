import { useSelector } from "react-redux";
import { useState } from "react";
import { useGetTeamsQuery, useGetUsersQuery } from "../api/apiSlice";
import { HStack, VStack, useDisclose } from "native-base";
import { View, StatusBar, Text, ScrollView } from "react-native";
import OverviewCard from "../components/OverviewCard";
import AddButton from "../components/AddButton";
import TeamForm from "../components/forms/TeamForm";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";


function Teams({ navigation }) {
  const theme = useSelector((state) => state.themes);
  const currentUser = useSelector((state) => state.auth);
  // const teams = useSelector((state) => state.teams);
  const { data: teams, isSuccess } = useGetTeamsQuery()
  const { data: users, isSuccess: isSuccessUsers } = useGetUsersQuery()
  const { isOpen, onOpen, onClose } = useDisclose();
  const [search, setSearch] = useState('')

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
            <SearchBar setSearch={setSearch}/>
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
            {isSuccess && teams.filter(team => team.name.toLowerCase().includes(search.toLowerCase()) && team.members.includes(currentUser.id)).map((team) => (
              <OverviewCard
                // progress={90}
                title={team.name}
                members={team.members.map(id => users.find(user => user.id === id))}
                description={team.description}
                onPress={() => navigation.navigate("TeamDetails", { team_id: team.id })}
              />
            ))}
          </VStack>
      </ScrollView>
      <AddButton isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <TeamForm onClose={onClose} />
      </AddButton>
    </>
  );
}

export default Teams;