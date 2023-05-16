import { useSelector, useDispatch } from "react-redux";
import { useGetUsersQuery, useCreateUserMutation } from "../api/apiSlice";
import { useState } from "react";
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

const SignUp = ({ navigation }) => {
  const theme = useSelector((state) => state.themes);
  const dispatch = useDispatch();
  const [createUser, { isLoading }] = useCreateUserMutation();
  const { data: users, isSuccess: isSuccessUsers } = useGetUsersQuery();
  const [errors, setErrors] = useState({});
  const [userInfo, setuserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const { name, email, password, confirmPassword } = userInfo;

  const validateUserInfo = () => {
    if (!isSuccessUsers) return false;

    if (name.trim() === "") {
      setErrors({
        ...errors,
        name: "Debe introducir su nombre",
      });
      return false;
    }
    if (email.trim() === "") {
      setErrors({
        ...errors,
        email: "Debe introducir su correo",
      });
      return false;
    }
    if (password.trim() === "" || password.length < 6) {
      setErrors({
        ...errors,
        password: "Debe introducir una contraseña mayor 6 caracteres",
      });
      return false;
    }
    if (password !== confirmPassword) {
      setErrors({
        ...errors,
        assword: "Las contraseñas deben coincidir",
        confirmPassword: "Las contraseñas deben coincidir",
      });
      return false;
    }

    const account = users.find((user) => user.email === email);
    if (account !== undefined) {
      setErrors({
        email: "El correo ya se encuentra en uso",
      });
      return false;
    }

    return true;
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
            Regístrate
          </Text>
          <FormControl width="85%" isRequired isInvalid={"name" in errors}>
            <Input
              value={name}
              onChangeText={(value) =>
                setuserInfo({ ...userInfo, name: value })
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
              placeholder="Ingresa tu nombre completo"
            />
            {"name" in errors && (
              <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
            )}
          </FormControl>
          <FormControl width="85%" isRequired isInvalid={"email" in errors}>
            <Input
              value={email}
              onChangeText={(value) =>
                setuserInfo({ ...userInfo, email: value })
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
                setuserInfo({ ...userInfo, password: value })
              }
              type="password"
              borderRadius="xl"
              p={3}
              //   mb={2}
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
          <FormControl
            width="85%"
            isRequired
            isInvalid={"confirmPassword" in errors}
          >
            <Input
              value={confirmPassword}
              onChangeText={(value) =>
                setuserInfo({ ...userInfo, confirmPassword: value })
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
              placeholder="Confirmar contraseña"
            />
            {"confirmPassword" in errors && (
              <FormControl.ErrorMessage>
                {errors.confirmPassword}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
          <GradientButton
            text="Crear cuenta"
            onPress={async () => {
              if (validateUserInfo()) {
                try {
                  const user = {
                    ...userInfo,
                    id: Math.random() * (1000 - 6) + 6,
                  };
                  await createUser(user).unwrap();
                  dispatch(signIn(user));
                } catch (err) {
                  console.error("Failed to save the post: ", err);
                }
              }
            }}
          />
          <HStack space={1.5} mt={2} alignItems="center">
            <Text
              style={{
                color: theme.colors.foreground,
              }}
            >
              ¿Ya tienes una cuenta?
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={{
                  color: theme.colors.primary,
                }}
              >
                Inicia sesión
              </Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </ScrollView>
    </>
  );
};

export default SignUp;
