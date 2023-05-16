import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HStack, VStack, Spacer, Icon, AlertDialog, Button } from "native-base";
import LogoTitle from "./LogoTitle";
import UserTag from "./UserTag";
// import Menu from "./Menu";
import Feather from "@expo/vector-icons/Feather";

const Header = ({
  stackHeader = false,
  navigation,
  showOptions = true,
  // entity='',
  onPressEdit = () => {},
  onDelete = () => {},
}) => {
  const theme = useSelector((state) => state.themes);
  const currentUser = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  const confirmDelete = () => {
    onDelete();
    onClose();
    navigation.goBack();
  };

  return (
    <HStack
      bgColor={theme.colors.background}
      borderBottomColor={theme.colors.secondary}
      borderBottomWidth={stackHeader ? 0 : 1}
      minH={75}
      paddingX="5"
      space="3"
      alignItems="center"
      position="absolute"
      zIndex={1}
      top={0}
      left={0}
    >
      {stackHeader ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            color={theme.colors.foreground}
            as={Feather}
            name="arrow-left"
            size={7}
            // handlePress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      ) : (
        <LogoTitle />
      )}

      <Spacer />
      {stackHeader && showOptions ? (
        <HStack space={4}>
          <TouchableOpacity onPress={onPressEdit}>
            <Icon
              color={theme.colors.foreground}
              as={Feather}
              name="edit"
              size={7}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
            <Icon
              color={theme.colors.foreground}
              as={Feather}
              name="trash"
              size={7}
            />
          </TouchableOpacity>
        </HStack>
      ) : showOptions ? (
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <UserTag size="md" imageFirst={false} name={currentUser.name} />
        </TouchableOpacity>
      ) : null}
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content
          bgColor={theme.colors.background}
          // color={theme.colors.foreground}
        >
          <AlertDialog.CloseButton />
          <AlertDialog.Header
            bgColor={theme.colors.background}
            borderBottomColor={theme.colors.secondary}
          >
            <Text style={{ fontSize: 16, color: theme.colors.foreground }}>
              Eliminar
            </Text>
          </AlertDialog.Header>
          <AlertDialog.Body
            bgColor={theme.colors.background}
            // color={theme.colors.foreground}
          >
            <Text style={{ fontSize: 16, color: theme.colors.foreground }}>
              Esta acción no se puede deshacer. Los datos eliminados no pueden
              ser recuperados.
            </Text>
          </AlertDialog.Body>
          <AlertDialog.Footer
            borderTopColor={theme.colors.secondary}
            bgColor={theme.colors.background}
            // color={theme.colors.foreground}
          >
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                <Text style={{ fontSize: 16, color: theme.colors.foreground }}>
                  Cancelar
                </Text>
              </Button>
              <Button colorScheme="danger" onPress={confirmDelete}>
                Eliminar
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </HStack>
  );
};

export default Header;
