import { View, Text } from "react-native";
import React from "react";

const TaggedBlock = ({ title, children }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Text
        style={{
          marginBottom: "1rem",
        }}
      >
        {title}
      </Text>
      <View>{children}</View>
    </View>
  );
};

export default TaggedBlock;
