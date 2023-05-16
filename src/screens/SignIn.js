import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { signIn } from "../features/auth/authSlice";
import { useGetUsersQuery } from "../api/apiSlice";
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
  const { data: users, isSuccess: isSuccessUsers } = useGetUsersQuery();
  const [errors, setErrors] = useState({});
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = credentials;

  const validateCredentials = () => {
    if (!isSuccessUsers) return false;

    if (credentials.email.trim() === "") {
      setErrors({
        ...errors,
        email: "Debe introducir su correo",
      });
      return false;
    }
    if (credentials.password.trim() === "") {
      setErrors({
        ...errors,
        password: "Debe introducir su contraseña",
      });
      return false;
    }

    const account = users.find(
      (user) => user.email === email && user.password === password
    );
    if (account === undefined) {
      setErrors({
        email: "Correo o contraseña incorrectos",
        password: "Correo o contraseña incorrectos",
      });
      return false;
    }

    return account !== undefined;
  };

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
          <FormControl width="85%" isRequired isInvalid={"email" in errors}>
            <Input
              value={email}
              onChangeText={(value) =>
                setcredentials({ ...credentials, email: value })
              }
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
            {"email" in errors && (
              <FormControl.ErrorMessage>
                {errors.email}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
          <FormControl width="85%" isRequired isInvalid={"password" in errors}>
            <Input
              value={password}
              onChangeText={(value) =>
                setcredentials({ ...credentials, password: value })
              }
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
            {"password" in errors && (
              <FormControl.ErrorMessage>
                {errors.password}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
          <GradientButton
            text="Iniciar sesión"
            onPress={() => {
              if (validateCredentials()) {
                dispatch(
                  signIn(
                    users.find(
                      (user) =>
                        user.email === email && user.password === password
                    )
                  )
                );
              }
            }}
          />
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
