import { useSelector } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon, HStack, Box } from "native-base";
import { Feather } from "@expo/vector-icons";

const Chip = () => {
  const theme = useSelector((state) => state.themes);

  return (
    <HStack
      alignSelf="flex-start"
      space={2}
      px="2.5"
      py="1"
      bg={theme.colors.secondary}
      borderRadius={20}
      borderColor={theme.colors.secondary}
      borderWidth={1}
    >
      <Text style={{ color: theme.colors.foreground }}>usuario@taskr.com</Text>
      <TouchableOpacity
        style={{
          padding: 2,
          backgroundColor: theme.colors.foreground,
          borderColor: theme.colors.foreground,
          borderRadius: 20,
          borderWidth: 1,
        }}
      >
        <Icon color={theme.colors.secondary} as={Feather} name="x" size="sm" />
      </TouchableOpacity>
    </HStack>
  );
};

export default Chip;
