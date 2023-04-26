import { useSelector } from "react-redux";
import {
  Text,
  Center,
  Actionsheet,
  Box,
  Button,
  Fab,
  Icon,
  useDisclose,
} from "native-base";

import { Feather } from "@expo/vector-icons";
import TeamForm from "./forms/TeamForm";
import ProjectForm from "./forms/ProjectForm";
import TaskForm from "./forms/TaskForm";
import SwipeList from "./SwipeList";

const AddButton = () => {
  const theme = useSelector((state) => state.themes);
    const { isOpen, onOpen, onClose } = useDisclose();

    return (
      <>
        <Fab
          onPress={onOpen}
          bg={theme.colors.primary}
          renderInPortal={false}
          shadow={2}
          size="lg"
          icon={<Icon color="#F5F9FC" as={Feather} name="plus" size="lg" />}
        />
        <Actionsheet isOpen={isOpen} onClose={onClose} bg={theme.type == 'light' ? 'rgba(0, 0, 0, 0.35)' : 'rgba(0, 0, 0, 0.45)'}>
          <Actionsheet.Content bg={theme.colors.background} _dragIndicator={{bg: theme.colors.supportText}}>
              {/* <TeamForm/> */}
              <ProjectForm/>
              {/* <TaskForm/> */}
              {/* <SwipeList/> */}
          </Actionsheet.Content>
        </Actionsheet>
      </>
  );
};

export default AddButton;
