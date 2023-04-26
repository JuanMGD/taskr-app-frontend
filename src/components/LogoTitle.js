import { Image } from "react-native";
import React from "react";

const LogoTitle = () => {
  return (
    <Image
      resizeMode="contain"
      style={{ width: 75, height: 75 }}
      source={require("../../assets/logo.png")}
    />
  );
};

export default LogoTitle;
