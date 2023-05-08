import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../features/auth/authSlice";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  Input,
  FormControl,
  VStack,
  HStack,
  Spacer,
  Center,
} from "native-base";
import GradientButton from "../components/GradientButton";
import LogoTitle from "../components/LogoTitle";

const SignIn = ({ navigation }) => {
  const theme = useSelector((state) => state.themes);
  const dispatch = useDispatch();

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.background}
        barStyle={theme.type == "light" ? "dark-content" : "light-content"}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          paddingVertical: 50,
          //   paddingHorizontal: 100,
          flex: 1,
        }}
        style={{
          backgroundColor: theme.colors.background,
        }}
      >
        <VStack
          space={4}
          alignItems="center"
          w={96}
          flex={1}
          bgColor={theme.colors.background}
        >
          <LogoTitle size={110} />
          <Text
            style={{
              marginTop: -40,
              marginBottom: 20,
              fontSize: 16,
              color: theme.colors.foreground,
            }}
          >
            Toma el control de tus proyectos
          </Text>
          <Text
            style={{
              fontSize: 26,
              marginBottom: 10,
              color: theme.colors.foreground,
            }}
          >
            Inicia sesión
          </Text>
          <FormControl width="85%">
            <Input
              borderRadius="xl"
              p={3}
              size="md"
              placeholderTextColor={theme.colors.supportText}
              borderColor={theme.colors.secondary}
              color={theme.colors.foreground}
              _focus={{
                borderColor: theme.colors.primary,
                bg: theme.colors.backgroud,
              }}
              placeholder="Ingresa tu correo"
            />
          </FormControl>
          <FormControl width="85%">
            <Input
              type="password"
              borderRadius="xl"
              p={3}
              mb={2}
              size="md"
              placeholderTextColor={theme.colors.supportText}
              borderColor={theme.colors.secondary}
              color={theme.colors.foreground}
              _focus={{
                borderColor: theme.colors.primary,
                bg: theme.colors.backgroud,
              }}
              placeholder="Contraseña"
            />
          </FormControl>
          <GradientButton text='Iniciar sesión' onPress={() => dispatch(signIn())} />
          <HStack space={1.5} mt={2} alignItems="center">
            <Text
              style={{
                color: theme.colors.foreground,
              }}
            >
              ¿Aún no tienes una cuenta?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text
                style={{
                  color: theme.colors.primary,
                }}
              >
                Regístrate
              </Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </ScrollView>
    </>
  );
};

export default SignIn;
