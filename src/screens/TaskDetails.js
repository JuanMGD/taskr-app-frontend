import { useSelector } from "react-redux";
import { useState } from "react";
import { StatusBar, Text, ScrollView } from "react-native";
import {
  HStack,
  Center,
  VStack,
  Box,
  Spacer,
  Badge,
  Checkbox,
  Icon,
  TextArea,
  FormControl,
} from "native-base";
import UserTag from "../components/UserTag";
import Feather from "@expo/vector-icons/Feather";
import Header from "../components/Header";

const TaskDetails = ({ navigation }) => {
  const theme = useSelector((state) => state.themes);
  const [checked, setChecked] = useState(false);

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
          <HStack w={96} alignItems="flex-start" justifyContent="space-between">
            <Checkbox
              size="lg"
              // value="one"
              borderRadius={100}
              onChange={(value) => setChecked(value)}
              defaultIsChecked={checked}
              // isChecked={checked}
              bg={theme.colors.background}
              borderColor={theme.colors.primary}
              _checked={{
                bg: theme.colors.primary,
                borderColor: theme.colors.primary,
                _pressed: {
                  bg: theme.colors.primary,
                  borderColor: theme.colors.primary,
                },
              }}
              _pressed={{
                borderColor: theme.colors.primary,
              }}
              mt={1}
              mr={2}
              icon={<Icon as={<Feather name="check" />} />}
              accessibilityLabel="Checkbox to mark the task as complete"
            />
            <Spacer />
            <Text
              style={{
                // marginTop: 10,
                // fontWeight: 500,
                textDecorationLine: checked ? "line-through" : "none",
                fontWeight: checked ? "500" : "regular",
                fontSize: 28,
                color: theme.colors.foreground,
                maxWidth: "90%",
                width: "90%",
              }}
            >
              Desarrollo de la estructura de la base de datos
            </Text>
          </HStack>
          <HStack w={96} space={5}>
            <VStack space={2}>
              <Text style={{ color: theme.colors.supportText }}>
                Responsable
              </Text>
              <UserTag size="md" />
            </VStack>
            <Spacer />
            <Badge
              m={1}
              colorScheme={checked ? "success" : "warning"}
              alignSelf="center"
              variant="subtle"
            >
              {checked ? "Completado" : "En progreso"}
            </Badge>
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
          <VStack w={96} space={2}>
            <Text style={{ color: theme.colors.supportText }}>
              Fecha límite
            </Text>
            <Text
              style={{
                color: theme.colors.foreground,
                fontSize: 16,
                marginBottom: 25,
              }}
            >
              mar., 29 de feb
            </Text>
            <FormControl>
              <TextArea
                //   h='20'
                p={3}
                size="md"
                placeholder="Agregar nota"
                borderRadius="xl"
                placeholderTextColor={theme.colors.supportText}
                borderColor={theme.colors.secondary}
                color={theme.colors.foreground}
                // h={200}
                // maxW="300"
                _focus={{
                  borderColor: theme.colors.primary,
                  bg: theme.colors.backgroud,
                }}
              />
            </FormControl>
          </VStack>
        </VStack>
      </ScrollView>
    </>
  );
};

export default TaskDetails;
