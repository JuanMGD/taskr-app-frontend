import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import { HStack, VStack, Spacer } from "native-base";
import LogoTitle from "./LogoTitle";
import UserTag from "./UserTag";

const Header = () => {
  const theme = useSelector((state) => state.themes);

  return (
    <View style={{ backgroundColor: theme.colors.background, borderBottomColor: theme.colors.secondary, borderBottomWidth: 1 }}>
      <HStack paddingX='5' space="3" alignItems="center">
        <LogoTitle />
        <Spacer/>
        <UserTag size="md" imageFirst={false}/>
      </HStack>
    </View>
  );
};

export default Header;
