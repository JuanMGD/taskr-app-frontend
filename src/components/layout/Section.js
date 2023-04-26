import { View, Text } from "react-native";
import React from "react";

const Section = ({ title, children }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        padding: "1.5rem 2rem",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.75rem",
      }}
    >
      <Text
        style={{
          width: "100%",
          fontSize: "1.3rem",
          margin: "0.25rem 0 0 0",
          fontWeight: 500,
        }}
      >
        {title}
      </Text>
      <View>{children}</View>
    </View>
  );
};

export default Section;
