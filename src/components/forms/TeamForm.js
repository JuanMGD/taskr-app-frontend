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
// import { FlatList, Text } from "react-native";
// import Chip from "../Chip";
import IconButton from "../IconButton";
import ChipList from "../ChipList";
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const TeamForm = () => {
  const theme = useSelector((state) => state.themes);
  //   DateTimePickerAndroid.open(params: AndroidNativeProps)
  // DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])
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
                as={<Feather name="users" />}
                size={5}
                ml="3"
                color={theme.colors.supportText}
              />
            }
            placeholder="Crear nuevo equipo"
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

      <ChipList/>

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
                as={<Feather name="user-plus" />}
                size={5}
                ml="3"
                color={theme.colors.supportText}
              />
            }
            placeholder="Correo del nuevo miembro"
          />
        </FormControl>
        <Spacer/>
        <IconButton iconName={"plus"} />
      </HStack>

      {/* <DateTimePickerAndroid/> */}
    </VStack>
  );
};

export default TeamForm;
