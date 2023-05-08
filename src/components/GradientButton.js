import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = ({ text, onPress }) => {
  return (
    <LinearGradient
      colors={["#005283", "#0BC3E9"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderRadius: 15,
        width: "85%",
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: "100%",
          /* height: '100%',  */
          paddingVertical: 20,
          paddingHorizontal: 40,
        }}
      >
        <Text
          style={{
            color: "#F5F9FC",
            textAlign: "center",
            // fontSize: 24,
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GradientButton;
