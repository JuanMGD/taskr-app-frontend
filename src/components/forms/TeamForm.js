import { useState } from "react";
import { useSelector } from "react-redux";
import {
  useCreateTeamMutation,
  useEditTeamMutation,
  useGetUsersQuery,
} from "../../api/apiSlice";
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
import IconButton from "../IconButton";
import ChipList from "../ChipList";
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const TeamForm = ({ editMode = false, data = null, onClose = () => {} }) => {
  const theme = useSelector((state) => state.themes);
  const currentUser = useSelector((state) => state.auth);
  const { data: users, isSuccess: isSuccessUsers } = useGetUsersQuery();
  const initialState = data
    ? { id: data.id, name: data.name, description: data.description, leader: data.leader }
    : { name: "", description: "", leader: currentUser.id };
  const [members, setMembers] = useState(
    data
      ? data.members
          .map((member) => users.find((user) => user.id === member).email)
          .filter(
            (email) =>
              email !== users.find((user) => user.id === data.leader).email
          )
      : []
  );
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [teamInfo, setTeamInfo] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [editTeam] = useEditTeamMutation();
  const [createTeam] = useCreateTeamMutation();

  const submitForm = () => {
    if (teamInfo.name.trim() === "")
      return setErrors({
        ...errors,
        name: "Debe introducir un nombre para el equipo",
      });

    // const formattedMembers = members;

    const formData = {
      ...teamInfo,
      members: [
        ...members,
        users.find((user) => user.id === teamInfo.leader).email,
      ].map((email) => users.find((user) => user.email === email).id),
    };
    // const formData = { ...teamInfo, "members": [
    //     {
    //       "id": 1,
    //       "name": "Nombre usuario",
    //       "email": "usuario@taskr.com"
    //     },
    //     {
    //       "id": 2,
    //       "name": "Nombre usuario",
    //       "email": "usuario@taskr.com"
    //     },
    //     {
    //       "id": 3,
    //       "name": "Nombre usuario",
    //       "email": "usuario@taskr.com"
    //     },
    //     {
    //       "id": 4,
    //       "name": "Nombre usuario",
    //       "email": "usuario@taskr.com"
    //     },
    //     {
    //       "id": 5,
    //       "name": "Nombre usuario",
    //       "email": "usuario@taskr.com"
    //     }
    //   ] };

    if (editMode) {
      console.log("editar");
      editTeam(formData);
    } else {
      console.log("crear");
      createTeam(formData);
    }

    onClose();
  };

  const addMember = () => {
    if (newMemberEmail.trim() !== "") {
      setMembers([...members, newMemberEmail]);
      setNewMemberEmail("");
    }
  };

  const removeMember = (index) => {
    setMembers(members.filter((member, i) => i !== index));
  };

  //   DateTimePickerAndroid.open(params: AndroidNativeProps)
  // DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])
  return (
    <VStack width="90%" mx="3" mb="3" space={3}>
      <HStack alignItems="center">
        <FormControl width="85%" isRequired isInvalid={"name" in errors}>
          <Input
            //   w={{ base: "75%", md: "25%" }}
            value={teamInfo.name}
            onChangeText={(value) => setTeamInfo({ ...teamInfo, name: value })}
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
          {"name" in errors && (
            <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
          )}
        </FormControl>
        <Spacer />
        <IconButton onPress={submitForm} primary={true} iconName={"arrow-up"} />
      </HStack>
      <FormControl>
        <TextArea
          //   h='20'
          value={teamInfo.description}
          onChangeText={(value) =>
            setTeamInfo({ ...teamInfo, description: value })
          }
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

      <ChipList onDeleteItem={removeMember} items={members} />

      <HStack alignItems="center">
        <FormControl width="85%">
          <Input
            //   w={{ base: "75%", md: "25%" }}
            borderRadius="xl"
            p={3}
            size="md"
            type="email"
            value={newMemberEmail}
            onChangeText={(value) => setNewMemberEmail(value)}
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
        <Spacer />
        <IconButton onPress={addMember} iconName={"plus"} />
      </HStack>

      {/* <DateTimePickerAndroid/> */}
    </VStack>
  );
};

export default TeamForm;
