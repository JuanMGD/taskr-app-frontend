import { View, Text } from "react-native";
import { Icon, VStack } from "native-base";
import Feather from "@expo/vector-icons/Feather";

const StatisticsCard = ({ iconName, amount, title, bgColor }) => {
  return (
    <VStack borderRadius={10} w="40%" h={195} px={4} py={3} space={3} bgColor={bgColor}>
      <View
        style={{
          //   alignItems: "center",
          alignSelf: "flex-start",
          padding: 8,
          backgroundColor: "rgba(255, 255, 255, 0.3);",
          borderRadius: 7,
        }}
      >
        <Icon
          //   borderColor={theme.colors.primary}
          color="#F5F9FC"
          borderRadius={20}
          as={Feather}
          name={iconName}
          size={6}
        />
      </View>
      <Text style={{ fontSize: 32, color: "#F5F9FC", fontWeight: "600" }}>
        {amount}
      </Text>
      <Text style={{ fontSize: 20, color: "#F5F9FC", fontWeight: "500" }}>
        {title}
      </Text>
    </VStack>
  );
};

export default StatisticsCard;
