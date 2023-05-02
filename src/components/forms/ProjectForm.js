import { useSelector } from "react-redux";
import { Input, Icon, TextArea, FormControl, VStack, HStack, Spacer } from "native-base";
import Feather from "@expo/vector-icons/Feather";
import IconButton from "../IconButton";
import SelectionList from "../SelectionList";
import UserSelector from "../UserSelector";

const ProjectForm = () => {
  const theme = useSelector((state) => state.themes);
  return (
    <VStack width="90%" mx="3" mb="3" space={3}>
      <HStack alignItems='center'>
        <FormControl width="85%">
          <Input
            //   w={{ base: "75%", md: "25%" }}
            borderRadius="xl"
            p={3}
            size="md"
            placeholderTextColor={theme.colors.supportText}
            borderColor={theme.colors.secondary}
            color={theme.colors.foreground}
            _focus={{
              borderColor: theme.colors.primary,
              bg: theme.colors.backgroud,
            }}
            InputLeftElement={
              <Icon
                as={<Feather name="folder" />}
                size={5}
                ml="3"
                color={theme.colors.supportText}
              />
            }
            placeholder="Crear nuevo proyecto"
          />
        </FormControl>
        <Spacer/>
        <IconButton primary={true} iconName={"arrow-up"} />
      </HStack>
      <FormControl>
        <TextArea
          //   h='20'
          p={3}
          size="md"
          placeholder="Descripción"
          borderRadius="xl"
          placeholderTextColor={theme.colors.supportText}
          borderColor={theme.colors.secondary}
          color={theme.colors.foreground}
          // w="75%"
          // maxW="300"
          _focus={{
            borderColor: theme.colors.primary,
            bg: theme.colors.backgroud,
          }}
          InputLeftElement={
            <Icon
              as={<Feather name="align-left" />}
              size={5}
              mt="3"
              ml="3"
              style={{
                alignSelf: "flex-start",
              }}
              color={theme.colors.supportText}
            />
          }
        />
      </FormControl>
      <UserSelector/>
      {/* <SelectionList/> */}
    </VStack>
  );
};

export default ProjectForm;
