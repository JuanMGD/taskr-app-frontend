import { StatusBar, Text, ScrollView } from 'react-native'
import { HStack, Center, VStack, Box } from "native-base";
import TaskForm from '../components/forms/TaskForm';
import AddButton from '../components/AddButton';

const ProjectDetails = () => {
    return (
        <>
          <StatusBar
            animated={true}
            backgroundColor={theme.colors.background}
            barStyle={theme.type == "light" ? "dark-content" : "light-content"}
          />
    
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center", padding: 10 }}
            style={{
              backgroundColor: theme.colors.background,
            }}
          >
            <VStack space={4}>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 10,
                  color: theme.colors.foreground,
                  fontWeight: 500,
                }}
              >
                Estadísticas de proyectos
              </Text>
              <HStack space={5} mb={6}>
                <StatisticsCard
                  iconName={"settings"}
                  amount={12}
                  title={"Proyectos en progreso"}
                  bgColor={theme.colors.primary}
                />
                <StatisticsCard
                  iconName={"check"}
                  amount={52}
                  title={"Proyectos completados"}
                  bgColor={theme.colors.tertiary}
                />
              </HStack>
              <VStack space={4}>
                <Text
                  style={{
                    fontSize: 18,
                    color: theme.colors.foreground,
                    fontWeight: 500,
                  }}
                >
                  Proyectos recientes
                </Text>
              </VStack>
            </VStack>
          </ScrollView>
          <AddButton>
            <TaskForm />
          </AddButton>
        </>
      );
}

export default ProjectDetails