import { useSelector } from "react-redux"
import { View, Text } from "react-native";
import { Center, Box, VStack } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
// import { light as theme } from "../themes";

const ProgressBlock = ({ percentage = 75 }) => {
  const theme = useSelector(state => state.themes)
  
  return (
    <Center w="70%" m="1">
      <Box w="90%" maxW="400">
        <VStack space={2}>
          <View
            style={{
              width: "100%",
              flexDirection: "row"
            }}
          >
            <Text
              style={{
                color: theme.colors.supportText,
                // fontWeight: 500,
                marginLeft: 16,
              }}
            >
              Progreso
            </Text>
            <Text
              style={{
                color: theme.colors.foreground,
                marginLeft: "auto",
                // fontWeight: 500,
                marginRight: 16,
              }}
            >
              {percentage}%
            </Text>
          </View>
          <View
            style={{
              width: 'auto',
              height: 8,
              borderRadius: 15,
              backgroundColor: "#A7CAED",
              marginLeft: 16,
              marginRight: 16,
            }}
          >
            <LinearGradient
              colors={["#005283", "#0BC3E9"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 1 }}
              style={{
                width: `${percentage}%`,
                height: "100%",
                borderWidth: 0,
                borderRadius: 15,
              }}
            ></LinearGradient>
          </View>
        </VStack>
      </Box>
    </Center>
  );
};

export default ProgressBlock;
