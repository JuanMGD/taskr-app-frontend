import { useSelector } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { Box, Pressable, HStack, Badge, Spacer, Flex } from "native-base";
import ProgressBlock from "./ProgressBlock";
import Members from "./Members";

// import { light as theme } from "../themes";

const OverviewCard = ({
  title = "",
  description = null,
  members = [],
  progress = null,
  onPress,
}) => {
  const theme = useSelector((state) => state.themes);

  return (
    <Box alignItems="center">
      {/* <TouchableOpacity
        onPress={() => onPress()}
        style={{
          borderRadius: 12,
          borderWidth: 1,
          borderColor: theme.colors.secondary,
          maxWidth: "98%",
          width: "98%",
          backgroundColor: theme.colors.background,
          padding: 25,
        }}
      > */}
      <Pressable
        onPress={() => onPress()}
        rounded="12"
        // overflow="hidden"
        borderWidth="1"
        borderColor={theme.colors.secondary}
        maxW="96"
        w={96}
        // shadow="3"
        bg={theme.colors.background}
        p="5"
      >
        <Box>
          <Text
            style={{ color: theme.colors.foreground, fontSize: 20 }}
            mt="3"
            // fontSize="xl"
          >
            {title}
          </Text>
          {description && (
            <>
              <Text
                style={{ color: theme.colors.supportText, marginTop: 8 }}
                fontSize="xl"
              >
                Descripción
              </Text>
              <Text
                mt="2"
                fontSize="sm"
                style={{ color: theme.colors.foreground }}
              >
                {description}
              </Text>
            </>
          )}
          <HStack mt="2" alignItems="center">
            <Members members={members} />
            <Spacer />
            {progress && <ProgressBlock percentage={progress} />}
          </HStack>
        </Box>
      </Pressable>
      {/* </TouchableOpacity> */}
    </Box>
  );
};

export default OverviewCard;
