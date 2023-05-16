import { useSelector } from "react-redux"
import { View, Text } from "react-native";
import { Avatar, HStack } from "native-base";

// import { light as theme } from "../themes";

const UserTag = ({size='xs', imageFirst=true, name='Usuario' }) => {
  const theme = useSelector(state => state.themes)
  return (
    <HStack alignItems='center' flexDirection={imageFirst ? 'row' : 'row-reverse'} space={1.5}>
      <Avatar
        size={size}
        borderColor={theme.colors.background}
        bg={theme.colors.secondary}
        source={{
          // uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      >{name
        .split(" ")
        .map((n, i) => (i < 2 ? n[0].toUpperCase() : ""))
        .join(" ")}</Avatar>
      <Text numberOfLines={1} style={{ color: theme.colors.foreground }}>{name}</Text>
    </HStack>
  );
};

export default UserTag;
