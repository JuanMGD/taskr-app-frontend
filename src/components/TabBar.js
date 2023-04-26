import { useSelector } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { VStack } from "native-base";

function TabBar({ state, descriptors, navigation }) {
  const theme = useSelector((state) => state.themes);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: theme.colors.background,
        borderTopColor: theme.colors.secondary,
        borderTopWidth: 1,
        // height: 55,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const Icon = options.tabBarIcon;

        console.dir(Icon);

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            <VStack space={1} alignItems="center" paddingY={3}>
              <Icon
                color={
                  isFocused ? theme.colors.primary : theme.colors.foreground
                }
                size={24}
              />
              <Text
                style={{
                  textAlign: "center",
                  color: isFocused
                    ? theme.colors.primary
                    : theme.colors.foreground,
                }}
              >
                {label}
              </Text>
            </VStack>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;
