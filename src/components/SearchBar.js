import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import {
  Input,
  Icon,
  TextArea,
  FormControl,
  VStack,
  HStack,
  Spacer,
} from "native-base";
import Feather from "@expo/vector-icons/Feather";

const SearchBar = ({ setSearch }) => {
  const theme = useSelector((state) => state.themes);
  return (
    <FormControl w={96} mt={4}>
      <Input
        //   w={{ base: "75%", md: "25%" }}
        borderRadius="xl"
        p={3}
        size="md"
        type="email"
        // value={newMemberEmail}
        onChangeText={(value) => setSearch(value)}
        placeholderTextColor={theme.colors.supportText}
        borderColor={theme.colors.secondary}
        color={theme.colors.foreground}
        _focus={{
          borderColor: theme.colors.primary,
          bg: theme.colors.backgroud,
        }}
        InputLeftElement={
          <Icon
            as={<Feather name="search" />}
            size={5}
            ml="3"
            color={theme.colors.supportText}
          />
        }
        placeholder="Buscar equipo"
      />
    </FormControl>
  );
};

export default SearchBar;
