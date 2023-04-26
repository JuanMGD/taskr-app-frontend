import { useSelector } from "react-redux";
import { View, SafeAreaView, FlatList, StatusBar } from "react-native";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Fab,
  Icon,
  Box,
  Avatar,
  // Button,
} from "native-base";
import NativeBaseIcon from "../components/NativeBaseIcon";
import { AntDesign } from "@expo/vector-icons";

import OverviewCard from "../components/OverviewCard";
import TaskItem from "../components/TaskItem";
import GradientButton from "../components/GradientButton";
import AddButton from "../components/AddButton";
import Chip from "../components/Chip";

// import { COLORS, NFTData } from "../constants";
// import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
  // const [nftData, setNftData] = useState(NFTData);

  // const handleSearch = (value) => {
  //   if (!value.length) return setNftData(NFTData);

  //   const filteredData = NFTData.filter((item) =>
  //     item.name.toLowerCase().includes(value.toLowerCase())
  //   );

  //   if (filteredData.length) {
  //     setNftData(filteredData)
  //   } else {
  //     setNftData(NFTData)
  //   }
  // };

  // const theme = extendTheme({
  //   // colors: {
  //   //   primary: {
  //   //     50: "#E3F2F9",
  //   //     100: "#C5E4F3",
  //   //     200: "#A2D4EC",
  //   //     300: "#7AC1E4",
  //   //     400: "#079DC7",
  //   //     500: "#079DC7",
  //   //     600: "#007AB8",
  //   //     700: "#006BA1",
  //   //     800: "#005885",
  //   //     900: "#003F5E",
  //   //   },
  //   // },
  //   components: {
  //     Button: {
  //       variants: {
  //         rounded: ({ colorScheme }) => {
  //           return {
  //             bg: `${colorScheme}.500`,
  //             rounded: "full",
  //           };
  //         },
  //       },
  //     },
  //     Avatar: {
  //       // _group: {

  //       // },
  //       sizes: {
  //         md: {
  //           width: 10,
  //           height: 10,
  //           _text: {
  //             fontSize: "xs",
  //           },
  //         },
  //       },
  //     },
  //     // Checkbox: {
  //     //   baseStyle: {
  //     //     borderColor: '#079DC7',
  //     //   }
  //     // }
  //   },
  // });

  const theme = useSelector((state) => state.themes);

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.background}
        barStyle={theme.type == "light" ? "dark-content" : "light-content"}
        // showHideTransition='fade'
      />
      <Center flex={1} bg={theme.colors.background}>
        <VStack space={2}>
          {/* <Button colorScheme="emerald">Default Button</Button>
          <Button colorScheme="emerald" variant="rounded">
            Rounded Button
          </Button> */}
          {/* <ProgressBlock percentage={50} /> */}
          <OverviewCard
            progress={90}
            description={
              "Unlock powerfull time-saving tools for creating email delivery and collecting marketing data"
            }
          />
          <TaskItem showDate={true} showAssignedTo={true} />
          <TaskItem showDescription={true} />
          <GradientButton />
        </VStack>
      </Center>
      <AddButton />
    </>
  );

  // return (
  //   <SafeAreaView style={{ flex: 1 }}>
  //     {/* <FocusedStatusBar background={COLORS.primary} /> */}

  //     <NativeBaseProvider theme={theme}>
  //       <Avatar
  //         //   bg="green.500"
  //         source={{
  //           uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //         }}
  //         size="sm"
  //         // borderColor={light.colors.background}
  //       />
  //       <ProgressBlock percentage={50} />
  //       <OverviewCard />
  //     </NativeBaseProvider>
  //   </SafeAreaView>
  // );
};

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

export default Home;
