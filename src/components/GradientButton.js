import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = () => {
  return (
    <LinearGradient
      colors={["#005283", "#0BC3E9"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderRadius: 15,
      }}
    >
      <TouchableOpacity
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
          Iniciar sesión
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GradientButton;
