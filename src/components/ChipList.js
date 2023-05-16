import { useSelector } from "react-redux";
import { FlatList, Text } from "react-native";
import { VStack } from "native-base";
import Chip from "./Chip";

const ChipList = ({ items = [], onDeleteItem = () => {} }) => {
  const theme = useSelector((state) => state.themes);

  return (
    <VStack space={3}>
      {items.length > 0 && (
        <Text style={{ color: theme.colors.supportText }}>Miembros</Text>
      )}
      <FlatList
        horizontal={true}
        // style={{ width: "100%"  }}
        contentContainerStyle={{ columnGap: 7 }}
        showsHorizontalScrollIndicator={false}
        data={items}
        extraData={items}
        renderItem={({ item, index }) => (
          <Chip onDelete={() => onDeleteItem(index)} text={item} />
        )}
      />
    </VStack>
  );
};

export default ChipList;
