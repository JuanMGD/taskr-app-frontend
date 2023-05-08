import { useState } from "react";
import { useSelector } from "react-redux";
import { Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import {
  Box,
  Pressable,
  HStack,
  VStack,
  Checkbox,
  Badge,
  Spacer,
  Flex,
  Icon,
} from "native-base";
import UserTag from "./UserTag";

const TaskItem = ({
  showDate = false,
  showAssignedTo = false,
  showDescription = false,
  completed=false,
  onPress,
}) => {
  const theme = useSelector((state) => state.themes);

  const [checked, setChecked] = useState(completed);

  return (
    <Box alignItems="center" maxW="96%">
      <Pressable
        onPress={() => onPress()}
        rounded="12"
        overflow="hidden"
        borderWidth="1"
        borderColor={theme.colors.background}
        maxW="100%"
        // w="100%"
        w={96}
        // shadow="3"
        bg={theme.colors.background}
        py="2"
      >
        <Box>
          <HStack alignItems="center" justifyContent="space-between">
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
              mr={-1}
              icon={<Icon as={<Feather name="check" />} />}
              accessibilityLabel="Checkbox to mark the task as complete"
            />
            <VStack /* onPress={() => setChecked(!checked)} */>
              <Text
                numberOfLines={1}
                style={{
                  color: theme.colors.foreground,
                  textDecorationLine: checked ? "line-through" : "none",
                  fontWeight: checked ? "500" : "regular",
                  textDecorationColor: theme.colors.foreground,
                  maxWidth: "95%",
                }}
              >
                UX Research
              </Text>
              {showDate && (
                <Text style={{ color: theme.colors.supportText, fontSize: 12 }}>
                  mar., 29 de feb
                </Text>
              )}
            </VStack>
            {showDescription && (
              <Text
                numberOfLines={1}
                style={{ color: theme.colors.supportText, maxWidth: "30%", /* marginTop: 8  */ }}
              >
                Lorem ipsum dolor
              </Text>
            )}
            {showAssignedTo && (
              <VStack maxWidth='30%' space={0.5}>
                <Text style={{ color: theme.colors.supportText, fontSize: 12 }}>
                  Responsable
                </Text>
                <UserTag />
              </VStack>
            )}
            <Badge
              m={1}
              colorScheme={checked ? "success" : "warning"}
              alignSelf="center"
              variant="subtle"
            >
              {checked ? "Completado" : "En progreso"}
            </Badge>
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );
};

export default TaskItem;
