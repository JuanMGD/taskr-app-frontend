import { useSelector } from "react-redux";
import { TouchableOpacity, Text } from "react-native";
import { Icon } from "native-base";
import { Feather } from "@expo/vector-icons";

const IconButton = ({ iconName, primary=false }) => {
  const theme = useSelector((state) => state.themes);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: primary ? theme.colors.primary : theme.colors.secondary,
        padding: "3.5%",
        borderRadius: 10,
      }}
    >
      <Icon color={primary ? "#F5F9FC" : theme.colors.foreground } as={Feather} name={iconName} size={5} />
    </TouchableOpacity>
  );
};

export default IconButton;
