import { useSelector } from "react-redux";
import { View, Text } from 'react-native'
import { useState } from 'react'
import SelectionList from './SelectionList'
import { HStack, Spacer, Icon } from "native-base";
import Feather from "@expo/vector-icons/Feather";
import Members from "./Members";
import UserTag from './UserTag'

const UserSelector = ({single=false}) => {
  const theme = useSelector((state) => state.themes);
  const [selected, setSelected] = useState([]);

  const data = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ];

  return (
    <View style={{ backgroundColor: theme.colors.background, marginTop: 5 }}>
      <HStack space={2} mb={2} alignItems='center'>
      <Icon
          borderColor={theme.colors.primary}
          color={theme.colors.foreground}
          borderRadius={20}
          as={Feather}
          name="user-plus"
          size={5}
        />
      <Text style={{ color: theme.colors.foreground, marginBottom: 5 }}>
        {single ? 'Seleccionar responsable' : 'Seleccionar miembros'}
      </Text>
      <Spacer/>
      {single ? <UserTag size="sm" /> : <Members size={"sm"} showTitle={false}/>}
      </HStack>
      <SelectionList single={single} selected={selected} setSelected={setSelected} data={data} ItemElement={<UserTag size="sm" />}/>
    </View>
  )
}

export default UserSelector