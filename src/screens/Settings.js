import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../features/themes/themeSlice";
import { signOut } from "../features/auth/authSlice";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  Avatar,
  HStack,
  VStack,
  Spacer,
  Center,
  Box,
  Icon,
  Actionsheet,
  useDisclose,
} from "native-base";
import Feather from "@expo/vector-icons/Feather";
import SelectionList from "../components/SelectionList";
import Header from "../components/Header";

import themes from "../themes";

const Settings = ({ navigation }) => {
  const theme = useSelector((state) => state.themes);
  const currentUser = useSelector((state) => state.auth);
  const themeOptions = Object.keys(themes).map((key, index) => ({
    ...themes[key],
    key,
    index,
  }));
  const { isOpen, onOpen, onClose } = useDisclose();
  // const [selected, setSelected] = useState([themeOptions.findIndex(option => option.name === theme.name)]);
  const [selected, setSelected] = useState([theme.name]);
  const dispatch = useDispatch();

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.background}
        barStyle={theme.type == "light" ? "dark-content" : "light-content"}
      />

      <Header stackHeader={true} showOptions={false} navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", padding: 10, flex: 1 }}
        style={{
          marginTop: 75,
          backgroundColor: theme.colors.background,
        }}
      >
        <VStack
          space={4}
          alignItems="center"
          w={96}
          flex={1}
          bgColor={theme.colors.background}
        >
          <Avatar
            bg={theme.colors.secondary}
            alignSelf="center"
            size="xl"
            source={{
              // uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
            }}
          >
            {currentUser.isLoggedIn && currentUser.name
              .split(" ")
              .map((n, i) => (i < 2 ? n[0].toUpperCase() : ""))
              .join(" ")}
          </Avatar>
          <Text
            style={{
              marginBottom: 50,
              fontSize: 28,
              color: theme.colors.foreground,
              // fontWeight: 500,
              //   fontWeight: "regular",
              //   maxWidth: "90%",
              //   width: "90%",
            }}
          >
            {currentUser.name}
          </Text>
          <View style={{ width: "96%" }}>
            <HStack space={2} alignItems="center">
              <Icon
                //   borderColor={theme.colors.primary}
                //   borderRadius={20}
                color={theme.colors.foreground}
                as={Feather}
                name="user"
                size={5}
              />
              <Text style={{ fontSize: 16, color: theme.colors.foreground }}>
                Cuenta
              </Text>
              <Spacer />
              <Text style={{ color: theme.colors.supportText }}>
                {currentUser.email}
              </Text>
            </HStack>
          </View>
          <TouchableOpacity
            onPress={onOpen}
            style={{ width: "96%", marginTop: 25 }}
          >
            <HStack space={2} alignItems="center">
              <Icon
                //   borderColor={theme.colors.primary}
                //   borderRadius={20}
                color={theme.colors.foreground}
                as={Feather}
                name="sun"
                size={5}
              />
              <Text style={{ fontSize: 16, color: theme.colors.foreground }}>
                Tema
              </Text>
              <Spacer />
              <Text style={{ color: theme.colors.supportText }}>
                {theme.name}
              </Text>
              <Icon
                //   borderColor={theme.colors.primary}
                //   borderRadius={20}
                color={theme.colors.supportText}
                as={Feather}
                name="chevron-right"
                size={4}
              />
            </HStack>
          </TouchableOpacity>
          <Spacer />
          <TouchableOpacity onPress={() => dispatch(signOut())}>
            <Text
              style={{
                color: "#E2445C",
                textAlign: "center",
                marginBottom: 45,
                fontSize: 16,
              }}
            >
              Cerrar sesión de Taskr
            </Text>
          </TouchableOpacity>
        </VStack>
      </ScrollView>
      <Actionsheet
        isOpen={isOpen}
        onClose={onClose}
        bg={
          theme.type == "light" ? "rgba(0, 0, 0, 0.35)" : "rgba(0, 0, 0, 0.45)"
        }
      >
        <Actionsheet.Content
          bg={theme.colors.background}
          _dragIndicator={{ bg: theme.colors.supportText }}
        >
          <VStack width="90%" mx="3" mb="4" space={4}>
            <Text
              style={{
                color: theme.colors.foreground,
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Elige el tema
            </Text>
            <SelectionList
              single={true}
              selected={selected}
              setSelected={setSelected}
              data={themeOptions}
              itemKey="name"
              ItemElement={(selectedTheme) => (
                <Text style={{ color: theme.colors.foreground }}>
                  {selectedTheme.name}
                </Text>
              )}
              onSelect={(themeName) =>
                dispatch(
                  changeTheme(
                    Object.values(themes).find(
                      (option) => option.name === themeName
                    )
                  )
                )
              }
            />
          </VStack>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};

export default Settings;
