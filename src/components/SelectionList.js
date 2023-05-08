import { useState, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { HStack, Spacer, Icon } from "native-base";
import Feather from "@expo/vector-icons/Feather";
// import UserTag from "./UserTag";

const ListItem = ({
  item,
  updateSelection,
  isSelected,
  itemKey,
  /* initialSelection, */ ItemElement,
}) => {
  const theme = useSelector((state) => state.themes);
  // const [selected, setSelected] = useState(initialSelection.includes(item[itemKey]))

  const handlePress = () => {
    // setSelected(!selected)
    updateSelection(item[itemKey]);
  };

  return (
    <TouchableOpacity onPress={() => updateSelection(item[itemKey])}>
      <HStack p={3} alignItems="center">
        {ItemElement(item)}
        <Spacer />
        {isSelected(item[itemKey]) && (
          <View
            style={{
              alignItems: "center",
              padding: 4,
              backgroundColor: theme.colors.primary,
              borderRadius: 20,
            }}
          >
            <Icon
              borderColor={theme.colors.primary}
              color="#F5F9FC"
              borderRadius={20}
              as={Feather}
              name="check"
              size={4}
            />
          </View>
        )}
      </HStack>
    </TouchableOpacity>
  );
};

const MemoizedListItem = memo(ListItem);

const SelectionList = ({
  selected = [],
  setSelected = null,
  data = [],
  single = false,
  ItemElement = null,
  itemKey='id',
  onSelect=()=>{}
}) => {
  const theme = useSelector((state) => state.themes);

  // const [selected, setSelected] = useState(initialSelection);

  // const data = [
  //   { id: "1" },
  //   { id: "2" },
  //   { id: "3" },
  //   { id: "4" },
  //   { id: "5" },
  // ];

  const isSelected = (key) => selected.includes(key);

  const markItem = (key) => {
    if (single) return setSelected(key);
    return setSelected([...selected, key]);
  };

  const unmarkItem = (key) => {
    if (single) return setSelected([]);
    return setSelected(selected.filter((item) => item !== key));
  };

  const updateSelection = (key) => {
    onSelect(key)
    if (isSelected(key)) return unmarkItem(key);
    return markItem(key);
  };

  const renderItem = useCallback(
    ({ item }) => (
      <MemoizedListItem
        // initialSelection={initialSelection}
        item={item}
        isSelected={isSelected}
        updateSelection={updateSelection}
        ItemElement={ItemElement}
      />
    ),
    []
  );

  return (
    // <View style={{ backgroundColor: theme.colors.background }}>
    //   <Text style={{ color: theme.colors.foreground, marginBottom: 5 }}>
    //     SelectionList
    //   </Text>
    // </View>
    <FlatList
      style={{ height: 170, backgroundColor: theme.colors.background }}
      contentContainerStyle={{
        rowGap: 3,
        backgroundColor: theme.colors.background,
      }}
      // isSelected={isSelected}
      data={data}
      extraData={data}
      renderItem={({ item }) => (
        <ListItem
          // initialSelection={initialSelection}
          item={item}
          isSelected={isSelected}
          updateSelection={updateSelection}
          ItemElement={ItemElement}
          itemKey={itemKey}
        />
      )}
    />
  );
};

export default SelectionList;
