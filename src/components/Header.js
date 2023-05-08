import { useSelector } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { HStack, VStack, Spacer, Icon } from "native-base";
import LogoTitle from "./LogoTitle";
import UserTag from "./UserTag";
import Feather from "@expo/vector-icons/Feather";

const Header = ({ stackHeader = false, navigation }) => {
  const theme = useSelector((state) => state.themes);
  return (
    <HStack
      bgColor={theme.colors.background}
      borderBottomColor={theme.colors.secondary}
      borderBottomWidth={stackHeader ? 0 : 1}
      minH={75}
      paddingX="5"
      space="3"
      alignItems="center"
      position="absolute"
      zIndex={1}
      top={0}
      left={0}
    >
      {stackHeader ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            color={theme.colors.foreground}
            as={Feather}
            name="arrow-left"
            size={7}
            // handlePress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      ) : (
        <LogoTitle />
      )}

      <Spacer />
      {stackHeader ? (
        <Icon
          color={theme.colors.foreground}
          as={Feather}
          name="more-vertical"
          size={7}
        />
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <UserTag size="md" imageFirst={false} />
        </TouchableOpacity>
      )}
    </HStack>
  );
};

export default Header;
