import { Image } from "react-native";
import React from "react";

const LogoTitle = ({size=75 }) => {
  return (
    <Image
      resizeMode="contain"
      style={{ width: size, height: size }}
      source={require("../../assets/logo.png")}
    />
  );
};

export default LogoTitle;
